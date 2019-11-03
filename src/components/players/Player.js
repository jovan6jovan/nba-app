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
        <button className="btn show-stats-btn" onClick={getSeasonAvg}>
          Show stats
        </button>
      </div>
      <div className="show-season-stats">
        <div className="single-stat-div">
          <h5>Games</h5>
          <h5>{games_played}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Minutes</h5>
          <h5>{min}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Points</h5>
          <h5>{pts}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGA</h5>
          <h5>{fga}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGM</h5>
          <h5>{fgm}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FG %</h5>
          <h5>{fg_pct}</h5>
        </div>
        <div className="single-stat-div">
          <h5>3FGA</h5>
          <h5>{fg3a}</h5>
        </div>
        <div className="single-stat-div">
          <h5>3FGM</h5>
          <h5>{fg3m}</h5>
        </div>
        <div className="single-stat-div">
          <h5>3FG %</h5>
          <h5>{fg3_pct}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FTA</h5>
          <h5>{fta}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FTM</h5>
          <h5>{ftm}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FT %</h5>
          <h5>{ft_pct}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGA</h5>
          <h5>{fga}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGM</h5>
          <h5>{fgm}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FG %</h5>
          <h5>{fg_pct}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGA</h5>
          <h5>{fga}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FGM</h5>
          <h5>{fgm}</h5>
        </div>
        <div className="single-stat-div">
          <h5>FG %</h5>
          <h5>{fg_pct}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Off. reb</h5>
          <h5>{oreb}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Deff. reb</h5>
          <h5>{dreb}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Total reb</h5>
          <h5>{reb}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Asists</h5>
          <h5>{ast}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Blocks</h5>
          <h5>{blk}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Steals</h5>
          <h5>{stl}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Fouls</h5>
          <h5>{pf}</h5>
        </div>
        <div className="single-stat-div">
          <h5>Turnovers</h5>
          <h5>{turnover}</h5>
        </div>
      </div>
    </div>
  );
};

export default Player;
