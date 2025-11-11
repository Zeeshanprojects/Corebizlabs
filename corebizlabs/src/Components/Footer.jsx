import React from "react";
import Images from "../assets/Images/Image";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr className="underline" />
      <div className="container p-0">
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
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">CorebizLabs</h6>
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
                    growth their dreams.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Quicks links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Service
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Terms & Conditions
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      +1 (949) 283-9554 A
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      david@corebizlabs.com
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
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
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </>
  );
}
