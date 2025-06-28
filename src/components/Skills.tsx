import React from 'react';
import { Globe, Code, Smartphone, Brain, Database, Server, Palette, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Globe,
      color: 'blue',
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
      description: 'Building responsive, performant web applications with modern frameworks and best practices.'
    },
    {
      title: 'Software Development',
      icon: Code,
      color: 'teal',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'Git', 'API Design', 'Testing', 'Agile'],
      description: 'Creating robust software solutions with clean architecture and scalable design patterns.'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'orange',
      skills: ['Flutter', 'Dart', 'React Native', 'iOS', 'Android', 'Firebase', 'SQLite', 'REST APIs'],
      description: 'Developing cross-platform mobile applications with native performance and user experience.'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'purple',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Analysis', 'Pandas', 'NumPy', 'AI/ML', 'Deep Learning'],
      description: 'Implementing intelligent systems and data-driven solutions using modern ML frameworks.'
    },
    {
      title: 'Database Systems',
      icon: Database,
      color: 'green',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite', 'MySQL', 'Redis', 'Database Design', 'Optimization'],
      description: 'Designing and managing efficient database systems for optimal data storage and retrieval.'
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      color: 'indigo',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Microservices', 'Docker', 'Cloud'],
      description: 'Building scalable server-side architectures and robust API systems.'
    },
    {
      title: 'Blockchain & Security',
      icon: Shield,
      color: 'red',
      skills: ['Blockchain', 'Smart Contracts', 'Web3', 'Security', 'Cryptography', 'Authentication', 'Authorization'],
      description: 'Implementing secure, decentralized systems and certificate verification platforms.'
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'pink',
      skills: ['UI/UX Design', 'Figma', 'Responsive Design', 'User Research', 'Prototyping', 'Accessibility'],
      description: 'Creating intuitive, user-centered designs that enhance digital experiences.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-200 bg-blue-50',
      teal: 'from-teal-500 to-teal-600 border-teal-200 bg-teal-50',
      orange: 'from-orange-500 to-orange-600 border-orange-200 bg-orange-50',
      purple: 'from-purple-500 to-purple-600 border-purple-200 bg-purple-50',
      green: 'from-green-500 to-green-600 border-green-200 bg-green-50',
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-200 bg-indigo-50',
      red: 'from-red-500 to-red-600 border-red-200 bg-red-50',
      pink: 'from-pink-500 to-pink-600 border-pink-200 bg-pink-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across multiple technology stacks and development disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group bg-white border-2 ${getColorClasses(category.color).split(' ')[2]} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.skills.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                      +{category.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            Always learning and exploring new technologies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;