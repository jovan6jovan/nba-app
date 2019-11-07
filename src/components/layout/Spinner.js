import React from "react";

import spinner from "../../assets/spinner.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="loading..." className="spinner-img" />
    </div>
  );
};

export default Spinner;
