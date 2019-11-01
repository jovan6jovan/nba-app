import React from "react";

import "./Players.css";
import Spinner from "../layout/Spinner";

const Players = ({ onChangeHandler, onSubmitHandler, term, players, loading }) => {
  if(loading) {
    return <Spinner />
  }

  const playersList = players.map(player => {
    return (
      <div key={player.id}>
        <h4>{player.first_name} {player.last_name}</h4>
        <p>Position: {player.position}</p>
        <p>Team: {player.team.full_name}</p>
      </div>
    )
  })

  return (
    <div className="players-container">
      <h2>Browse players</h2>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={term} name="text" placeholder="Search..." onChange={onChangeHandler} />
        <input type="submit" value="search" />
      </form>
      {playersList}
    </div>
  )
};

export default Players;
