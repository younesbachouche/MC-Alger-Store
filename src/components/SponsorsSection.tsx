import React, { useRef, useEffect } from "react";
import { sponsors } from "@/lib/products";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SponsorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in'); // Add fade-in class
            entry.target.classList.remove('opacity-0'); // Remove initial opacity
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sponsorElements = sectionRef.current?.querySelectorAll('.sponsor-logo');
    sponsorElements?.forEach((el) => {
      observer.observe(el);
      el.classList.add('opacity-0'); // Start invisible
    });
    
    return () => {
      sponsorElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-medium text-mcalger-text mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-mcalger-green/10 text-mcalger-green text-sm font-semibold mb-2">
            PARTENAIRES OFFICIELS
          </span>
          <br />
          Nos Partenaires de Confiance
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.name} 
              className="sponsor-logo w-full max-w-[160px] flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AspectRatio ratio={16/9} className="w-full">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={sponsor.imageUrl} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain" 
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/placeholder.svg";
                      console.error(`Failed to load image for ${sponsor.name}`, sponsor.imageUrl);
                    }}
                  />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
