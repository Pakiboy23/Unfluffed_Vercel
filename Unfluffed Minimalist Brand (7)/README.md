
# UNFLUFFED - No BS Product Recommendations

A modern React application for curated product recommendations with zero fluff.

## Features

- 🚀 **Fast & Modern**: Built with React 18, TypeScript, and Tailwind CSS
- 🎨 **Beautiful Design**: Dark theme with neon accents and smooth animations
- 📱 **Responsive**: Works perfectly on all devices
- 🛒 **Product Kits**: Curated collections of tested products
- 🔗 **Multiple APIs**: Integrates with Amazon API and Lasso Pro
- 🚀 **Vercel Ready**: Optimized for deployment on Vercel

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router
- **State Management**: Zustand
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/unfluffed.git
cd unfluffed
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This will create a production build in the `dist` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically on every push

#### Environment Variables

Add these environment variables in Vercel for production:

```bash
# Amazon API (Optional)
ASSOCIATE_TAG=your_amazon_associate_tag
ACCESS_KEY=your_amazon_access_key
SECRET_KEY=your_amazon_secret_key

# Lasso Pro API (Optional)
LASSO_PRO_API_KEY=your_lasso_pro_api_key
LASSO_PRO_SITE_ID=your_lasso_pro_site_id
```

### Other Platforms

The application is compatible with any static hosting platform that supports React applications.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Page components
├── services/           # API services
├── stores/             # Zustand stores
└── lib/                # Utility functions
```

## API Integration

### Amazon API
The app includes integration with Amazon Product Advertising API for product data.

### Lasso Pro
Alternative API integration for affiliate product data.

## Customization

### Branding
- Update the logo and brand colors in the components
- Modify the typography in `tailwind.config.js`
- Customize the color scheme in `shadcn.css`

### Content
- Edit product descriptions and kit information in the respective files
- Update the mascot images and branding assets
- Modify the copy to match your brand voice

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Open a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
