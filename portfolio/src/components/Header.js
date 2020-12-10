import React from "react";
import { Link } from "react-router-dom";
// import "../reset.css";
// import "../index.css";


function Header (props) {
  return (
    <nav className="navbar navbar-expand-md fixed-top p-3">
      
      {/* Name Header */}
      <h1 className="navbar-brand pl-3" style={{fontSize : "40px", marginTop: "-10px"}}> Lili Clift </h1>
      
      {/* Navbar Toggler */}
      <button className="navbar-toggler bg-light text-secondary" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* Navbar Links */}
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="nav">
          <li className="nav-item lato">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item lato">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item lato">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
