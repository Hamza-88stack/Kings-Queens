// components/ServiceDetailsSection.jsx
import React from 'react';

const ServiceDetailsSection = () => {
  return (
    <section className="bg-black text-white ">
      <div className="container mx-auto  ">

        {/* Royal Care Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg text-white mb-2 sm:mb-4">Royal Care for Every Garment</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[200] leading-tight sm:leading-snug">
            Experience unmatched attention to detail with every
            <br className="hidden sm:inline"/> wash, press, and fold
          </h2>
        </div>

        {/* Main Grid: Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Column 1: Pickup & Delivery at Your Command */}
          <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-between min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-[400] mb-3 sm:mb-4 lg:mb-6">
                Pickup & Delivery at Your Command
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 font-[200]">
                Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that your time is valuable, and so is your wardrobe. That&apos;s why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading technology and eco-friendly cleaning methods to ensure the highest standards of hygiene and freshness.
              </p>
            </div>
          </div>

          {/* Column 2: Split Content - Customer Satisfaction & Cleanliness */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Top part: 90% Customer Satisfaction Rate */}
            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex-grow min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-[400] mb-2 sm:mb-3 lg:mb-4">
                90% Customer
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-white font-[200] mb-2 sm:mb-3 lg:mb-4">
                Satisfaction Rate
              </p>
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90 font-[200]">
                Consistently delivering spotless results and five-star services you can count on.
              </p>
            </div>
            
            {/* Bottom part: Where Cleanliness Meets Class */}
            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex-grow min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-[400] mb-3 sm:mb-4 lg:mb-6">
                Where Cleanliness Meets Class
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 font-[200]">
                Kings & Queens Laundry isn&apos;t just about clean clothes, it&apos;s about a superior laundry experience. Elevate your laundry routine with a premium service that fits your lifestyle.
              </p>
            </div>
          </div>

          {/* Column 3: Split Content - Eco-Friendly & Client Stats */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Top part: Eco-Friendly, Fabric-Safe, Always */}
            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex-grow min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-[400] mb-3 sm:mb-4 lg:mb-6">
                Eco-Friendly, Fabric-Safe, Always
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 font-[200]">
                Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that your time is valuable, and so is your wardrobe. That&apos;s why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading.
              </p>
            </div>
            
            {/* Bottom part: 25 million+ Client Satisfaction */}
            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex-grow min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl  font-[400] text-white mb-1 sm:mb-2 lg:mb-3">
                25 million+
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-white/90">
                Client Satisfaction
              </p>
            </div>
          </div>

        </div> {/* End of Main Grid */}
      </div>
    </section>
  );
};

export default ServiceDetailsSection;