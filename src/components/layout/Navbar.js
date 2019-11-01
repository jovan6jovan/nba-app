import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/games">Today's matches</Link>
    </nav>
  );
};

export default Navbar;
