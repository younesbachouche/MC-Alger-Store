
import React from "react";

interface SizeSelectorProps {
  sizes: { size: string; available: boolean }[];
  onSelectSize: (size: string) => void;
  selectedSize: string | null;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ 
  sizes, 
  onSelectSize, 
  selectedSize 
}) => {
  return (
    <div className="mt-3 mb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-mcalger-text">Sélectionner la taille</p>
        <button 
          className="text-xs text-mcalger-green hover:underline focus:outline-none"
          aria-label="Guide des tailles"
        >
          Guide des tailles
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {sizes.map(({ size, available }) => (
          <div key={size} className="size-option">
            <input
              type="radio"
              id={`size-${size}`}
              name="size"
              value={size}
              disabled={!available}
              checked={selectedSize === size}
              onChange={() => available && onSelectSize(size)}
            />
            <label
              htmlFor={`size-${size}`}
              className={available ? "" : "line-through"}
              title={available ? size : `${size} - Rupture de stock`}
            >
              {size}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
