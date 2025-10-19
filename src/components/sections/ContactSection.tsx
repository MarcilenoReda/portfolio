import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = () => {
    const phoneNumber = '201557073339'; // Replace with your actual phone number
    const text = `الاسم: ${name}%0A text: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (

    <section id="contact" className="py-20 bg-[#0b0b0b] px-4">

      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Interested in working together? Let's discuss your project"
          className="text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="bg-[#131313b5] rounded-xl p-8">


            <h3 className="text-xl font-bold text-gray-100 mb-6">Send me a message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1a1a1a] border-0 rounded-md py-3 px-4 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1a1a1a] border-0 rounded-md py-3 px-4 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-[#17a54b] text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </div>
          </div>
          
          <div>

            <div className="bg-[#131313b5] rounded-xl p-8 mb-8">

              <h3 className="text-xl font-bold text-gray-100 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                
                <div className="flex items-center text-gray-300">
                  <Mail className="text-[#2563eb] mr-3" size={20} />

                  <span>marcelinoreda120@gmail.com</span>

                </div>
              </div>
            </div>
            

            <div className="bg-[#131313b5] rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-100 mb-6">Follow Me</h3>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="tel:+201112345678" className="bg-[#1a1a1a] p-3 rounded-full text-gray-300 hover:text-[#2563eb] transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;