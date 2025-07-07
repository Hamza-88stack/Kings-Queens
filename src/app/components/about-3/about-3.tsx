// components/ServiceDetailsSection.jsx
import React from 'react';

const ServiceDetailsSection = () => {
  return (
    <section className="bg-black text-white ">
      <div className="container mx-auto">

        {/* Royal Care Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-white mb-2">Royal Care for Every Garment</p>
          <h2 className="text-3xl md:text-4xl font-[200]">
            Experience unmatched attention to detail with every<br className="hidden md:inline"/> wash, press, and fold
          </h2>
        </div>

        {/* Main Grid: 3 Columns - Adjusted height for inner flex items to work */}
        {/* We need a consistent height for the grid rows so the flexBasis inside columns 2 & 3 works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px] md:h-[600px] lg:h-[500px]">
          {/* Column 1: Pickup & Delivery at Your Command (Original Content) */}
          <div className="bg-[#141414] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-[400] mb-4">Pickup & Delivery at Your Command</h3>
              <p className="text-base leading-relaxed text-white font-[200]">
                Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that your time is valuable, and so is your wardrobe. That&apos;s why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading technology and eco-friendly cleaning methods to ensure the highest standards of hygiene and freshness.
              </p>
            </div>
          </div>

          {/* Column 2: 40/60 Split - Contains "90% Customer" and "Where Cleanliness Meets Class" */}
          <div className="   rounded-lg flex flex-col gap-4"> {/* Added p-4 for inner padding, flex-col and gap-4 */}
            {/* Top part (approx 40%): 90% Customer Satisfaction Rate */}
            <div className="bg-[#141414] p-6 rounded-md flex-grow" style={{ flexBasis: '40%' }}>
              <h3 className="text-3xl font-[400] mb-4">90% Customer</h3>
              <p className="text-base text-white font-[200]">Satisfaction Rate</p>
              <p className="text-base leading-relaxed text-white font-[200] mt-4">
                Consistently delivering spotless results and five-star services you can count on.
              </p>
            </div>
            {/* Bottom part (approx 60%): Where Cleanliness Meets Class */}
            <div className="bg-[#141414] p-6 rounded-md flex-grow" style={{ flexBasis: '60%' }}>
              <h3 className="text-3xl font-[400] mb-4">Where Cleanliness Meets Class</h3>
              <p className="text-base leading-relaxed text-white font-[200]">
                Kings & Queens Laundry isn&apos;t just about clean clothes, it&apos;s about a superior laundry experience. Elevate your laundry routine with a premium service that fits your lifestyle.
              </p>
            </div>
          </div>

          {/* Column 3: 80/20 Split - Contains "Eco-Friendly, Fabric-Safe, Always" and "25 million+" */}
          <div className=" rounded-lg flex flex-col gap-4"> {/* Added p-4 for inner padding, flex-col and gap-4 */}
            {/* Top part (approx 80%): Eco-Friendly, Fabric-Safe, Always */}
            <div className="bg-[#141414] p-6 rounded-md flex-grow" style={{ flexBasis: '80%' }}>
              <div>
                <h3 className="text-3xl font-[400] mb-4">Eco-Friendly, Fabric-Safe, Always</h3>
                <p className="text-base leading-relaxed text-white font-[200]">
                  Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that you time is valuable, and so is your wardrobe. That&apos;s why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading.
                </p>
              </div>
            </div>
            {/* Bottom part (approx 20%): 25 million+ Client Satisfaction */}
            <div className="bg-[#141414] p-6 rounded-md flex-grow" style={{ flexBasis: '20%' }}>
              <h3 className="text-5xl font-[400] text-white mb-2">25 million+</h3>
              <p className="text-base text-white">Client Satisfaction</p>
            </div>
          </div>

        </div> {/* End of Main Grid */}
      </div>
    </section>
  );
};

export default ServiceDetailsSection;