"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, } from 'lucide-react';
import Logo from "@/Kings & Queens/Kings & Queens logo 1.svg"
import Image from 'next/image';
import Flag from 'react-world-flags';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white relative sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative">
                {/* Crown Logo */}
                <div className="w-30 flex items-center justify-center">
                  <Image src={Logo} alt='' />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              Home
            </Link>
            <Link href="/about" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              About
            </Link>
            <Link href="/services" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              Services
            </Link>
            <Link href="/pricing" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              Contact Us
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <Flag code="gb" style={{ width: 24, height: 16, marginRight: 8 }} />
            <a href="tel:02076604800" className="text-white hover:font-[400] transition-colors duration-300 font-[200]">
              T 020 7660 4800
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:font-[400] transition-colors duration-300-[200]">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 z-50">
            <nav className="flex flex-col py-4">
              <Link
                href="/"
                className="px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="px-4 py-3 border-t border-gray-800 mt-2">
                <div className="flex items-center">
                  <Flag code="gb" style={{ width: 24, height: 16, marginRight: 8 }} />
                  <a href="tel:02076604800" className="text-white hover:text-yellow-400 transition-colors duration-300">
                    T 020 7660 4800
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;