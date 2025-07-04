"use client"
import React from 'react';
import Image from 'next/image'; // For optimized images

// Import your unique logo images
import Image1 from "@/Kings & Queens/Group 11.svg"
import Image3 from "@/Kings & Queens/Group 12.svg"
import Image4 from "@/Kings & Queens/Group 13.svg" // Note: This is the same as Image2
import Image6 from "@/Kings & Queens/Group 14.svg"
import Image7 from "@/Kings & Queens/gdstudios 1.svg"
import Image8 from "@/Kings & Queens/Vector-1.svg"
import Image9 from "@/Kings & Queens/Vector.svg"

// Define the array of UNIQUE logos
const uniqueLogos = [
    Image1,
    Image3,
    Image4, // If this is intentionally a duplicate, it's fine for the unique list.
    Image6,
    Image7,
    Image8,
    Image9,
];
 console.log(uniqueLogos)
// Duplicate the unique logos to create the seamless loop.
// This array will be twice the length of uniqueLogos.
const logosToDisplay = [...uniqueLogos, ...uniqueLogos];

const LogoCarousel = () => {
    return (
        <div className="w-full bg-black py-8 overflow-hidden">
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
            <div className="flex w-fit animate-scroll"> {/* This is the div that will be animated */}
                {logosToDisplay.map((logoSrc, index) => (
                    <div
                        key={index} // Using index as key is acceptable here since the list is static and not reordered.
                        className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src={logoSrc}
                            alt={`Client logo ${index + 1}`}
                            width={120} // Ensure these are appropriate for your SVG sizes
                            height={40} // Ensure these are appropriate for your SVG sizes
                            className="grayscale invert" // To make them white as in your image
                            // objectFit is often useful for images but might not be strictly needed for SVG if aspect ratio is controlled by width/height.
                            // objectFit="contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;