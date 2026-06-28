"use client"
import { useRouter } from 'next/navigation';
import ServiceCard from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
// import Lady from "@/Kings & Queens/kings queen lady 1.svg"
//from "../components/pricing-section/pricingsection";
import ServicesHeroSection from "../components/hero-section/hero";
import Shirt from "@/Kings & Queens/5654.svg"
import Wedding from "@/Kings & Queens/Vect123or.svg"
import Dry from "@/Kings & Queens/Kings & Queens/Group 71.svg"
import HouseHold from "@/Kings & Queens/Kings & Queens/Union-1.svg"
import Repairs from "@/Kings & Queens/Kings & Queens/Union.svg"
import BottomHeroSection from "../components/bottom-hero-section/bottom-hero-section";
import Table from "@/Kings & Queens/image 1.svg"

const ServicesPage: React.FC = () => {
    const router = useRouter();
    
    // Service data with proper icons (8 services)
    const services = [
        {
            id: 1,
            icon: Dry,
            title: "Dry Cleaning",
            description: "Professional dry cleaning for suits, dresses, coats, and all garments requiring special care",
            pricing: [
                { item: "Men's Suit (2-piece)", price: 18.99 },
                { item: "Men's Suit (3-piece)", price: 24.99 },
                { item: "Women's Dress", price: 16.99 },
                { item: "Blazer/Sport Coat", price: 12.99 },
                { item: "Overcoat/Topcoat", price: 22.99 },
                { item: "Pants/Trousers", price: 8.99 },
                { item: "Skirt", price: 9.99 },
                { item: "Blouse/Shirt", price: 7.99 },
                { item: "Tie", price: 4.99 },
                { item: "Sweater", price: 11.99 }
            ]
        },
        {
            id: 2,
            icon: Shirt,
            title: "Delicate Clothing",
            description: "Expert care for delicate fabrics including silk, cashmere, lace, and fine materials",
            pricing: [
                { item: "Silk Blouse", price: 14.99 },
                { item: "Cashmere Sweater", price: 19.99 },
                { item: "Lace Dress", price: 21.99 },
                { item: "Beaded Garment", price: 24.99 },
                { item: "Designer Dress", price: 28.99 },
                { item: "Silk Scarf", price: 8.99 },
                { item: "Wool Coat", price: 26.99 },
                { item: "Vintage Clothing", price: 22.99 },
                { item: "Evening Gown", price: 32.99 }
            ]
        },
        {
            id: 3,
            icon: Repairs,
            title: "Alterations",
            description: "Professional alterations and tailoring services for perfect fit and clothing repairs",
            pricing: [
                { item: "Hem Pants", price: 12.99 },
                { item: "Hem Dress/Skirt", price: 14.99 },
                { item: "Take in/Let out Waist", price: 18.99 },
                { item: "Shorten Sleeves", price: 16.99 },
                { item: "Replace Zipper", price: 22.99 },
                { item: "Button Replacement", price: 3.99 },
                { item: "Patch/Repair Hole", price: 8.99 },
                { item: "Taper Legs", price: 19.99 },
                { item: "Resize Shoulders", price: 35.99 },
                { item: "Custom Tailoring", price: 45.99 }
            ]
        },
        {
            id: 4,
            icon: Wedding,
            title: "Laundry Services",
            description: "Complete wash, dry, and fold services with professional laundering and pressing",
            pricing: [
                { item: "Wash, Dry & Fold - One bucket", price: "£35-45" },
                { item: "Dress Shirt (5 or more £3 each)", price: 5.00 },
                { item: "Comforter (Twin)", price: 12.99 },
                { item: "Comforter (Queen/King)", price: 18.99 },
                { item: "Blanket", price: 9.99 },
                { item: "Pillows (pair)", price: 14.99 },
                { item: "Curtains (per panel)", price: 8.99 },
                { item: "Tablecloth", price: 11.99 },
                { item: "Sleeping Bag", price: 16.99 }
            ]
        },
        {
            id: 5,
            icon: HouseHold,
            title: "AirBnb Laundry",
            description: "Specialized laundry services for AirBnb hosts including linens, towels, and quick turnaround",
            pricing: [
                { item: "Bed Sheet Set (Twin)", price: 8.99 },
                { item: "Bed Sheet Set (Queen/King)", price: 11.99 },
                { item: "Pillowcase (pair)", price: 4.99 },
                { item: "Bath Towel", price: 3.99 },
                { item: "Hand Towel", price: 2.99 },
                { item: "Washcloth", price: 1.99 },
                { item: "Duvet Cover", price: 12.99 },
                { item: "Complete Room Linen Set", price: 24.99 },
                { item: "Express Service (same day)", price: 15.99 },
                { item: "Bulk Discount (20+ items)", price: "20% off" }
            ]
        }
    ];
    
    // Main services for display (first 5)
    const mainServices = services.slice(0, 5);

    // Featured services for bottom section (first 4)
    // const featuredServices = services.slice(0, 4);

    const handleOrderClick = (serviceId: number) => {
        // Navigate to the order page with the service ID as a query parameter
        router.push(`/service/order?serviceId=${serviceId}`);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
                <Header />

                {/* Hero Section */}
                <section className="py-12 sm:py-16 lg:py-20 ">
                    <ServicesHeroSection
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
                                    onButtonClick={() => handleOrderClick(service.id)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    
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
