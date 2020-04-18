import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Team.css";
import Spinner from "../layout/Spinner";

const Team = (props) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1${props.location.pathname}`).then((team) => {
      setTeam(team.data);
      setLoading(false);
    });
  }, [props.location.pathname]);

  return loading ? <Spinner /> : (
    <>
    {/* Hello from Team.js */}
    <div className="team-container">
      <h1 className="team-heading">{team.full_name}</h1>
      <p className="team-paragraph">
        City: <b style={{ color: "#fff" }}>{team.city}</b>
      </p>
      <p className="team-paragraph">
        Division: <b style={{ color: "#fff" }}>{team.division}</b>
      </p>
      <p className="team-paragraph">
        Conference: <b style={{ color: "#fff" }}>{team.conference}</b>
      </p>
    </div>
    </>
  );
};

export default Team;
