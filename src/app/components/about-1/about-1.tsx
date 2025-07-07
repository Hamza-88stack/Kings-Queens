// components/LaundrySection.jsx
import Image from 'next/image';
import Image1 from "@/Kings & Queens/aboutus-1.svg"
import Small from "@/Kings & Queens/Group 100.svg"
const LaundrySection = () => {
    return (
        <section className="bg-black text-white ">
            <div className="  mx-auto flex flex-col gap-6"> {/* Main container, now a column flexbox */}

                {/* TOP ROW: First 3 divs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* This row will contain 3 items */}
                    {/* Kings & Queens: Your trusted laundry partner */}
                    {/* Note: md:col-span-2 is removed as it's no longer needed for the 3-column layout in this row */}
                    <div className='col-span-2 bg-[#141414] p-8 rounded-lg flex flex-col justify-between'> 
                        <h2 className="text-4xl lg:text-5xl font-[400] mb-6">Kings & Queens: Your trusted laundry partner</h2>
                        <p className="text-lg leading-relaxed text-white">
                            Is your go-to laundry solution, dedicated to delivering unmatched convenience, exceptional care, and spotless cleanliness. We understand that your time is valuable, and so is your wardrobe. That's why FreshFab offers a seamless laundry experience tailored to your lifestyle. From everyday wear to delicate fabrics, our trained professionals treat every garment with precision and care, using industry-leading technology and eco-friendly cleaning methods to ensure the highest standards of hygiene and freshness.
                        </p>
                    </div>


                    {/* Trusted by thousands for spotless results */}
                    <div className="bg-[#141414] p-8 rounded-lg flex flex-col justify-between">
                        <p className="text-xl text-white">Trusted by thousands for spotless results</p>
                        <div>
                            <h3 className="text-5xl font-[400] text-white mt-8">10,000+</h3>
                            <p className="text-base text-white">Garments Cleaned</p>
                        </div>
                    </div>

                    {/* Expanding reach, one fresh load at a time */}
                    <div className="bg-[#141414] py-8 pr-8 pl-0  md:pl-8 rounded-lg flex flex-col justify-between">
                        <p className="text-xl text-white">Expanding reach, one fresh load at a time</p>
                        <div>
                            <h3 className="text-5xl font-[400] text-white mt-8">Serving 15+</h3>
                            <p className="text-base text-white">Cities Nationwide</p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM ROW: Last 2 divs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* This row will contain 2 items, occupying a 3-column grid */}
                    {/* Image */}
                    <div className="md:col-span-3   rounded-lg overflow-hidden relative">
                        <Image
                            src={Image1}// Make sure this path is correct
                            alt="Laundry service worker handling curtains"
                            width={800} // Adjust based on your image's aspect ratio
                            height={500} // Adjust based on your image's aspect ratio
                            layout="responsive"
                            objectFit="cover"
                            quality={80}
                        />
                    </div>

                    {/* Customers */}
                    <div className="bg-[#141414] p-8 rounded-lg flex flex-col justify-between">
                        {/* Avatars */}
                        <div className="flex -space-x-2 mb-6">
                            <Image src={Small} alt="Customer avatar" width={240} height={140} className="rounded-full " />
                        </div>
                        <div>
                            <h3 className="text-5xl font-[400] text-white">1500+</h3>
                            <p className="text-base text-white">Customers</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LaundrySection;