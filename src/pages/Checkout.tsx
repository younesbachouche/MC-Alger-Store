
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/lib/products";

interface CheckoutLocationState {
  product: Product;
  selectedSize: string;
  quantity: number;
  totalPrice: number;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get data from location state or redirect to home
  const state = location.state as CheckoutLocationState | null;
  
  const [paymentMethod, setPaymentMethod] = useState<"cib" | "dahabia" | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    wilaya: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: ""
  });
  
  // Redirect if no product data
  if (!state || !state.product) {
    navigate("/");
    return null;
  }
  
  const { product, selectedSize, quantity, totalPrice } = state;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would process the payment
    toast({
      title: "Commande réussie!",
      description: "Votre commande a été traitée avec succès. Vous allez recevoir un email de confirmation.",
    });
    
    // Redirect to success page
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  
  const shippingCost = totalPrice > 5000 ? 0 : 500;
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-8 bg-mcalger-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Finaliser la Commande</h1>
          <div className="flex items-center text-white/80">
            <a href="/" className="hover:text-white">Accueil</a>
            <span className="mx-2">/</span>
            <span>Paiement</span>
          </div>
        </div>
      </div>
      
      {/* Checkout Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-mcalger-text mb-6 pb-4 border-b">
                  Informations de Livraison
                </h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-mcalger-text mb-1">
                        Nom complet *
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-mcalger-text mb-1">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-mcalger-text mb-1">
                        Téléphone *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Shipping Address */}
                  <div className="mb-6">
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-mcalger-text mb-1">
                        Adresse complète *
                      </label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="wilaya" className="block text-sm font-medium text-mcalger-text mb-1">
                          Wilaya *
                        </label>
                        <select 
                          id="wilaya" 
                          name="wilaya"
                          value={formData.wilaya}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                          required
                        >
                          <option value="">Sélectionner</option>
                          <option value="Alger">Alger</option>
                          <option value="Oran">Oran</option>
                          <option value="Constantine">Constantine</option>
                          <option value="Annaba">Annaba</option>
                          <option value="Blida">Blida</option>
                          {/* More options would be added here */}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-mcalger-text mb-1">
                          Ville *
                        </label>
                        <input 
                          type="text" 
                          id="city" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-mcalger-text mb-1">
                          Code postal *
                        </label>
                        <input 
                          type="text" 
                          id="postalCode" 
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <h2 className="text-xl font-semibold text-mcalger-text mb-6 pb-4 border-b">
                    Méthode de Paiement
                  </h2>
                  
                  <div className="mb-6">
                    <div className="flex flex-col space-y-4">
                      <label className="relative border rounded-md p-4 flex cursor-pointer hover:border-mcalger-green/50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          className="sr-only"
                          onChange={() => setPaymentMethod("cib")}
                          checked={paymentMethod === "cib"}
                          required
                        />
                        <span className={`h-5 w-5 rounded-full border flex-shrink-0 mr-4 mt-1 ${
                          paymentMethod === "cib" ? "border-mcalger-green" : "border-gray-300"
                        }`}>
                          {paymentMethod === "cib" && (
                            <span className="h-3 w-3 rounded-full bg-mcalger-green block m-1"></span>
                          )}
                        </span>
                        <div className="flex-grow">
                          <span className="font-medium block mb-1">Carte CIB</span>
                          <span className="text-sm text-mcalger-text-light">Paiement sécurisé par carte bancaire algérienne</span>
                        </div>
                        <img src="https://www.dwsdz.net/wp-content/uploads/2023/08/Cartes_paiments.png" alt="CIB" className="h-8 ml-auto" />
                      </label>
                      
                      <label className="relative border rounded-md p-4 flex cursor-pointer hover:border-mcalger-green/50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          className="sr-only"
                          onChange={() => setPaymentMethod("dahabia")}
                          checked={paymentMethod === "dahabia"}
                        />
                        <span className={`h-5 w-5 rounded-full border flex-shrink-0 mr-4 mt-1 ${
                          paymentMethod === "dahabia" ? "border-mcalger-green" : "border-gray-300"
                        }`}>
                          {paymentMethod === "dahabia" && (
                            <span className="h-3 w-3 rounded-full bg-mcalger-green block m-1"></span>
                          )}
                        </span>
                        <div className="flex-grow">
                          <span className="font-medium block mb-1">Carte Dahabia</span>
                          <span className="text-sm text-mcalger-text-light">Paiement sécurisé avec carte EDAHABIA</span>
                        </div>
                        <img src="https://www.dwsdz.net/wp-content/uploads/2023/08/Cartes_paiments.png" alt="Dahabia" className="h-8 ml-auto" />
                      </label>
                    </div>
                  </div>
                  
                  {/* Payment Details */}
                  {paymentMethod && (
                    <div className="mb-6 border p-4 rounded-md bg-gray-50">
                      <h3 className="font-medium text-mcalger-text mb-4">Détails de la carte</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-mcalger-text mb-1">
                            Numéro de carte *
                          </label>
                          <input 
                            type="text" 
                            id="cardNumber" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardHolder" className="block text-sm font-medium text-mcalger-text mb-1">
                            Nom sur la carte *
                          </label>
                          <input 
                            type="text" 
                            id="cardHolder" 
                            name="cardHolder"
                            value={formData.cardHolder}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-mcalger-text mb-1">
                              Date d'expiration *
                            </label>
                            <input 
                              type="text" 
                              id="expiryDate" 
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-mcalger-text mb-1">
                              CVV *
                            </label>
                            <input 
                              type="text" 
                              id="cvv" 
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                              placeholder="XXX"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    className="w-full bg-mcalger-green text-white font-medium py-3 px-4 rounded-md hover:bg-mcalger-green-dark transition-colors"
                    disabled={!paymentMethod}
                  >
                    Confirmer la commande
                  </button>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-mcalger-text mb-6 pb-4 border-b">
                  Résumé de la commande
                </h2>
                
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-medium text-mcalger-text">{product.name}</h3>
                      <p className="text-sm text-mcalger-text-light">Taille: {selectedSize}</p>
                      <p className="text-sm text-mcalger-text-light">Quantité: {quantity}</p>
                      <p className="text-sm font-medium">{(totalPrice / quantity).toLocaleString()} DZD</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-mcalger-text-light">Sous-total:</span>
                    <span className="font-medium">{totalPrice.toLocaleString()} DZD</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mcalger-text-light">Frais de livraison:</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? "Gratuit" : `${shippingCost.toLocaleString()} DZD`}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-t border-b mb-6">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-mcalger-green">{finalTotal.toLocaleString()} DZD</span>
                </div>
                
                <div className="bg-mcalger-green/5 p-4 rounded-md text-sm">
                  <p className="text-mcalger-text">
                    En passant commande, vous acceptez nos <a href="#" className="text-mcalger-green hover:underline">conditions générales de vente</a> et reconnaissez avoir pris connaissance de notre <a href="#" className="text-mcalger-green hover:underline">politique de confidentialité</a>.
                  </p>
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

export default Checkout;
