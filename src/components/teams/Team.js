import React from 'react';

import "./Team.css";
import Spinner from "../layout/Spinner";

const Team = props => {
    if(props.loading) {
        return <Spinner />
    }

    return (
        <div className="team-container">
            <h1 className="team-heading">{props.team.full_name}</h1>
            <p className="team-paragraph">City: <b style={{color: "#fff"}}>{props.team.city}</b></p>
            <p className="team-paragraph">Division: <b style={{color: "#fff"}}>{props.team.division}</b></p>
            <p className="team-paragraph">Conference: <b style={{color: "#fff"}}>{props.team.conference}</b></p>
        </div>
    )
}

export default Team;
