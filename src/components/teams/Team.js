import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Team.css";
import Spinner from "../layout/Spinner";

const Team = (props) => {
  // const [team, setTeam] = useState({});

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`https://www.balldontlie.io/api/v1/teams/${teamId}`).then((team) => {
  //     setTeam(team.data);
  //     setLoading(false);
  //   });
  // }, [teamId]);

  console.log(props);
  
  return props.loading ? <Spinner /> : (
    <>
    Hello from Team.js
    {/* <div className="team-container">
      <h1 className="team-heading">{props.teams.full_name}</h1>
      <p className="team-paragraph">
        City: <b style={{ color: "#fff" }}>{props.teams.city}</b>
      </p>
      <p className="team-paragraph">
        Division: <b style={{ color: "#fff" }}>{props.teams.division}</b>
      </p>
      <p className="team-paragraph">
        Conference: <b style={{ color: "#fff" }}>{props.teams.conference}</b>
      </p>
    </div> */}
    </>
  );
};

export default Team;
