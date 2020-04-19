import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";
import "../players/Player.css";
import SeasonAvgTable from "../tables/SeasonAvgTable";
import StatsByGameTable from "../tables/StatsByGameTable";

const Player = (props) => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState({});
  const [seasonAvg, setSeasonAvg] = useState({});
  const [statsByGame, setStatsByGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [activePlayer, setActivePlayer] = useState(false);

  const id = props.location.pathname.substring(9);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.balldontlie.io/api/v1${props.location.pathname}`)
      .then((player) => {
        setPlayer(player.data);
        setPlayerTeam(player.data.team);
        setLoading(false);
      });
  }, [props.location.pathname]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`
      )
      .then((res) => {
        if (res.data.data.length === 0) {
          setAlert("This is not an active NBA player, so there are no stats");
        } else {
          setSeasonAvg(res.data.data[0]);
          setActivePlayer(true);
          setLoading(false);
        }
      });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${id}`
      )
      .then((res) => {
        setStatsByGame(res.data.data);
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="player-container">
      {alert !== null && <Alert alert={alert} />}
      <div className="player-header">
        <h1 className="player-heading">
          {player.first_name} {player.last_name}
        </h1>
        {player.height_feet && (
          <p className="player-paragraph">
            Height:{" "}
            <b style={{ color: "#fff" }}>
              {player.height_feet}'{player.height_inches}
            </b>
          </p>
        )}
        {player.position && (
          <p className="player-paragraph">
            Position: <b style={{ color: "#fff" }}>{player.position}</b>
          </p>
        )}
        {player.weight_pounds && (
          <p className="player-paragraph">
            Weight:{" "}
            <b style={{ color: "#fff" }}>{player.weight_pounds} pounds</b>
          </p>
        )}
        <p className="player-paragraph">
          Team: <b style={{ color: "#fff" }}>{playerTeam.full_name}</b>
        </p>
      </div>
      {activePlayer && (
        <>
          <div className="table-container" id="season-table-container">
            { loading ? <Spinner /> : <SeasonAvgTable seasonAvg={seasonAvg} player={player} /> }
          </div>
          <div className="table-container" id="game-table-container">
            { loading ? <Spinner /> : <StatsByGameTable byGameStats={statsByGame} player={player} /> }
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
