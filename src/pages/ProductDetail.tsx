
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SizeSelector from "@/components/SizeSelector";
import CartButton from "@/components/CartButton";
import { products } from "@/lib/products";
import { Heart, Share2, Truck, RotateCcw, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find the product by ID
  const product = products.find(p => p.id === id);
  
  // Redirect to products page if product not found
  useEffect(() => {
    if (!product && id) {
      navigate("/products");
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null; // Will redirect in useEffect
  }
  
  const calculateDiscountedPrice = () => {
    if (!product.discount) return product.price;
    return product.price - (product.price * (product.discount / 100));
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Taille requise",
        description: "Veuillez sélectionner une taille avant d'ajouter au panier.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAddedToCart(true);
    
    // Dispatch custom event for header cart count
    const cartEvent = new CustomEvent('cart:update', {
      detail: { productId: product.id, size: selectedSize, quantity }
    });
    window.dispatchEvent(cartEvent);
    
    toast({
      title: "Produit ajouté",
      description: `${product.name} (Taille: ${selectedSize}) a été ajouté à votre panier.`,
    });
    
    // Reset after animation
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };
  
  const handleProceedToPayment = () => {
    if (!selectedSize) {
      toast({
        title: "Taille requise",
        description: "Veuillez sélectionner une taille avant de continuer.",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/checkout", { 
      state: { 
        product, 
        selectedSize, 
        quantity,
        totalPrice: calculateDiscountedPrice() * quantity 
      } 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 bg-mcalger-green/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-mcalger-text/70">
            <a href="/" className="hover:text-mcalger-green">Accueil</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-mcalger-green">Produits</a>
            <span className="mx-2">/</span>
            <span className="text-mcalger-text font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative p-6 flex items-center justify-center bg-gray-50">
                {/* Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                  {product.isNew && (
                    <span className="bg-mcalger-green text-white text-xs font-semibold px-2 py-1 rounded-md">
                      NOUVEAU
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-mcalger-red text-white text-xs font-semibold px-2 py-1 rounded-md">
                      {product.discount}% RÉDUCTION
                    </span>
                  )}
                </div>
                
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-w-full h-auto max-h-[400px] object-contain"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-mcalger-text mb-2">
                  {product.name}
                </h1>
                
                <p className="text-mcalger-text-light mb-4">
                  {product.description || `Produit officiel MC Alger dans la catégorie ${product.category}.`}
                </p>
                
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-mcalger-green">
                    {calculateDiscountedPrice().toLocaleString()} DZD
                  </span>
                  
                  {product.discount && (
                    <span className="ml-3 text-lg line-through text-mcalger-text-light">
                      {product.price.toLocaleString()} DZD
                    </span>
                  )}
                </div>
                
                <div className="border-t border-b border-gray-200 py-4 my-4">
                  {/* Size Selector */}
                  <SizeSelector
                    sizes={product.availableSizes}
                    selectedSize={selectedSize}
                    onSelectSize={(size) => setSelectedSize(size)}
                  />
                  
                  {/* Quantity Selector */}
                  <div className="mt-4">
                    <p className="text-sm font-medium text-mcalger-text mb-2">Quantité</p>
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white text-mcalger-text">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                        disabled={quantity >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <CartButton 
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    isAdded={isAddedToCart}
                  />
                  
                  <button 
                    onClick={handleProceedToPayment}
                    className="h-10 bg-mcalger-green text-white rounded-md flex items-center justify-center space-x-2 hover:bg-mcalger-green-dark transition-colors"
                  >
                    <span>Acheter Maintenant</span>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex items-center text-sm text-mcalger-text-light hover:text-mcalger-text"
                  >
                    <Heart size={18} className={isFavorite ? "fill-mcalger-red stroke-mcalger-red" : ""} />
                    <span className="ml-2">Ajouter aux favoris</span>
                  </button>
                  
                  <button className="flex items-center text-sm text-mcalger-text-light hover:text-mcalger-text">
                    <Share2 size={18} />
                    <span className="ml-2">Partager</span>
                  </button>
                </div>
                
                {/* Info Section */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Truck size={18} className="text-mcalger-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-mcalger-text-light">
                      <span className="font-medium text-mcalger-text">Livraison gratuite</span> pour les commandes de plus de 20000 DZD
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <RotateCcw size={18} className="text-mcalger-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-mcalger-text-light">
                      <span className="font-medium text-mcalger-text">Retours faciles</span> dans les 30 jours
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-mcalger-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-mcalger-text-light">
                      <span className="font-medium text-mcalger-text">Produit authentique</span> garanti
                    </p>
                  </div>
                </div>
                
                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-mcalger-text mb-2">Méthodes de paiement acceptées:</p>
                  <div className="bg-white rounded-lg border border-gray-200 p-3 inline-block">
                    <img 
                      src="https://www.dwsdz.net/wp-content/uploads/2023/08/Cartes_paiments.png" 
                      alt="Moyens de paiement (CIB et Dahabia)" 
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
