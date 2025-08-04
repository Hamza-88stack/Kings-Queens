"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Header from "@/app/components/header/header";
import HowItWorksSection from "@/app/components/howitworks/howitworks";
import Footer from "@/app/components/footer/footer";
import ContactModal from "@/app/components/contact-modal";
import { MessageCircle } from "lucide-react";
import HeroSection from "@/app/components/order-super-section/supersection";
import FeaturesBanner from "@/app/components/feature-section/featuresection";
import LogoCarousel from "@/app/components/logo-carousel/logo-carousel";
import ServiceItem from "@/app/components/pricing-comp/pricingcomp";

// Import your service icons
import Shirt from "@/Kings & Queens/5654.svg"
import Wedding from "@/Kings & Queens/Vect123or.svg"
import Dry from "@/Kings & Queens/Kings & Queens/Group 71.svg"
import HouseHold from "@/Kings & Queens/Kings & Queens/Union-1.svg"
import Repairs from "@/Kings & Queens/Kings & Queens/Union.svg"

// Service data (same as in your services page)
const servicesData = [
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
      { item: "Wash & Fold (per lb)", price: 1.99 },
      { item: "Dress Shirts (laundered)", price: 3.99 },
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

interface CartItem {
  item: string;
  price: number | string;
  quantity: number;
}

export default function ServiceOrder() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [, setIsChatModalOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (serviceId) {
      const service = servicesData.find(s => s.id === parseInt(serviceId));
      if (service) {
        setSelectedService(service);
      }
    } else {
      // Default to first service if no serviceId provided
      setSelectedService(servicesData[0]);
    }
  }, [serviceId]);

  useEffect(() => {
    const handleChatModalStateChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.isOpen === "boolean") {
        setIsChatModalOpen(customEvent.detail.isOpen);
      }
    };
    document.addEventListener("contactModalStateChange", handleChatModalStateChange);
    return () => {
      document.removeEventListener("contactModalStateChange", handleChatModalStateChange);
    };
  }, []);

  const handleOpenChat = () => {
    document.dispatchEvent(new CustomEvent("toggleContactModal"));
    if (isBookingModalOpen) {
      setIsBookingModalOpen(false);
    }
  };

  const addToCart = (item: string, price: number | string) => {
    if (typeof price === 'string') return; // Skip items with non-numeric prices like "20% off"

    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item === item);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.item === item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { item, price, quantity: 1 }];
      }
    });

    // Close the expanded item after adding to cart
    setExpandedItem(null);
  };

  // const updateQuantity = (item: string, newQuantity: number) => {
  //   if (newQuantity === 0) {
  //     setCart(prevCart => prevCart.filter(cartItem => cartItem.item !== item));
  //   } else {
  //     setCart(prevCart =>
  //       prevCart.map(cartItem =>
  //         cartItem.item === item
  //           ? { ...cartItem, quantity: newQuantity }
  //           : cartItem
  //       )
  //     );
  //   }
  // };

  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => {
  //     if (typeof item.price === 'number') {
  //       return total + (item.price * item.quantity);
  //     }
  //     return total;
  //   }, 0).toFixed(2);
  // };

  // const getTotalItems = () => {
  //   return cart.reduce((total, item) => total + item.quantity, 0);
  // };

  const handleToggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  if (!selectedService) {
    return <div className="bg-black text-white min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-black">
      {/* Container with consistent responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <Header />

        <HeroSection
          title={`Order ${selectedService.title}`}
          breadcrumbCurrent={selectedService.title}
        />

        {/* Logo Carousel */}
        <section className="mt-12">
          <LogoCarousel />
        </section>

        {/* How It Works Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <HowItWorksSection />
        </section>

        {/* Service Header */}
        <section className="mt-12 mb-8">
          <div className=" items-center flex justify-center text-center mb-6">
            <div>
              <h1 className="text-white text-3xl  font-light">{selectedService.title}</h1>
              <p className="text-gray-300 mt-2">{selectedService.description}</p>
            </div>
          </div>
        </section>

        {/* Pricing Grid using ServiceItem components */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="gap-4 grid grid-cols-2">
            {selectedService.pricing.map((priceItem, index) => (
              typeof priceItem.price === 'number' && (
                <ServiceItem
                  key={index}
                  title={priceItem.item}
                  price={priceItem.price}
                  isExpanded={false}
                  onToggleExpand={() => handleToggleExpand(priceItem.item)}

                  onPlaceOrder={() => addToCart(priceItem.item, priceItem.price)}
                />
              )
            ))}
          </div>
        </section>

        {/* Cart Summary */}
        {/* {cart.length > 0 && (
                    <section className="mb-12">
                        <div className="bg-[#141414] rounded-xl p-6 border border-[#C6AE64]">
                            <h3 className="text-white text-xl font-medium mb-4 flex items-center">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Your Order ({getTotalItems()} items)
                            </h3>
                            <div className="space-y-3 mb-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center text-gray-300">
                                        <span>{item.item} x {item.quantity}</span>
                                        <span className="text-[#C6AE64]">${(typeof item.price === 'number' ? item.price * item.quantity : 0).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-4">
                                <div className="flex justify-between items-center text-white text-xl font-semibold">
                                    <span>Total</span>
                                    <span className="text-[#C6AE64]">${getTotalPrice()}</span>
                                </div>
                                <button className="w-full mt-4 bg-gradient-to-r from-[#C6AE64] to-[#9C7238] text-black py-3 rounded-xl font-medium hover:from-[#d4bf73] hover:to-[#a87840] transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </section>
                )} */}




        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20">
          <FeaturesBanner />
        </section>
      </div>

      <div className="fixed bottom-3 right-2 z-50 flex items-center rtl:space-x-reverse">
        <div className="bg-gradient-to-br from-[#C6AE64] to-[#9C7238] rounded-full shadow-lg overflow-hidden flex items-center">
          <button
            onClick={handleOpenChat}
            className={`flex flex-col items-center justify-center px-4 py-2 md:px-6 md:py-3 text-white text-xs transition-colors duration-150 cursor-pointer hover:bg-gradient-to-br hover:from-[#B8A05A] hover:to-[#8B6530]`}
          >
            <MessageCircle className="h-4 w-4 md:h-5 md:w-6 mb-0.5" />
            <span className="pt-1 text-xs">Chat</span>
          </button>
        </div>
        <ContactModal />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}