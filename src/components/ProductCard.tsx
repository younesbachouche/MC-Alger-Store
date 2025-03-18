
import React, { useState, useRef, useEffect } from "react";
import { Heart, Tag } from "lucide-react";
import { Product } from "@/lib/products";
import SizeSelector from "./SizeSelector";
import CartButton from "./CartButton";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  // Check if the image is already cached
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsImageLoaded(true);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    setIsAddedToCart(true);
    
    // Dispatch custom event for header cart count
    const cartEvent = new CustomEvent('cart:update', {
      detail: { productId: product.id, size: selectedSize }
    });
    window.dispatchEvent(cartEvent);
    
    // Reset after animation
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  const calculateDiscountedPrice = () => {
    if (!product.discount) return product.price;
    return product.price - (product.price * (product.discount / 100));
  };

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="group animate-fade-in product-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Product Image with Loading State */}
      <div 
        className="relative pt-[100%] overflow-hidden bg-gray-50 cursor-pointer" 
        onClick={handleProductClick}
      >
        <div className={`absolute inset-0 ${!isImageLoaded ? 'image-loading' : ''}`}>
          <img
            ref={imageRef}
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        
        {/* Top-right buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart 
            size={16} 
            className={isFavorite ? "fill-mcalger-red stroke-mcalger-red" : "stroke-gray-600"} 
          />
        </button>
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-mcalger-green text-white text-xs font-semibold px-2 py-1 rounded-md">
              NOUVEAU
            </span>
          )}
          {product.discount && (
            <span className="bg-mcalger-red text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
              <Tag size={12} />
              {product.discount}% RÉDUCTION
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              VEDETTE
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 
          className="text-base font-medium text-mcalger-text mb-1 line-clamp-1 cursor-pointer hover:text-mcalger-green"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>
        
        <p className="text-sm text-mcalger-text-light mb-2 line-clamp-2">
          {product.description || product.category}
        </p>
        
        <div className="flex items-center mb-3">
          <span className="text-lg font-semibold text-mcalger-green">
            {calculateDiscountedPrice().toLocaleString()} DZD
          </span>
          
          {product.discount && (
            <span className="ml-2 text-sm line-through text-mcalger-text-light">
              {product.price.toLocaleString()} DZD
            </span>
          )}
        </div>
        
        {/* Size Selector */}
        <SizeSelector
          sizes={product.availableSizes}
          selectedSize={selectedSize}
          onSelectSize={(size) => setSelectedSize(size)}
        />
        
        {/* Add to Cart Button */}
        <CartButton
          onClick={handleAddToCart}
          disabled={!selectedSize}
          isAdded={isAddedToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
