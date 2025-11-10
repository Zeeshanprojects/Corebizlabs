import React from "react";
import "./Contact.css";
import Images from "../assets/Images/Image";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg">
        <div className="capsule-border">
          <h1>CONTACT US</h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container contact-section">
        <div className="row text-center gy-5">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="contact-card">
              <img src={Images.time} alt="time" className="contact-icon" />
              <h5>Opening Hours</h5>
              <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="contact-card">
              <img src={Images.email} alt="email" className="contact-icon" />
              <h5>Email</h5>
              <p>david@corebizlabs.com</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="contact-card">
              <img src={Images.address} alt="address" className="contact-icon" />
              <h5>Address</h5>
              <p>Laguna Beach, California<br />United States</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="contact-card">
              <img src={Images.phone} alt="phone" className="contact-icon" />
              <h5>Phone</h5>
              <p>+1 (949) 283-9554</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <iframe
          title="Laguna Beach Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42558.74898906767!2d-117.79856388728438!3d33.542747853923494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde86d2dc2f49%3A0x53b3f6c5f356ea1!2sLaguna%20Beach%2C%20CA%2092651%2C%20USA!5e0!3m2!1sen!2sus!4v1731268799202!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
