interface EngravingSelectorProps {
  hasEngraving: boolean;
  onEngravingChange: (hasEngraving: boolean) => void;
}

const EngravingSelector = ({ hasEngraving, onEngravingChange }: EngravingSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        <span className="font-semibold">Engraving.</span>{" "}
        <span className="text-muted-foreground">Make it uniquely yours.</span>
      </h3>

      <div className="space-y-3">
        {/* Add engraving */}
        <button
          onClick={() => onEngravingChange(true)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
            hasEngraving
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <p className="font-medium">Add engraving</p>
          <p className="text-sm text-muted-foreground mt-1">
            Add custom engraving for just ₹3,299 extra
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            *Engraving orders take 7 days longer to ship
          </p>
        </button>

        {/* No engraving */}
        <button
          onClick={() => onEngravingChange(false)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
            !hasEngraving
              ? "border-foreground bg-secondary"
              : "border-border hover:border-muted-foreground bg-card"
          }`}
        >
          <span className="font-medium">I don't want the engraving</span>
        </button>
      </div>
    </div>
  );
};

export default EngravingSelector;
