import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="nav"> {/* Add className */}
    <h1 className="title">Eateries</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./EateryForm">Add Eatery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
