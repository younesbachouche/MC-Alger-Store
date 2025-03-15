
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { ChevronRight, Search, Filter } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect on header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 500) {
        setParallaxOffset(scrollPosition * 0.2);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Hero Banner with Parallax Effect */}
      <section 
        className="parallax-header relative pt-24 pb-16 overflow-hidden bg-mcalger-green"
        style={{ height: '400px' }}
      >
        <div 
          className="parallax-bg" 
          style={{ 
            backgroundImage: 'url("/lovable-uploads/0a1ca08e-78d0-4f29-805e-2e231b5021de.png")',
            transform: `scale(1.1) translateY(${parallaxOffset}px)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.8) contrast(1.1)'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-mcalger-green/90 to-mcalger-green/70"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-3 backdrop-blur-sm animate-fade-in">
              NOUVELLE SAISON 2023/24
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Produits Officiels MC Alger
            </h1>
            <p className="text-white/90 text-lg mb-6 animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Montrez votre soutien avec les derniers maillots et vêtements de votre équipe préférée
            </p>
            <a 
              href="#shop-section" 
              className="inline-flex items-center px-6 py-3 bg-white text-mcalger-green rounded-md font-medium hover:bg-gray-100 transition-colors animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Acheter Maintenant
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Product Grid */}
      <section id="shop-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-mcalger-text">
                Produits Vedettes
              </h2>
              <p className="text-mcalger-text-light">
                Le meilleur et le plus récent de MC Alger
              </p>
            </div>
            
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <div className="relative flex-grow sm:flex-grow-0">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des produits..." 
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-mcalger-green/50"
                />
              </div>
              
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
                <Filter size={18} />
                <span className="hidden sm:inline">Filtrer</span>
              </button>
            </div>
          </div>
          
          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* View All Products Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 border-2 border-mcalger-green text-mcalger-green font-medium rounded-md hover:bg-mcalger-green hover:text-white transition-colors">
              Voir Tous les Produits
            </button>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-mcalger-green/10 text-mcalger-green text-sm font-semibold mb-3">
              POURQUOI ACHETER CHEZ NOUS
            </span>
            <h2 className="text-3xl font-bold text-mcalger-text mb-4">
              L'Expérience Officielle MC Alger
            </h2>
            <p className="text-mcalger-text-light">
              Nous sommes fiers d'offrir des produits authentiques de haute qualité avec un service client exceptionnel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Produits Authentiques</h3>
              <p className="text-mcalger-text-light text-sm">
                Tous nos produits sont 100% authentiques et officiellement licenciés par MC Alger.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.8Z" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-mcalger-text-light text-sm">
                Nous offrons une livraison rapide et fiable dans toute l'Algérie et à l'international.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="17" y2="17" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Service Client</h3>
              <p className="text-mcalger-text-light text-sm">
                Notre équipe dévouée est disponible pour vous aider avec toutes vos questions ou préoccupations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-mcalger-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-mcalger-text mb-3">
              Rejoignez Notre Newsletter
            </h2>
            <p className="text-mcalger-text-light mb-6">
              Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et des mises à jour sur nos nouveaux produits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mcalger-green/50"
              />
              <button className="px-5 py-2 bg-mcalger-green text-white font-medium rounded-md hover:bg-mcalger-green-light transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsors */}
      <SponsorsSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Back to Top Button */}
      <button 
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-mcalger-green text-white shadow-lg flex items-center justify-center hover:bg-mcalger-green-light transition-colors opacity-80 hover:opacity-100"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
