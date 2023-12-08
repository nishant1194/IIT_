import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import "./Navbarr.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark" >
     
        <img
          className="logoo"
          src={Logo}
          alt=""
          style={{ height: "40px", width: "40px",  }}
        />
        <Link
          className="navbar-brand"
          style={{ margin: "0px 49px 0px 0px " }}
          to="/"
        >
          Research Scholar Forum
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active dropdown">
              <Link
                className="nav-link dropdown-toggle"
                
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Events
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/workshops">
                    Workshop
                  </Link>
                  <Link className="dropdown-item" to="/talk-series">
                    Invited Talk Series
                  </Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li className="nav-item active dropdown">
              <Link
                className="nav-link dropdown-toggle"
                
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EE-RSF Research Day
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/researchday">
                    2024
                  </Link>
                  <Link className="dropdown-item" to="/researchday23">
                    2023
                  </Link>
                  <Link className="dropdown-item" to="/researchday22">
                    2022
                  </Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sponser">
                Sponsor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item" style={{ marginLeft: "3px" }}>
              <Link className="nav-link active" to="/gallary">
                Gallery
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />

          </form>
        </div>
      
      </nav>
    </div>
  );
}

export default Navbar;


