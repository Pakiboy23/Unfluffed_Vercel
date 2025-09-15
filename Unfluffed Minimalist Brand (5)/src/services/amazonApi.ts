interface AmazonApiConfig {
  associateTag: string;
  accessKey: string;
  secretKey: string;
}

interface AmazonProduct {
  asin: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviewCount: number;
  link: string;
}

interface KitProductsResponse {
  products: AmazonProduct[];
  error?: string;
}

class AmazonApiService {
  private config: AmazonApiConfig | null = null;

  /**
   * Initialize Amazon API configuration
   */
  initialize(config: AmazonApiConfig): void {
    this.config = config;
    console.log('Amazon API service initialized');
  }

  /**
   * Check if the service is properly configured
   */
  isConfigured(): boolean {
    return this.config !== null;
  }

  /**
   * Fetch products for a specific kit by its ID
   */
  async getKitProducts(kitId: string): Promise<KitProductsResponse> {
    if (!this.isConfigured()) {
      return {
        products: [],
        error: 'Amazon API not configured. Please initialize with valid credentials.'
      };
    }

    try {
      // In a real implementation, this would make an actual API call to Amazon
      // For now, return mock data
      return {
        products: this.getMockProductsForKit(kitId)
      };
    } catch (error) {
      console.error('Error fetching kit products:', error);
      return {
        products: [],
        error: 'Failed to fetch products from Amazon API'
      };
    }
  }

  /**
   * Mock product data for development (would be replaced with actual API calls)
   */
  private getMockProductsForKit(kitId: string): AmazonProduct[] {
    const mockProducts: Record<string, AmazonProduct[]> = {
      'park-day': [
        {
          asin: 'B07CZ1QKQK',
          title: 'Premium Picnic Blanket',
          description: 'Water-resistant, foldable picnic blanket that fits in your bag. Machine washable, because obviously.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/260eed99-02d0-43be-84db-7a9f3a4d23ed.jpg',
          price: '$29.99',
          rating: 4.7,
          reviewCount: 2483,
          link: 'https://www.amazon.com/dp/B07CZ1QKQK'
        },
        {
          asin: 'B082VKX5TM',
          title: 'Insulated Water Bottle',
          description: 'Keeps cold drinks cold for 24 hours, hot drinks hot for 12. The one that doesn\'t leak everywhere.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/91db8417-5e82-4ac6-a59d-dd299f7c5e42.jpg',
          price: '$34.95',
          rating: 4.9,
          reviewCount: 12875,
          link: 'https://www.amazon.com/dp/B082VKX5TM'
        },
        {
          asin: 'B07NQKD5BT',
          title: 'Portable Bluetooth Speaker',
          description: 'Waterproof, sand-proof, and drop-proof. For when you want everyone to know your music taste.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/30079b25-2f1d-41a0-9bd1-6514d2df18ca.jpg',
          price: '$79.99',
          rating: 4.5,
          reviewCount: 8732,
          link: 'https://www.amazon.com/dp/B07NQKD5BT'
        }
      ],
      'desk-setup': [
        {
          asin: 'B08CS51F4D',
          title: 'Ergonomic Desk Chair',
          description: 'Your back will thank you. Adjustable everything, lumbar support that actually works.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/af867d5b-c4fa-4628-8230-7298c03ff435.jpg',
          price: '$189.99',
          rating: 4.6,
          reviewCount: 3421,
          link: 'https://www.amazon.com/dp/B08CS51F4D'
        },
        {
          asin: 'B0B1HR6CKJ',
          title: 'Monitor Light Bar',
          description: 'No more eye strain. Adjustable brightness and color temperature. USB powered.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/f22cea14-7dd9-49fa-bfc1-9ed833834f45.jpg',
          price: '$49.99',
          rating: 4.8,
          reviewCount: 5293,
          link: 'https://www.amazon.com/dp/B0B1HR6CKJ'
        },
        {
          asin: 'B09LQQY8GL',
          title: 'Cable Management Kit',
          description: 'Because cable spaghetti is nobody\'s aesthetic. Sleek, adjustable, and actually usable.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/6c57b691-b551-4f9b-9a5f-0a1493b76bf2.jpg',
          price: '$19.99',
          rating: 4.7,
          reviewCount: 2187,
          link: 'https://www.amazon.com/dp/B09LQQY8GL'
        }
      ],
      'skin-care': [
        {
          asin: 'B01M0PADW7',
          title: 'Dermatologist-Approved Sunscreen',
          description: 'SPF 50, no white cast, doesn\'t feel like glue. The one dermatologists actually use.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/95581292-38d1-47df-8e0f-2d2e23c50392.jpg',
          price: '$21.99',
          rating: 4.8,
          reviewCount: 9832,
          link: 'https://www.amazon.com/dp/B01M0PADW7'
        },
        {
          asin: 'B07GDT961Y',
          title: 'Gentle Facial Cleanser',
          description: 'Removes makeup without stripping your skin. Fragrance-free because your face isn\'t a candle.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/6bff7fda-9604-4d50-ae3f-cd78c8dd94da.jpg',
          price: '$15.99',
          rating: 4.9,
          reviewCount: 7621,
          link: 'https://www.amazon.com/dp/B07GDT961Y'
        },
        {
          asin: 'B00NR1YQHM',
          title: 'Hydrating Moisturizer',
          description: 'Like a drink of water for your face. Non-comedogenic, lightweight, actually absorbs.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/2d9bfb47-a29f-4967-8582-89109ec7b7a3.jpg',
          price: '$24.99',
          rating: 4.7,
          reviewCount: 6129,
          link: 'https://www.amazon.com/dp/B00NR1YQHM'
        }
      ],
      'home-basics': [
        {
          asin: 'B08MVDJ3T2',
          title: 'Adult Trash Can',
          description: 'Stainless steel, foot pedal, soft-close lid. Not the plastic one you\'ve had since college.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/ba3234ca-7fde-420e-9fe1-5fdcb66baa16.jpg',
          price: '$59.99',
          rating: 4.6,
          reviewCount: 4321,
          link: 'https://www.amazon.com/dp/B08MVDJ3T2'
        },
        {
          asin: 'B07Z8PVJLH',
          title: 'Quality Towel Set',
          description: 'Turkish cotton that actually dries you. Gets softer with each wash, not scratchier.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/a5603dea-715b-46e0-940f-46df33591654.jpg',
          price: '$49.99',
          rating: 4.8,
          reviewCount: 3945,
          link: 'https://www.amazon.com/dp/B07Z8PVJLH'
        },
        {
          asin: 'B09BNWHGKL',
          title: 'Rechargeable Hand Vacuum',
          description: 'For when company\'s coming over in 10 minutes. Lightweight, powerful, with attachments that actually work.',
          imageUrl: 'https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/0910667e-9d3f-402e-85f7-1f917f2e2f8b.jpg',
          price: '$79.99',
          rating: 4.7,
          reviewCount: 5218,
          link: 'https://www.amazon.com/dp/B09BNWHGKL'
        }
      ]
    };

    return mockProducts[kitId] || [];
  }
}

export const amazonApiService = new AmazonApiService();
export type { AmazonApiConfig, AmazonProduct, KitProductsResponse };
