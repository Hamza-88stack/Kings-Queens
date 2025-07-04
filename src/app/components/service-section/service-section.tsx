"use client"
import {  Image } from "lucide-react";
import ServiceCard from "../card/card";
import Shirt from "@/Kings & Queens/5654.svg"
import Wedding from "@/Kings & Queens/Vect123or.svg"
import Shoes from "@/Kings & Queens/Vector (1).svg"
import ArrowRight from "@/Kings & Queens/arrow.svg"

import Something from "@/Kings & Queens/Group 15.svg"
const ServicesSection = () => {
    // Service data with icons and content
    const services = [
        {
            id: 1,
            icon: Shirt,
            title: "Shirt Service",
            description: "Beautifully cleaned and crisply pressed shirts delivered with exceptional washing touch."
        },
        {
            id: 2,
            icon: Something,
            title: "Laundry Services",
            description: "Revitalize washing your complete laundry and finish as well laundering of all garments."
        },
        {
            id: 3,
            icon: Wedding,
            title: "Wedding Dresses",
            description: "Carefully cleaned, restored and preserved to keep your special moments."
        },
        {
            id: 4,
            icon: Shoes,
            title: "Shoe Cleaning",
            description: "Professional shoe cleaning and repairs. Restore sole attachment and polish."
        }
    ];

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h4 className="text-white text-sm font-[400]mb-2">
                        Services
                    </h4>
                    <h2 className="text-white text-3xl md:text-4xl font-extralight">
                        These are the services we are providing
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            showButton={false}
                        />
                    ))}
                </div>

                {/* See All Services Button */}
                <div className="bg-gradient-to-b  from-[#C6AE64] text-center  to-[#9C7238] w-[189px] py-[2px] pl-[2px] rounded-full mt-6">
                    <div className="flex gap-2 items-center">
                        <div className="bg-black rounded-full   w-[156px] text-center text-sm px-3 py-2">
                            <p className=' text-[#9D7439]'>See All Services</p>
                        </div>
                        <Image className='w-[15px] h-[11px]' src={ArrowRight} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;