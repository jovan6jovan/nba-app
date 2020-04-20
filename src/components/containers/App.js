import React from "react";
import MainRoutes from "../routes/MainRoutes";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const App = () => (
  <div className="container">
    <Navbar />
    <MainRoutes />
    <Footer />
  </div>
);

export default App;
