import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { ChevronLeft, Star, ShoppingCart } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { useAmazonStore } from "../stores/amazonStore";
import { type AmazonProduct } from "../services/amazonApi";
import { LassoProProducts } from "../components/LassoProProducts";

interface KitInfo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  longDescription: string;
}

const kitInfoMap: Record<string, KitInfo> = {
  "park-day": {
    id: "park-day",
    title: "Park Day Kit",
    description: "For girls, gays, and geriatric millennials trying to touch grass. Seriously, go outside.",
    imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/56a80eb7-dc1c-4d75-8d48-2366ac40f998.png",
    longDescription: "Whether you're doom-scrolling in the sunshine or attempting to reconnect with nature after months of indoor hibernation, this kit has everything you need for a successful park day. All products have been tested by real humans who spend too much time online but occasionally remember that vitamin D exists."
  },
  "desk-setup": {
    id: "desk-setup",
    title: "Desk Setup Kit",
    description: "For zoom meetings, rage typing, and doom scrolling. Make your workspace less sad.",
    imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/5aefba76-3720-4050-aac2-e7a29d9ff7b3.png",
    longDescription: "You spend 90% of your waking hours here, so it might as well not suck. This kit includes the essentials for a workspace that won't make your body hate you or your eyes burn after 8 hours. No RGB gaming nonsense unless that's your thing (in which case, we have options)."
  },
  "skin-care": {
    id: "skin-care",
    title: "Skin Care Kit",
    description: "No more TikTok 19-step routines. Just the essentials that dermatologists actually recommend.",
    imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/a80193dc-7086-4e4b-9024-bdcc411b7ab7.png",
    longDescription: "The skin care products that dermatologists recommend when they're not being paid to recommend them. Simple, effective, and backed by actual science instead of marketing buzzwords. Your face deserves better than what that 22-year-old influencer is shilling."
  },
  "home-basics": {
    id: "home-basics",
    title: "Home Basics Kit",
    description: "When you finally got tired of your roommate's trash bin from college. Adulting unlocked.",
    imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/a83a4c88-7251-405f-8a15-d6862af7dd6c.png",
    longDescription: "The essentials for a home that doesn't look like you just graduated. These are the items that nobody thinks to buy until they need them, but that transform your space from 'recent graduate crash pad' to 'functional adult dwelling.' Your parents will be impressed, but more importantly, you'll actually enjoy living there."
  }
};

const KitPage: React.FC = () => {
  const { kitId } = useParams<{ kitId: string }>();
  const { products, isLoading, error, fetchKitProducts } = useAmazonStore();
  
  // Get kit information
  const kitInfo = kitId ? kitInfoMap[kitId] : undefined;
  
  // Get products for this kit
  const kitProducts = kitId && products[kitId] ? products[kitId] : [];
  
  useEffect(() => {
    // Initialize Amazon API (in a real app, you'd get these from environment variables)
    if (kitId) {
      // Mock initialization for demonstration
      if (!useAmazonStore.getState().isInitialized) {
        useAmazonStore.getState().initialize({
          associateTag: 'unfluffed-20',
          accessKey: 'YOUR_ACCESS_KEY',
          secretKey: 'YOUR_SECRET_KEY'
        });
      }
      
      // Fetch products for this kit
      fetchKitProducts(kitId);
    }
  }, [kitId, fetchKitProducts]);
  
  if (!kitInfo) {
    return (
      <div className="min-h-screen bg-dark text-light">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold">Kit Not Found</h1>
          <p className="mt-4">We couldn't find the kit you're looking for.</p>
          <Link to="/" className="mt-8 inline-block">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Kit Header */}
        <div className="bg-[#0A0A0A] py-10 mb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all kits
            </Link>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Kit Image */}
              <div className="h-40 w-40 md:h-48 md:w-48 rounded-lg shadow-lg bg-[#121212] flex items-center justify-center">
                <img
                  src={kitInfo.imageUrl}
                  alt={`${kitInfo.title} Kit`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              
              {/* Kit Details */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold font-montserrat uppercase text-center md:text-left">
                  {kitInfo.title}
                </h1>
                <p className="mt-3 text-xl text-gray-300 text-center md:text-left">
                  {kitInfo.description}
                </p>
                <p className="mt-6 text-gray-400 text-center md:text-left">
                  {kitInfo.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle between Amazon and Lasso Pro */}
          <div className="mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button 
                type="button" 
                className="px-4 py-2 text-sm font-medium bg-[#121212] text-white rounded-l-lg border border-[#1A1A1A] hover:bg-[#1A1A1A] focus:z-10 focus:ring-2 focus:ring-neon"
                onClick={() => document.getElementById('amazon-products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Amazon API (Fallback)
              </button>
              <button 
                type="button" 
                className="px-4 py-2 text-sm font-medium bg-[#121212] text-white rounded-r-lg border border-[#1A1A1A] hover:bg-[#1A1A1A] focus:z-10 focus:ring-2 focus:ring-neon"
                onClick={() => document.getElementById('lasso-products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lasso Pro
              </button>
            </div>
          </div>

          {/* Amazon Products Section */}
          <div id="amazon-products" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8">
              <span className="text-neon">Amazon API</span> Products (Fallback)
            </h2>
            
            {isLoading && (
              <div className="text-center py-10">
                <p>Loading products...</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-8">
                <p className="text-red-300">{error}</p>
              </div>
            )}
            
            {!isLoading && !error && kitProducts.length === 0 && (
              <div className="text-center py-10">
                <p>No products found for this kit.</p>
              </div>
            )}
            
            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitProducts.map((product: AmazonProduct) => (
                <div key={product.asin} className="bg-[#121212] rounded-lg overflow-hidden border border-[#1A1A1A] shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="h-48 w-full bg-[#1A1A1A] overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Price and Rating */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-neon font-bold text-lg">{product.price}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{product.rating} ({product.reviewCount})</span>
                      </div>
                    </div>
                    
                    {/* Buy Button */}
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full"
                    >
                      <Button className="w-full flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy on Amazon
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lasso Pro Products Section */}
          <div id="lasso-products" className="pt-8">
            {kitId && <LassoProProducts kitId={kitId} />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KitPage;
