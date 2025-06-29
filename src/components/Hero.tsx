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
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
          {/* Name and Header Photo Row - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Header Photo Container - Mobile First */}
           

            <div className="space-y-2 sm:space-y-4 flex-1 order-2 sm:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Jones
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Mukelabai
                </span>
              </h1>
            </div>
          </div>

          {/* Skills badges - Mobile Optimized */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/20 rounded-full text-blue-300 backdrop-blur-sm border border-blue-500/30 flex items-center gap-1.5 sm:gap-2 hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Web Developer</span>
              <span className="xs:hidden">Web</span>
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-600/20 rounded-full text-teal-300 backdrop-blur-sm border border-teal-500/30 flex items-center gap-1.5 sm:gap-2 hover:bg-teal-600/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <Code className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Software Developer</span>
              <span className="xs:hidden">Software</span>
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-600/20 rounded-full text-orange-300 backdrop-blur-sm border border-orange-500/30 flex items-center gap-1.5 sm:gap-2 hover:bg-orange-600/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Mobile Developer</span>
              <span className="xs:hidden">Mobile</span>
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/20 rounded-full text-purple-300 backdrop-blur-sm border border-purple-500/30 flex items-center gap-1.5 sm:gap-2 hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">ML Engineer</span>
              <span className="xs:hidden">ML</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
            Information Technology graduate passionate about creating innovative solutions through web development, 
            software engineering, mobile applications, and machine learning technologies.
          </p>

          {/* Action buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
            <button 
              onClick={handleDownloadCV}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <button 
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View Projects
            </button>
          </div>

          {/* Social links - Mobile Optimized */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
            <a href="#" className="p-2.5 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="p-2.5 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="p-2.5 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Right content - Main Professional Photo - Mobile Optimized */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0">
          <div className="relative group">
            {/* Main photo container with animated border */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-teal-600 to-orange-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-800"></div>
              </div>
              
              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden group-hover:scale-105 transition-all duration-500">
                <img 
                  src="photos/prof.jpg" 
                  alt="Jones Mukelabai - Professional Photo"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating tech icons around the photo - Mobile Responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-teal-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              
              <div className="absolute top-1/4 -left-3 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center animate-ping shadow-lg">
                <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <div className="absolute bottom-1/4 -right-3 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce animation-delay-2000 shadow-lg">
                <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
            
            {/* Floating particles - Responsive */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
            <div className="absolute top-1/2 left-2 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full animate-bounce animation-delay-5000"></div>
            
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/0 to-teal-600/0 group-hover:from-blue-600/20 group-hover:to-teal-600/20 transition-all duration-500 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;