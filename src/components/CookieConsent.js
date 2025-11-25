import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50">
      <div className="bg-white rounded-2xl shadow-2xl border p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">This site uses cookies</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            We and selected third parties use cookies (or similar technologies) for 
            technical purposes, to enhance and analyze site usage, to support our 
            marketing efforts, and for other purposes described below.
          </p>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            By clicking "Accept all", you agree to the storing of cookies on your 
            device for these purposes.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={onClose}
            className="btn-outline flex-1 text-sm"
          >
            Deny
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary flex-1 text-sm"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;