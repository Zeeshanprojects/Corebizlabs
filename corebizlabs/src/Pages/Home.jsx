import React, { useEffect } from "react";
import Images from "../assets/Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Home.css"
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

    <div className="section work-process-section container py-5">
  <div className="row  mb-4">
    <div className="col-12">
      <h6 className="section-label">Our Work Process</h6>
      <h2 className="section-title">
        We Follow a Strategic & Outcome-Driven Approach
      </h2>
    </div>
  </div>

  <div className="row text-center g-4">
    <div className="col-sm-12 col-md-3">
      <div className="process-card ">
        <div className="process-step">01</div>
        <h2>Research & Analysis</h2>
        <p>
          We deeply analyze business requirements to discover opportunities
          and define the right strategy.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-3">
      <div className="process-card">
        <div className="process-step">02</div>
        <h2>Planning & Strategy</h2>
        <p>
          Clear project roadmap with smart planning to ensure seamless
          execution and timely delivery.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-3">
      <div className="process-card ">
        <div className="process-step">03</div>
        <h2>Design & Development</h2>
        <p>
          We craft responsive, scalable & high-performance solutions with
          cutting-edge technology.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-3">
      <div className="process-card">
        <div className="process-step">04</div>
        <h2>Launch & Support</h2>
        <p>
          We deploy the product with ongoing support to ensure
          long-term success and improvements.
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="section why-section container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h6 className="section-label">Why Choose Us</h6>
            <h2 className="section-title">
              Connecting businesses with their audiences and individuals with
              their dreams. Our path forward is one of continuous growth
            </h2>
            <button className="quote-btn">Get a Quote ↗</button>
          </div>
        </div>
      </div>

      <div className="section about-section container">
       <div className="row align-items-center mb-5">
    <div className="col-12 col-md-6">
      <h6 className="section-label">Who We Are</h6>
      <h2 className="section-title">Your Partner in Digital Transformation</h2>
      <p className="section-text">
        We are a forward-thinking digital agency delivering modern tech
        solutions that elevate brands. From visually stunning websites to
        scalable enterprise systems—our mission is to turn bold ideas into
        powerful digital realities.
      </p>
      <button className="quote-btn">Get a Quote ↗</button>
    </div>

    <div className="col-12 col-md-6 text-end">
      <img src={Images.image1} alt="about CoreBiz Labs" className="about-img" />
    </div>
  </div>


        <div className="tech-marquee">
          <div className="marquee-track">
            <div className="tech-item">
              <i className="devicon-html5-plain"></i>
              <span>HTML</span>
            </div>
            <div className="tech-item">
              <i className="devicon-css3-plain"></i>
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="tech-item">
              <i className="devicon-nodejs-plain"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <i className="devicon-laravel-plain"></i>
              <span>Laravel</span>
            </div>
            <div className="tech-item">
              <i className="devicon-mysql-plain"></i>
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <i className="devicon-php-plain"></i>
              <span>PHP</span>
            </div>
            <div className="tech-item">
              <i className="devicon-flutter-plain"></i>
              <span>Flutter</span>
            </div>
            {/* 
    <!-- Duplicate for smooth infinite scroll --> */}
            <div className="tech-item">
              <i className="devicon-html5-plain"></i>
              <span>HTML</span>
            </div>
            <div className="tech-item">
              <i className="devicon-css3-plain"></i>
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="tech-item">
              <i className="devicon-nodejs-plain"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <i className="devicon-laravel-plain"></i>
              <span>Laravel</span>
            </div>
            <div className="tech-item">
              <i className="devicon-mysql-plain"></i>
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <i className="devicon-php-plain"></i>
              <span>PHP</span>
            </div>
            <div className="tech-item">
              <i className="devicon-flutter-plain"></i>
              <span>Flutter</span>
            </div>
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
                <h3>01</h3>
                Full Stack Web Development
                <span class="arrow-circle">↗</span>
              </li>
              <li className="service-item">
                 <h3>02</h3>
                Mobile App Development
                <span class="arrow-circle">↗</span>
              </li>
              <li className="service-item">
                 <h3>03</h3>
                UI / UX Design
                <span class="arrow-circle">↗</span>
              </li>
              <li className="service-item">
                 <h3>04</h3>
                AI Integration & Automation
                <span class="arrow-circle">↗</span>
              </li>
              <li className="service-item">
                 <h3>05</h3>
                Custom AI Bots
                <span class="arrow-circle">↗</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    <div className="section stats-section container">
  <div className="row">
    <div className="col-12">
      <h6 className="section-label">Our Achievements</h6>
      <h2 className="section-title">
        Driving measurable success through innovation and customer trust
      </h2>
    </div>
  </div>

  {/* ✅ Stats Grid (not inside previous row) */}
  <div className="row stats-row text-center mt-5">
    <div className="col-sm-12 col-md-4 stat-box">
      <h2 className="stat-number">100%</h2>
      <h5 className="stat-title">Client Satisfaction</h5>
    </div>

    <div className="col-sm-12 col-md-4 stat-box">
      <h2 className="stat-number">10+</h2>
      <h5 className="stat-title">Years of Experience</h5>
    </div>

    <div className="col-sm-12 col-md-4 stat-box">
      <h2 className="stat-number">50+</h2>
      <h5 className="stat-title">Successful Projects</h5>
    </div>
  </div>
</div>
    </>
  );
}
