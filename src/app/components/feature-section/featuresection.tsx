import React from 'react';
import FeatureItem from '../feature-card/featurecard';
import Collection from "@/Kings & Queens/Group 18.svg";
import Hand from "@/Kings & Queens/Group-1.svg";
import Bag from "@/Kings & Queens/Group.svg";

// Features data
const FeaturesBanner: React.FC = () => {

    const features = [
        {
            id: 1,
            icon: Bag,
            title: "Free Collection & Delivery",
            text: "With friendly drivers"
        },
        {
            id: 2,
            icon: Collection,
            title: "24hr Turnaround",
            text: "On nearly all items"
        },
        {
            id: 3,
            icon: Hand,
            title: "Satisfaction Guaranteed",
            text: "Or we'll re-clean for free"
        }
    ];

    return (
        <div className="bg-[#141414] flex justify-center w-full">
            <div className="w-full mx-auto py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 sm:gap-4 md:gap-8 container mx-auto">
                    {features.map((feature, index) => (
                        <React.Fragment key={feature.id}>
                            <div className="flex-1 max-w-xs sm:max-w-none">
                                <FeatureItem
                                    icon={feature.icon}
                                    title={feature.title}
                                    text={feature.text}
                                />
                            </div>
                            
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBanner;