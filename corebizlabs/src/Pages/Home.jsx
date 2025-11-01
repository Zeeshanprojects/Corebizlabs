import React, { useEffect } from "react";
import Images from "../assets/Images/Image";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Corebizlabs";
  });
  return (
    <>
      <div className="hero-section container">
        <div className="row">
          <div className="col-12">
            <h1 className="custom-heading">
              CoreBiz Labs:
              <br />
              Engineering Your <span>Digital</span> Future
            </h1>

            <p className="hero-text">
              We create with purpose. Inspire with impactful ideas.
              <br /> Ignite your brand and identity.
            </p>
          </div>
        </div>
      </div>
<div className="section why-section container">
  <div className="row">
    <div className="col-12 col-lg-10">
      <h6 className="section-label">Why Choose Us</h6>
      <h2 className="section-title">
        Connecting businesses with their audiences and individuals with their
        dreams. Our path forward is one of continuous growth
      </h2>
      <button className="quote-btn">Get a Quote ↗</button>
    </div>
  </div>
</div>

<div className="section about-section container">
  <div className="row align-items-center">
    <div className="col-12 col-md-6">
      <h6 className="section-label">About Us</h6>
      <h2 className="section-title">Your Partner in Innovation</h2>
      <p className="section-text">
        We are a full-service digital agency crafting bespoke tech solutions
        that drive growth. From sleek web designs to complex AI integrations,
        our team is dedicated to turning your vision into reality.
      </p>
      <button className="quote-btn">Get a Quote ↗</button>
    </div>
    <div className="col-12 col-md-6 text-end">
      <img src={Images.image1} alt="image1" className="about-img" />
    </div>
  </div>
</div>
{/* ✅ Services Section */}
<div className="section services-section container">
  <div className="row">
    <div className="col-12">
      <h6 className="section-label">Our Services</h6>
      <h2 className="section-title">Make your brand exceptional</h2>
    </div>

    <div className="col-12">
     <ul className="services-list">
  <li className="service-item">
    Full Stack Web Development
    <span class="arrow-circle">↗</span>
  </li>
  <li className="service-item">
    Mobile App Development
    <span class="arrow-circle">↗</span>
  </li>
  <li className="service-item">
    UI / UX Design
    <span class="arrow-circle">↗</span>
  </li>
  <li className="service-item">
    AI Integration & Automation
    <span class="arrow-circle">↗</span>
  </li>
  <li className="service-item">
    Custom AI Bots
    <span class="arrow-circle">↗</span>
  </li>
</ul>

    </div>
  </div>
</div>

    </>
  );
}
