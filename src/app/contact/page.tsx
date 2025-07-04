"use client"
import Image from "next/image";
import ServiceCard from "../components/card/card";
import ServicesHeroSection from "../components/hero-section/hero";
import Lady from "@/Kings & Queens/women-selecting-clothes 1.svg"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact-form/contact-form";

const ServicesPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8">
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
            <div className="container mx-auto px-4 py-12">

                <ContactForm />
                {/* Featured Services Grid */}

                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;