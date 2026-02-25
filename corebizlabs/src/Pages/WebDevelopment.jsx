import {Code} from "lucide-react"
import useDocumentTitle from "../Components/Hooks/useDocumentTitle";
export default function WebDevelopment() {
  useDocumentTitle("Web Development | CoreBizLabs")
  return (
    <>
      <div className="bg">
        <div className="capsule-border">
          <h1>Web Development</h1>
        </div>
      </div>
      {/* ✅ Our Story Section */}
      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Website Development</h2>

            <p className="story-text">
              At CoreBizLabs, we craft modern, responsive, and high-performing
              websites that help businesses establish a strong digital presence.
              Our web development solutions are built with scalability,
              security, and user experience at the core.
            </p>

            <p className="story-text">
              From corporate websites and landing pages to custom web
              applications and e-commerce platforms — we transform ideas into
              powerful digital products using the latest technologies and
              industry best practices.
            </p>

            <p className="story-text">
              Our team focuses on clean architecture, optimized performance, and
              seamless functionality to ensure your website not only looks great
              but delivers real business results.
            </p>
          </div>

<div className="col-md-6 text-center">
  <div className="background">
    <Code size={100} strokeWidth={2.5} />

  </div>
</div>
        </div>
      </div>
    </>
  );
}
