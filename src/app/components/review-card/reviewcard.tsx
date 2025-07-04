
import React from 'react';
import { Star } from 'lucide-react';

// Type definitions
interface ReviewCardProps {
    rating: number;
    title: string;
    review: string;
    customerName: string;
    large?: boolean;
}

interface Review {
    id: number;
    rating: number;
    title: string;
    review: string;
    customerName: string;
    large: string;
}


// Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${star <= rating
                            ? 'gradient-star'
                            : 'text-gray-600 fill-gray-600'
                        }`}
                />
            ))}
        </div>
    );
};

// Reusable ReviewCard Component
const ReviewCard: React.FC<ReviewCardProps> = ({ rating, title, review, customerName, large = false }) => {
    return (
        <div className="flex flex-col bg-[#141414] rounded-xl p-6 h-full">
            {/* Star Rating */}
            <StarRating rating={rating} />

            {/* Review Title */}
            <h3 className={`text-white ${large ? "text-base md:text-lg" : "text-sm"} font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300`}>
                {title}
            </h3>

            {/* Review Text */}
            <p className={`text-gray-400 ${large ? "  md:text-base" : "text-sm"} leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300`}>
                {review}
            </p>

            {/* Customer Name */}
            <div className="mt-auto">
                <p className="text-yellow-400 text-sm font-medium">
                    - {customerName}
                </p>
            </div>
        </div>
    );
};
export default ReviewCard;