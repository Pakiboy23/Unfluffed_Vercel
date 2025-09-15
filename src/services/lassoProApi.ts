interface LassoProConfig {
  apiKey: string;
  siteId: string;
}

export interface LassoProProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviewCount: number;
  affiliateUrl: string;
  category: string;
}

interface LassoProResponse {
  products: LassoProProduct[];
  error?: string;
}

class LassoProService {
  private config: LassoProConfig | null = null;
  private isInitialized = false;

  /**
   * Initialize Lasso Pro API configuration
   */
  initialize(config: LassoProConfig): void {
    this.config = config;
    this.isInitialized = true;
    console.log('Lasso Pro service initialized');
  }

  /**
   * Check if the service is properly configured
   */
  isConfigured(): boolean {
    return this.isInitialized && this.config !== null;
  }

  /**
   * Fetch products for a specific kit by its ID
   */
  async getKitProducts(kitId: string): Promise<LassoProResponse> {
    if (!this.isConfigured()) {
      return {
        products: [],
        error: 'Lasso Pro API not configured. Please initialize with valid credentials.'
      };
    }

    try {
      // This is where you would make an actual API call to Lasso Pro
      // For development purposes, we'll use the mock data
      return {
        products: this.getMockProductsForKit(kitId)
      };
    } catch (error) {
      console.error('Error fetching kit products from Lasso Pro:', error);
      return {
        products: [],
        error: 'Failed to fetch products from Lasso Pro API'
      };
    }
  }

  /**
   * In a real implementation, this would be replaced with actual API calls
   */
  private getMockProductsForKit(kitId: string): LassoProProduct[] {
    // For demo purposes, return the same mock data structure
    // In reality, this would make API calls to Lasso Pro
    const mockProducts: Record<string, LassoProProduct[]> = {
      'park-day': [
        {
          id: 'lasso-1',
          name: 'Premium Picnic Blanket',
          description: 'Water-resistant, foldable picnic blanket that fits in your bag. Machine washable, because obviously.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/260eed99-02d0-43be-84db-7a9f3a4d23ed.jpg',
          price: '$29.99',
          rating: 4.7,
          reviewCount: 2483,
          affiliateUrl: 'https://www.amazon.com/dp/B07CZ1QKQK',
          category: 'outdoor'
        },
        {
          id: 'lasso-2',
          name: 'Insulated Water Bottle',
          description: 'Keeps cold drinks cold for 24 hours, hot drinks hot for 12. The one that doesn\'t leak everywhere.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/91db8417-5e82-4ac6-a59d-dd299f7c5e42.jpg',
          price: '$34.95',
          rating: 4.9,
          reviewCount: 12875,
          affiliateUrl: 'https://www.amazon.com/dp/B082VKX5TM',
          category: 'outdoor'
        }
      ],
      'desk-setup': [
        {
          id: 'lasso-3',
          name: 'Ergonomic Desk Chair',
          description: 'Your back will thank you. Adjustable everything, lumbar support that actually works.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/af867d5b-c4fa-4628-8230-7298c03ff435.jpg',
          price: '$189.99',
          rating: 4.6,
          reviewCount: 3421,
          affiliateUrl: 'https://www.amazon.com/dp/B08CS51F4D',
          category: 'office'
        }
      ]
    };

    return mockProducts[kitId] || [];
  }
}

export const lassoProService = new LassoProService();
export type { LassoProConfig, LassoProResponse };
