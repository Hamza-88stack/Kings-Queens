import Header from "./components/header/header";
import ServicesSection from "./components/service-section/service-section";
import FeaturesBanner from "./components/feature-section/featuresection";
import PricingSection from "./components/pricing-section/pricingsection";
import HowItWorksSection from "./components/howitworks/howitworks";
import ReviewsSection from "./components/review-section/reviewsection";
import PremiumLaundrySection from "./components/premiumlaundarysection/premiumlaundary";
import FAQSection from "./components/faqs-section/faqssection";
import Footer from "./components/footer/footer";
import LogoCarousel from "./components/logo-carousel/logo-carousel";
import SuperHeroSection from "./components/super-hero-section/section";
import Man from "@/Kings & Queens/Group 197.svg"
import BottomHeroSection from "./components/bottom-hero-section/bottom-hero-section";
import Table from "@/Kings & Queens/image 1.svg"

export default function Home() {
  return (
    <div className="bg-black">
      {/* Container with consistent responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <Header />
        
        {/* Hero Section */}
        <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <SuperHeroSection image={Man} />
        </section>

        {/* Logo Carousel */}
        <section className="mt-12  ">
          <LogoCarousel />
        </section>

        {/* Services Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <ServicesSection />
        </section>
      </div>

      {/* Full-width Features Banner */}
      <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <FeaturesBanner />
      </section>

      {/* Container for middle sections */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Pricing Section */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <PricingSection />
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

      {/* Footer - typically full width */}
      <Footer />
    </div>
  );
}