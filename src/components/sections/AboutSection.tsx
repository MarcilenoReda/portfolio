import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Code, Server, Shield } from 'lucide-react';
import AboutImg from '../public/MarcilenoReda.jpg'
const AboutSection: React.FC = () => {
  return (

    <section id="about" className="py-20 bg-[#0b0b0b] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle 
              title="About Me" 
              subtitle="Passionate about creating elegant solutions to complex problems"
            />
            
            <p className="text-gray-300 mb-6">
              I'm a senior full-stack developer with extensive experience building scalable applications 
              using modern technologies. With over 8 years in the industry, I've developed expertise in both 
              frontend and backend development, as well as security practices.
            </p>
            
            <p className="text-gray-300 mb-8">
              As the founder of JoyCoders, I've led teams to deliver high-quality software solutions for 
              clients across various industries. My approach combines technical excellence with a deep 
              understanding of business needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              <div className="bg-[#131313b5] p-4 rounded-lg">

                <div className="flex items-center mb-3">
                  <Code className="text-[#00ffcc] mr-2" size={20} />
                  <h3 className="text-gray-200 font-semibold">Frontend</h3>
                </div>
                <p className="text-gray-400 text-sm"> Next.js, Tailwind CSS</p>
              </div>
              

              <div className="bg-[#131313b5] p-4 rounded-lg">

                <div className="flex items-center mb-3">
                  <Server className="text-[#a855f7] mr-2" size={20} />
                  <h3 className="text-gray-200 font-semibold">Backend</h3>
                </div>
                <p className="text-gray-400 text-sm">Laravel, PHP, MySQL</p>
              </div>
              

              <div className="bg-[#131313b5] p-4 rounded-lg">
      <div className="flex items-center mb-3">
                  <Shield className="text-[#00bfff] mr-2" size={20} />
                  <h3 className="text-gray-200 font-semibold">Security</h3>
                </div>
                <p className="text-gray-400 text-sm">CEH, CCNA certifications</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={AboutImg}
                  alt="Marcelino Reda"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1a1a1a]/80"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-800/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;