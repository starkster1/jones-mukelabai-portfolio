import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Jones Mukelabai</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Information Technology graduate passionate about creating innovative digital solutions 
              through modern web technologies, mobile applications, and machine learning.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                About Me
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm sm:text-base">Web Development</p>
              <p className="text-gray-400 text-sm sm:text-base">Mobile App Development</p>
              <p className="text-gray-400 text-sm sm:text-base">Software Development</p>
              <p className="text-gray-400 text-sm sm:text-base">Machine Learning Solutions</p>
              <p className="text-gray-400 text-sm sm:text-base">Blockchain Development</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base order-2 sm:order-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span>and</span>
              <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
              <span className="hidden xs:inline">by Jones Mukelabai</span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm order-3 sm:order-2">
              © 2025 Jones Mukelabai. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110 order-1 sm:order-3"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;