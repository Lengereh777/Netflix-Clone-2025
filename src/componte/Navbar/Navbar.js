import React from "react";
import "./Navbar.css"

// Material UI Icons
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="navbar-links">
          <a href="1">Home</a>
          <a href="2">TV Shows</a>
          <a href="3">Movies</a>
          <a href="4">Latest</a>
          <a href="5">My List</a>
        </div>
      </div>

      <div className="navbar-right">
        <input type="text" className="navbar-search" placeholder="Search" />

        {/* Notification Icon */}
        <div className="navbar-icon">
          <NotificationsNoneIcon />
        </div>

        {/* Account Icon */}
        <div className="navbar-icon">
          <AccountBoxIcon />
        </div>

        {/* Dropdown Arrow */}
        <div className="navbar-icon">
          <ArrowDropDownIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
