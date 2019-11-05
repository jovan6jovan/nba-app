import React from "react";

import Spinner from "../layout/Spinner";
import "../players/Player.css";
import SeasonAvgTable from "../tables/SeasonAvgTable";
import StatsByGameTable from "../tables/StatsByGameTable";

const Player = ({ loading, player, seasonAvg, getSeasonAvg, byGameStats, statsByGame }) => {
  if (loading) {
    return <Spinner />;
  }

  const showSeasonAvgTable = () => setTimeout(() => document.getElementById("season-table-container").classList.remove("hide"), 700);

  const showStatsByGame = () => setTimeout(() => document.getElementById("game-table-container")
  .classList.remove("hide"), 700);

  return (
    <div className="player-container">
      <div className="player-header">
        <h1 className="player-heading">
          {player.first_name} {player.last_name}
        </h1>
        <p className="player-paragraph">
          Height: <b style={{color: "#fff"}}>{player.height_feet}'{player.height_inches}</b>
        </p>
        {player.position && <p className="player-paragraph">Position: <b style={{color: "#fff"}}>{player.position}</b></p>}
        {player.weight_pounds && <p className="player-paragraph">Weight: <b style={{color: "#fff"}}>{player.weight_pounds} pounds</b></p>}
        <div className="buttons-container">
          <button className="btn show-stats-btn" onClick={() => {getSeasonAvg(); showSeasonAvgTable()}}>
            Show season average stats
          </button>
          <button className="btn ten-games-btn" onClick={() => {statsByGame(); showStatsByGame()}}>Stats by game</button>
        </div>
      </div>
      <div className="table-container hide" id="season-table-container">
        <SeasonAvgTable seasonAvg={seasonAvg} player={player} />
      </div>
      <div className="table-container hide" id="game-table-container">
        <StatsByGameTable byGameStats={byGameStats} player={player} />
      </div>
    </div>
  );
};

export default Player;
