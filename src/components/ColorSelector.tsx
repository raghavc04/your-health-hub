interface ColorOption {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
}

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (colorId: string) => void;
}

const colors: ColorOption[] = [
  {
    id: "bionic-gold",
    name: "Bionic Gold",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/bg-3.png/w_400",
  },
  {
    id: "raw-titanium",
    name: "Raw Titanium",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/rt-3.png/w_400",
  },
  {
    id: "aster-black",
    name: "Aster Black",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/ab-3.png/w_400",
  },
  {
    id: "matte-grey",
    name: "Matte Grey",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/mg-3.png/w_400",
  },
  {
    id: "space-silver",
    name: "Space Silver",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/ss-3.png/w_400",
  },
  {
    id: "rose-gold",
    name: "Brushed Rose Gold",
    image: "https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/color-cta/rg-5.png/w_400",
    isNew: true,
  },
];

const ColorSelector = ({ selectedColor, onColorChange }: ColorSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        <span className="font-semibold">Colour.</span>{" "}
        <span className="text-muted-foreground">Choose your favourite finish.</span>
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorChange(color.id)}
            className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedColor === color.id
                ? "border-foreground bg-secondary"
                : "border-border hover:border-muted-foreground bg-card"
            }`}
          >
            {color.isNew && (
              <span className="absolute top-2 right-2 text-xs bg-success text-success-foreground px-2 py-0.5 rounded-full">
                New
              </span>
            )}
            <img
              src={color.image}
              alt={color.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-xs text-center">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
