"use client"
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';


// --- Component Props Interface ---
interface SuperHeroSectionProps {
  image?: string | StaticImageData; // Proper typing for Next.js Image src
  imageAlt?: string;
}

// --- The Hero Section Component ---
const SuperHeroSection: React.FC<SuperHeroSectionProps> = ({
  image,
  imageAlt = "Man holding clean laundry",
}) => {
   
  return (
    <section className="relative w-full flex items-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] justify-center overflow-hidden rounded-xl">
      <div className="absolute inset-0">
        {/* Overlay for gradient effect and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 sm:via-black/30 lg:via-black/10 to-transparent z-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12   flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white gap-8 lg:gap-12">

        {/* Left Content: Text & Form */}
        <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left flex flex-col items-center  lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[100] uppercase leading-tight max-w-full lg:max-w-md">
            LAUNDRY FOR THOSE WHO HATE <span className='font-[400]'>SURPRISES</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-[200] tracking-wide text-white">
            Expert Dry Cleaners Free 24hr Delivery
          </p>

          {/* Location & Service Form Card */}
          <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-2xl p-4 sm:p-6 text-gray-800 w-full max-w-md lg:max-w-lg">
            <label className="font-[400] text-xs sm:text-sm text-[#5E5E5E]">
              Search Your Full Address
            </label>
            <div className="mt-2 w-full text-left border border-[#C6AE64] rounded-lg p-3 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-[#C6AE64] text-sm sm:text-base">Select Location</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C6AE64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="mt-4 w-full bg-black text-[#C6AE64] font-semibold py-3 rounded-lg text-sm sm:text-base transition-colors duration-300">
              Choose Service & Time
            </button>
          </div>

          {/* Trustpilot Review */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-center sm:text-left">
            <p className="font-[200] text-sm">Excellent</p>
            <div className="flex items-center text-white">
              {/* Using inline SVG for stars for better quality */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p className="text-xs sm:text-sm font-[200] flex text-white flex-wrap items-center justify-center sm:justify-start">
              5,433 reviews on &nbsp;   
              <b className='flex items-center'>               
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 Trustpilot
              </b>
            </p>
          </div>
        </div>

        {/* Right Content: Image & Decorative Icons */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
          <div className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {image && (
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain object-center z-10"
                quality={95}
                priority
              />
            )}

            {/* Decorative Icons. The dashed line is omitted for simplicity. */}
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperHeroSection;