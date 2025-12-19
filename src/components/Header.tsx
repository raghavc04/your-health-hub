import { ShoppingCart, MessageCircle, ChevronDown } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "Ring AIR", active: true },
    { label: "Blood Vision" },
    { label: "Home Health" },
    { label: "M1 CGM" },
    { label: "Ovulation Tracking" },
    { label: "UltrahumanX" },
    { label: "UltraWork" },
    { label: "HSA/FSA" },
    { label: "Shop" },
    { label: "For Business" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      {/* Top bar */}
      <div className="bg-foreground text-background text-center py-2 text-sm">
        Shipping to United States 🇺🇸
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm transition-colors ${
                    item.active
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Talk to an expert</span>
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full text-sm">
              🇮🇳 IN
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </nav>

      {/* Product title bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-lg font-medium">Ultrahuman Ring AIR</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
