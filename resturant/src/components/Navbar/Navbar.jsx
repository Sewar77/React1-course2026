import React from "react";
import "./Navbar.css";
import Theme from "../../Theme/Theme.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
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
          <Button onClick={() => navigate("/cart")}>Cart</Button>
        </li>
        <li>
          <Theme />
        </li>
        <li>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
