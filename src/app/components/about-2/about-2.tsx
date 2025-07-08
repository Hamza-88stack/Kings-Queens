// components/SustainabilitySection.jsx
import Image from 'next/image';
import Image1 from "@/Kings & Queens/Rectangle 93.svg"
import { Check } from 'lucide-react';

const SustainabilitySection = () => {
    return (
        <section className="bg-black text-white py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 lg:items-stretch">

                    {/* Left Content Column */}
                    <div className="lg:w-1/2 flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">

                        {/* Main Description */}
                        <div className="flex-1 space-y-6 sm:space-y-8">
                            <div className="pb-2 sm:pb-3 lg:pb-4">
                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300">
                                    We prioritize sustainability at every stage of our service. From using biodegradable detergents and high-efficiency machines to recycling water and reducing waste, our eco-conscious approach ensures your clothes are cleaned responsibly while also promoting an incredible impact on our planet.
                                </p>
                            </div>

                            {/* Bullet Points */}
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] flex-shrink-0 mt-1 sm:mt-0">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                                        Biodegradable detergents & energy-saving machines.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] flex-shrink-0 mt-1 sm:mt-0">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                                        Smart systems that save and recycle water.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] flex-shrink-0 mt-1 sm:mt-0">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                                        Sanitized wash for safe, fresh clothes.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] flex-shrink-0 mt-1 sm:mt-0">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                                        Quick pickup and delivery at your door.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#C6AE64] to-[#9C7238] flex-shrink-0 mt-1 sm:mt-0">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                                        Next-day laundry delivery guaranteed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[400] text-white mb-2 sm:mb-3 lg:mb-4">
                                    3,000+
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400">
                                    Cleaned Monthly
                                </p>
                            </div>

                            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[400] text-white mb-2 sm:mb-3 lg:mb-4">
                                    1,500+
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400">
                                    Happy Customers
                                </p>
                            </div>

                            <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[400] text-white mb-2 sm:mb-3 lg:mb-4">
                                    4,500+
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400">
                                    Loads Washed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-[4/3] sm:aspect-[3/2] lg:hidden relative">
                                <Image
                                    src={Image1}
                                    alt="Modern laundry room with washing machine"
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                    quality={85}
                                    priority
                                />
                            </div>
                            <div className="hidden lg:block h-full relative">
                                <Image
                                    src={Image1}
                                    alt="Modern laundry room with washing machine"
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="40vw"
                                    quality={85}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;