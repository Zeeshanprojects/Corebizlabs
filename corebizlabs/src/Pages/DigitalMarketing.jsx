import {Megaphone  } from "lucide-react"
import useDocumentTitle from "../Components/Hooks/useDocumentTitle";

export default function DigitalMarketing() {
  useDocumentTitle("Digital Marketing | CoreBizLabs")
  return (
    <>
      {/* Hero Section */}
      <div className="bg">
        <div className="capsule-border">
          <h1>Digital Marketing</h1>
        </div>
      </div>

      {/* Digital Marketing Content */}
      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Grow Your Brand Digitally</h2>

            <p className="story-text">
              At CoreBizLabs, we deliver data-driven digital marketing
              strategies that help businesses increase visibility, generate
              leads, and boost conversions. Our approach combines creativity
              with performance analytics to achieve measurable growth.
            </p>

            <p className="story-text">
              From search engine optimization (SEO) and social media marketing
              to paid advertising campaigns and content marketing — we create
              impactful digital strategies tailored to your brand.
            </p>

            <p className="story-text">
              Our team focuses on audience targeting, brand positioning, and
              ROI-driven campaigns to ensure your business stands out in the
              competitive digital landscape.
            </p>
          </div>

      <div className="col-md-6 text-center">
  <div className="background">
    <Megaphone  size={80} strokeWidth={2.5} />
    
  </div>
</div>
        </div>
      </div>
    </>
  );
}