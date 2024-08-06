import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark  "
        style={{
          backgroundColor: props.mode === "dark" ? "#030637" : "#222831",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Rapid - News{" "}
          </Link>{" "}
          <button
            className="navbar-toggler"
            type="button"
            dataBsToggle="collapse"
            dataBsTarget="#navbarSupportedContent"
            ariaControls="navbarSupportedContent"
            ariaExpanded="false"
            ariaLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>{" "}
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " ariaCurrent="page" to="#">
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/Business">
                  Business{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/Entertainment">
                  Entertainment{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/General">
                  General{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/Health">
                  Health{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/Science">
                  Science{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link " to="/Sports">
                  Sports{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="form-check form-switch">
            <input
              onClick={props.togglemode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;
