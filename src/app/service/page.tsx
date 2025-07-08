"use client"
import ServiceCard from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Lady from "@/Kings & Queens/kings queen lady 1.svg"
import PricingSection from "../components/pricing-section/pricingsection";
import ServicesHeroSection from "../components/hero-section/hero";
import Shirt from "@/Kings & Queens/5654.svg"
import Wedding from "@/Kings & Queens/Vect123or.svg"
import Shoes from "@/Kings & Queens/Vector (1).svg"
import Something from "@/Kings & Queens/Group 15.svg"
import Dry from "@/Kings & Queens/Kings & Queens/Group 71.svg"
import HouseHold from "@/Kings & Queens/Kings & Queens/Union-1.svg"
import Bed from "@/Kings & Queens/Kings & Queens/Union-2.svg"
import Curtain from "@/Kings & Queens/Kings & Queens/Union-3.svg"
import Repairs from "@/Kings & Queens/Kings & Queens/Union.svg"
import Ironing from "@/Kings & Queens/Kings & Queens/Union.svg"
import BottomHeroSection from "../components/bottom-hero-section/bottom-hero-section";
import Table from "@/Kings & Queens/image 1.svg"

const ServicesPage: React.FC = () => {
    // Service data with proper icons (8 services)
    const services = [
        {
            id: 1,
            icon: Shirt,
            title: "Shirt Service",
            description: "Beautifully cleaned and crisply pressed shirts. Returned on hangers or folded"
        },
        {
            id: 2,
            icon: Wedding,
            title: "Laundry Services",
            description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
        },
        {
            id: 3,
            icon: Shoes,
            title: "Wedding Dresses",
            description: "Beautifully cleaned, restored and preserved to keep forever"
        },
        {
            id: 4,
            icon: Something,
            title: "Shoe Cleaning",
            description: "Professional shoe cleaning, zip repairs, rubber sole replacements and more"
        },
        {
            id: 5,
            icon: Dry,
            title: "Dry Cleaning",
            description: "Blouses, bow ties, knitwear, coats, dinner suits, dresses, gloves & more"
        },
        {
            id: 6,
            icon: HouseHold,
            title: "Household Textiles",
            description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
        },
        {
            id: 7,
            icon: Bed,
            title: "Duvet & Bed Linen",
            description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
        },
        {
            id: 8,
            icon: Curtain,
            title: "Curtain Cleaning",
            description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
        },
        {
            id: 9,
            icon: Repairs,
            title: "Repairs",
            description: "Blouses, bow ties, knitwear, coats, dinner suits, dresses, gloves & more"
        },
        {
            id: 10,
            icon: Ironing,
            title: "Ironing",
            description: "Service washes, wash, tumble dry and fold, as well Laundering and pressing"
        }
    ];
    // Main services for display (first 8)
    const mainServices = services.slice(0, 10);

    // Featured services for bottom section (first 4)
    const featuredServices = services.slice(0, 4);

    // Pricing plans


    const handleOrderClick = (serviceTitle: string) => {
        console.log(`Order clicked for: ${serviceTitle}`);
        // Add your order logic here
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
                <Header />

                {/* Hero Section */}
                <section className="py-12 sm:py-16 lg:py-20 ">
                    <ServicesHeroSection
                        image={Lady}
                        imageAlt="Woman holding laundry basket"
                        title="A list of our extensive service offerings - all including free collection and delivery"
                        subtitle="Our Services"
                        breadcrumbCurrent="Services"
                    />
                </section>

                {/* Services Grid Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mainServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    onButtonClick={() => handleOrderClick(service.title)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Services Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="container   mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-[#ffffff] text-lg mb-2">Our Services</p>
                            <h2 className="text-white text-2xl lg:text-3xl font-light">
                                These are the services we are providing
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {featuredServices.map((service) => (
                                    <ServiceCard
                                        key={`featured-${service.id}`}
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                        onButtonClick={() => handleOrderClick(service.title)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <PricingSection />
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

export default ServicesPage;