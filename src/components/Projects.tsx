import React from 'react';
import { ExternalLink, Github, Shield, Vote, Calendar, Users, Database, Smartphone, QrCode, BarChart3 } from 'lucide-react';

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
      impact: 'Eliminates certificate fraud and provides instant verification',
      image: 'photos/project1.png',
      githubUrl: '#'
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
      impact: 'Increases voter participation and election transparency',
      image: '/photos/easyvote-app.jpg',
      githubUrl: '#'
    },
    {
      title: 'Smart Attendance System',
      subtitle: 'Modern Attendance Tracking Solution',
      description: 'Designed modern, secure and efficient attendance tracking system built with React Native and Expo. This app leverages QR code scanning, GPS location verification and Firebase Cloud Firestore to streamline student attendance management for academic institutions.',
      features: [
        'QR code scanning for quick check-ins',
        'GPS location verification',
        'Real-time attendance tracking',
        'Firebase Cloud Firestore integration',
        'Student and instructor dashboards',
        'Attendance analytics and reports'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'QR Code', 'GPS', 'Cloud Firestore'],
      category: 'Mobile Application',
      icon: QrCode,
      gradient: 'from-orange-600 to-red-600',
      status: 'Active Development',
      impact: 'Streamlines attendance management and reduces manual errors',
      image: '/photos/smart-attendance.jpg',
      githubUrl: 'https://github.com/starkster1/smart_attendance'
    },
    {
      title: 'Customer Churn Prediction Model',
      subtitle: 'AI-Powered Business Intelligence Tool',
      description: 'Designed a churn prediction model that allows a company to predict which of its customers are likely to leave. Built with advanced machine learning techniques and a user-friendly web interface for business stakeholders.',
      features: [
        'Advanced ML algorithms for prediction',
        'Interactive web dashboard',
        'Real-time customer risk assessment',
        'Data visualization and insights',
        'Customizable prediction parameters',
        'Export and reporting capabilities'
      ],
      technologies: ['Python', 'Machine Learning', 'TypeScript', 'HTML', 'Scikit-learn', 'Pandas', 'Flask', 'Chart.js'],
      category: 'Machine Learning',
      icon: BarChart3,
      gradient: 'from-purple-600 to-pink-600',
      status: 'Completed',
      impact: 'Helps businesses reduce customer churn and improve retention strategies',
      image: '/photos/churn-prediction.jpg',
      githubUrl: 'https://github.com/starkster1/Customer-Churn-Prediction-Web-Application'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Showcase of innovative solutions addressing real-world challenges through cutting-edge technology.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden"
              >
                {/* Project Image - Full Width Landscape */}
                <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                  
                  {/* Project Screenshot */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image doesn't exist - show gradient with icon
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
                  </div>
                  
                  {/* Content Overlay - Top Left */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/20 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/30">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge - Top Right */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                    <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/20 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/30">
                      {project.status}
                    </div>
                  </div>

                  {/* Project Title Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-blue-200 font-medium text-sm sm:text-base lg:text-lg">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Floating elements for visual interest */}
                  <div className="absolute top-1/2 right-8 sm:right-12 w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute bottom-1/3 left-8 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium text-sm sm:text-base">
                        <strong>Impact:</strong> {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Project
                    </button>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Portfolio Showcase Complete</div>
              <div className="text-xs sm:text-sm text-gray-600">4 innovative projects demonstrating diverse technical skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;