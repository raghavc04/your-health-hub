import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  selectedColor: string;
}

const ringImages: Record<string, string[]> = {
  "bionic-gold": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/bionic-gold/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/bionic-gold/2-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/bionic-gold/3-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/bionic-gold/4-1.png",
  ],
  "raw-titanium": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/raw-titanium/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/raw-titanium/2-1.png",
  ],
  "aster-black": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/aster-black/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/aster-black/2-1.png",
  ],
  "matte-grey": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/matte-grey/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/matte-grey/2-1.png",
  ],
  "space-silver": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/space-silver/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/space-silver/2-1.png",
  ],
  "rose-gold": [
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/rose-gold/1-1.png",
    "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders-2/rose-gold/2-1.png",
  ],
};

const ProductGallery = ({ selectedColor }: ProductGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ringImages[selectedColor] || ringImages["bionic-gold"];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Main image */}
      <div className="relative flex-1 flex items-center justify-center bg-gradient-dark min-h-[400px] lg:min-h-[600px]">
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 p-2 bg-secondary/80 hover:bg-secondary rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex]}
          alt="Ultrahuman Ring AIR"
          className="max-w-full max-h-full object-contain transition-opacity duration-500 animate-fade-in"
          key={`${selectedColor}-${currentIndex}`}
        />

        <button
          onClick={goToNext}
          className="absolute right-4 z-10 p-2 bg-secondary/80 hover:bg-secondary rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Rating badge */}
        <div className="absolute bottom-4 left-4 bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
          ⭐ 4.5/5
        </div>

        {/* View real images link */}
        <button className="absolute bottom-4 right-4 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
          View real life images
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center justify-center gap-2 py-4 bg-card">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-foreground w-6"
                : "bg-muted-foreground/40 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
