import React from "react";
import { Link } from "react-router-dom";

const Teams = ({ teams, getTeamInfo }) => {
  const atlanticDivisionTeams = teams
    .filter((team) => {
      return team.division === "Atlantic";
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

  const pacificDivisionTeams = teams
    .filter((team) => team.division === "Pacific")
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

  const centralDivisionTeams = teams
    .filter((team) => team.division === "Central")
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

  const southeastDivisionTeams = teams
    .filter((team) => team.division === "Southeast")
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

  const southwestDivisionTeams = teams
    .filter((team) => team.division === "Southwest")
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

  const northwestDivisionTeams = teams
    .filter((team) => team.division === "Northwest")
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
