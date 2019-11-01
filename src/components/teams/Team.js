import React from 'react';

import "./Team.css";
import Spinner from "../layout/Spinner";

const Team = props => {
    if(props.loading) {
        return <Spinner />
    }

    return (
        <div className="team-container">
            <h1>{props.team.full_name}</h1>
            <p>City: {props.team.city}</p>
            <p>Division: {props.team.division}</p>
            <p>Conference: {props.team.conference}</p>
        </div>
    )
}

export default Team;
