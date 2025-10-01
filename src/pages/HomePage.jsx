import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import LearningVault from "../components/LearningVault";
import ModernLearner from "../components/ModernLearner";        // ← New
import ActuateAdvantage from "../components/ActuateAdvantage";  // ← New
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Podcast from "../components/Podcast";

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <ModernLearner />      {/* ← Replaces Features */}
      <ActuateAdvantage />   {/* ← New separate section */}
      <Courses />
      <LearningVault />
      <Podcast />
      <Testimonials />
      <Clients />
    </div>
  );
}
