import React from 'react';
import Image from 'next/image';
// Type definitions
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  text:string;
}



// Reusable FeatureItem Component
const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title , text}) => {
  return (
    <div className="flex items-center space-x-3 text-white">
      {/* Icon Container */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full   flex-shrink-0">
        <div className="text-black">
          <Image alt='' src={icon}/>
        </div>
      </div>
      
      {/* Title */}
      <div className="flex-col flex gap-1">
      <span className="text-md  font-[400] whitespace-nowrap">
        {title}
      </span>
      <span className="text-sm font-extralight whitespace-nowrap">
        {text}
      </span>
      </div>
    </div>
  );
};
export default FeatureItem;