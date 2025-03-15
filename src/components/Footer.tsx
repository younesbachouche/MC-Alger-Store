
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-mcalger-green text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/fr/8/88/MCA_logo.png" 
                alt="MC Alger Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-bold">MC Alger</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm">
              Mouloudia Club d'Alger, fondé en 1921, est l'un des clubs de football les plus performants d'Algérie, connu pour sa riche histoire et sa base de supporters passionnés.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Boutique</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Maillots</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Vêtements d'entraînement</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Accessoires</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Nouveautés</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Articles en solde</a>
              </li>
            </ul>
          </div>
          
          {/* Club Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Club</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">À propos de MC Alger</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Histoire</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Actualités</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Calendrier</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Joueurs</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Stade du 5 Juillet, Alger, Algérie</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-white/80 text-sm">+213 23 25 62 62</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-white/80 text-sm">boutique@mcalger.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 p-4 text-center text-sm text-white/70">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/fr/8/88/MCA_logo.png" 
              alt="MC Alger Logo" 
              className="w-6 h-6 object-contain"
            />
            <span>Boutique Officielle</span>
          </div>
          <p>© {new Date().getFullYear()} Boutique MC Alger. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
