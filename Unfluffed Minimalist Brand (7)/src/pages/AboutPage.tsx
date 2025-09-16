import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router";
import { ChevronLeft, Users, Sparkles, MessageSquare, Shield } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <div className="bg-[#0A0A0A] py-10 mb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat uppercase text-center">
              About <span className="text-neon">UNFLUFFED</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
              The no-BS brand for people who just want products that actually work.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-[#121212] rounded-lg p-8 border border-[#1A1A1A] shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-6">
              Our <span className="text-neon">Mission</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 h-64 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
                  alt="UNFLUFFED Mascot" 
                  className="h-full w-full object-contain p-4"
                />
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  I created UNFLUFFED because I was tired of wading through paid promotions, 
                  sponsored content, and algorithm-gaming posts just to find products that 
                  actually do what they're supposed to do.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My mission is simple: cut through the BS, find products that actually work, 
                  and present them in a way that respects your intelligence and your time. 
                  Like that meeting that should've been an email, I skip the fluff. 
                  No 20-minute videos that could be 20 seconds. No fake enthusiasm. Just honest 
                  recommendations from someone who has actually used this stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8 text-center">
            Our <span className="text-neon">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">No Fluff</h3>
              <p className="text-gray-300">
                We don't waste your time with unnecessary words, fancy packaging, or over-hyped claims. 
                We get straight to the point about what works and why.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">Real Testing</h3>
              <p className="text-gray-300">
                Every product we recommend has been tested by actual humans who have used it 
                in real-life situations, not just unboxed it for a sponsored video.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">Honest Opinions</h3>
              <p className="text-gray-300">
                We don't sugar-coat or exaggerate. If something is just okay, we'll tell you it's 
                just okay. If it's amazing, we'll tell you why without the hyperbole.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">Community First</h3>
              <p className="text-gray-300">
                We build for people who are tired of being marketed to and just want useful recommendations 
                from people they can trust. Your feedback shapes what we do.
              </p>
            </div>
          </div>
        </div>
        
        {/* The Team */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8 text-center">
            The <span className="text-neon">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#121212] rounded-lg overflow-hidden border border-[#1A1A1A] shadow-lg">
              <div className="h-64 bg-[#0A0A0A] flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/5e2065d2-b054-4443-bed6-f18725227eab.png" 
                  className="object-contain w-full h-full p-4" 
                  alt="The Human Behind UNFLUFFED"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-montserrat uppercase mb-1">The Human</h3>
                <p className="text-neon mb-2">Founder & No-BS Curator</p>
                <p className="text-gray-300 text-sm">
                  Product enthusiast with a pathological hatred for marketing fluff and a 
                  passion for finding things that actually work. Just one person trying to 
                  cut through the noise.
                </p>
              </div>
            </div>
            
            <div className="bg-[#121212] rounded-lg overflow-hidden border border-[#1A1A1A] shadow-lg">
              <div className="h-64 bg-[#0A0A0A] flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
                  className="object-contain w-full h-full p-4" 
                  alt="Scruff - The UNFLUFFED Mascot"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-montserrat uppercase mb-1">Scruff</h3>
                <p className="text-neon mb-2">Chief Mascot & Vibes Director</p>
                <p className="text-gray-300 text-sm">
                  The face of the brand who embodies our no-nonsense approach. Scruff doesn't speak much, 
                  but when he does, it's straight to the point and without any fluff.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-lg p-8 border border-[#1A1A1A] shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-4">
              Join The <span className="text-neon">No-Fluff</span> Movement
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Help us build a world where product recommendations are honest, useful, and 
              don't waste your time. Follow us, share your experiences, and tell us what 
              you want us to test next.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-neon text-black px-6 py-3 rounded-md font-bold hover:bg-neon/90 transition-colors">
                Contact Us
              </Link>
              
              <Link to="/#kits" className="bg-[#1A1A1A] text-white px-6 py-3 rounded-md font-bold hover:bg-[#252525] transition-colors">
                Explore Our Kits
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
