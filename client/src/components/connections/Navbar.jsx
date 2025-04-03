import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navStyle = {
    border: "2px solid black",
    padding: "0 10px 0 10px",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand mx-3" to="" style={navStyle}>
            SmartExplorer
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end mx-5 "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active px-5"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item px-5">
                <NavLink
                  className="nav-link active "
                  aria-current="page"
                  to="/maps"
                >
                  Maps
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/memories"
                >
                  Souvenir
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
