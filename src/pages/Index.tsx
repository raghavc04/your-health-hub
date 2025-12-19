import { useState } from "react";
import Header from "@/components/Header";
import OffersBanner from "@/components/OffersBanner";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("bionic-gold");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main content with offset for fixed header */}
      <main className="pt-[140px]">
        <OffersBanner />

        {/* Product section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left - Gallery */}
          <div className="lg:w-1/2 lg:sticky lg:top-[140px] lg:h-[calc(100vh-140px)]">
            <ProductGallery selectedColor={selectedColor} />
          </div>

          {/* Right - Details */}
          <div className="lg:w-1/2 p-6 lg:p-10">
            <ProductDetails
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
