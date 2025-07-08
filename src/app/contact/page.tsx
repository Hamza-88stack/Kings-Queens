"use client"
import ServicesHeroSection from "../components/hero-section/hero";
import Lady from "@/Kings & Queens/contact-lady.svg"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
// import ContactForm from "../components/contact-form/contact-form";
import ReviewsSection from "../components/review-section/reviewsection";

const ServicesPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4  ">
                <Header />

                <ServicesHeroSection
                    image={
                        Lady}
                    imageAlt="Woman holding laundry basket"
                    title="Please feel free to contact us and we will get back to you as soon as we can"
                    subtitle="Contact Us"
                    breadcrumbCurrent="Contact Us"
                />
            </div>
        

            {/* Services Grid */}
            <div className="container mx-auto px-4 ">

                {/* <ContactForm /> */}
                {/* Featured Services Grid */}
                <ReviewsSection />
                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;