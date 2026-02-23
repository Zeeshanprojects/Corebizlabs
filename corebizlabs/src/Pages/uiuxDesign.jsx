import Images from "../assets/Images/Image";

export default function UIUXDesign() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg">
        <div className="capsule-border">
          <h1>UI/UX Design</h1>
        </div>
      </div>

      {/* UI/UX Design Content */}
      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Designing Meaningful Digital Experiences</h2>

            <p className="story-text">
              At CoreBizLabs, we create intuitive and visually engaging user 
              interfaces that enhance user satisfaction and drive engagement. 
              Our UI/UX design process focuses on understanding user behavior, 
              business goals, and brand identity.
            </p>

            <p className="story-text">
              From wireframing and prototyping to complete product design 
              systems — we craft seamless digital experiences that are both 
              functional and aesthetically appealing across web and mobile platforms.
            </p>

            <p className="story-text">
              Our team combines research, creativity, and usability principles 
              to ensure every interaction is smooth, meaningful, and aligned 
              with your business objectives.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={Images.image4}
              alt="UI UX Design"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}