import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-16 ">
        <div className=" ">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-[#C6AE64] tracking-wide">KINGS & QUEENS</h2>
          </div>

          {/* Footer Grid */}
          <div className=" container mx-auto   ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-8xl text-center ">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-[#C6AE64] text-lg font-medium mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="/service" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/claims" className="text-white hover:text-[#C6AE64] transition-colors duration-200 text-sm">
                    Claims
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="text-[#C6AE64] text-lg font-medium mb-6">Find Us</h3>
              <div className="space-y-3 text-sm">
                <p className="text-white">Kings & Queens Dry Cleaning</p>
                <p className="text-white">221 Waterloo Rd</p>
                <p className="text-white">London</p>
                <p className="text-white">SE1 8XH</p>
              </div>
            </div>

            {/* Call Us */}
            <div>
              <h3 className="text-[#C6AE64] text-lg font-medium mb-6">Call us</h3>
              <div className="space-y-3 text-sm">
                <p className="text-white">
                  <a href="tel:02071124884" className="hover:text-[#C6AE64] transition-colors">
                    020 7112 4884
                  </a>
                </p>
                <p className="text-white">
                  <a href="https://wa.me/447512244796" className="hover:text-[#C6AE64] transition-colors">
                    075 1224 4796 - WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Email Us & Connect */}
            <div>
              <h3 className="text-[#C6AE64] text-lg font-medium mb-6">Email us</h3>
              <div className="mb-6">
                <a 
                  href="mailto:kingsandqueens.dcl@gmail.com" 
                  className="text-white   text-sm   rounded inline-block"
                >
                  kingsandqueens.dcl@gmail.com
                </a>
              </div>
              
              <h3 className="text-[#C6AE64] text-lg font-medium mb-4">Connect with us</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="text-white hover:text-[#C6AE64] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://wa.me/447512244796" 
                  className="text-white hover:text-[#C6AE64] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="px-8 py-6">
          <div className="container mx-auto text-center">
            <p className="text-white text-sm">
              2025 Kings & Queens Dry Cleaning by{' '}
              <a 
                href="#" 
                className="text-[#C6AE64] hover:text-[#B8A055] transition-colors font-medium"
              >
                DXNDRE
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}