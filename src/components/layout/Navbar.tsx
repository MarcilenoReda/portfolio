import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-[#f1f1f1] text-xl font-bold flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Code className="text-[#2563eb] mr-2" />
          <span>Marcelino</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('joycoders')}>JoyCoders</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`bg-[#f1f1f1] block h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 transform rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`bg-[#f1f1f1] block h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 w-4'}`}></span>
            <span className={`bg-[#f1f1f1] block h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 transform -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#242424] overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 flex flex-col space-y-3">
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('joycoders')}>JoyCoders</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, onClick }) => {
  return (
    <a 
      href="#" 
      className="text-gray-300 hover:text-[#2563eb] transition-colors py-2"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Navbar;