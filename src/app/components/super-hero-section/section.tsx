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
    <section className="relative w-full      flex items-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] justify-center overflow-hidden rounded-xl">
      <div className="absolute inset-0">
        {/* Overlay for gradient effect and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/1 to-transparent z-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white gap-12">

        {/* Left Content: Text & Form */}
        <div className="lg:w-1/2 max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start pt-10 pl-5">
          <h1 className="text-5xl   font-[100] uppercase leading-tight max-w-md">
            LAUNDRY FOR THOSE WHO HATE <span className='font-[400]'>SURPRISES</span>
          </h1>
          <p className="mt-4 text-md font-[200] tracking-wide text-white">
            Expert Dry Cleaners Free 24hr Delivery
          </p>

          {/* Location & Service Form Card */}
          <div className="mt-8 bg-white rounded-xl shadow-2xl p-6 text-gray-800 w-full">
            <label className="font-[400] text-sm text-[#5E5E5E]">
              Search Your Full Address
            </label>
            <div className="mt-2 w-full text-left border border-[#C6AE64] rounded-lg p-3 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-[#C6AE64]">Select Location</span>
              <svg className="w-5 h-5 text-[#C6AE64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="mt-4 w-full bg-black text-[#C6AE64] font-semibold py-3 rounded-lg   transition-colors duration-300">
              Choose Service & Time
            </button>
          </div>

          {/* Trustpilot Review */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 pt-10">
            <p className="font-[200] text-sm">Excellent</p>
            <div className="flex items-center text-white">
              {/* Using inline SVG for stars for better quality */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p className="text-sm font-[200] flex text-white">
              5,433 reviews on &nbsp;   <b className='flex'>               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 Trustpilot</b>
            </p>
          </div>
        </div>

        {/* Right Content: Image & Decorative Icons */}
        <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0 h-[500px] lg:h-[650px] w-full">
          <div className="relative w-full h-full">
            {image && (
              <Image
                src={image}
                alt={imageAlt}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={95}
                className="z-10  "
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