import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Smartphone, Brain, Globe } from 'lucide-react';
import { downloadCV } from '../utils/downloadUtils';

const Hero = () => {
  // Handle CV download using utility function
  const handleDownloadCV = () => {
    downloadCV();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left content */}
        <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
          {/* Name and Header Photo Row */}
          <div className="flex items-center gap-6">
            <div className="space-y-4 flex-1">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Jones
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Mukelabai
                </span>
              </h1>
            </div>
            
            {/* Header Photo Container */}
            <div className="relative group hidden md:block">
              <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                {/* Animated rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-teal-600 to-orange-600 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-800"></div>
                </div>
                
                {/* Photo container */}
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-400 group-hover:scale-110 transition-all duration-500">
                  {/* Your header photo */}
                  <img 
                    src="/photos/prof.jpg" 
                    alt="Jones Mukelabai - Header Photo"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Animated overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating mini icon */}
                <div className="absolute -top-1 -right-1 w-6 h-6 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Code className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 backdrop-blur-sm border border-blue-500/30 flex items-center gap-2 hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105">
              <Globe className="w-4 h-4" />
              Web Developer
            </span>
            <span className="px-4 py-2 bg-teal-600/20 rounded-full text-teal-300 backdrop-blur-sm border border-teal-500/30 flex items-center gap-2 hover:bg-teal-600/30 transition-all duration-300 transform hover:scale-105">
              <Code className="w-4 h-4" />
              Software Developer
            </span>
            <span className="px-4 py-2 bg-orange-600/20 rounded-full text-orange-300 backdrop-blur-sm border border-orange-500/30 flex items-center gap-2 hover:bg-orange-600/30 transition-all duration-300 transform hover:scale-105">
              <Smartphone className="w-4 h-4" />
              Mobile Developer
            </span>
            <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 backdrop-blur-sm border border-purple-500/30 flex items-center gap-2 hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105">
              <Brain className="w-4 h-4" />
              ML Engineer
            </span>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Information Technology graduate passionate about creating innovative solutions through web development, 
            software engineering, mobile applications, and machine learning technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <button 
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right content - Main Professional Photo */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative group">
            {/* Main photo container with animated border */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-teal-600 to-orange-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-800"></div>
              </div>
              
              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-400 group-hover:scale-105 transition-all duration-500">
                {/* Your main professional photo */}
                <img 
                  src="/photos/prof.jpg" 
                  alt="Jones Mukelabai - Professional Photo"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Animated overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating tech icons around the photo */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-ping shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute bottom-1/4 -right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce animation-delay-2000 shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/30 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
            <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce animation-delay-5000"></div>
            
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/0 to-teal-600/0 group-hover:from-blue-600/20 group-hover:to-teal-600/20 transition-all duration-500 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;