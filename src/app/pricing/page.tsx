"use client"
import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ServiceItem from "../components/pricing-comp/pricingcomp";
import DryCleaningProcess from "../components/pricing-service/pricing-service";

// Define the service type
interface Service {
    id: string;
    title: string;
    subtitle?: string;
    price: number | string;
    category: string;
}

// Next.js page component - no custom props allowed
export default function PricingPage() {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const defaultServices: Service[] = [
        // DRY CLEANING/SHIRTS
        { id: '1', title: 'Shirt on Hanger', subtitle: 'Dry Clean', price: 5.00, category: 'Dry Cleaning/Shirts' },
        { id: '2', title: 'Shirt Folded', subtitle: 'Dry Clean', price: 5.00, category: 'Dry Cleaning/Shirts' },
        { id: '3', title: 'Suits', subtitle: 'Dry Clean', price: 16.99, category: 'Dry Cleaning/Shirts' },
        { id: '4', title: 'Trousers/Skirt', subtitle: 'Dry Clean', price: 11.99, category: 'Dry Cleaning/Shirts' },
        { id: '5', title: 'Knitwear', subtitle: 'Dry Clean', price: 10.99, category: 'Dry Cleaning/Shirts' },
        { id: '6', title: 'Raincoat', subtitle: 'Dry Clean', price: 24.00, category: 'Dry Cleaning/Shirts' },
        { id: '7', title: 'Coat', subtitle: 'Dry Clean', price: 25.00, category: 'Dry Cleaning/Shirts' },
        { id: '8', title: 'Tie', subtitle: 'Dry Clean', price: 3.00, category: 'Dry Cleaning/Shirts' },
        { id: '40', title: 'Dress Shirt', subtitle: '5 or more £3 each', price: 5.00, category: 'Dry Cleaning/Shirts' },
        
        // SUEDE & LEATHER
        { id: '9', title: 'Jacket', subtitle: 'Suede & Leather', price: 85.99, category: 'Suede & Leather' },
        { id: '10', title: 'Skirt', subtitle: 'Suede & Leather', price: 52.99, category: 'Suede & Leather' },
        { id: '11', title: 'Coat', subtitle: 'Suede & Leather', price: 120.99, category: 'Suede & Leather' },
        { id: '12', title: 'Dress', subtitle: 'Suede & Leather', price: 89.99, category: 'Suede & Leather' },
        
        // SILK/LINEN/VELVET
        { id: '13', title: 'Dress', subtitle: 'Silk/Linen/Velvet', price: 26.00, category: 'Silk/Linen/Velvet' },
        { id: '14', title: 'Skirt', subtitle: 'Silk/Linen/Velvet', price: 12.99, category: 'Silk/Linen/Velvet' },
        { id: '15', title: 'Blouse', subtitle: 'Silk/Linen/Velvet', price: 11.99, category: 'Silk/Linen/Velvet' },
        { id: '16', title: 'Wedding Dresses', subtitle: 'Silk/Linen/Velvet', price: 100.00, category: 'Silk/Linen/Velvet' },
        
        // LAUNDRY
        { id: '17', title: 'Pillowcase', subtitle: 'Laundry', price: 3.50, category: 'Laundry' },
        { id: '18', title: 'Double Sheet', subtitle: 'Laundry', price: 10.00, category: 'Laundry' },
        { id: '19', title: 'Double Duvet Cover', subtitle: 'Laundry', price: 13.50, category: 'Laundry' },
        { id: '20', title: 'Single Duvet', subtitle: 'Laundry', price: 18.99, category: 'Laundry' },
        { id: '21', title: 'Double Duvet', subtitle: 'Laundry', price: 25.00, category: 'Laundry' },
        { id: '22', title: 'King/Queen Duvet', subtitle: 'Laundry', price: 35.00, category: 'Laundry' },
        { id: '23', title: 'Blanket', subtitle: 'from', price: 15.99, category: 'Laundry' },
        { id: '24', title: 'Towels', subtitle: 'Laundry', price: 5.00, category: 'Laundry' },
        { id: '41', title: 'Wash, Dry & Fold', subtitle: 'One bucket', price: '£35-45', category: 'Laundry' },
        
        // SERVICE WASHES
        { id: '25', title: 'Small', subtitle: 'Service Wash', price: 26.00, category: 'Service Washes' },
        { id: '26', title: 'Medium', subtitle: 'Service Wash', price: 30.00, category: 'Service Washes' },
        { id: '27', title: 'Large', subtitle: 'Service Wash', price: 35.00, category: 'Service Washes' },
        { id: '28', title: 'X-Large', subtitle: 'Service Wash', price: 50.00, category: 'Service Washes' },
        
        // TRAINERS/SNEAKERS
        { id: '29', title: 'Deep Clean', subtitle: 'Trainers/Sneakers', price: 25.00, category: 'Trainers/Sneakers' },
        { id: '30', title: 'Restoration', subtitle: 'Trainers/Sneakers', price: 50.00, category: 'Trainers/Sneakers' },
        
        // REPAIRS & ALTERATIONS
        { id: '31', title: 'Trouser Shorten/Lengthen', subtitle: 'Repairs & Alterations', price: 20.00, category: 'Repairs & Alterations' },
        { id: '32', title: 'Skirt Shorten/Lengthen', subtitle: 'Repairs & Alterations', price: 20.00, category: 'Repairs & Alterations' },
        { id: '33', title: 'Trouser/Skirt New Zip', subtitle: 'Repairs & Alterations', price: 22.50, category: 'Repairs & Alterations' },
        { id: '34', title: 'Shirt Shorten Sleeve', subtitle: 'Repairs & Alterations', price: 22.00, category: 'Repairs & Alterations' },
        { id: '35', title: 'Jacket Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 49.50, category: 'Repairs & Alterations' },
        { id: '36', title: 'Trouser Waist In', subtitle: 'Repairs & Alterations', price: 27.50, category: 'Repairs & Alterations' },
        { id: '37', title: 'Dress Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 38.50, category: 'Repairs & Alterations' },
        { id: '38', title: 'Skirt Waist In', subtitle: 'Repairs & Alterations', price: 27.50, category: 'Repairs & Alterations' },
        { id: '39', title: 'Coat Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 55.00, category: 'Repairs & Alterations' }
    ];

    // If you need to fetch services dynamically, you can do it here
    // For example, using useEffect or server-side data fetching
    const serviceList = defaultServices;

    const handleToggleExpand = (serviceId: string) => {
        setExpandedItem(expandedItem === serviceId ? null : serviceId);
    };

    // Group services by category
    const groupedServices = serviceList.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as { [key: string]: Service[] });

    return (
        <div className="bg-black text-white">
            {/* Container with consistent responsive padding */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Header />
                {/* Hero Section */}
                <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-12 sm:mb-16">
                    <div className="flex justify-center">
                        <div className="text-center max-w-6xl mb-1">
                            <h4 className="text-white text-lg font-[400] mb-2">
                                Clear Pricing
                            </h4>
                            <h2 className="text-white text-3xl md:text-4xl font-extralight">
                                Professional dry cleaning for all kinds of garments, and more with a 24 hour turnaround
                            </h2>
                            <p className="text-gray-400 text-sm mt-4 italic">
                                * All items except Service Washes are starting prices
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services by Category */}
                {Object.entries(groupedServices).map(([category, services]) => (
                    <section key={category} className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                        <h3 className="text-white text-2xl font-light mb-6 text-center">
                            {category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service) => (
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
                ))}

                {/* Dry Cleaning Process Section */}
                <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20">
                    <DryCleaningProcess />
                </section>
            </div>

            {/* Footer - typically full width */}
            <Footer />
        </div>
    );
}
