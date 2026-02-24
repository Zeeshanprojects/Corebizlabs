import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

// ✅ Home stays normal (no code splitting)
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";

// ✅ Lazy loaded pages
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const WebDevelopment = lazy(() => import("./Pages/WebDevelopment"));
const AppDevelopment = lazy(() => import("./Pages/AppDevelopment"));
const DigitalMarketing = lazy(() => import("./Pages/DigitalMarketing"));
const UiuxDesign = lazy(() => import("./Pages/uiuxDesign"));
const AiIntegration = lazy(() => import("./Pages/AiIntegration"));
const CustomAiBots = lazy(() => import("./Pages/CustomAiBots"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
        <ScrollToTop/>
          <Header />

          {/* Suspense handles lazy loading */}
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/webdevelopment" element={<WebDevelopment />} />
              <Route path="/appdevelopment" element={<AppDevelopment />} />
              <Route path="/digitalmarketing" element={<DigitalMarketing />} />
              <Route path="/uiuxdesign" element={<UiuxDesign />} />
              <Route path="/aiintegration" element={<AiIntegration />} />
              <Route path="/customaibots" element={<CustomAiBots />} />
            </Routes>
          </Suspense>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;