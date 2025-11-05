import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Images from "../assets/Images/Image";
import "./Home.css";
export default function Home() {
  useEffect(() => {
    document.title = "Home | Corebizlabs";
  }, []);

  return (
    <>
<div className="hero-section">
  <video className="bg-video" autoPlay loop muted playsInline>
    <source src="/background-video.mp4" type="video/mp4" />
  </video>

  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="custom-heading">
            Creative Design / <span>Studio</span>
          </h1>

          <p className="hero-text">
            We create with purpose. Inspire with impactful ideas.
            <br />
            Ignite your brand and identity.
          </p>
            <button className="quote-btn">Get a Quote ↗</button>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="  portfolio-section">
        <div className="explore-circle">
          <span>Explore More</span>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper"
        >
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage1} alt="Project 1" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage2} alt="Project 2" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage3} alt="Project 3" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage4} alt="Project 1" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage5} alt="Project 2" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage6} alt="Project 3" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage7} alt="Project 3" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage8} alt="Project 3" />
          </SwiperSlide>
          <SwiperSlide className="portfolio-card">
            <img src={Images.sliderimage9} alt="Project 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="work-process-section  container mt-5 ">
        <div className="row  mb-4">
          <div className="col-12">
            <h6 className="section-label">Our Work Process</h6>
            <h2 className="section-title ">
              We Follow a Strategic & Outcome-Driven Approach
            </h2>
          </div>
        </div>

        <div className="row text-center g-4">
          <div className="col-sm-12 col-md-3">
            <div className="process-card ">
              <div className="process-step">01</div>
              <h4>Research & Analysis</h4>
              <p>
                We deeply analyze business requirements to discover
                opportunities and define the right strategy.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="process-card">
              <div className="process-step">02</div>
              <h4>Planning & Strategy</h4>
              <p>
                Clear project roadmap with smart planning to ensure seamless
                execution and timely delivery.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="process-card ">
              <div className="process-step">03</div>
              <h4>Design & Development</h4>
              <p>
                We craft responsive, scalable & high-performance solutions with
                cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="process-card">
              <div className="process-step">04</div>
              <h4>Launch & Support</h4>
              <p>
                We deploy the product with ongoing support to ensure long-term
                success and improvements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section"></div>

      <div className="section about-section container ">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6">
            <h6 className="section-label">Who We Are</h6>
            <h2 className="section-title">
              Your Partner in Digital Transformation
            </h2>
            <p className="section-text">
              We are a forward-thinking digital agency delivering modern tech
              solutions that elevate brands. From visually stunning websites to
              scalable enterprise systems—our mission is to turn bold ideas into
              powerful digital realities.
            </p>
            <button className="quote-btn">Get a Quote ↗</button>
          </div>

          <div className="col-12 col-md-6 text-end">
            <img
              src={Images.image1}
              alt="about CoreBiz Labs"
              className="about-img"
            />
          </div>
        </div>
      </div>
      <div className="section why-section container ">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h6 className="section-label">Why Choose Us</h6>
            <h2 className="section-title">
              Connecting businesses with their audiences and individuals with
              their dreams. Our path forward is one of continuous growth, driven
              by innovation and unwavering commitment to excellence.
            </h2>
            <button className="quote-btn">Get a Quote ↗</button>
          </div>
        </div>
      </div>

      <div className="section container about-accordion-section">
        <div className="row align-items-center">
          {/* Left Side – Text + Image */}
          <div className="col-12 col-md-6 content-wrapper">
            <h6 className="section-label">How We Work</h6>
            <h2 className="section-title">
              Transforming Vision <br /> Into Reality
            </h2>
            <p className="section-text">
              At Corebiz Labs, we turn ideas into powerful digital experiences.
              From concept to execution, our strategy-driven approach helps
              businesses accelerate growth, improve efficiency, and stand out in
              the digital world.
              <br />
            </p>
            <button className="quote-btn">Get a Quote ↗</button>
          </div>
          <div className="col-12 col-sm-12 col-lg-6">
            <img src={Images.image2} alt="image2" className="about-img" />
          </div>
          {/* Right Side – Accordion */}
        </div>
      </div>

      <div className="section stats-section container ">
        <div className="row">
          <div className="col-12">
            <h6 className="section-label">Our Achievements</h6>
            <h2 className="section-title">
              Driving measurable success through innovation and customer trust
            </h2>
          </div>
        </div>

        {/* ✅ Stats Grid Updated to 4 Items */}
        <div className="row stats-row text-center mt-5">
          <div className="col-sm-6 col-md-3 stat-box">
            <h2 className="stat-number">100%</h2>
            <h5 className="stat-title">Client Satisfaction</h5>
          </div>

          <div className="col-sm-6 col-md-3 stat-box">
            <h2 className="stat-number">10+</h2>
            <h5 className="stat-title">Years of Experience</h5>
          </div>

          <div className="col-sm-6 col-md-3 stat-box">
            <h2 className="stat-number">50+</h2>
            <h5 className="stat-title">Successful Projects</h5>
          </div>

          {/* ✅ Newly added stat below */}
          <div className="col-sm-6 col-md-3 stat-box">
            <h2 className="stat-number">15+</h2>
            <h5 className="stat-title">Industry Experts</h5>
          </div>
        </div>
      </div>
      <div className="tech-marquee container">
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

      {/* ✅ Services Section */}
      <div className="section services-section container">
        <div className="row align-items-center">
          {" "}
          {/* ✅ vertical center alignment */}
          <div className="col-sm-12 col-md-6">
            <h6 className="section-label">Our Services</h6>
            <h2 className="section-title">Make your brand exceptional</h2>

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
          <div className="col-sm-12 col-md-6 image-col">
            {" "}
            {/* ✅ added class */}
            <img src={Images.image3} alt="service" className="service-img" />
          </div>
        </div>
      </div>

      <div className="container">
        <h6 className="section-label">FAQ</h6>
        <h2 className="section-title">Make your brand exceptional</h2>
        <div className="row">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What Kinf of services do you offer?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We specialize in full-stack web development, native and hybrid
                  mobile app development, UI/UX design, and advanced AI
                  integrations, including automation and custom AI bots. We
                  handle projects from concept to deployment.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is you Development Process
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our process is collaborative and agile. We start with a
                  deep-dive "Discovery" phase to understand your goals, followed
                  by "Design & Develop" where we build and iterate, and finally
                  "Deploy & Support" to launch your product and ensure its
                  success.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Where are you located
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We are based in beautiful Laguna Beach, California, but we
                  serve clients globally. We are fully equipped for remote
                  collaboration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
