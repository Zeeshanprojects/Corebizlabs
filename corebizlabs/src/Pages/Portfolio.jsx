import React from "react";
import "./Portfolio.css"
import Images from "../assets/Images/Image";

export default function Portfolio() {
  return (
    <>
      <div className="bg">
        <div className="capsule-border">
          <h1>Portfolio</h1>
        </div>
      </div>
       <div className="container portfolio-section">
        <div className="row g-4">
          {[Images.portfolio1, Images.portfolio2, Images.portfolio3, Images.portfolio4, Images.portfolio5, Images.portfolio6].map((img, index) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
              <div className="portfolio-card">
                <img src={img} alt={`portfolio-${index}`} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Project Title {index + 1}</h3>
                  <p>Creative Design & Development</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
