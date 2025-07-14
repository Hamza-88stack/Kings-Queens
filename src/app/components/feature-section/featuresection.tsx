// Features data
import Collection from "@/Kings & Queens/Group 18.svg";
import Hand from "@/Kings & Queens/Group-1.svg";
import Bag from "@/Kings & Queens/Group.svg";
import FeatureItem from "../feature-card/featurecard";
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
        <div className="bg-[#141414] w-full">
            <div className="container mx-auto flex justify-center py-8 sm:py-10">
                <div className="flex flex-col sm:flex-row justify-center items-start gap-12 sm:gap-4 md:gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex-1 max-w-xs sm:max-w-none">
                            <FeatureItem
                                icon={feature.icon}
                                title={feature.title}
                                text={feature.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBanner;