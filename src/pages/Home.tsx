import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { KitsSection } from "../components/KitsSection";
import { Footer } from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KitsSection />
      <Footer />
    </div>
  );
};

export default Home;
