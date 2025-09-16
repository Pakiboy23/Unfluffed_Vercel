import React from "react";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/aboutSection";
import { KitsSection } from "../components/kitsSection";
import { Footer } from "../components/footer";

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
