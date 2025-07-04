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
    <div className="  bg-black ">
      <Header /> 
      <SuperHeroSection image={Man} />
      <LogoCarousel />
      <div className="px-10">
        <ServicesSection />
        <FeaturesBanner />
        <PricingSection />
        <HowItWorksSection />
        <ReviewsSection />
        <PremiumLaundrySection />
        <FAQSection />
        {/* <HeroSection
        logoText="Dry Cleaner"
        title="The best Dry Cleaning delivered directly to your door"
        subtitle="Premium dry cleaning service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        buttonText="Book Your Service"
        heroImage="/path-to-your-folded-clothes-image.jpg"
      /> */}
      </div>
      <BottomHeroSection image={Table}/>
      <Footer />
    </div>
  );
}
