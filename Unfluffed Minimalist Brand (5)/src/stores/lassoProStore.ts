import { create } from 'zustand';
import { lassoProService, type LassoProConfig, type LassoProProduct } from '../services/lassoProApi';

interface LassoProState {
  isInitialized: boolean;
  isLoading: boolean;
  error: string | null;
  products: Record<string, LassoProProduct[]>;
  initialize: (config: LassoProConfig) => void;
  fetchKitProducts: (kitId: string) => Promise<void>;
}

export const useLassoProStore = create<LassoProState>((set, get) => ({
  isInitialized: false,
  isLoading: false,
  error: null,
  products: {},
  
  initialize: (config: LassoProConfig) => {
    lassoProService.initialize(config);
    set({ isInitialized: true });
  },
  
  fetchKitProducts: async (kitId: string) => {
    const { isInitialized, products } = get();
    
    // Return cached products if available
    if (products[kitId] && products[kitId].length > 0) {
      return;
    }
    
    // Check if API is initialized
    if (!isInitialized) {
      set({ error: 'Lasso Pro API not initialized. Please configure API credentials first.' });
      return;
    }
    
    try {
      set({ isLoading: true, error: null });
      const response = await lassoProService.getKitProducts(kitId);
      
      if (response.error) {
        set({ error: response.error, isLoading: false });
        return;
      }
      
      // Update products for this kit
      set((state) => ({
        products: {
          ...state.products,
          [kitId]: response.products
        },
        isLoading: false
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An unknown error occurred', 
        isLoading: false 
      });
    }
  }
}));
