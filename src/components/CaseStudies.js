import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-custom">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold">Dios</h3>
                <p className="text-blue-100 leading-relaxed">
                  A comprehensive digital transformation project that revolutionized 
                  how our client manages their business operations. Built with modern 
                  technologies and AI-powered features.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    <span className="text-2xl font-bold">$2,500</span>
                  </div>
                  <span className="text-blue-200">Project Value</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-blue-200">Weeks Development</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">#react</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">#nodejs</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">#ai</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">#automation</span>
              </div>

              <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                <div className="space-y-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h4 className="font-semibold text-gray-900">Dashboard Overview</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Revenue</div>
                      <div className="text-lg font-bold text-gray-900">$24.5K</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Users</div>
                      <div className="text-lg font-bold text-gray-900">1,234</div>
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <div className="flex items-end space-x-1 h-16">
                      <div className="bg-blue-400 w-2 h-8 rounded-sm"></div>
                      <div className="bg-blue-500 w-2 h-12 rounded-sm"></div>
                      <div className="bg-blue-600 w-2 h-16 rounded-sm"></div>
                      <div className="bg-blue-500 w-2 h-10 rounded-sm"></div>
                      <div className="bg-blue-400 w-2 h-6 rounded-sm"></div>
                      <div className="bg-blue-600 w-2 h-14 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;