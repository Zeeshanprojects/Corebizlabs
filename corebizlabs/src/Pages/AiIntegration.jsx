import Images from "../assets/Images/Image";
import useDocumentTitle from "../Components/Hooks/useDocumentTitle";

export default function AIIntegrations() {
  useDocumentTitle("AI Integration & Automation | CoreBizLabs ")
  return (
    <>
      {/* Hero Section */}
      <div className="bg">
        <div className="capsule-border">
          <h1>AI Integrations</h1>
        </div>
      </div>

      {/* AI Integrations Content */}
      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Smart Solutions Powered by Artificial Intelligence</h2>

            <p className="story-text">
              At CoreBizLabs, we integrate advanced Artificial Intelligence 
              solutions into digital platforms to automate processes, enhance 
              decision-making, and improve user experiences. Our AI-driven 
              systems help businesses operate smarter and more efficiently.
            </p>

            <p className="story-text">
              From intelligent chatbots and recommendation engines to data 
              analytics and automation tools — we leverage modern AI 
              technologies to transform traditional workflows into 
              intelligent ecosystems.
            </p>

            <p className="story-text">
              Our team ensures seamless AI integration with your existing 
              systems, focusing on scalability, security, and real-world 
              business impact to give you a competitive advantage.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={Images.image4}
              alt="AI Integrations"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}