import React from 'react';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-[#f1f1f1] text-xl font-bold flex items-center mb-4">
              <Code className="text-[#2563eb] mr-2" />
              <span>Marcelino Reda</span>
            </a>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#a855f7] transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#a855f7] transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#a855f7] transition-colors">Projects</a>
              </li>
              <li>
                <a href="#joycoders" className="text-gray-400 hover:text-[#a855f7] transition-colors">JoyCoders</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#a855f7] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">JoyCoders</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors">App Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors">Cloud Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Marcelino Reda. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;