import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

// Type definitions
interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

interface PricingPlan {
  id: number;
  planName: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

// Reusable PricingCard Component
const PricingCard: React.FC<PricingCardProps> = ({ 
  planName, 
  price, 
  description, 
  features, 
  isPopular = false,
  buttonText = "Buy Now"
}) => {
  return (
    <div className={`rounded-lg p-6 transition-all font-wo duration-300 hover:transform hover:scale-105 ${
      isPopular 
        ? 'bg-gradient-to-br from-[#C6AE64] to-[#9C7238] text-black' 
        : 'bg-[#141414] text-white   '
    }`}>
      <div className="mb-4">
        {/* Plan Name */}
        <h3 className={`text-[24px] font-[400] mb-2 ${
          isPopular ? 'text-black' : 'text-white'
        }`}>
          {planName}
        </h3>
        {/* Price */}
        <div className="mb-4">
          <span className={`text-[20px] font-[400] ${
            isPopular ? 'text-black' : 'text-white'
          }`}>
            {price}
          </span>
        </div>
                         <div className='border-t mb-4 '></div>

        {/* Description */}
        <p className={`text-sm mb-4 font-[200] ${
          isPopular ? 'text-black' : 'text-white'
        }`}>
          {description}
        </p>
         <div className='border-t mb-6'></div>

      </div>
       
      {/* Features List */}
      <div className="mb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                isPopular 
                  ? 'bg-black' 
                  : 'bg-[#C6AE64]'
              }`}>
                <Check className={`w-3 h-3 ${
                  isPopular ? 'text-[#C6AE64]' : 'text-black'
                }`} />
              </div>
              <span className={`text-sm font-[300]${
                isPopular ? 'text-black' : 'text-white'
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Buy Now Button */}
      <div className="flex justify-center">
      <button className={`  py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
        isPopular
          ? 'bg-black text-white '
          : 'bg-gradient-to-br from-[#C6AE64] to-[#9C7238] font-[400] text-white  '
      }`}>
        {buttonText}
      </button>
      </div>
    </div>
  );
};
export default PricingCard;