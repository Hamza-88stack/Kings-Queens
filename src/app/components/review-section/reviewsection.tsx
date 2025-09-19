"use client";
import { useState, useEffect } from "react";
import ReviewCard from "../review-card/reviewcard";

const ReviewsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            rating: 5,
            title: "All stains gone, good as new",
            review: "Absolutely outstanding service! The team at this dry cleaning company is incredibly knowledgeable. I brought in my favourite pair of quality Hills jeans, which were covered in stubborn stains mainly grass and even some paint. Honestly, I thought they were beyond saving and would need to be repainted or tossed. But somehow, these guys worked magic. The stains are completely gone, and the jeans look brand new! Thank you !I’m genuinely so impressed. It’s rare to find professionals who take such pride in their work and handle even the toughest cleaning challenges with confidence and care. I wouldn’t go anywhere else now they’ve absolutely earned my trust. Highly recommended!",
            customerName: "Margarita Pleteni"
        },
        {
            id: 2,
            rating: 5,
            title: "All stains gone, good as new",
            review: "Absolutely perfect service everything was laundered immaculately I am very glad, especially when traveling to be able to have the ability to pack light and then just launder halfway through the trip. They did an amazing job and had actually had visitors from the USA previously so it’s pretty cool.",
            customerName: "Thomas Franklin"
        },
        {
            id: 3,
            rating: 5,
            title: "All stains gone",
            review: "I have been with kings and queen for over 4 months now honestly they never disappoint. Always delivers on time and excellent customer service. Keep going boys",
            customerName: "Jabeen Mughal"
        },
        {
            id: 4,
            rating: 5,
            title: "All stains gone",
            review: "We dropped our laundry off in the morning and it was kindly delivered to our hotel when completed, as we were going to be out at the pickup time in the afternoon. All items were neatly folded and smelled super fresh.",
            customerName: "Shez"
        }
    ];

    // Auto-advance slider every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
       <section className="bg-black py-16">
            <div className="container mx-auto ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h4 className="text-white text-lg font-[400] mb-2">
                        Reviews
                    </h4>
                    <h2 className="text-white text-3xl md:text-4xl font-extralight">
                        We&apos;ve helped over 130,000 others re-claim their time.
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Review Slider */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className="w-full flex-shrink-0 px-4">
                                    <div className="overflow-hidden">
                                        <ReviewCard {...review} large />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                    index === currentIndex 
                                        ? 'bg-gradient-to-r from-[#C6AE64] to-[#9C7238]' 
                                        : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;