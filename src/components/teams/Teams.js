import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Teams = ({ getTeamInfo }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getTeams() {
      const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
      setTeams(response.data.data);
    }

    getTeams();
  }, []);

  // const getTeamInfo = async (e) => {
  //   if (e.target.id !== "") {
  //     const response = await axios.get(
  //       `https://www.balldontlie.io/api/v1/teams/${e.target.id}`
  //     );

  //     setTeam(response.data);
  //   }
  // };

  const filterTeamsByDivision = (divisionName) => {
    return teams
      .filter((team) => {
        return team.division === divisionName;
      })
      .map((team) => (
        <h4 className="team-name-heading" key={team.id}>
          <Link
            to={`/team/${team.id}`}
            id={team.id}
            className="team-link"
            onClick={getTeamInfo}
          >
            {team.full_name}
          </Link>
        </h4>
      ));
  };

  const atlanticDivisionTeams = filterTeamsByDivision("Atlantic");
  const pacificDivisionTeams = filterTeamsByDivision("Pacific");
  const centralDivisionTeams = filterTeamsByDivision("Central");
  const southeastDivisionTeams = filterTeamsByDivision("Southeast");
  const southwestDivisionTeams = filterTeamsByDivision("Southwest");
  const northwestDivisionTeams = filterTeamsByDivision("Northwest");

  return (
    <React.Fragment>
      <h1 className="teams-heading">NBA Teams</h1>
      <div className="divisions-container">
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Atlantic</h2>
          {atlanticDivisionTeams}
        </div>
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Pacific</h2>
          {pacificDivisionTeams}
        </div>
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Central</h2>
          {centralDivisionTeams}
        </div>
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Southeast</h2>
          {southeastDivisionTeams}
        </div>
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Southwest</h2>
          {southwestDivisionTeams}
        </div>
        <div className="divisions-team">
          <h2 className="divisions-team-heading">Northwest</h2>
          {northwestDivisionTeams}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teams;
