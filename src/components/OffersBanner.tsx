import { Percent, CreditCard, Smartphone, Truck } from "lucide-react";

const OffersBanner = () => {
  const offers = [
    {
      icon: <span className="text-lg font-bold">0%</span>,
      text: "No cost EMI starting at ₹ 1,187/month",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      text: "CRED pay | Save and earn rewards",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      text: "Easy payments with UPI",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Free Cash on Delivery",
    },
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-3 min-w-max"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full text-foreground">
                {offer.icon}
              </div>
              <span className="text-sm text-muted-foreground">{offer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersBanner;
