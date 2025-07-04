import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  heroImage: string;
  logoText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  heroImage,
  logoText
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="text-gray-600 text-sm font-medium">
          {logoText}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-between min-h-screen px-6 lg:px-12 xl:px-20">
        {/* Left Content */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-gray-700 font-medium mb-4">
            {subtitle}
          </h2>
          
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            {description}
          </p>
          
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            {buttonText}
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={heroImage}
              alt="Folded laundry on white stool"
              width={500}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;