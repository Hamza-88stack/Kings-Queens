// components/LaundrySection.jsx
import Image from 'next/image';
import Image1 from "@/Kings & Queens/aboutus-1.svg"
import Small from "@/Kings & Queens/Group 100.svg"

const LaundrySection = () => {
    return (
        <section className="bg-black text-white  ">
            <div className="container mx-auto  ">
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">

                    {/* TOP ROW: First 3 divs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        
                        {/* Kings & Queens: Your trusted laundry partner */}
                        <div className='sm:col-span-2 lg:col-span-2 bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]'> 
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl    font-[400] mb-4 sm:mb-6 leading-tight">
                                Kings & Queens: Your trusted laundry partner
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                                Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that your time is valuable, and so is your wardrobe. That&apos;s why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading technology and eco-friendly cleaning methods to ensure the highest standards of hygiene and freshness.
                            </p>
                        </div>

                        {/* Trusted by thousands for spotless results */}
                        <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                            <p className="text-lg sm:text-xl lg:text-xl text-white leading-snug">
                                Trusted by thousands for spotless results
                            </p>
                            <div className="mt-4 sm:mt-6 lg:mt-8">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[400] text-white mb-2">
                                    10,000+
                                </h3>
                                <p className="text-sm sm:text-base text-white/80">
                                    Garments Cleaned
                                </p>
                            </div>
                        </div>

                        {/* Expanding reach, one fresh load at a time */}
                        <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                            <p className="text-lg sm:text-xl lg:text-xl text-white leading-snug">
                                Expanding reach, one fresh load at a time
                            </p>
                            <div className="mt-4 sm:mt-6 lg:mt-8">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[400] text-white mb-2">
                                    Serving 15+
                                </h3>
                                <p className="text-sm sm:text-base text-white/80">
                                    Cities Nationwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ROW: Image and Customers */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                        
                        {/* Image */}
                        <div className="lg:col-span-3 rounded-lg overflow-hidden relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                            <Image
                                src={Image1}
                                alt="Laundry service worker handling curtains"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
                                quality={80}
                            />
                        </div>

                        {/* Customers */}
                        <div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                            {/* Avatars */}
                            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                                <div className="w-36 h-16 sm:w-52 sm:h-20 lg:w-64 lg:h-24 relative">
                                    <Image 
                                        src={Small} 
                                        alt="Customer avatar" 
                                        className="rounded-full object-cover"
                                        width={240}
                                        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                                    />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[400] text-white mb-2">
                                    1500+
                                </h3>
                                <p className="text-sm sm:text-base text-white/80">
                                    Customers
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LaundrySection;