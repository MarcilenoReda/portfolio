import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Code, Globe, Server } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (

    <div className="bg-[#131313b5] rounded-xl p-6 transition-all duration-300 hover:scale-105">

      <div className="mb-4 text-[#2563eb]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const JoyCodersSection: React.FC = () => {
  return (

      <section id="joycoders" className="py-20 bg-[#0b0b0b] px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
              <div className="inline-flex items-center bg-[#34343436] rounded-full px-4 py-2 mb-6">

              <span className="w-2 h-2 rounded-full bg-[#2563eb] mr-2"></span>
              <span className="text-sm text-gray-300">Founded in 2024</span>
            </div>
            
            <SectionTitle 
              title="JoyCoders" 
              subtitle="A software development company focused on building remarkable digital experiences"
            />
            
            <p className="text-gray-300 mb-8">
              At JoyCoders, we combine technical expertise with creative vision to deliver software solutions 
              that exceed expectations. Our team of skilled developers, designers, and project managers 
              work together to transform ideas into powerful applications.
            </p>
            
            <Button className="mb-4 md:mb-0">
              Visit JoyCoders
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<Code size={32} />}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies for optimal performance."
            />
            
            <ServiceCard 
              icon={<Server size={32} />}
              title="App Development"
              description="Native and cross-platform mobile applications for iOS and Android devices."
            />
            
            <ServiceCard 
              icon={<Globe size={32} />}
              title="Cloud Services"
              description="Scalable cloud infrastructure and DevOps solutions for reliable deployments."
            />
            
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-200 text-lg mb-2">Ready to work with us?</p>
                <Button primary={false}>
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoyCodersSection;