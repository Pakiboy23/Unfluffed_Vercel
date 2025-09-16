import React from "react";
import { Link } from "react-router";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface Kit {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const KitsSection: React.FC = () => {
  const kits: Kit[] = [
    {
      id: "park-day",
      title: "Park Day Kit",
      description: "For girls, gays, and geriatric millennials trying to touch grass. Seriously, go outside.",
      imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/56a80eb7-dc1c-4d75-8d48-2366ac40f998.png",
      linkUrl: "https://www.amazon.com/shop/yourstorename/idealisthere?tag=youramazonid-20"
    },
    {
      id: "desk-setup",
      title: "Desk Setup Kit",
      description: "For zoom meetings, rage typing, and doom scrolling. Make your workspace less sad.",
      imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/5aefba76-3720-4050-aac2-e7a29d9ff7b3.png",
      linkUrl: "https://www.amazon.com/shop/yourstorename/idealisthere?tag=youramazonid-20"
    },
    {
      id: "skin-care",
      title: "Skin Care Kit",
      description: "No more TikTok 19-step routines. Just the essentials that dermatologists actually recommend.",
      imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/a80193dc-7086-4e4b-9024-bdcc411b7ab7.png",
      linkUrl: "https://www.amazon.com/shop/yourstorename/idealisthere?tag=youramazonid-20"
    },
    {
      id: "home-basics",
      title: "Home Basics Kit",
      description: "When you finally got tired of your roommate's trash bin from college. Adulting unlocked.",
      imageUrl: "https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/a83a4c88-7251-405f-8a15-d6862af7dd6c.png",
      linkUrl: "https://www.amazon.com/shop/yourstorename/idealisthere?tag=youramazonid-20"
    }
  ];

  return (
    <section id="kits" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat uppercase">
            Curated Kits. <span className="text-neon">Zero Fluff.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Less scroll, more go. These are the essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {kits.map((kit) => (
            <Card key={kit.id} hover className="p-6 md:p-8 flex flex-col items-center text-center h-full">
              {/* Kit Mascot Image */}
              <div className="h-24 w-24 md:h-32 md:w-32 mb-6 rounded-lg shadow-lg bg-[#121212] flex items-center justify-center">
                <img
                  src={kit.imageUrl}
                  alt={`Scruff Mascot - ${kit.title}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-montserrat uppercase">{kit.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {kit.description}
              </p>
              
              {/* Link to Kit Detail Page */}
              <Link
                to={`/kit/${kit.id}`}
                className="mt-auto"
              >
                <Button>View {kit.title}</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
