import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#060606]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat uppercase">
          So, What Is <span className="text-neon">UNFLUFFED</span>?
        </h2>
        
        {/* Scruff Thinking Mascot */}
        <div className="mx-auto mb-6 h-28 w-28 md:h-36 md:w-36 rounded-lg bg-[#060606] flex items-center justify-center">
          <img 
            src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/5b52928c-a3e7-46c2-b932-2bd9836d3c13.png" 
            alt="Scruff Mascot - Thinking Pose" 
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
          A digital brand for people who <strong className="text-neon">hate influencer fluff</strong> and just want products that work.
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          No-filter product picks with zero BS. Clean visuals, honest reviews, and recommendations you can actually trust.
        </p>
      </div>
    </section>
  );
};
