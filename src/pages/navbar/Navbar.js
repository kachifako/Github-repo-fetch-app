import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function General() {
  return (
    <nav className="nav-body">
      <div className="nav-content-wrapper">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "rgb(38, 25, 101)" };
          }}
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "rgb(38, 25, 101)" };
          }}
          to="userprofile"
          className="nav-link"
        >
          Profile
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "rgb(38, 25, 101)" };
          }}
          to="repolist"
          className="nav-link"
        >
          User Repositories
        </NavLink>
      </div>

      {/* <div className="btns-div">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "rgb(38, 25, 101)" };
          }}
          to="signin"
        >
          <button className="nav-btn"> Sign in</button>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "rgb(38, 25, 101)" };
          }}
          to="signup"
        >
          <button className="nav-btn"> Sign up</button>
        </NavLink>
      </div> */}
    </nav>
  );
}
