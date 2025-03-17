
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;
