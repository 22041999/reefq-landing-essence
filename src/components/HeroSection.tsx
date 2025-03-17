
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden section-padding">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/efedb227-31a7-4946-95b2-63f908640dc8.png" 
                alt="Reefq Logo" 
                className="h-20 md:h-24 mb-4"
              />
              <span className="font-arabic text-4xl md:text-5xl text-gold">رفـق</span>
            </div>
            <p className="text-lg md:text-xl mb-8 text-teal/80 max-w-lg">
              Bridging cultures through elegant design and thoughtful experiences. 
              Discover the art of refined simplicity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal text-pearl px-8 py-3 rounded-md hover:bg-gold transition-colors">
                Explore
              </button>
              <button className="border-2 border-teal text-teal px-8 py-3 rounded-md hover:border-gold hover:text-gold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative hidden-calligraphy">
            <div className="relative z-10 bg-pearl/60 backdrop-blur-sm p-8 rounded-xl border border-teal/10 shadow-lg">
              <div className="w-full aspect-square rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-gold/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-arabic text-[200px] text-teal/10">رفـق</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full border-8 border-gold/30 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/efedb227-31a7-4946-95b2-63f908640dc8.png" 
                      alt="Reefq Logo" 
                      className="h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-teal/5 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
