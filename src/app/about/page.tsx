"use client"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Lady from "@/Kings & Queens/About us 1.svg"
import ServicesHeroSection from "../components/hero-section/hero";

import BottomHeroSection from "../components/bottom-hero-section/bottom-hero-section";
import Table from "@/Kings & Queens/image 1.svg"
import LaundrySection from "../components/about-1/about-1";
import PremiumLaundrySection from "../components/premiumlaundarysection/premiumlaundary";
import SustainabilitySection from "../components/about-2/about-2";
import ServiceDetailsSection from "../components/about-3/about-3";

const AboutPage: React.FC = () => {
    // Service data with proper icons (8 services)
    // const services = [
    //     {
    //         id: 1,
    //         icon: Shirt,
    //         title: "Shirt Service",
    //         description: "Beautifully cleaned and crisply pressed shirts. Returned on hangers or folded"
    //     },
    //     {
    //         id: 2,
    //         icon: Wedding,
    //         title: "Laundry Services",
    //         description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
    //     },
    //     {
    //         id: 3,
    //         icon: Shoes,
    //         title: "Wedding Dresses",
    //         description: "Beautifully cleaned, restored and preserved to keep forever"
    //     },
    //     {
    //         id: 4,
    //         icon: Something,
    //         title: "Shoe Cleaning",
    //         description: "Professional shoe cleaning, zip repairs, rubber sole replacements and more"
    //     },
    //     {
    //         id: 5,
    //         icon: Dry,
    //         title: "Dry Cleaning",
    //         description: "Blouses, bow ties, knitwear, coats, dinner suits, dresses, gloves & more"
    //     },
    //     {
    //         id: 6,
    //         icon: HouseHold,
    //         title: "Household Textiles",
    //         description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
    //     },
    //     {
    //         id: 7,
    //         icon: Bed,
    //         title: "Duvet & Bed Linen",
    //         description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
    //     },
    //     {
    //         id: 8,
    //         icon: Curtain,
    //         title: "Curtain Cleaning",
    //         description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
    //     },
    //     {
    //         id: 9,
    //         icon: Repairs,
    //         title: "Repairs",
    //         description: "Blouses, bow ties, knitwear, coats, dinner suits, dresses, gloves & more"
    //     },
    //     {
    //         id: 10,
    //         icon: Ironing,
    //         title: "Ironing",
    //         description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
    //     }
    // ];
    // // Main services for display (first 8)
    // const mainServices = services.slice(0, 10);

    // // Featured services for bottom section (first 4)
    // const featuredServices = services.slice(0, 4);

    // // Pricing plans


    // const handleOrderClick = (serviceTitle: string) => {
    //     console.log(`Order clicked for: ${serviceTitle}`);
    //     // Add your order logic here
    // };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
                <Header />

                {/* Hero Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <ServicesHeroSection
                        image={Lady}
                        imageAlt="Woman holding laundry basket"
                        title="Premium Laundry Service Designed for Modern Lifestyles"
                        subtitle="About Us"
                        breadcrumbCurrent="About Us"
                    />
                </section>

                {/* Laundry Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <LaundrySection />
                </section>

                {/* Premium Laundry Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <PremiumLaundrySection />
                </section>

                {/* Sustainability Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <SustainabilitySection />
                </section>

                {/* Service Details Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <ServiceDetailsSection />
                </section>

                {/* Bottom CTA Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <BottomHeroSection image={Table} />
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
