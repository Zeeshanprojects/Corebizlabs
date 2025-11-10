import React from "react";

export default function Contact() {
  return (
    <>
      <div className="bg">
        <div className="capsule-border">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
            <h5>Opening Hours</h5>
            <p>Monday - Saturday</p>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
            <h5>Email</h5>
            <p>david@corebizlabs.com</p>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
            <h5>Address</h5>
            <p>Laguna Beach, California, United States</p>
          </div>
           <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
            <h5>Phone</h5>
            <p>+1 (949) 283-9554</p>
          </div>
        </div>
      </div>
    </>
  );
}
