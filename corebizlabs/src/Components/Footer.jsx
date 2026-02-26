import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr className="underline" />
      <div className="container-fluid p-0">
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#0E0F11" }}
        >
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-2"></section>

          <section className="">
            <div className="container-fluid text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto mb-4">
                  {/* Content */}{" "}
                  <h6 className="text-uppercase fw-bold custom-color">
                    CorebizLabs
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    Connecting businesses with their audiences and individuals
                    with their dreams. Our path forward is one of continuous
                    growth, innovation, and meaningful impact — empowering every
                    idea to reach its full potential and shaping a future driven
                    by creativity and collaboration
                  </p>
                  <div className="d-flex gap-3 ">
                    <i className="fa-brands fa-facebook-f"></i>

                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-x-twitter "></i>
                  </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold custom-color">
                    Quicks links
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <Link to="/about" className="footer-list">
                      About Us
                    </Link>
                  </p>

                  <p>
                    <Link to="/contact" className="footer-list">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link to="/webdevelopment" className="footer-list">
                      Website Development
                    </Link>
                  </p>
                  <p>
                    <Link to="/appdevelopment" className="footer-list">
                      App Development
                    </Link>
                  </p>
                  <p>
                    <Link to="/digitalmarketing" className="footer-list">
                      Digital Marketing
                    </Link>
                  </p>
                  <p>
                    <Link to="/uiuxdesign" className="footer-list">
                      UI / UX Designing
                    </Link>
                  </p>
                  <p>
                    <Link to="/aiintegration" className="footer-list">
                      AI Integration & Automation
                    </Link>
                  </p>
                  <p className="footer-list">
                    <Link to="/customaibots" className="text-white">
                      Custom AI Bots
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold custom-color">
                    Contact
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <a to="#!" className="text-white">
                      +1 (949) 283-9554 A
                    </a>
                  </p>
                  <p>
                    <a to="#!" className="text-white">
                      david@corebizlabs.com
                    </a>
                  </p>
                  <p>
                    <a to="#!" className="text-white">
                      Laguna Beach
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2025 Copyright{" "}
            <a className="text-white" to="/">
              CorBizLabs.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
