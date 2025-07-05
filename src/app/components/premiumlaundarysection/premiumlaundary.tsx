import React from 'react';
import ServiceCard from '../card/card';
import Picture from "@/Kings & Queens/Rectangle 17.svg"
import Image from 'next/image';
import { Check } from 'lucide-react';
import Car from "@/Kings & Queens/Group-3.svg"
import Diamond from "@/Kings & Queens/Diamond.svg"
const services = [
    {
        id: 1,
        icon: Diamond,
        title: "Shirt Service",
        description: "Beautifully cleaned and crisply pressed shirts delivered with exceptional washing touch."
    },
    {
        id: 2,
        icon: Car,
        title: "Laundry Services",
        description: "Revitalize washing your complete laundry and finish as well laundering of all garments."
    },
];
const PremiumLaundrySection = () => {
    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-white text-lg font-[400] mb-4">
                        About Us
                    </p>
                    <h2 className="text-white text-3xl md:text-4xl font-extralight">
                        Premium Laundry Service Designed for Modern Lifestyles
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden aspect-[4/3]">
                            <div className="">
                                <Image alt='' src={Picture} />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        {/* Description */}
                        <div className="space-y-6">
                            <p className="font-[200] text-lg leading-relaxed">
                                We prioritize sustainability at every step of our service. From using biodegradable
                                detergents and energy-efficient machines to reducing water and reducing waste,
                                our eco-conscious approach ensures your clothes are as clean as your conscience.
                            </p>

                            {/* Features List */}
                            <div className="space-y-4 font-200">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-[#C6AE64]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                    <span className="text-gray-300">Eco-Friendly Products</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-[#C6AE64]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                    <span className="text-gray-300">Energy-Efficient Technology</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-[#C6AE64]`}>
                                        <Check className={`w-3 h-3  text-black`} />
                                    </div>
                                    <span className="text-gray-300">Water Conservation & Recycling</span>
                                </div>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-12">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    text
                                    showButton={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumLaundrySection;