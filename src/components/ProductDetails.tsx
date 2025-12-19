import { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ChargerSelector from "./ChargerSelector";
import EngravingSelector from "./EngravingSelector";
import PowerPlugs from "./PowerPlugs";
import CoverageSelector from "./CoverageSelector";
import OrderSummary from "./OrderSummary";
import { Info } from "lucide-react";

interface ProductDetailsProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ProductDetails = ({ selectedColor, onColorChange }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [hasSizingKit, setHasSizingKit] = useState(true);
  const [selectedCharger, setSelectedCharger] = useState<"voyager" | "standard">("standard");
  const [hasEngraving, setHasEngraving] = useState(false);
  const [selectedPlugs, setSelectedPlugs] = useState<Record<string, string | null>>({
    "cycle-ovulation": null,
    "cardio": null,
  });
  const [selectedCoverage, setSelectedCoverage] = useState<"1-year" | "2-year" | null>(null);

  const handlePlugChange = (plugId: string, plan: string | null) => {
    setSelectedPlugs((prev) => ({ ...prev, [plugId]: plan }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left column - Product options */}
      <div className="flex-1 space-y-8">
        {/* Product title and price */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl font-bold">Ring AIR</h2>
            <span className="flex items-center gap-1 px-2 py-1 bg-secondary rounded text-sm">
              🇮🇳 IN
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl text-muted-foreground line-through">₹28,499</span>
            <span className="text-3xl font-bold">₹19,949.3</span>
          </div>

          <p className="text-success font-semibold uppercase tracking-wide text-sm">
            Christmas Offer Applied
          </p>

          <p className="text-sm text-muted-foreground">
            Dispatched by : <span className="font-semibold text-foreground">Today, Dec 19</span>
            <span>(after size selection)</span>
          </p>

          <button className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-full text-sm hover:bg-muted transition-colors">
            <span>Special pricing for the Heroes Of The World</span>
            <Info className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-border" />

        <ColorSelector selectedColor={selectedColor} onColorChange={onColorChange} />

        <div className="border-t border-border" />

        <SizeSelector
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          hasSizingKit={hasSizingKit}
          onSizingKitChange={setHasSizingKit}
        />

        <div className="border-t border-border" />

        <ChargerSelector
          selectedCharger={selectedCharger}
          onChargerChange={setSelectedCharger}
        />

        <div className="border-t border-border" />

        <EngravingSelector
          hasEngraving={hasEngraving}
          onEngravingChange={setHasEngraving}
        />

        <div className="border-t border-border" />

        <PowerPlugs
          selectedPlugs={selectedPlugs}
          onPlugChange={handlePlugChange}
        />

        <div className="border-t border-border" />

        <CoverageSelector
          selectedCoverage={selectedCoverage}
          onCoverageChange={setSelectedCoverage}
        />
      </div>

      {/* Right column - Order Summary */}
      <div className="lg:w-96">
        <OrderSummary color={selectedColor} hasSizingKit={hasSizingKit} />
      </div>
    </div>
  );
};

export default ProductDetails;
