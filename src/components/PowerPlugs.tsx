import { ChevronDown } from "lucide-react";

interface PowerPlugOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  plans: {
    duration: string;
    price: string;
    savings?: string;
    recommended?: boolean;
    perYear?: string;
  }[];
  declineText: string;
}

interface PowerPlugsProps {
  selectedPlugs: Record<string, string | null>;
  onPlugChange: (plugId: string, plan: string | null) => void;
}

const powerPlugs: PowerPlugOption[] = [
  {
    id: "cycle-ovulation",
    name: "Cycle & Ovulation Plus PowerPlug",
    description: "Science-informed cycle and ovulation-related insights, designed for all types of cycles.",
    icon: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/powerplugs/icons/cno-pro.png",
    plans: [
      { duration: "1 Year", price: "₹3,499.99", recommended: true },
      { duration: "2 Years", price: "₹5,999.99", savings: "Save 29%", perYear: "₹2,999.99/year" },
    ],
    declineText: "No, I don't want advanced cycle tracking",
  },
  {
    id: "cardio",
    name: "Cardio Adaptibility Powerplug",
    description: "Protect your heart health with nighttime monitoring.",
    icon: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/powerplugs/icons/heart-health.png",
    plans: [
      { duration: "1 Year", price: "₹2,499", recommended: true },
      { duration: "2 Years", price: "₹3,998", savings: "Save 20%" },
    ],
    declineText: "No, I don't want proactive heart monitoring",
  },
];

const PowerPlugs = ({ selectedPlugs, onPlugChange }: PowerPlugsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        <span className="font-semibold">Software plug-ins.</span>{" "}
        <span className="text-muted-foreground">For targeted health goals.</span>
      </h3>

      <div className="space-y-6">
        {powerPlugs.map((plug) => (
          <div key={plug.id} className="border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-start gap-4 p-4 bg-card">
              <img src={plug.icon} alt={plug.name} className="w-12 h-12" />
              <div>
                <h4 className="font-medium">{plug.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{plug.description}</p>
              </div>
            </div>

            {/* Plans */}
            <div className="p-4 space-y-3">
              {plug.plans.map((plan) => (
                <button
                  key={plan.duration}
                  onClick={() => onPlugChange(plug.id, plan.duration)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                    selectedPlugs[plug.id] === plan.duration
                      ? "border-foreground bg-secondary"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{plan.duration}</span>
                    {plan.savings && (
                      <span className="text-xs bg-success text-success-foreground px-2 py-0.5 rounded-full">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{plan.price}</span>
                    {plan.perYear && (
                      <p className="text-xs text-muted-foreground">(That's just {plan.perYear})</p>
                    )}
                  </div>
                </button>
              ))}

              {/* Decline option */}
              <button
                onClick={() => onPlugChange(plug.id, null)}
                className={`w-full p-3 rounded-lg border text-left text-sm transition-all ${
                  selectedPlugs[plug.id] === null
                    ? "border-foreground bg-secondary"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <span className="text-muted-foreground">{plug.declineText}</span>
                <span className="text-primary ml-2 underline">Learn more</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerPlugs;
