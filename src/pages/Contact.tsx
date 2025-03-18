
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre message a été envoyé avec succès!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-mcalger-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Contactez-nous</h1>
          <div className="flex items-center text-white/80">
            <a href="/" className="hover:text-white">Accueil</a>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-mcalger-text mb-6">Informations de Contact</h2>
              
              <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-mcalger-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-mcalger-green h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-mcalger-text">Adresse</h3>
                      <p className="text-mcalger-text-light">Stade Ali Ammar, Douira, Alger, Algérie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-mcalger-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-mcalger-green h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-mcalger-text">Téléphone</h3>
                      <p className="text-mcalger-text-light">+213 23 25 62 62</p>
                      <p className="text-mcalger-text-light">+213 555 123 456 (Mobile)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-mcalger-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-mcalger-green h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-mcalger-text">Email</h3>
                      <p className="text-mcalger-text-light">contact@mcalger.com</p>
                      <p className="text-mcalger-text-light">boutique@mcalger.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-mcalger-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-mcalger-green h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-mcalger-text">Heures d'ouverture</h3>
                      <p className="text-mcalger-text-light">Dim - jeudi: 9h00 - 20h00</p>
                      <p className="text-mcalger-text-light">Sam: 10h00 - 18h00</p>
                      <p className="text-mcalger-text-light">Ven: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                <h3 className="font-medium text-mcalger-text p-4 border-b">Notre Localisation</h3>
                <div className="h-[300px] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.7007201763918!2d2.961807!3d36.6816962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faf00492c6ac7%3A0x5c64675c9fbc2e20!2sAli-Ammar%20Stadium!5e0!3m2!1sfr!2sdz!4v1742294382572!5m2!1sfr!2sdz" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MC Alger Stadium Map"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-mcalger-text mb-6">Envoyez-nous un message</h2>
              
              <div className="bg-white shadow-sm rounded-xl p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-mcalger-text mb-1">
                        Nom complet
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-mcalger-text mb-1">
                        Adresse email
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-mcalger-text mb-1">
                      Sujet
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-mcalger-text mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcalger-green"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-mcalger-green text-white font-medium py-2 px-4 rounded-md hover:bg-mcalger-green-dark transition-colors"
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
