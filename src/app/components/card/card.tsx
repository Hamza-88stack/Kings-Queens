import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Type definitions
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  text?: boolean;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  text?: boolean;
}

// Reusable ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  text = false,
  showButton = true,
  buttonText = "Click to Order",
  onButtonClick
}) => {
  return (
    <div className="relative bg-[#141414] hover:bg-[#1D1D1D] border border-transparent rounded-xl py-4 group cursor-pointer transition-all duration-300 overflow-hidden hover:border-gradient">
      {/* Gradient border overlay - only visible on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #C6AE64 0%, #9C7238 100%)',
          padding: '1px',
        }}
      >
        <div className="w-full h-full bg-[#1D1D1D] rounded-xl"></div>
      </div>
      
      <div className={`relative z-10  flex flex-col ${text ? "items-start text-start" : "items-center text-center"} h-full`}>
        {/* Icon Container */}
        <div className="px-3">
        <div className={`w-16 h-16 bg-[#C6AE64]/20 mb-4  items-center flex justify-center ${text ? "" : ""} rounded-full transition-colors duration-300`}>
          <div className="rounded-full">
            <Image alt='' src={icon}/>
          </div>
        </div>
        </div>
        
        {/* Title */}
        <h3 className="text-white text-lg font-[400] mb-3 px-3 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 font-extralight text-sm px-3 leading-relaxed   flex-grow">
          {description}
        </p>

        {/* Button */}
        {showButton && (
          <div className="w-full mt-6">
            {/* Gradient border */}
            <div 
              className="w-full h-[1px] mb-4"
              style={{
                background: 'linear-gradient(90deg, #C6AE64 0%, #9C7238 100%)',
              }}
            ></div>
            <button 
              onClick={onButtonClick}
              className="flex items-center justify-between w-full text-left text-[#C6AE64] text-sm font-[400] px-3 hover:text-[#d4bf73] transition-colors duration-300 group/btn"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;