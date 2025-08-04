"use client"
import React from 'react';
import Image from 'next/image';

// Import your unique logo images
import Image1 from "@/Kings & Queens/airbnb (1).png"
import Image4 from "@/Kings & Queens/hampton (1).png"
import Image6 from "@/Kings & Queens/parkplaza (1).png"
import Image7 from "@/Kings & Queens/hilton (1).png"
import Image8 from "@/Kings & Queens/LSBU (1).png"
import Image9 from "@/Kings & Queens/shangrila (1).png"
import Image10 from "@/Kings & Queens/somerset-house (1).png"


// Define the array of UNIQUE logos
const uniqueLogos = [
    Image1,
    Image4,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10
];

// Duplicate the unique logos to create the seamless loop.
// This array will be twice the length of uniqueLogos.
const logosToDisplay = [...uniqueLogos, ...uniqueLogos];

const LogoCarousel = () => {
    return (
        <div className="w-full container mx-auto  bg-black overflow-hidden py-12 flex items-center justify-center">
            <style jsx>{`
                @keyframes scroll-logos {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        // Crucially, this moves exactly half the total width of 'logosToDisplay'
                        // which is one full set of 'uniqueLogos'.
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll-logos 30s linear infinite; /* Adjust duration as needed */
                    /* Ensure this div is wide enough to contain ALL logosToDisplay without wrapping */
                    /* Its width will be calculated by w-fit based on its flex children */
                }
            `}</style>
            {/* The outer div is the clipping mask (overflow-hidden).
                The inner div 'flex w-fit animate-scroll' is the one that actually scrolls. */}
            <div className="flex w-fit animate-scroll items-center"> {/* This is the div that will be animated */}
                {logosToDisplay.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                        <Image 
                            alt='Service icon' 
                            src={logo} 
                            width={102} 
                            height={102} 
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;