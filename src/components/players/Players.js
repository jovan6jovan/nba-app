import React from "react";
import { Link } from "react-router-dom";

import "./Players.css";
import Spinner from "../layout/Spinner";

const Players = ({
  onChangeHandler,
  onSubmitHandler,
  clearResults,
  term,
  players,
  getPlayerInfo,
  loading,
  showClearBtn
}) => {
  if (loading) {
    return <Spinner />;
  }

  const playersList = players.map(player => {
    return (
      <div key={player.id} className="player-card">
        <Link to={`/player/${player.id}`} id={player.id} onClick={getPlayerInfo} className="player-name-link">
          {player.first_name} {player.last_name}
        </Link>
        <p>Position: {player.position}</p>
        <p>Team: {player.team.full_name}</p>
      </div>
    );
  });

  return (
    <div className="players-container">
      <div className="form-container">
        <h2 className="players-heading">Browse players</h2>
        <form onSubmit={onSubmitHandler} className="search-players-form">
          <input
            type="text"
            value={term}
            name="text"
            className="search-input"
            placeholder="Search..."
            onChange={onChangeHandler}
          />
          <input type="submit" value="Search" className="btn submit-btn" />
        </form>
        {showClearBtn && (
          <button onClick={clearResults} className="btn clear-btn">
            Clear results
          </button>
        )}
      </div>
      <div className="player-results-container">{playersList}</div>
    </div>
  );
};

export default Players;
