import { Info, Check } from "lucide-react";

interface CoverageSelectorProps {
  selectedCoverage: "1-year" | "2-year" | null;
  onCoverageChange: (coverage: "1-year" | "2-year" | null) => void;
}

const CoverageSelector = ({ selectedCoverage, onCoverageChange }: CoverageSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          <span className="font-semibold">UltrahumanX Coverage.</span>{" "}
          <span className="text-muted-foreground">Protect your new Ring.</span>
        </h3>
        <button className="text-muted-foreground hover:text-foreground">
          <Info className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {/* 1 Year Coverage */}
        <button
          onClick={() => onCoverageChange("1-year")}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
            selectedCoverage === "1-year"
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">1 Year Coverage</span>
            <span className="font-semibold">₹2,988</span>
          </div>
          <div className="border-t border-border mt-3 pt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              <span>Accidental damage protection</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              <span>Priority care</span>
            </div>
          </div>
        </button>

        {/* 2 Year Coverage */}
        <button
          onClick={() => onCoverageChange("2-year")}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all relative ${
            selectedCoverage === "2-year"
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <span className="absolute -top-2 right-4 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
            Popular
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">2 Year Coverage</span>
              <span className="text-xs bg-success text-success-foreground px-2 py-0.5 rounded-full">
                Save 25%
              </span>
            </div>
            <span className="font-semibold">₹4,440</span>
          </div>
          <p className="text-xs text-muted-foreground">(That's just ₹2,220/year)</p>
          <div className="border-t border-border mt-3 pt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              <span>Includes all 1 Year Coverage benefits</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              <span>Theft and loss protection</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              <span>Weight loss insurance</span>
            </div>
          </div>
        </button>

        {/* No coverage */}
        <button
          onClick={() => onCoverageChange(null)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
            selectedCoverage === null
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <span className="font-medium">No, I don't want to protect my new Ring AIR</span>
        </button>
      </div>
    </div>
  );
};

export default CoverageSelector;
