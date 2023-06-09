import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="/" className="sidebar-link">Home</a>
        </li>
        {/* <li className="sidebar-item">
          <a href="./EateryForm" className="sidebar-link">EateriesRanking</a>
        </li> */}

        <li>
          <Link to="./Maps">Directions</Link>
        </li>





        {/* <li className="sidebar-item">
          <a href="/products" className="sidebar-link">Products</a>
        </li>
        <li className="sidebar-item">
          <a href="/contact" className="sidebar-link">Contact</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
