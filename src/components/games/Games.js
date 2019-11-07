import React from "react";

import "./Games.css";

const Games = ({ games, getTodaysGames, showClearBtn, clearGamesResults }) => {
  const gamesList = games.map(game => {
    const date = new Date(game.date);
    return (
      <div key={game.id} className="game-container">
        <div className="date-and-time">
          <h2 className="date-heading">{date.toLocaleDateString()}</h2>
          <h2 className="time-heading">{game.status}</h2>
        </div>
        <p className="team-vs-team-paragraph">
          <span>{game.home_team.full_name}</span>
          <span> VS </span>
          <span>{game.visitor_team.full_name}</span>
        </p>
      </div>
    );
  });
  return (
    <div className="games-container">
      <h1
        style={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem" }}
      >
        Tonight's games
      </h1>
      <div className="buttons-container">
        <button className="btn show-games-btn" onClick={getTodaysGames}>
          Show games
        </button>
        {showClearBtn && (
          <button onClick={clearGamesResults} className="btn clear-games-btn">
            Clear results
          </button>
        )}
      </div>
      {gamesList}
    </div>
  );
};

export default Games;
