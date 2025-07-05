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
            <div className="w-full mx-auto py-10">
                <div className="flex justify-around ">
                    {features.map((feature) => (
                        <React.Fragment key={feature.id}>
                            <FeatureItem
                                icon={feature.icon}
                                title={feature.title}
                                text={feature.text}
                            />
                            {/* Divider - only show between items on desktop */}
                            
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBanner;