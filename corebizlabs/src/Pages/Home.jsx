import { useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../assets/Images/Image";
import "./Home.css";
export default function Home() {
  useEffect(() => {
    document.title = "Home | Corebizlabs";
  }, []);

  return (
    <>
      <div className="hero-section">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.webp"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="custom-heading">
                  Software Innovation <span>Creative Design</span>
                </h1>

                <p className="hero-text">
                  We create with purpose. Inspire with impactful ideas.
                  <br />
                  Ignite your brand and identity.
                </p>
                <br />
                <button className="quote-btn mt-3 ps-5 pe-5">
                  Get a Quote ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= WORK PROCESS ================= */}
      <section className="section work-process-section">
        <div className="container px-3">
          <div className="row">
            <div className="col-12 mb-4">
              <h6 className="section-label">Our Work Process</h6>
              <h2 className="section-title">
                We Follow a Strategic & Outcome-Driven Approach
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                step: "01",
                title: "Research & Analysis",
                desc: "We deeply analyze business requirements to discover opportunities and define the right strategy.",
              },
              {
                step: "02",
                title: "Planning & Strategy",
                desc: "Clear project roadmap with smart planning to ensure seamless execution and timely delivery.",
              },
              {
                step: "03",
                title: "Design & Development",
                desc: "We craft responsive, scalable & high-performance solutions with cutting-edge technology.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We deploy the product with ongoing support to ensure long-term success.",
              },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="process-card">
                  <div className="process-step">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="section about-section">
        <div className="container px-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h6 className="section-label">Who We Are</h6>
              <h2 className="section-title">
                Your Partner in Digital Transformation
              </h2>
              <p className="text-white">
                We are a forward-thinking digital agency delivering modern tech
                solutions that elevate brands.
              </p>
              <button className="quote-btn mt-3">Get a Quote ↗</button>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img
                src={Images.image1}
                alt="about CoreBiz Labs"
                className="img-fluid about-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className=" container px-3">
          <div className="row">
            <div className="col-12 col-lg-12 ps-3 ">
              <h6 className="section-label">Why Choose Us</h6>
              <h2 className="section-title">
                Empowering Businesses Through Innovation
              </h2>
              <p className="text-white">
                We connect brands with their audiences and help individuals
                transform their ideas into impactful digital solutions. From
                intuitive websites to immersive digital experiences, we design,
                develop, and deliver with purpose. Our work is powered by
                creativity, guided by data, and built on modern technology that
                scales with your success. Together, we create digital value that
                drives growth, strengthens your brand presence, and shapes a
                future full of new possibilities.
              </p>

              <button className="quote-btn ">Get a Quote ↗</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-accordion-section">
        <div className="container  px-3">
          <div className="row align-items-center">
            {/* Left Side – Text + Image */}
            <div className="col-12 col-md-6 content-wrapper ps-3 mb-4 mb-md-0">
              <h6 className="section-label">How We Work</h6>
              <h2 className="section-title">
                Transforming Vision <br /> Into Reality
              </h2>
              <p className="text-white">
                At Corebiz Labs, we turn ideas into powerful digital
                experiences. From concept to execution, our strategy-driven
                approach helps businesses accelerate growth, improve efficiency,
                and stand out in the digital world.
              </p>
              <button className="quote-btn">Get a Quote ↗</button>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <img src={Images.image2} alt="image2" className="about-img" />
            </div>
            {/* Right Side – Accordion */}
          </div>
        </div>
      </section>
<section className="section stats-section">
    <div className=" container px-3">
        <div className="row">
          <div className="col-12 ps-3">
            <h6 className="section-label">Our Achievements</h6>
            <h2 className="section-title">
              Driving Measurable Success Through Innovation
            </h2>
          </div>
        </div>

        {/* ✅ Stats Grid Updated to 4 Items */}
        <div className="row stats-row text-center ">
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
</section>
    
      <div className=" section tech-marquee container">
        <div className="marquee-track">
          <div className="tech-item">
            <div className="tech-item">
              <i className="devicon-php-plain"></i>
              <span>Design</span>
            </div>
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
            <span>Design</span>
          </div>
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

       {/* ================= SERVICES ================= */}
      <section className="section services-section">
        <div className="container px-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h6 className="section-label">Our Services</h6>
              <h2 className="section-title">
                Make your brand exceptional
              </h2>

              <ul className="services-list ps-0">
                <Link to="/webdevelopment">
                  <li className="service-item">
                    Website Development
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>

                <Link to="/appdevelopment">
                  <li className="service-item">
                    Mobile App Development
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>

                <Link to="/digitalmarketing">
                  <li className="service-item">
                    Digital Marketing
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>

                <Link to="/uiuxdesign">
                  <li className="service-item">
                    UI / UX Design
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>

                <Link to="/aiintegration">
                  <li className="service-item">
                    AI Integration & Automation
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>

                <Link to="/customaibots">
                  <li className="service-item">
                    Custom AI Bots
                    <span className="arrow-circle">↗</span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img
                src={Images.image3}
                alt="service"
                className="img-fluid service-img"
              />
            </div>
          </div>
        </div>
      </section>
<section className="section"></section>
      <div className="container px-3">
        <h6 className="section-label">Frequentely Asked Questions</h6>
        <h2 className="section-title">Everything you need to stand out</h2>
        <div className="row">
         <div className="accordion" id="accordionExample">

  {/* 1 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
      >
        What Web Development services do you offer?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        We build responsive, SEO-optimized, and scalable websites including
        corporate sites, e-commerce platforms, custom web apps, and enterprise
        solutions using modern technologies like React, Node.js, Laravel, and more.
      </div>
    </div>
  </div>

  {/* 2 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
      >
        Do you develop mobile applications?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Yes. We develop high-performance Android and iOS applications, including
        cross-platform apps using Flutter and React Native. Our apps are optimized
        for speed, security, and scalability.
      </div>
    </div>
  </div>

  {/* 3 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
      >
        What does your UI/UX design process include?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Our UI/UX design process includes research, wireframing, prototyping,
        user journey mapping, and high-fidelity designs that ensure intuitive
        and engaging digital experiences.
      </div>
    </div>
  </div>

  {/* 4 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
      >
        How can Digital Marketing help my business?
      </button>
    </h2>
    <div
      id="collapseFour"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        We provide data-driven digital marketing strategies including SEO,
        social media marketing, paid ads, and content marketing to increase
        visibility, generate leads, and grow your brand online.
      </div>
    </div>
  </div>

  {/* 5 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFive"
      >
        What is AI Integration & Automation?
      </button>
    </h2>
    <div
      id="collapseFive"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        AI Integration allows businesses to automate workflows, improve customer
        experiences, and enhance decision-making. We implement AI-powered tools,
        automation systems, and intelligent data solutions tailored to your needs.
      </div>
    </div>
  </div>

  {/* 6 */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
      >
        Do you build Custom AI Chatbots?
      </button>
    </h2>
    <div
      id="collapseSix"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Yes. We build intelligent AI chatbots tailored to your business needs,
        including customer support bots, sales assistants, and automated helpdesk
        systems integrated with your website or mobile app.
      </div>
    </div>
  </div>

</div>
        </div>
      </div>
    </>
  );
}
