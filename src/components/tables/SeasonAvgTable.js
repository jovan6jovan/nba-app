import React from "react";

import "./Tables.css";

const SeasonAvgTable = ({ player, seasonAvg }) => {
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

  return (
    <table>
      <caption className="table-caption">
        {player.first_name} {player.last_name}'s season average stats
      </caption>
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
          <th>REB</th>
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
          <td style={{backgroundColor: "#45a247", color: "#fff"}}>{pts}</td>
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
  );
};

export default SeasonAvgTable;
