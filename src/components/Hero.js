import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'nestjs', color: 'text-red-500' },
    { name: 'mysql', color: 'text-blue-500' },
    { name: 'mongodb', color: 'text-green-500' },
    { name: 'nginx', color: 'text-green-600' },
    { name: 'redis', color: 'text-red-600' },
    { name: 'typescript', color: 'text-blue-600' }
  ];

  return (
    <section className="gradient-bg section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-gradient">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">We use only cutting-edge technologies</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tech-badge ${tech.color}`}>
                    #{tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Brain */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src="/images/brain-3d.png" 
                  alt="3D Brain representing AI technology" 
                  className="w-full h-full object-contain animate-float"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 -left-4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;