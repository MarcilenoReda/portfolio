import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
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
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"

                  className="w-full bg-[#1a1a1a] border-0 rounded-md py-3 px-4 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"

                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"

                  className="w-full bg-[#1a1a1a] border-0 rounded-md py-3 px-4 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"

                  placeholder="your.email@example.com"
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

                  className="w-full bg-[#1a1a1a] border-0 rounded-md py-3 px-4 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"


                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;