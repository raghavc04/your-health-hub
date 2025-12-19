import { Info } from "lucide-react";
import { useState } from "react";

interface SizeSelectorProps {
  selectedSize: number | null;
  onSizeChange: (size: number | null) => void;
  hasSizingKit: boolean;
  onSizingKitChange: (hasSizingKit: boolean) => void;
}

const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const SizeSelector = ({
  selectedSize,
  onSizeChange,
  hasSizingKit,
  onSizingKitChange,
}: SizeSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          <span className="font-semibold">Size.</span>{" "}
          <span className="text-muted-foreground">Sizing kit recommended for best fit.</span>
        </h3>
        <button className="text-muted-foreground hover:text-foreground">
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* Sizing kit option */}
      <button
        onClick={() => onSizingKitChange(true)}
        className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all ${
          hasSizingKit
            ? "border-foreground bg-secondary"
            : "border-border hover:border-muted-foreground bg-card"
        }`}
      >
        <img
          src="https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/sizing-kit-1.png"
          alt="Sizing Kit"
          className="w-20 h-20 object-contain"
        />
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="font-medium">Sizing Kit</span>
            <span className="text-success font-semibold">FREE</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Choose the right size with the ring samples, ensuring a perfect fit for the best data accuracy.
          </p>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>✓ Perfect ring fit—no guesswork</li>
            <li>✓ Yours to keep and share—no returns required</li>
            <li>✓ Eco-friendly materials—better for you and the planet</li>
          </ul>
        </div>
      </button>

      {/* I have a sizing kit */}
      <button
        onClick={() => onSizingKitChange(false)}
        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
          !hasSizingKit
            ? "border-foreground bg-secondary"
            : "border-border hover:border-muted-foreground bg-card"
        }`}
      >
        <span className="font-medium">I have a ring sizing kit</span>
      </button>

      {/* Size grid - only show if user has sizing kit */}
      {!hasSizingKit && (
        <div className="space-y-3 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Dispatched by : <span className="font-semibold text-foreground">Today, Dec 19</span>
            <span className="text-muted-foreground">(after size selection)</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Not a 100% sure? Go for the sizing kit. Nailing the fit the first time helps you and the Earth.
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`size-selector ${selectedSize === size ? "active" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeSelector;
