import React from 'react';
import { Globe, Package } from 'lucide-react';

const Services = () => {
  return (
    <section className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Starting from</span>
                <span className="text-primary-600 font-semibold">$2,500</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-custom">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <Globe className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Modern Web Solutions</h4>
                  <p className="text-gray-600">
                    Custom web applications built with cutting-edge technologies. 
                    From responsive websites to complex web platforms.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="tech-badge text-blue-600">#react</span>
                    <span className="tech-badge text-green-600">#nodejs</span>
                    <span className="tech-badge text-purple-600">#nextjs</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Mobile Development</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Starting from</span>
                <span className="text-primary-600 font-semibold">$3,500</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-custom">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <Package className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Native & Cross-Platform Apps</h4>
                  <p className="text-gray-600">
                    iOS and Android applications that deliver exceptional user experiences. 
                    Built for performance and scalability.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="tech-badge text-blue-600">#react-native</span>
                    <span className="tech-badge text-green-600">#flutter</span>
                    <span className="tech-badge text-orange-600">#swift</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-3 -left-2 w-5 h-5 bg-green-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute -bottom-2 -right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-custom text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need a simple landing page or a complex enterprise solution, 
              we scale our expertise to match your project requirements.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;