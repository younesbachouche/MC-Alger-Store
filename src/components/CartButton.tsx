
import React from "react";
import { ShoppingCart, Check } from "lucide-react";

interface CartButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isAdded?: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({ 
  onClick, 
  disabled = false,
  isAdded = false
}) => {
  return (
    <button
      className={`cart-btn w-full h-10 rounded-md flex items-center justify-center space-x-2 text-sm font-medium transition-all ${
        isAdded 
          ? "bg-green-600 text-white" 
          : disabled 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-mcalger-red text-white hover:bg-mcalger-red-dark"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {isAdded ? (
        <>
          <Check size={16} />
          <span>Ajouté au panier</span>
        </>
      ) : (
        <>
          <ShoppingCart size={16} />
          <span>Ajouter au panier</span>
        </>
      )}
    </button>
  );
};

export default CartButton;
