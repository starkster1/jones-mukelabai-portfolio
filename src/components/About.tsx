import React from 'react';
import { GraduationCap, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate technology enthusiast with a strong foundation in Information Technology 
            and a drive to create impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Completed Information Technology degree with comprehensive knowledge in software engineering, 
                database systems, networking, and emerging technologies. Strong academic foundation in 
                computer science principles and practical application development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Focus Areas</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Specializing in full-stack web development, cross-platform mobile applications, 
                software architecture design, and machine learning implementations. Continuously 
                expanding expertise in cutting-edge technologies and industry best practices.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Successfully completed complex projects including blockchain-based systems and 
                mobile applications for university environments. Demonstrated ability to deliver 
                production-ready solutions that solve real-world problems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Passionate about leveraging emerging technologies like blockchain and AI to create 
                innovative solutions. Always exploring new frameworks, tools, and methodologies 
                to stay at the forefront of technology trends.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-gray-600">Years Learning</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">6</div>
              <div className="text-gray-600">Tech Stacks</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1</div>
              <div className="text-gray-600">IT Degree</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;