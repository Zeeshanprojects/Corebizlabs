import Images from "../assets/Images/Image"

export default function AppDevelopment() {
  return (
    <>
    <div className="bg">
        <div className="capsule-border">
          <h1>Application Development</h1>
        </div>
      </div>
       <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Application Development</h2>

<p className="story-text">
  At CoreBizLabs, we design and develop powerful, scalable, and user-friendly 
  applications tailored to meet modern business demands. Our application 
  development services focus on performance, security, and seamless user 
  experiences across platforms.
</p>

<p className="story-text">
  From enterprise-grade software solutions to custom business applications 
  and cross-platform mobile apps — we transform complex ideas into intelligent 
  digital systems that streamline operations and enhance productivity.
</p>

<p className="story-text">
  Our development approach combines robust architecture, clean coding 
  standards, and future-ready technologies to deliver applications that are 
  reliable, efficient, and built for long-term growth.
</p>
          </div>

          <div className="col-md-6 text-center">
            <img src={Images.image4} alt="about" className="about-img" />
          </div>
        </div>
      </div>
  </>
  )
}
