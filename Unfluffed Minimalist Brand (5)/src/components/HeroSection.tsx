import React from "react";
import { Button } from "./ui/button";

export const HeroSection: React.FC = () => {
  return (
    <header className="min-h-screen pt-20 flex flex-col relative">
      {/* Full-width Hero Banner */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        {/* Circuit board background pattern */}
        <div className="absolute inset-0 bg-[#0D0D0D] z-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(#39FF14 1px, transparent 1px), 
              linear-gradient(to right, #1A1A1A 1px, transparent 1px),
              linear-gradient(to bottom, #1A1A1A 1px, transparent 1px),
              radial-gradient(#333333 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px, 20px 20px, 20px 20px, 15px 15px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
            opacity: '0.5'
          }}></div>
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(45deg, transparent 40%, rgba(57, 255, 20, 0.4) 45%, transparent 50%),
              linear-gradient(135deg, transparent 40%, rgba(57, 255, 20, 0.2) 45%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px',
            opacity: '0.6'
          }}></div>
        </div>
        
        {/* Gradient overlay on top of circuit board pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D] z-5"></div>
        
        {/* Mascot image (now hidden as we're using a logo in the circle below) */}
        <div className="hidden">
          <img 
            src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
            alt="Scruff Mascot - Hero Banner" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-neon bg-dark/50 flex items-center justify-center z-20">
            <img 
              src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
              alt="Scruff Mascot - Confident Pose" 
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-montserrat uppercase">
            <span className="block">NO INFLUENCER SH*T.</span>
            <span className="block mt-2 md:mt-4">NO HYPE.</span>
            <span className="block mt-2 md:mt-4 text-neon">JUST STUFF THAT ACTUALLY WORKS.</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Curated gear for people with taste and a low tolerance for nonsense.
          </p>
          
          <div className="mt-12">
            <Button size="lg" onClick={() => {
              document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Shop The Kits. Skip The Guesswork.
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
