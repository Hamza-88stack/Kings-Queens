"use client"
import React from 'react';
import Image from 'next/image';
import ArrowRight from "@/Kings & Queens/arrow.svg"
interface BottomHeroSectionProps {
  image?: React.ReactNode;
  imageAlt?: string;
  subtitle?: string;
  title?: string;
  breadcrumbCurrent?: string;
}

const BottomHeroSection: React.FC<BottomHeroSectionProps> = ({ 
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
          <p className="text-sm    font-[400] tracking-wider mb-2 text-gray-300">
            Contact Us
          </p>
          <h1 className="text-5xl font-[200] leading-tight mb-4">
             The best Dry Cleaning delivered directly to your door
          </h1>
          {/* Breadcrumbs - matching the design */}
          <p className="text-sm font-[200]  ">
            We provide the finest dry cleaning and laundry services, combined with exceptional customer service and convenient collection and delivery suited perfectly to your schedule. The service is simple: we collect your items, professionally clean or repair them, and deliver them back to your doorstep in less than 24 hours.  
          </p>
          <div className="bg-gradient-to-b  from-[#C6AE64]  to-[#9C7238] w-[152px] py-[2px] pl-[2px] rounded-full mt-6">
           <div className="flex gap-2 items-center">
            <div className="bg-black rounded-full   w-[119px] text-center text-sm px-3 py-2">
              <p className=' text-[#9D7439]'>Contact Us</p>  
            </div>
            <Image className='w-[15px] h-[11px]' src={ArrowRight}/>
           </div>
          </div>
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

export default BottomHeroSection;