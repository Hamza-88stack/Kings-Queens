"use client";

import { useState, useEffect } from "react";
import Header from "./components/header/header";
import ServicesSection from "./components/service-section/service-section";
import FeaturesBanner from "./components/feature-section/featuresection";
//from "./components/pricing-section/pricingsection";
import HowItWorksSection from "./components/howitworks/howitworks";
import ReviewsSection from "./components/review-section/reviewsection";
import PremiumLaundrySection from "./components/premiumlaundarysection/premiumlaundary";
import FAQSection from "./components/faqs-section/faqssection";
import Footer from "./components/footer/footer";
import LogoCarousel from "./components/logo-carousel/logo-carousel";
import SuperHeroSection from "./components/super-hero-section/section";
import Man from "@/Kings & Queens/Adobe Express - file.png"
import BottomHeroSection from "./components/bottom-hero-section/bottom-hero-section";
import Table from "@/Kings & Queens/image 1.svg"
import { MessageCircle } from "lucide-react";
import ContactModal from "./components/contact-modal";
import Women from "../Kings & Queens/craiyon_133139_image.png"
export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [, setIsChatModalOpen] = useState(false);

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

  return (
    <div className="bg-black">
      {/* Container with consistent responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <Header />

        {/* Hero Section */}
        <section className="mt-6   ">
          <SuperHeroSection image={Women} />
        </section>

        {/* Logo Carousel */}
        <section className="mt-12  ">
          <LogoCarousel />
        </section>

        {/* Services Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <ServicesSection />
        </section>


        {/* Full-width Features Banner */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24  sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20">
          <FeaturesBanner />
        </section>


        {/* Pricing Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        
        </section>

        {/* How It Works Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <HowItWorksSection />
        </section>

        {/* Reviews Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <ReviewsSection />
        </section>

        {/* Premium Laundry Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <PremiumLaundrySection />
        </section>

        {/* FAQ Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <FAQSection />
        </section>

        {/* Bottom Hero Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <BottomHeroSection image={Table} />
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
      {/* Footer - typically full width */}
      <Footer />
    </div>
  );
}