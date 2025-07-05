
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

interface StarRatingProps {
    rating: number;
    className?: string;
}

// Star Rating Component
const StarRating: React.FC<StarRatingProps> = ({ rating, className = '' }) => {
    return (
        <div className={`flex mb-4 ${className}`}>
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C6AE64" />
                        <stop offset="100%" stopColor="#9C7238" />
                    </linearGradient>
                </defs>
            </svg>

            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-7 h-7 mr-1 ${star <= rating
                            ? 'gradient-star'
                            : 'empty-star'
                        }`}
                    style={{
                        fill: star <= rating ? 'url(#starGradient)' : 'none',
                        stroke: star <= rating ? 'url(#starGradient)' : 'url(#starGradient)',
                        strokeWidth: 1,
                    }}
                />
            ))}
        </div>
    );
};
// Reusable ReviewCard Component
const ReviewCard: React.FC<ReviewCardProps> = ({  title, review, customerName, large = false }) => {
    return (
        <div className="flex flex-col bg-[#141414] rounded-xl p-6 h-full">
            {/* Star Rating */}
            <StarRating rating={2} className="my-custom-class" />

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
                <p className="text-white text-sm font-[400]">
                    - {customerName}
                </p>
            </div>
        </div>
    );
};
export default ReviewCard;