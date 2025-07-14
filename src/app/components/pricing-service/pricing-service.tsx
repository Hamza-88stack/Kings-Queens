import React from 'react';
import Phone from "@/Kings & Queens/Group 40.svg"
import Car from "@/Kings & Queens/Group-3.svg"
import Cup from "@/Kings & Queens/Group-2.svg"
import Face from "@/Kings & Queens/Group 41.svg"
import Image from 'next/image';

export default function DryCleaningProcess() {
    const steps = [
        {
            id: 1,
            title: "1. You Book",
            description: "Schedule a pickup online or by phone, including everything from ordinary items to any luxury garments.",
            icon: Phone
        },
        {
            id: 2,
            title: "2. We collect",
            description: "We'll come to your door to collect & confirm what you want done with your items.",
            icon: Car
        },
        {
            id: 3,
            title: "3. You relax",
            description: "We take care of everything from washing to pressing. Items are carefully steamed with love.",
            icon: Cup
        },
        {
            id: 4,
            title: "4. Smile delivered",
            description: "We'll deliver your clothes back to you clean, pressed, ready to brighten your day and make life easier.",
            icon: Face
        }
    ];

    return (
        <div className="bg-[#141414] text-white py-16">
            <div className="container mx-auto px-8">
                {/* Header */}
                <div className="flex justify-center">
                <div className="text-center max-w-6xl mb-16">
                    <p className="text-white font-400 text-md  tracking-wider mb-2">
                        Our Proven Work Process
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extralight mb-4">
                        Professional dry cleaning for all kinds of garments,
                        and more with a 24-hour turnaround
                    </h2>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="text-center relative">
                            {/* Icon */}
                            <div className="mb-6 relative">
                                <div className="mb-6 text-center flex justify-center px-4">
                                    <div className={`w-16 h-16 bg-[#C6AE64]/20 items-center flex justify-center rounded-full transition-colors duration-300`}>
                                        <div className="rounded-full">
                                            <Image alt='Service icon' src={step.icon} width={32} height={32} />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            {/* Connecting Line */}
                             {/* {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[white] px-5 transform translate-x-8">
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                                </div>
                            )} */}

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-medium text-white">
                                    {step.title}
                                </h3>
                                <p className="text-[white] font-200 px-4 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}