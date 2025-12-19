import { Info } from "lucide-react";
import { useState } from "react";

interface ChargerSelectorProps {
  selectedCharger: "voyager" | "standard";
  onChargerChange: (charger: "voyager" | "standard") => void;
}

const ChargerSelector = ({ selectedCharger, onChargerChange }: ChargerSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          <span className="font-semibold">Charger.</span>{" "}
          <span className="text-muted-foreground">Power up and never miss a beat.</span>
        </h3>
        <button className="text-muted-foreground hover:text-foreground">
          <Info className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {/* Voyager charger */}
        <button
          onClick={() => onChargerChange("voyager")}
          className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all ${
            selectedCharger === "voyager"
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <img
            src="https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/illustrations/voyager_charger_thumb.png/w_800"
            alt="Voyager Charger"
            className="w-20 h-20 object-contain"
          />
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-success text-success-foreground px-2 py-0.5 rounded-full">
                NEW
              </span>
            </div>
            <p className="font-medium mt-1">Get the Voyager Ring Charger at ₹3,799</p>
            <p className="text-sm text-muted-foreground mt-1">
              A compact, powerful, and lightweight charger, engineered for the adventurer in you.
            </p>
          </div>
        </button>

        {/* Standard charger */}
        <button
          onClick={() => onChargerChange("standard")}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
            selectedCharger === "standard"
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <span className="font-medium">Free standard charger</span>
        </button>
      </div>
    </div>
  );
};

export default ChargerSelector;
