"use client"
import React from 'react';
import Image from 'next/image';
interface ServicesHeroSectionProps {
  image?: React.ReactNode;
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
    <section className="relative w-full min-h-[400px] flex items-center rounded-xl bg-gradient-to-br from-[#C6AE64] to-[#9C7238] justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay for gradient effect and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/1 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto pl-4 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Text Content */}
        <div className="max-w-3xl text-left md:ml-10"> {/* Added margin-left for spacing from the edge */}
          <p className="text-sm uppercase font-[400] tracking-wider mb-2 text-gray-300">
            {subtitle}
          </p>
          <h1 className="text-5xl font-[200] leading-tight mb-4">
            {title}
          </h1>
          {/* Breadcrumbs - matching the design */}
          <p className="text-sm font-[200] text-gray-400">
            Home / {breadcrumbCurrent}
          </p>
        </div>

        {/* Right Image Content */}
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            quality={90}
            className="z-0"
          />
        )}
      </div>
    </section>
  );
};

export default ServicesHeroSection;