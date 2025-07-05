import ReviewCard from "../review-card/reviewcard";
const ReviewsSection: React.FC = () => {
    const reviews = [
        {
            id: 1,
            rating: 3,
            title: "All stains gone, good as new",
            review: "I recently started using this dry cleaning service, and I&apos;m genuinely impressed. From the moment I booked my first pickup, everything was smooth, professional, and incredibly convenient. The user-friendly interface made it easy to schedule a time that suited my busy week—even late evenings and weekends            The pickup was right on time, and the staff was courteous and efficient. They confirmed everything clearly and made me feel confident that my clothes were in good hands. I had a mix of delicate fabrics, formal wear, and everyday items, and every single piece came back spotless, perfectly pressed, and smelling fresh without any overpowering scent. Even my white shirts looked brand new—something no other service has managed consistently.What really stood out was the attention to detail. My clothes were returned neatly folded or hung.            Overall, this dry cleaning service has taken a chore off my plate and added.",
            customerName: "David Callahan"
        },
        {
            id: 2,
            rating: 2,
            title: "All stains gone, good as new",
            review: "Great service and very professional. They handle delicate fabrics with care and attention to detail. My clothes came back looking better than expected...",
            customerName: "David Callahan"
        },
        {
            id: 3,
            rating: 2,
            title: "All stains gone",
            review: "I have been consistently impressed by the quality of service provided. My garments always come back in perfect condition...",
            customerName: "David Callahan"
        },
        {
            id: 4,
            rating: 1,
            title: "All stains gone",
            review: "Excellent dry cleaning service! They removed stains that I thought were permanent. Fast, reliable, and reasonably priced...",
            customerName: "David Callahan"
        }
    ];

    

    return (
       <section className="bg-black py-16">
            <div className="container mx-auto px-4">
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