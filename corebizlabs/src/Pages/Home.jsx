import React, { useEffect } from "react";
import Images from "../assets/Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Corebizlabs";
  });

  const sliderImages = [
    Images.sliderimage1,
    Images.sliderimage2,
    Images.sliderimage3,
    Images.sliderimage4,
    Images.sliderimage5,
    Images.sliderimage6,
    Images.sliderimage7,
    Images.sliderimage8,
    Images.sliderimage9,
  ];
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

      <div className="projects-slider-section">
        {/* Explore More Button */}
        <div className="explore-btn">
          <span>Explore More</span>
        </div>

        {/* Wrapper ensures explore button doesn't overlap interactive area */}
        <div className="swiper-wrapper-inner">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={2.2}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true} // enable prev/next arrows
            observer={true} // respond to DOM changes
            observeParents={true}
            className="project-swiper"
            a11y={{ enabled: true }}
          >
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index} className="project-slide">
                <img src={img} alt={`Slide ${index}`} className="slider-img" />
              </SwiperSlide>
            ))}
          </Swiper>
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
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h6 className="section-label">About Us</h6>
            <h2 className="section-title">Your Partner in Innovation</h2>
            <p className="section-text">
              We are a full-service digital agency crafting bespoke tech
              solutions that drive growth. From sleek web designs to complex AI
              integrations, our team is dedicated to turning your vision into
              reality.
            </p>
            <button className="quote-btn">Get a Quote ↗</button>
          </div>
          <div className="col-12 col-md-6 text-end">
            <img src={Images.image1} alt="image1" className="about-img" />
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
