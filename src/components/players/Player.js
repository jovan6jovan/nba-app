import React from "react";

import Spinner from "../layout/Spinner";
import "../players/Player.css";
import SeasonAvgTable from "../tables/SeasonAvgTable";
import StatsByGameTable from "../tables/StatsByGameTable";

const Player = ({ loading, player, activePlayer, seasonAvg, byGameStats }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="player-container">
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
          Team: <b style={{ color: "#fff" }}>{player.team.full_name}</b>
        </p>
      </div>
      {activePlayer && (
        <React.Fragment>
          <div className="table-container" id="season-table-container">
            <SeasonAvgTable seasonAvg={seasonAvg} player={player} />
          </div>
          <div className="table-container" id="game-table-container">
            <StatsByGameTable byGameStats={byGameStats} player={player} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Player;
