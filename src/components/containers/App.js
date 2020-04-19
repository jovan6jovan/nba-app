import React from "react";
import MainRoutes from "../routes/MainRoutes";

import "../teams/Teams.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const App = () => {
  // clearGamesResults = () => this.setState({ games: [], loading: false });

  return (
    <div className="container">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
