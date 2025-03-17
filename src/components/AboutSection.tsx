
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-teal/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our <span className="text-gold">Story</span></h2>
          <p className="text-teal/70">Inspired by cultural harmony and elegant refinement</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-square bg-pearl rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-gold/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-arabic text-[120px] text-gold/20">رفـق</span>
                  <div className="mt-8">
                    <span className="font-hybrid text-3xl text-teal">Meaning: Gentleness</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/20 rounded-xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-teal/20 rounded-xl -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-teal">The Meaning Behind <span className="text-gold">Reefq</span></h3>
            <p className="text-teal/80 leading-relaxed">
              Reefq (رفـق) derives from the Arabic concept of gentle refinement and cultural sophistication. 
              Our brand embodies the harmonious blend of Middle Eastern elegance with contemporary 
              global design sensibilities.
            </p>
            <p className="text-teal/80 leading-relaxed">
              Founded on principles of thoughtful design and cultural appreciation, we create 
              experiences that bridge tradition with innovation, always with a gentle touch 
              that respects heritage while embracing the future.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="bg-pearl shadow-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gold mb-2">Vision</h4>
                  <p className="text-teal/80">Creating elegant bridges between cultures</p>
                </div>
                <div className="bg-pearl shadow-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gold mb-2">Values</h4>
                  <p className="text-teal/80">Refinement, Heritage, Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;
