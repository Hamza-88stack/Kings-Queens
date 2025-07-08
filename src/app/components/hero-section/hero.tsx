"use client"
import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ServicesHeroSectionProps {
  image?: string | StaticImport;
  imageAlt?: string;
  subtitle?: string;
  title?: string;
  breadcrumbCurrent?: string;
}

const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({ 
  image, 
  imageAlt = "Hero image", 
  subtitle, 
  title,
  breadcrumbCurrent
}) => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center rounded-xl bg-gradient-to-br from-[#C6AE64] to-[#9C7238] justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Enhanced overlay with better mobile contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30 md:from-black/90 md:via-black/40 md:to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Text Content */}
        <div className="w-full md:w-4/5  text-center md:text-left mb-8 md:mb-0 md:pr-8 lg:pr-12">
          {subtitle && (
            <p className="text-xs sm:text-sm uppercase font-[400] tracking-wider mb-3 sm:mb-4 text-gray-300">
              {subtitle}
            </p>
          )}
          
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight mb-4 sm:mb-6 break-words">
              {title}
            </h1>
          )}
          
          {/* Breadcrumbs - matching the design */}
          {breadcrumbCurrent && (
            <p className="text-xs sm:text-sm font-[200] text-white">
              Home / {breadcrumbCurrent}
            </p>
          )}
        </div>

        {/* Right Image Content */}
        {image && (
          <div className="w-full md:w-1/3 lg:w-1/2 flex justify-center md:justify-end">
            <div className="relative -bottom-9 sm::-bottom-22  max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src={image}
                alt={imageAlt}
                width={470}
                height={550}
                quality={90}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHeroSection;