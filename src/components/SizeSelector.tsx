
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
          <button
            key={size}
            onClick={() => available && onSelectSize(size)}
            disabled={!available}
            className={`size-option min-w-[40px] h-10 px-3 flex items-center justify-center text-sm rounded border transition-all ${
              !available ? 
                'border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed line-through' : 
                selectedSize === size ? 
                  'border-mcalger-green bg-mcalger-green/10 text-mcalger-green font-medium' : 
                  'border-gray-300 hover:border-mcalger-green/50 text-mcalger-text'
            }`}
            aria-label={available ? `Sélectionner taille ${size}` : `Taille ${size} indisponible`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
