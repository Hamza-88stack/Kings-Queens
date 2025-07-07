"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ArrowRight from "@/Kings & Queens/arrow.svg"

interface BottomHeroSectionProps {
  image?: string | StaticImageData;
  imageAlt?: string;
}

const BottomHeroSection: React.FC<BottomHeroSectionProps> = ({ 
  image, 
  imageAlt = "Hero image", 
}) => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] flex items-center rounded-xl bg-gradient-to-br from-[#C6AE64] to-[#9C7238] justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay for gradient effect and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 sm:via-black/50 md:via-black/40 lg:via-black/30 xl:via-black/20 to-transparent z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full">
        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between text-white gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 h-full">
          
          {/* Left Text Content */}
          <div className="max-w-full lg:max-w-2xl xl:max-w-3xl text-center lg:text-left flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"> 
            {/* Contact Label */}
            <p className="text-xs sm:text-sm md:text-base font-[400] tracking-wider text-gray-300">
              Contact Us
            </p>
            
            {/* Main Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[200] leading-tight">
              The best Dry Cleaning delivered directly to your door
            </h1>
            
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[200] leading-relaxed text-gray-100 max-w-2xl mx-auto lg:mx-0">
              We provide the finest dry cleaning and laundry services, combined with exceptional customer service and convenient collection and delivery suited perfectly to your schedule. The service is simple: we collect your items, professionally clean or repair them, and deliver them back to your doorstep in less than 24 hours.  
            </p>
            
            {/* Contact Button */}
            <div className="pt-2 sm:pt-3 md:pt-4">
              <div className="bg-gradient-to-b from-[#C6AE64] to-[#9C7238] w-[140px] sm:w-[152px] md:w-[164px] lg:w-[176px] py-[2px] pl-[2px] rounded-full mx-auto lg:mx-0">
                <div className="flex gap-2 md:gap-3 items-center">
                  <div className="bg-black rounded-full flex-1 text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5">
                    <p className='text-[#9D7439] font-medium'>Contact Us</p>  
                  </div>
                  <div className="pr-2 sm:pr-3">
                    <Image 
                      className='w-3 h-2 sm:w-4 sm:h-3 md:w-5 md:h-4' 
                      src={ArrowRight} 
                      alt="Arrow pointing right" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          {image && (
            <div className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-4 lg:mt-0">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={imageAlt}
                  quality={90}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BottomHeroSection;