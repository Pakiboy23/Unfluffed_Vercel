import react from "react";
import { navbar } from "../components/navbar";
import { footer } from "../components/footer";
import { link } from "react-router";
import { chevronleft, users, sparkles, messagesquare, shield } from "lucide-react";

const aboutpage: react.fc = () => {
  return (
    <div className="min-h-screen bg-dark text-light">
      <navbar />
      
      <main className="pt-24 pb-16">
        {/* header section */}
        <div className="bg-[#0a0a0a] py-10 mb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6">
              <chevronleft className="h-4 w-4 mr-1" />
              back to home
            </link>
            
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat uppercase text-center">
              about <span className="text-neon">unfluffed</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
              the no-bs brand for people who just want products that actually work.
            </p>
          </div>
        </div>
        
        {/* mission statement */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-[#121212] rounded-lg p-8 border border-[#1a1a1a] shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-6">
              our <span className="text-neon">mission</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 h-64 bg-[#0a0a0a] rounded-lg flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/u08xh5z2ne/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
                  alt="unfluffed mascot" 
                  className="h-full w-full object-contain p-4"
                />
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  i created unfluffed because i was tired of wading through paid promotions, 
                  sponsored content, and algorithm-gaming posts just to find products that 
                  actually do what they're supposed to do.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  my mission is simple: cut through the bs, find products that actually work, 
                  and present them in a way that respects your intelligence and your time. 
                  like that meeting that should've been an email, i skip the fluff. 
                  no 20-minute videos that could be 20 seconds. no fake enthusiasm. just honest 
                  recommendations from someone who has actually used this stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* our values */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8 text-center">
            our <span className="text-neon">values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1a1a1a] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-4">
                <sparkles className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">no fluff</h3>
              <p className="text-gray-300">
                we don't waste your time with unnecessary words, fancy packaging, or over-hyped claims. 
                we get straight to the point about what works and why.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1a1a1a] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-4">
                <shield className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">real testing</h3>
              <p className="text-gray-300">
                every product we recommend has been tested by actual humans who have used it 
                in real-life situations, not just unboxed it for a sponsored video.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1a1a1a] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-4">
                <messagesquare className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">honest opinions</h3>
              <p className="text-gray-300">
                we don't sugar-coat or exaggerate. if something is just okay, we'll tell you it's 
                just okay. if it's amazing, we'll tell you why without the hyperbole.
              </p>
            </div>
            
            <div className="bg-[#121212] rounded-lg p-6 border border-[#1a1a1a] shadow-lg flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-4">
                <users className="h-8 w-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-2">community first</h3>
              <p className="text-gray-300">
                we build for people who are tired of being marketed to and just want useful recommendations 
                from people they can trust. your feedback shapes what we do.
              </p>
            </div>
          </div>
        </div>
        
        {/* the team */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8 text-center">
            the <span className="text-neon">team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#121212] rounded-lg overflow-hidden border border-[#1a1a1a] shadow-lg">
              <div className="h-64 bg-[#0a0a0a] flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/u08xh5z2ne/web-coder/684fcf5b060d7d85c7237ccd/resource/5e2065d2-b054-4443-bed6-f18725227eab.png" 
                  className="object-contain w-full h-full p-4" 
                  alt="the human behind unfluffed"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-montserrat uppercase mb-1">the human</h3>
                <p className="text-neon mb-2">founder & no-bs curator</p>
                <p className="text-gray-300 text-sm">
                  product enthusiast with a pathological hatred for marketing fluff and a 
                  passion for finding things that actually work. just one person trying to 
                  cut through the noise.
                </p>
              </div>
            </div>
            
            <div className="bg-[#121212] rounded-lg overflow-hidden border border-[#1a1a1a] shadow-lg">
              <div className="h-64 bg-[#0a0a0a] flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/u08xh5z2ne/web-coder/684fcf5b060d7d85c7237ccd/resource/97a161c5-6ff8-4926-bff6-f693530ec41c.png" 
                  className="object-contain w-full h-full p-4" 
                  alt="scruff - the unfluffed mascot"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-montserrat uppercase mb-1">scruff</h3>
                <p className="text-neon mb-2">chief mascot & vibes director</p>
                <p className="text-gray-300 text-sm">
                  the face of the brand who embodies our no-nonsense approach. scruff doesn't speak much, 
                  but when he does, it's straight to the point and without any fluff.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* call to action */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a0a0a] rounded-lg p-8 border border-[#1a1a1a] shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-4">
              join the <span className="text-neon">no-fluff</span> movement
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              help us build a world where product recommendations are honest, useful, and 
              don't waste your time. follow us, share your experiences, and tell us what 
              you want us to test next.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <link to="/contact" className="bg-neon text-black px-6 py-3 rounded-md font-bold hover:bg-neon/90 transition-colors">
                contact us
              </link>
              
              <link to="/#kits" className="bg-[#1a1a1a] text-white px-6 py-3 rounded-md font-bold hover:bg-[#252525] transition-colors">
                explore our kits
              </link>
            </div>
          </div>
        </div>
      </main>
      
      <footer />
    </div>
  );
};

export default aboutpage;