import React from 'react';

export default function  Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-[400] mb-4">Kings & Queens</h2>
            <p className="text-white font-extralight leading-relaxed max-w-md">
              Trained by several professionals where you will not learn on your own and minimize injuries.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white font-extralight hover:font-[400] transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-extralight hover:font-[400] transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-extralight hover:font-[400] transition-colors duration-200">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white font-extralight hover:font-[400] transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-extralight hover:font-[400] transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Policy Links Bar */}
      <div 
        className="py-3  px-8"
        style={{ 
          background: 'linear-gradient(90deg, #C6AE64 0%, #9C7238 100%)' 
        }}
      >
        <div className=" mx-auto">
          <div className="flex flex-wrap justify-center md:justify-around gap-6 text-sm">
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Refund Policy
            </a>
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Return Policy
            </a>
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Cancellation Policy
            </a>
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Shipping Policy
            </a>
            <a 
              href="#" 
              className="text-black transition-colors duration-200 font-medium"
            >
              Billing Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}