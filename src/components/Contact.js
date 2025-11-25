import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How can we help? Let's talk
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with us and let's discuss 
              how we can bring your ideas to life with our AI-powered development approach.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-custom overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 lg:p-12 text-white">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-primary-100 leading-relaxed">
                      We're here to help you transform your ideas into reality. 
                      Reach out to us and let's start building something amazing together.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Email us</div>
                        <div className="text-primary-100">contact@sargas.io</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div className="text-primary-100">Available 24/7</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <div className="text-sm text-primary-200 mb-2">Feel free to drop us a note:</div>
                    <div className="font-semibold">contact@sargas.io</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors">
                      <option>Select a service</option>
                      <option>Web Development</option>
                      <option>Mobile Development</option>
                      <option>AI Integration</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;