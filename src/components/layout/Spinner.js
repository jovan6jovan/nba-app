import React from 'react';

import spinner from "../../assets/spinner.gif";

const Spinner = () => {
    return (
        <React.Fragment>
            <img src={spinner} alt="loading..." style={{width: "400px", margin: "auto", display: "block"}} />
        </React.Fragment>
    )
}

export default Spinner;
