
import React from 'react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  arabicChar,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  arabicChar: string;
  delay?: number;
}) => {
  return (
    <div 
      className="bg-pearl border border-teal/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <div className="absolute -right-4 -bottom-4 text-[120px] font-arabic text-gold/5 group-hover:text-gold/10 transition-colors">
        {arabicChar}
      </div>
      <div className="relative z-10">
        <div className="text-gold mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-teal">{title}</h3>
        <p className="text-teal/70">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our <span className="text-gold">Services</span></h2>
          <p className="text-teal/70">Explore what we offer with the gentle touch of cultural refinement</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Brand Identity"
            description="Create a distinctive identity that reflects cultural heritage while resonating with global audiences."
            arabicChar="ر"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
            delay={100}
          />
          <ServiceCard
            title="Cultural Consulting"
            description="Navigate the nuances of cross-cultural communication with expertise and sensitivity."
            arabicChar="ف"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
            delay={200}
          />
          <ServiceCard
            title="Digital Design"
            description="Craft websites and applications that blend aesthetic beauty with functional elegance."
            arabicChar="ق"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            delay={300}
          />
          <ServiceCard
            title="Typographic Solutions"
            description="Develop custom typography that bridges languages and enhances brand recognition."
            arabicChar="ر"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            delay={400}
          />
          <ServiceCard
            title="Event Design"
            description="Create immersive cultural experiences for events that leave lasting impressions."
            arabicChar="ف"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            delay={500}
          />
          <ServiceCard
            title="Heritage Preservation"
            description="Blend traditional cultural elements into modern contexts with respect and authenticity."
            arabicChar="ق"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            delay={600}
          />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FeaturesSection;
