import React, { useContext } from "react";
import "./Navbar.css";
import Theme from "../../Theme/Theme.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
function Navbar() {
  const { currentUser, logout } = useContext(UserContext);
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
          <Button onClick={() => navigate("/contact")}>Contact Us</Button>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        {/* condetional component render */}
        {currentUser ? (
          // if user logged in (if user exist)
          <>
            <li>
              <Button onClick={() => navigate("/cart")}>Cart</Button>
            </li>
            <li>
              <Button variant="contained" onClick={() => logout()}>
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button variant="contained" onClick={() => navigate("/register")}>
                Register
              </Button>
            </li>
            <li>
              <Button variant="contained" onClick={() => navigate("/login")}>
                Login
              </Button>
            </li>
          </>
        )}

        {/* <li>
          <Theme />
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
