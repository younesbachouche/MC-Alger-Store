
import React, { useEffect, useState } from "react";
import { ShoppingBasket, Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Listen for cart updates
    const handleCartUpdate = () => {
      setCartCount(prev => prev + 1);
    };
    
    window.addEventListener('cart:update', handleCartUpdate);
    return () => window.removeEventListener('cart:update', handleCartUpdate);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2 z-20">
            <img 
              src="https://upload.wikimedia.org/wikipedia/fr/8/88/MCA_logo.png" 
              alt="MC Alger Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className={`font-bold text-xl ${isScrolled ? 'text-mcalger-green' : 'text-white'}`}>
              Boutique MCA
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isScrolled ? 'text-mcalger-text hover:text-mcalger-green' : 'text-white hover:text-white/80'} font-medium`}>
              Accueil
            </Link>
            <Link to="/products" className={`${isScrolled ? 'text-mcalger-text hover:text-mcalger-green' : 'text-white hover:text-white/80'} font-medium`}>
              Produits
            </Link>
            <Link to="/about" className={`${isScrolled ? 'text-mcalger-text hover:text-mcalger-green' : 'text-white hover:text-white/80'} font-medium`}>
              À Propos
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-mcalger-text hover:text-mcalger-green' : 'text-white hover:text-white/80'} font-medium`}>
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 z-20">
            {/* Search Button */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Search size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isScrolled ? 'text-gray-400' : 'text-white/70'}`} />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className={`pl-10 pr-4 py-1.5 rounded-full text-sm w-40 focus:w-56 transition-all focus:outline-none ${
                  isScrolled 
                    ? 'bg-gray-100 focus:bg-white border border-gray-200' 
                    : 'bg-white/10 text-white placeholder:text-white/70 focus:bg-white/20 backdrop-blur-sm'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            {/* Cart Button */}
            <div className="relative">
              <Link 
                to="/checkout" 
                className={`p-2 rounded-full ${isScrolled ? 'text-mcalger-text hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Panier"
              >
                <ShoppingBasket size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-mcalger-red rounded-full min-w-[1.25rem] h-5 border-2 border-white animate-badge-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 rounded-full ${isScrolled ? 'text-mcalger-text hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-mcalger-green z-10 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              <Link 
                to="/" 
                className="text-white text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className="text-white text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produits
              </Link>
              <Link 
                to="/about" 
                className="text-white text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                to="/contact" 
                className="text-white text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-8 px-8 w-full max-w-md">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                <input 
                  type="text" 
                  placeholder="Rechercher des produits..." 
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
