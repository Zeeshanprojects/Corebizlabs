import { useState, useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
// ✅ Home stays normal (no code splitting)
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import WebDevelopment from "./Pages/WebDevelopment"
import AppDevelopment from "./Pages/AppDevelopment"
import DigitalMarketing from "./Pages/DigitalMarketing"
import UiuxDesign from "./Pages/uiuxDesign"
import AiIntegration from "./Pages/AiIntegration"
import CustomAiBots from "./Pages/CustomAiBots"
 
function App() {
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
    AOS.refresh(); // 🔥 refresh after loading
  }, 2000);

  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    offset: 120,
    easing: "ease-in-out",
  });

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/appdevelopment" element={<AppDevelopment />} />
            <Route path="/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/uiuxdesign" element={<UiuxDesign />} />
            <Route path="/aiintegration" element={<AiIntegration />} />
            <Route path="/customaibots" element={<CustomAiBots />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
