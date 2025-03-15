
import React, { useEffect, useState } from "react";
import { ShoppingBasket, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
            <button 
              className={`p-2 rounded-full ${isScrolled ? 'text-mcalger-text hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>
            
            {/* Cart Button */}
            <button 
              className={`relative p-2 rounded-full ${isScrolled ? 'text-mcalger-text hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Panier"
            >
              <ShoppingBasket size={20} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-mcalger-red rounded-full min-w-[1.25rem] h-5 border-2 border-white animate-badge-pulse">
                0
              </span>
            </button>
            
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
