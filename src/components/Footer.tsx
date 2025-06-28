import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Jones Mukelabai</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Information Technology graduate passionate about creating innovative digital solutions 
              through modern web technologies, mobile applications, and machine learning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About Me
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Web Development</p>
              <p className="text-gray-400">Mobile App Development</p>
              <p className="text-gray-400">Software Development</p>
              <p className="text-gray-400">Machine Learning Solutions</p>
              <p className="text-gray-400">Blockchain Development</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>by Jones Mukelabai</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Jones Mukelabai. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;