"use client"

import Image from "next/image";
import PricingCard from "../pricing-card/pricingcard";
import ArrowRight from "@/Kings & Queens/arrow.svg"

const PricingSection: React.FC = () => {
  // Pricing plans data
  const pricingPlans  = [
    {
      id: 1,
      planName: "Basic Plan",
      price: "50$",
      description: "Great for one person! Get laundry done FAST.",
      features: [
        "Collection of Clothes",
        "Washing",
        "Ironing",
        "Laundry Delivery"
      ],
      buttonText: "Buy Now",
    },
    {
      id: 2,
      planName: "Standard Plan",
      price: "100$",
      description: "Great for one person! Get laundry done FAST.",
      features: [
        "Collection of Clothes",
        "Washing",
        "Ironing",
        "Laundry Delivery"
      ],
      buttonText: "Buy Now",
    },
    {
      id: 3,
      planName: "Advanced Plan",
      price: "150$",
      description: "Great for one person! Get laundry done FAST.",
      features: [
        "Collection of Clothes",
        "Washing",
        "Ironing",
        "Laundry Delivery"
      ],
      buttonText: "Buy Now",
    },
    {
      id: 4,
      planName: "Premium Plan",
      price: "200$",
      description: "Great for one person! Get laundry done FAST.",
      features: [
        "Collection of Clothes",
        "Washing",
        "Ironing",
        "Laundry Delivery"
      ],
      buttonText: "Buy Now",
      isPopular: true
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-white text-lg font-[400] mb-2 ">
            Clear Pricing
          </h4>
          <h2 className="text-white text-3xl md:text-4xl font-extralight">
            High-end service at High Street prices
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              planName={plan.planName}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>

        {/* View Full Pricing Button */}
          <div className="flex justify-center">
          <div className="text-center bg-gradient-to-b  from-[#C6AE64]  to-[#9C7238] w-[203px] py-[2px] pl-[2px] rounded-full mt-2">
           <div className="flex gap-2 items-center">
            <div className="bg-black rounded-full   w-[171px] text-center text-sm px-3 py-2">
              <p className=' text-[#9D7439]'>View Full Pricelist</p>  
            </div>
            <Image className='w-[15px] h-[11px]' src={ArrowRight} alt="Arrow right" />
           </div>
         </div>
         </div>
      </div>
    </section>
  );
};

export default PricingSection;