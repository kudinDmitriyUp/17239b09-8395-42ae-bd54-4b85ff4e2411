import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Developer',
      image: '/images/team-1.jpg',
      bio: 'Full-stack developer with 8+ years of experience in React and Node.js'
    },
    {
      name: 'Sarah Chen',
      role: 'AI Specialist',
      image: '/images/team-2.jpg',
      bio: 'Machine learning engineer specializing in automation and intelligent systems'
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      image: '/images/team-3.jpg',
      bio: 'iOS and Android expert with a passion for creating seamless user experiences'
    },
    {
      name: 'Emma Wilson',
      role: 'UI/UX Designer',
      image: '/images/team-4.jpg',
      bio: 'Creative designer focused on user-centered design and modern interfaces'
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center space-y-6 hover:shadow-custom transition-shadow duration-300">
                <div className="relative mx-auto w-24 h-24">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-semibold">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Github className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;