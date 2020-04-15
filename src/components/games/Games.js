import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Games.css";
// import Spinner from "../layout/Spinner";

const Games = () => {
  const [games, setGames] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTodaysGames() {
      const today = new Date().toISOString().slice(0, 10);
      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`
      );
      setGames(response.data.data);
    }

    getTodaysGames();
  }, []);

  const gamesList = games.map((game) => {
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
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        Tonight's games
      </h1>
      {gamesList}
    </div>
  );
};

export default Games;
