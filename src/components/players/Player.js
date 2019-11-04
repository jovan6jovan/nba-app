import React from "react";

import Spinner from "../layout/Spinner";
import "../players/Player.css";

const Player = ({ loading, player, seasonAvg, getSeasonAvg }) => {
  if (loading) {
    return <Spinner />;
  }

  const {
    games_played,
    min,
    pts,
    fga,
    fgm,
    fg_pct,
    fg3a,
    fg3m,
    fg3_pct,
    fta,
    ftm,
    ft_pct,
    oreb,
    dreb,
    reb,
    ast,
    blk,
    stl,
    pf,
    turnover
  } = seasonAvg;

  const showSeasonAvgTable = () => {
    
    return setTimeout(() => {
      const tableContainer = document.getElementById("table-container");

      tableContainer.classList.remove("hide");
    }, 700)
  }

  return (
    <div className="player-container">
      <div className="player-header">
        <h1>
          {player.first_name} {player.last_name}
        </h1>
        <p>
          Height: {player.height_feet}'{player.height_inches}
        </p>
        {player.position && <p>Position: {player.position}</p>}
        {player.weight_pounds && <p>Weight: {player.weight_pounds} pounds</p>}
        <button className="btn show-stats-btn" onClick={() => {getSeasonAvg(); showSeasonAvgTable()}}>
          Show stats
        </button>
      </div>
      <div className="table-container hide" id="table-container">
        <table className="player-season-avg-stats">
          <caption className="table-caption">{player.first_name} {player.last_name}'s season average stats</caption>
          <thead>
            <tr>
              <th>GP</th>
              <th>MIN</th>
              <th>PTS</th>
              <th>FGA</th>
              <th>FGM</th>
              <th>FG %</th>
              <th>3FGA</th>
              <th>3FGM</th>
              <th>3FG %</th>
              <th className="hide-stat">FTA</th>
              <th className="hide-stat">FTM</th>
              <th className="hide-stat">FT %</th>
              <th className="hide-stat">O. REB</th>
              <th className="hide-stat">D. REB</th>
              <th>TOTAL REB</th>
              <th>AST</th>
              <th>BLK</th>
              <th>STL</th>
              <th>PF</th>
              <th>TO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{games_played}</td>
              <td>{min}</td>
              <td>{pts}</td>
              <td>{fga}</td>
              <td>{fgm}</td>
              <td>{String(Math.round(fg_pct * 100))}</td>
              <td>{fg3a}</td>
              <td>{fg3m}</td>
              <td>{String(Math.round(fg3_pct * 100))}</td>
              <td className="hide-stat">{fta}</td>
              <td className="hide-stat">{ftm}</td>
              <td className="hide-stat">{String(Math.round(ft_pct * 100))}</td>
              <td className="hide-stat">{oreb}</td>
              <td className="hide-stat">{dreb}</td>
              <td>{reb}</td>
              <td>{ast}</td>
              <td>{blk}</td>
              <td>{stl}</td>
              <td>{pf}</td>
              <td>{turnover}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Player;
