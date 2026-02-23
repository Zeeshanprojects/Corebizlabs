import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Images from "../assets/Images/Image";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img className="navbar-logo" src={Images.logo} alt="logo" />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu + CTA */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row align-items-center w-100 justify-content-between mt-3 mt-lg-0">
            {/* Center Menu */}
            <ul className="navbar-nav glass-menu mb-3 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active highlight"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/portfolio"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="quote-btn">Get a Quote ↗</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
