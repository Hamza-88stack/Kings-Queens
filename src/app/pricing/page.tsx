"use client"
import { useState } from "react";
import ServicesHeroSection from "../components/hero-section/hero";
import Lady from "@/Kings & Queens/contact-lady.svg"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact-form/contact-form";
import ReviewsSection from "../components/review-section/reviewsection";
import ServiceItem from "../components/pricing-comp/pricingcomp";
import DryCleaningProcess from "../components/pricing-service/pricing-service";

interface ServiceListProps {
    services?: Array<{
        id: string;
        title: string;
        subtitle?: string;
        price: number;
    }>;
}

const ServicesPage: React.FC<ServiceListProps> = ({ services }) => {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const defaultServices = [
        { id: '1', title: 'Blouse', subtitle: 'Dry Clean', price: 12.00 },
        { id: '2', title: 'Trouser', subtitle: 'Dry Clean', price: 8.00 },
        { id: '3', title: 'Dress', subtitle: 'Dry Clean', price: 15.00 },
        { id: '4', title: 'Tracksuit', subtitle: 'Dry Clean', price: 9.00 },
        { id: '5', title: 'Dinner Suit', subtitle: 'Dry Clean', price: 12.00 },
        { id: '6', title: 'Jacket', subtitle: 'Dry Clean', price: 8.00 },
        { id: '7', title: 'Blazer', subtitle: 'Dry Clean', price: 3.00 },
        { id: '8', title: 'Jumper', subtitle: 'Dry Clean', price: 6.00 },
        { id: '9', title: 'Skirt', subtitle: 'Dry Clean', price: 6.00 },
        { id: '10', title: 'Dress suit', subtitle: 'Dry Clean', price: 8.00 },
        { id: '11', title: 'Shirt', subtitle: 'Dry Clean', price: 6.00 },
        { id: '12', title: 'Dress suit', subtitle: 'Dry Clean', price: 8.00 },
        { id: '13', title: 'Blazer', subtitle: 'Dry Clean', price: 6.00 },
        { id: '14', title: 'Dress suit', subtitle: 'Dry Clean', price: 2.00 }
    ];

    // Fixed: Check if services exists and has length, otherwise use defaultServices
    const serviceList = services && services.length > 0 ? services : defaultServices;

    const handleToggleExpand = (serviceId: string) => {
        setExpandedItem(expandedItem === serviceId ? null : serviceId);
    };

    return (
        <div className="bg-black text-white">
            {/* Container with consistent responsive padding */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Header />
                {/* Hero Section */}
                <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <div className="flex justify-center">
                        <div className="text-center max-w-6xl mb-12">
                            <h4 className="text-white text-lg font-[400] mb-2 ">
                                Clear Pricing
                            </h4>
                            <h2 className="text-white text-3xl md:text-4xl font-[200]">
                                Professional dry cleaning for all kinds of garments, and more with a 24 hour turnaround
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceList.map((service) => (
                            <ServiceItem
                                key={service.id}
                                title={service.title}
                                subtitle={service.subtitle}
                                price={service.price}
                                isExpanded={expandedItem === service.id}
                                onToggleExpand={() => handleToggleExpand(service.id)}
                                onQuantityChange={(qty) => console.log(`${service.title} quantity: ${qty}`)}
                                onPlaceOrder={() => console.log(`Order placed for ${service.title}`)}
                            />
                        ))}
                    </div>
                </section>
</div>
                {/* Dry Cleaning Process Section */}
                <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <DryCleaningProcess />
                </section>

                {/* Second Services Grid (if intended, otherwise remove) */}
                <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceList.map((service) => (
                            <ServiceItem
                                key={service.id}
                                title={service.title}
                                subtitle={service.subtitle}
                                price={service.price}
                                isExpanded={expandedItem === service.id}
                                onToggleExpand={() => handleToggleExpand(service.id)}
                                onQuantityChange={(qty) => console.log(`${service.title} quantity: ${qty}`)}
                                onPlaceOrder={() => console.log(`Order placed for ${service.title}`)}
                            />
                        ))}
                    </div>
                </section>

            {/* Footer - typically full width */}
            <Footer />
        </div>
    );
};

export default ServicesPage;