"use client"
import ServiceCard from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Lady from "@/Kings & Queens/kings queen lady 1.svg"
import PricingSection from "../components/pricing-section/pricingsection";
import ServicesHeroSection from "../components/hero-section/hero";

const ServicesPage: React.FC = () => {
    // Service data with proper icons (8 services)
    const services = [
        {
            id: 1,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">👔</div>,
            title: "Shirt Service",
            description: "Beautifully cleaned and crisply pressed shirts. Returned on hangers or folded"
        },
        {
            id: 2,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🧺</div>,
            title: "Laundry Services",
            description: "Revitalize washing your complete laundry and finish as well laundering of all garments"
        },
        {
            id: 3,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">👗</div>,
            title: "Wedding Dresses",
            description: "Carefully cleaned, restored and preserved to keep your special moments"
        },
        {
            id: 4,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🏛️</div>,
            title: "Curtain Cleaning",
            description: "Professional curtain cleaning and pressing services for your home"
        },
        {
            id: 5,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🧥</div>,
            title: "Dry Cleaning",
            description: "Expert dry cleaning for delicate fabrics and special garments"
        },
        {
            id: 6,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🏠</div>,
            title: "Household Textiles",
            description: "Complete care for curtains, bedding, and other home textiles"
        },
        {
            id: 7,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🛏️</div>,
            title: "Duvet & Bed Linen",
            description: "Specialized cleaning for bedding, duvets, and luxury linens"
        },
        {
            id: 8,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🔥</div>,
            title: "Curtain Cleaning",
            description: "Professional curtain cleaning and pressing services"
        },
        {
            id: 9,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🔧</div>,
            title: "Repairs",
            description: "Expert alterations and repair services for damaged garments"
        },
        {
            id: 10,
            icon: <div className="w-8 h-8 bg-[#C6AE64] rounded-full flex items-center justify-center text-black font-bold">🔥</div>,
            title: "Ironing",
            description: "Professional ironing and pressing for a crisp, clean finish"
        }
    ];

    // Main services for display (first 8)
    const mainServices = services.slice(0, 8);
    
    // Featured services for bottom section (first 4)
    const featuredServices = services.slice(0, 4);

    // Pricing plans
    

    const handleOrderClick = (serviceTitle: string) => {
        console.log(`Order clicked for: ${serviceTitle}`);
        // Add your order logic here
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            
            {/* Hero Section */}
            <ServicesHeroSection
                    image={
                        Lady}
                    imageAlt="Woman holding laundry basket"
                    title="A list of our extensive service offerings - all including free collection and delivery"
                    subtitle="Our Services"
                    breadcrumbCurrent="Services"
                />

            {/* Services Grid Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
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
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-[#C6AE64] text-sm mb-2">Our Services</p>
                        <h2 className="text-white text-2xl lg:text-3xl font-light">
                            These are the services we are providing
                        </h2>
                    </div>
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
            </section>

            {/* Pricing Section */}
             <PricingSection/>

            {/* Bottom CTA Section */}
            

            <Footer />
        </div>
    );
};

export default ServicesPage;
