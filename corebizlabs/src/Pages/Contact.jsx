import React from "react";
import "./Contact.css"
import Images from "../assets/Images/Image";
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
            <img src={Images.time} alt="time" className="icons"/>
            <h5>Opening Hours</h5>
            <p>Monday - Saturday</p>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
               <img src={Images.email} alt="email" className="icons"/>
            <h5>Email</h5>
            <p>david@corebizlabs.com</p>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
              <img src={Images.address} alt="adderess" className="icons"/>
            <h5>Address</h5>
            <p>Laguna Beach, California, United States</p>
          </div>
           <div className="col-sm-12  col-md-6 col-lg-3 col-xl-3 text-white">
              <img src={Images.phone} alt="phone" className="icons"/>
            <h5>Phone</h5>
            <p>+1 (949) 283-9554</p>
          </div>
        </div>
      </div>
    </>
  );
}
