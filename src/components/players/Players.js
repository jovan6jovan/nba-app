import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Players.css";
import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [term, setTerm] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => setTerm(e.target.value);

  const setAlertMsg = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(null), 5000);
  };

  const searchPlayers = async (term) => {
    setLoading(true);

    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${term}`
    );

    if (response.data.data.length === 0) {
      setAlertMsg("There is no NBA player with that name");
      setLoading(false);
    } else {
      setPlayers(response.data.data);
      setLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      setAlertMsg("Please enter the player's name", "danger");
    } else {
      searchPlayers(term);
      setTerm("");
    }
  };

  const clearPlayersResults = () => {
    setPlayers([]);
    setLoading(false);
  };

  const showClearBtn = players.length > 0 ? true : false;

  const playersList = players.map((player) => {
    return (
      <div key={player.id} className="player-card">
        <Link
          to={`/players/${player.id}`}
          id={player.id}
          className="player-name-link"
        >
          {player.first_name} {player.last_name}
        </Link>
        <p>Position: {player.position}</p>
        <p>Team: {player.team.full_name}</p>
      </div>
    );
  });

  return loading ? <Spinner /> : (
    <div className="players-container">
      { alert !== null && <Alert alert={alert} /> }
      <div className="form-container">
        <h1 className="players-heading">Browse players</h1>
        <form onSubmit={onSubmitHandler} className="search-players-form">
          <input
            type="text"
            value={term}
            name="text"
            className="search-input"
            placeholder="Search for a player..."
            onChange={onChangeHandler}
          />
          <input type="submit" value="Search" className="btn submit-btn" />
        </form>
        {showClearBtn && (
          <button onClick={clearPlayersResults} className="btn clear-btn">
            Clear results
          </button>
        )}
      </div>
      <div className="player-results-container">
        {playersList}
      </div>
    </div>
  );
};

export default Players;
