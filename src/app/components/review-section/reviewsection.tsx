import ReviewCard from "../review-card/reviewcard";
const ReviewsSection: React.FC = () => {
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

                {/* Reviews Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left - Large Review (takes full height) */}
                    <div className="lg:row-span-2 h-full">
                        <ReviewCard {...reviews[0]} large />
                    </div>

                    {/* Right Top - Single Review */}
                    <div className="h-full">
                        <ReviewCard {...reviews[1]} />
                    </div>

                    {/* Right Bottom - Two Reviews Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        <div className="h-full">
                            <ReviewCard {...reviews[2]} />
                        </div>
                        <div className="h-full">
                            <ReviewCard {...reviews[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;