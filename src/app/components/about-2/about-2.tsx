// components/SustainabilitySection.jsx
import Image from 'next/image';
import Image1 from "@/Kings & Queens/Rectangle 93.svg"
import { Check } from 'lucide-react';

const SustainabilitySection = () => {
    return (
        <section className="bg-black text-white ">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 ">

                {/* Left Content Column */}
                <div className="lg:w-1/2 flex flex-col space-y-8">
                    {/* Main Description */}
                    <div className=" pb-3">
                        <div className=" pb-6 rounded-lg">
                            <p className="text-lg leading-relaxed text-gray-300">
                                We prioritize sustainability at every stage of our service. From using biodegradable detergents and high-efficiency machines to recycling water and reducing waste, our eco-conscious approach ensures your clothes are cleaned responsibly while also promoting an incredible impact on our planet.
                            </p>
                        </div>

                        {/* Bullet Points */}
                        <div className=" py-2 rounded-lg space-y-7">
                            <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#C6AE64] to-[#9C7238]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                <p className="text-lg text-gray-200">Biodegradable detergents & energy-saving machines.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#C6AE64] to-[#9C7238]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                <p className="text-lg text-gray-200">Smart systems that save and recycle water.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#C6AE64] to-[#9C7238]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                <p className="text-lg text-gray-200">Sanitized wash for safe, fresh clothes.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#C6AE64] to-[#9C7238]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                <p className="text-lg text-gray-200">Quick pickup and delivery at your door.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#C6AE64] to-[#9C7238]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                <p className="text-lg text-gray-200">Next-day laundry delivery guaranteed.</p>
                            </div>
                        </div>
                    </div>
                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#141414] p-6 rounded-lg text-start">
                            <h3 className="text-4xl font-[400] text-white pb-5">3,000+</h3>
                            <p className="text-base text-gray-400">Cleaned Monthly</p>
                        </div>
                        <div className="bg-[#141414] p-6 rounded-lg text-start">
                            <h3 className="text-4xl font-[400] text-white pb-5">1,500+</h3>
                            <p className="text-base text-gray-400">Happy Customers</p>
                        </div>
                        <div className="bg-[#141414] p-6 rounded-lg text-start">
                            <h3 className="text-4xl font-[400] text-white pb-5">4,500+</h3>
                            <p className="text-base text-gray-400">Loads Washed</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg lg:max-w-none rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={Image1} // CHANGE THIS TO YOUR IMAGE PATH
                            alt="Modern laundry room with washing machine"
                            width={700} // Adjust based on your image aspect ratio
                            height={500} // Adjust based on your image aspect ratio
                            layout="responsive" // Makes the image responsive
                            objectFit="cover" // Ensures the image covers the area
                            quality={85}
                            className="rounded-lg" // Apply rounded corners to the image itself
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SustainabilitySection;