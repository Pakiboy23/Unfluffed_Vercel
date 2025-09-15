import React, { useEffect } from 'react';
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import { useLassoProStore } from '../stores/lassoProStore';
import { type LassoProProduct } from '../services/lassoProApi';

interface LassoProProductsProps {
  kitId: string;
}

export const LassoProProducts: React.FC<LassoProProductsProps> = ({ kitId }) => {
  const { products, isLoading, error, fetchKitProducts } = useLassoProStore();
  
  // Get products for this kit
  const kitProducts = products[kitId] || [];
  
  useEffect(() => {
    // Initialize Lasso Pro API (in a real app, get these from environment variables)
    if (!useLassoProStore.getState().isInitialized) {
      useLassoProStore.getState().initialize({
        apiKey: 'YOUR_LASSO_PRO_API_KEY',
        siteId: 'YOUR_LASSO_PRO_SITE_ID'
      });
    }
    
    // Fetch products for this kit
    fetchKitProducts(kitId);
  }, [kitId, fetchKitProducts]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p>Loading Lasso Pro products...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-8">
        <p className="text-red-300">{error}</p>
      </div>
    );
  }
  
  if (kitProducts.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No Lasso Pro products found for this kit.</p>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold font-montserrat uppercase mb-8">
        <span className="text-neon">Lasso Pro</span> Products
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kitProducts.map((product: LassoProProduct) => (
          <div key={product.id} className="bg-[#121212] rounded-lg overflow-hidden border border-[#1A1A1A] shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="h-48 w-full bg-[#1A1A1A] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              {/* Price and Rating */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-neon font-bold text-lg">{product.price}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm text-gray-300">{product.rating} ({product.reviewCount})</span>
                </div>
              </div>
              
              {/* Buy Button - Using Lasso Pro tracking link */}
              <a 
                href={product.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full"
              >
                <Button className="w-full flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy with Lasso Pro
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
