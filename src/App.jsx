import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import WhyActuatePage from "./pages/WhyActuatePage";
import LegacyEffectPage from "./pages/LegacyEffectPage";
import CourseCataloguePage from "./pages/CourseCataloguePage";
import IndianAudiencePage from "./pages/IndianAudiencePage";
import ROIPage from "./pages/ROIPage";
import ActuateAbout from "./pages/ActuateAbout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/app" 
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          } 
        />
        <Route 
          path="/why-actuate" 
          element={
            <PageTransition>
              <WhyActuatePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/legacy-effect" 
          element={
            <PageTransition>
              <LegacyEffectPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/course-catalogue" 
          element={
            <PageTransition>
              <CourseCataloguePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/indian-audience" 
          element={
            <PageTransition>
              <IndianAudiencePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/roi" 
          element={
            <PageTransition>
              <ROIPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/actuate-about" 
          element={
            <PageTransition>
              <ActuateAbout />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
