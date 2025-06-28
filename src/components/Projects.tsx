import React from 'react';
import { ExternalLink, Github, Shield, Vote, Calendar, Users, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain Certificate Verification System',
      subtitle: 'ZCAS University - Final Year Project',
      description: 'A revolutionary web application that leverages blockchain technology to create tamper-proof academic certificates. This system ensures the authenticity and integrity of educational credentials through decentralized verification.',
      features: [
        'Immutable certificate storage on blockchain',
        'Real-time verification system',
        'Secure cryptographic signatures',
        'User-friendly certificate management',
        'Administrative dashboard',
        'API integration for third-party verification'
      ],
      technologies: ['Blockchain', 'Web3', 'React', 'Node.js', 'Cryptography', 'Smart Contracts'],
      category: 'Web Application',
      icon: Shield,
      gradient: 'from-blue-600 to-indigo-600',
      status: 'Production',
      impact: 'Eliminates certificate fraud and provides instant verification'
    },
    {
      title: 'EasyVote Mobile App',
      subtitle: 'Student Union Election Platform',
      description: 'A comprehensive Flutter mobile application designed to modernize university student union elections. Features secure voting mechanisms, real-time results, and administrative tools for managing democratic processes.',
      features: [
        'Secure voter authentication',
        'Real-time voting interface',
        'Live election results dashboard',
        'Candidate profile management',
        'Election scheduling system',
        'Comprehensive audit trails'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Authentication', 'Real-time Database', 'Push Notifications'],
      category: 'Mobile Application',
      icon: Vote,
      gradient: 'from-teal-600 to-green-600',
      status: 'Completed',
      impact: 'Increases voter participation and election transparency'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative solutions addressing real-world challenges through cutting-edge technology.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:flex ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Project Visual */}
                  <div className={`lg:w-1/2 bg-gradient-to-br ${project.gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <Icon className="w-16 h-16" />
                      </div>
                      <div className="space-y-2">
                        <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30 inline-block">
                          {project.category}
                        </div>
                        <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30 inline-block ml-2">
                          {project.status}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <p className="text-blue-800 font-medium">
                          <strong>Impact:</strong> {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                        <Github className="w-5 h-5" />
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
            <Database className="w-8 h-8 text-blue-600" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">More Projects Coming Soon</div>
              <div className="text-sm text-gray-600">Exploring new technologies and building innovative solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;