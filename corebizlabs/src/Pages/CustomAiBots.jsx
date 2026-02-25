import {Bot } from "lucide-react"
import useDocumentTitle from "../Components/Hooks/useDocumentTitle";
export default function CustomAiBots() {
  useDocumentTitle("Custom AI Bots | CoreBizLabs")
  return (
    <>
      <div className="bg">
        <div className="capsule-border">
          <h1>Custom AI Bots</h1>
        </div>
      </div>
      <div className="our-story-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Custom AI Bots</h2>

            <p className="story-text">
              At CoreBizLabs, we design and develop intelligent, custom AI bots
              tailored to automate business processes and enhance customer
              interactions. Our AI solutions are built to understand user
              intent, deliver accurate responses, and operate seamlessly across
              websites, mobile apps, and messaging platforms.
            </p>

            <p className="story-text">
              From AI-powered customer support chatbots and virtual assistants
              to automated lead generation and workflow automation systems — we
              transform manual tasks into smart, self-learning digital solutions
              that improve efficiency and reduce operational costs.
            </p>

            <p className="story-text">
              Our AI bot development approach combines natural language
              processing (NLP), machine learning, and secure cloud integration
              to deliver scalable, reliable, and future-ready automation tools
              that grow with your business.
            </p>
          </div>

        <div className="col-md-6 text-center">
  <div className="background">
    <Bot size={100} strokeWidth={2.5} />

  </div>
</div>
        </div>
      </div>
    </>
  );
}
