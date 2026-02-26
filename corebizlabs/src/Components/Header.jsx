import { useState, useEffect, useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

import Images from "../assets/Images/Image";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsNavbarOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={scrollToTop}
        >
          <img className="navbar-logo" src={Images.logo} alt="logo" />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"

        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
          <div className="d-flex flex-column flex-lg-row align-items-center w-100 justify-content-between mt-3 mt-lg-0">

            {/* Center Menu */}
            <ul className="navbar-nav glass-menu mb-3 mb-lg-0 mx-auto">

              {/* HOME */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  HOME
                </NavLink>
              </li>

              {/* ABOUT */}
              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  ABOUT US
                </NavLink>
              </li>

              {/* SERVICES DROPDOWN */}
              <li className={`nav-item dropdown ${isServicesOpen ? "show" : ""}`} ref={dropdownRef}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                >
                  SERVICES
                </a>

                <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>

                  <li>
                    <NavLink
                      to="/webdevelopment"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      Website Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/appdevelopment"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      Application Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/digitalmarketing"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      Digital Marketing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/uiuxdesign"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      UI/UX Design
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/aiintegration"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      AI Integration & Automation
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/customaibots"
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "dropdown-item active-link"
                          : "dropdown-item"
                      }
                    >
                      Custom AI Bots
                    </NavLink>
                  </li>

                </ul>
              </li>


            </ul>

            {/* CTA BUTTON */}
            <NavLink to="/contact">
              <button className="quote-btn">
                Contact
              </button></NavLink>


          </div>
        </div>
      </div>
    </nav>
  );
}