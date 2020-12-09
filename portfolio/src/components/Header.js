import React from "react";
import "../index.css";

function Header (props) {
  return (
    <nav className="navbar navbar-expand-md fixed-top p-3">
      
      {/* Name Header */}
      <h1 className="navbar-brand pl-3">Lili Clift</h1>
      
      {/* Navbar Toggler */}
      <button className="navbar-toggler bg-light text-secondary" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* Navbar Links */}
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="nav">
          <li className="nav-item lato">
            <a
              href="#about"
              onClick={() => props.handlePageChange("About")}
              className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item lato">
            <a
              href="#portfolio"
              onClick={() => props.handlePageChange("Portfolio")}
              className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item lato">
            <a
              href="#contact"
              onClick={() => props.handlePageChange("Contact")}
              className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
