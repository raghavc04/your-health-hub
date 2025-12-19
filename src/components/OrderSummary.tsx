import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  color: string;
  hasSizingKit: boolean;
}

const colorNames: Record<string, string> = {
  "bionic-gold": "Bionic Gold",
  "raw-titanium": "Raw Titanium",
  "aster-black": "Aster Black",
  "matte-grey": "Matte Grey",
  "space-silver": "Space Silver",
  "rose-gold": "Brushed Rose Gold",
};

const OrderSummary = ({ color, hasSizingKit }: OrderSummaryProps) => {
  const originalPrice = 28499;
  const discount = 8549.7;
  const finalPrice = originalPrice - discount;

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6 sticky top-48">
      <div>
        <h3 className="text-lg font-medium">Almost there. Here's your order summary.</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold">Ultrahuman Ring AIR</h4>
            <p className="text-sm text-muted-foreground">
              {colorNames[color]}, {hasSizingKit ? "Sizing kit included" : "Size selected"}
            </p>
          </div>
        </div>

        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span>Ring AIR</span>
            <span>₹{originalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-success">
            <span>Christmas Applied</span>
            <span>-₹{discount.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t border-border pt-4">
          <span>Total</span>
          <span>₹{finalPrice.toLocaleString()}</span>
        </div>

        <p className="text-sm text-muted-foreground">
          Dispatched by : <span className="font-semibold text-foreground">Today, Dec 19</span>
          <span>(after size selection)</span>
        </p>
      </div>

      <Button className="w-full h-12 text-base font-semibold bg-foreground text-background hover:bg-foreground/90">
        Add to cart
      </Button>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          No cost EMI starting at ₹831.22/month. Free Delivery
        </p>
        <p className="text-sm text-muted-foreground">Charging cable included</p>
      </div>
    </div>
  );
};

export default OrderSummary;
