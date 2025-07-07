"use client"
import React from 'react';
import Image from 'next/image';

// Import your unique logo images
import Image1 from "@/Kings & Queens/Group 11.svg"
import Image3 from "@/Kings & Queens/Group 12.svg"
import Image4 from "@/Kings & Queens/Group 13.svg"
import Image6 from "@/Kings & Queens/Group 14.svg"
import Image7 from "@/Kings & Queens/gdstudios 1.svg"
import Image8 from "@/Kings & Queens/Vector-1.svg"
import Image9 from "@/Kings & Queens/Vector.svg"

// Define the array of UNIQUE logos
const uniqueLogos = [
    Image1,
    Image3,
    Image4,
    Image6,
    Image7,
    Image8,
    Image9,
];

// Duplicate the unique logos to create the seamless loop.
// This array will be twice the length of uniqueLogos.
const logosToDisplay = [...uniqueLogos, ...uniqueLogos];

const LogoCarousel = () => {
    return (
        <div className="w-full bg-black overflow-hidden py-12 flex items-center justify-center">
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