import React from "react";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="about">
        <h1 className="about-heading">About app</h1>
        <p className="about-paragraph">
          The mini NBA app shows you player stats, basic info about NBA teams,
          and the matches that are going to play tonight.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
