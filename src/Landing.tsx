import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import JoyCodersSection from './components/sections/JoyCodersSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131313b5]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JoyCodersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
