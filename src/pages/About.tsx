
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-mcalger-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">À Propos du MC Alger</h1>
          <div className="flex items-center text-white/80">
            <a href="/" className="hover:text-white">Accueil</a>
            <span className="mx-2">/</span>
            <span>À Propos</span>
          </div>
        </div>
      </div>
      
      {/* Club History */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/0a1ca08e-78d0-4f29-805e-2e231b5021de.png" 
                alt="Stade MC Alger" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/fr/8/88/MCA_logo.png" 
                      alt="MC Alger Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-white">Mouloudia Club d'Alger</h2>
                      <p className="text-white/80">Fondé en 1921</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-mcalger-text mb-4">Histoire du Doyen</h3>
              
              <div className="prose max-w-none text-mcalger-text-light">
                <p className="mb-4">
                  Le Mouloudia Club d'Alger (MCA), surnommé "Le Doyen" en raison de son statut de plus ancien club existant en Algérie, a été fondé le 7 août 1921 dans le quartier populaire de Casbah à Alger. Sa création s'inscrit dans un contexte colonial où les clubs de football représentaient un acte de résistance culturelle et d'affirmation identitaire pour les Algériens.
                </p>
                
                <h4 className="text-lg font-medium text-mcalger-text mt-6 mb-2">Les Origines</h4>
                <p className="mb-4">
                  Le nom "Mouloudia" fait référence au Mawlid, la célébration de la naissance du prophète Mohammed, qui coïncidait avec la date de création du club. Dès sa fondation, le MCA a adopté les couleurs vert et rouge, symbolisant l'espoir et le sacrifice, qui sont devenues emblématiques pour le club.
                </p>
                
                <h4 className="text-lg font-medium text-mcalger-text mt-6 mb-2">L'Ère Coloniale (1921-1962)</h4>
                <p className="mb-4">
                  Pendant la période coloniale, le Mouloudia a été un symbole de résistance culturelle. Le club a évolué dans les championnats locaux, devenant rapidement l'un des clubs les plus populaires auprès de la population algérienne. Le MCA est devenu un lieu d'expression et de rassemblement pour les Algériens, renforçant un sentiment d'appartenance nationale en pleine occupation française.
                </p>
                
                <h4 className="text-lg font-medium text-mcalger-text mt-6 mb-2">Après l'Indépendance</h4>
                <p className="mb-4">
                  Suite à l'indépendance de l'Algérie en 1962, le Mouloudia a connu ses heures de gloire dans les années 1970, remportant de nombreux titres nationaux. En 1976, le club réalise un exploit historique en devenant le premier club algérien à remporter la Coupe d'Afrique des clubs champions (l'actuelle Ligue des Champions de la CAF), battant le Hafia FC de Guinée en finale.
                </p>
                
                <h4 className="text-lg font-medium text-mcalger-text mt-6 mb-2">Palmarès Impressionnant</h4>
                <p className="mb-4">
                  Au fil des décennies, le MC Alger a bâti un palmarès impressionnant, comptant parmi les clubs les plus titrés d'Algérie avec:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Multiples championnats d'Algérie</li>
                  <li>Plusieurs Coupes d'Algérie</li>
                  <li>Une Coupe d'Afrique des clubs champions en 1976</li>
                  <li>Supercoupe d'Afrique en 1976</li>
                  <li>Coupe arabe des clubs champions</li>
                </ul>
                
                <h4 className="text-lg font-medium text-mcalger-text mt-6 mb-2">Le Mouloudia Aujourd'hui</h4>
                <p className="mb-4">
                  Aujourd'hui, le MC Alger reste l'un des clubs les plus populaires d'Algérie, avec une base de supporters fidèles qui s'étend bien au-delà d'Alger. Le club continue de jouer un rôle important dans le football algérien, formant de jeunes talents et participant régulièrement aux compétitions continentales.
                </p>
                <p>
                  Plus qu'un simple club de football, le Mouloudia Club d'Alger représente un patrimoine historique et culturel pour la ville d'Alger et pour l'Algérie toute entière, perpétuant une tradition centenaire de passion pour le football.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Club Values */}
      <section className="py-12 bg-mcalger-green/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-mcalger-text text-center mb-12">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-mcalger-text">Excellence</h3>
              <p className="text-mcalger-text-light">
                Nous nous efforçons constamment d'atteindre l'excellence dans tout ce que nous entreprenons, sur et en dehors du terrain.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-mcalger-text">Tradition</h3>
              <p className="text-mcalger-text-light">
                Nous respectons notre histoire et notre héritage tout en nous adaptant aux défis du football moderne.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-mcalger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mcalger-green">
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <circle cx="12" cy="10" r="2" />
                  <line x1="8" x2="8" y1="2" y2="4" />
                  <line x1="16" x2="16" y1="2" y2="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-mcalger-text">Communauté</h3>
              <p className="text-mcalger-text-light">
                Nous croyons au pouvoir du football pour unir les gens et créer un sentiment d'appartenance communautaire.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
