import React from "react";
import "./Navbar.css";
import Theme from "../../Theme/Theme.jsx";
function Navbar() {
  return (
    <nav className="nav" id="navbar">
      <div className="logo">
        <h2> Pizza</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
