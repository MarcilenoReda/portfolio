import React from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <section className="relative min-h-screen flex items-center justify-center px-4 bg-[#0b0b0b]">

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f1f1f1] mb-6 animate-fadeIn">
          Marcelino Reda
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fadeIn animation-delay-200">
          Full-stack Developer | Founder of JoyCoders
        </p>
        <div className="flex justify-center space-x-4 animate-fadeIn animation-delay-400">
          <Button onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            See My Work
          </Button>
          <Button primary={false} onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Contact Me
          </Button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-[#2563eb] transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    
    </section>
  );
};

export default HeroSection;