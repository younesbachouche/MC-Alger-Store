
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Erreur: L'utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-md animate-fade-in">
        <div className="w-20 h-20 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-mcalger-green">404</span>
        </div>
        <h1 className="text-2xl font-bold text-mcalger-text mb-4">Page Non Trouvée</h1>
        <p className="text-mcalger-text-light mb-8">
          Nous n'avons pas pu trouver la page que vous recherchez. Elle a peut-être été déplacée ou n'existe pas.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-mcalger-green text-white rounded-md font-medium hover:bg-mcalger-green-light transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
