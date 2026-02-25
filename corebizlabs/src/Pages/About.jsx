import React from "react";
import Images from "../assets/Images/Image";
import "./About.css";
import useDocumentTitle from "../Components/Hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About | CoreBizLabs");
  return (
    <>
      <div className="bg">
        <div className="capsule-border">
          <h1>About US</h1>
        </div>
      </div>

      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              CoreBizLabs is a forward-thinking Digital Agency & Software House
              driven by creativity, innovation, and technology. We specialize in
              building digital products that empower brands and transform
              businesses in the modern era.
            </p>
            <p className="story-text">
              From scalable web apps and high-performance mobile solutions to
              branding, UI/UX, and digital strategy — we help businesses grow,
              connect, and succeed in the digital world.
            </p>
            <p className="story-text">
              Our team combines design excellence with cutting-edge engineering
              to deliver solutions that are not only functional, but memorable,
              modern, and impactful.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="background">
              <h1 className="big-heading"> 5+</h1>
              <p> Years of Experiece</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container values-section">
        <h2 className="section-title text-center">Our Values</h2>

        <div className="row text-center mt-4">
          {[
            {
              img: Images.trust,
              title: "Trust",
              desc: "Building digital connections rooted in trust and reliability.",
            },
            {
              img: Images.passion,
              title: "Passion",
              desc: "Empowering innovation through our unwavering passion for technology.",
            },
            {
              img: Images.creativity,
              title: "Creativity",
              desc: "Unleashing boundless creativity to shape the future of tech solutions.",
            },
            {
              img: Images.customersuccess,
              title: "Customer Success",
              desc: "Driving your success through personalized experiences and unwavering support.",
            },
            {
              img: Images.sustainability,
              title: "Sustainability",
              desc: "Pioneering eco-friendly practices for a greener, sustainable future.",
            },
            {
              img: Images.giving,
              title: "Give Back",
              desc: "Making a positive impact by giving back to communities through our tech-driven initiatives.",
            },
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 value-card">
              <div className="value-box">
                <img src={item.img} alt={item.title} className="icons" />
                <h6 className="value-title">{item.title}</h6>
                <p className="value-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
