import React from 'react';

import "./Alert.css";

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className="alert">
                {alert.msg}
            </div>
        )
    )
}

export default Alert;
