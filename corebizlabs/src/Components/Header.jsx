import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Images from "../assets/Images/Image";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="container-fluid align-items-center">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img className="navbar-logo" src={Images.logo} alt="logo" />
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Menu */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav glass-menu py-2 px-3">
            <li className="nav-item ">
              <Link className="nav-link active highlight" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <button className="quote-btn">Get a Quote ↗</button>
      </div>
    </nav>
  );
}
