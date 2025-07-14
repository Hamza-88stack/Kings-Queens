"use client"
import ServicesHeroSection from "../components/hero-section/hero";
import Lady from "@/Kings & Queens/contact-lady.svg"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact-form/contact-form";
import ReviewsSection from "../components/review-section/reviewsection";

const ServicesPage: React.FC = () => {


    return (
        <div className="bg-black text-white">
            {/* Container with consistent responsive padding */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Header />

                {/* Hero Section */}
                <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-12 sm:mb-16 ">
                    <ServicesHeroSection
                        image={Lady}
                        imageAlt="Woman holding laundry basket"
                        title="Please feel free to contact us and we will get back to you as soon as we can"
                        subtitle="Contact Us"
                        breadcrumbCurrent="Contact Us"
                    />
                </section>

                {/* Contact Form Section */}
                <section className="mb-12 sm:mb-16 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 ">
                    <ContactForm />
                </section>

                {/* Reviews Section */}
                <section className="mb-12 sm:mb-16 ">
                    <ReviewsSection />
                </section>
            </div>

            {/* Footer - typically full width */}
            <Footer />
        </div>
    );
};

export default ServicesPage;