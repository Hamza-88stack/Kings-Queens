"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide professional dry cleaning, laundry, ironing, service washes, and stain removal. We also specialise in caring for delicate fabrics, luxury garments, and bulk laundry for businesses such as hotels, Airbnbs, and care homes. Whether you need a quick wash while visiting London or regular cleaning for your household or business, we've got you covered."
    },
    {
      question: "Do you offer collection and delivery?",
      answer: "Yes, we provide a convenient collection and delivery service across London. Simply book a pickup, and we'll collect your laundry, clean it to the highest standard, and deliver it back to your door. This service is ideal for busy professionals, tourists, and businesses."
    },
    {
      question: "How much does a service wash cost?",
      answer: "Our service washes start from £26 to £50+, depending on load size and specific requirements. We also offer competitive pricing for regular customers and discounted rates for bulk and business orders."
    },
    {
      question: "How long does dry cleaning usually take?",
      answer: "Most dry cleaning and laundry orders are ready within 24–48 hours. For urgent needs, we also offer a same-day and next-day service, so you don't have to wait long to get your clothes fresh and clean."
    },
    {
      question: "Do you work with hotels and businesses?",
      answer: "Yes, we provide reliable laundry and dry cleaning services for hotels, Airbnbs, care homes, and other businesses. We can also create tailored contracts to suit your needs, ensuring consistent quality and timely service."
    }
  ];  

  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-black text-white px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-lg font-[400] mb-4">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            We&apos;re here to help with all your questions and answers in one place.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 px-4 text-left flex items-center justify-between  transition-colors duration-200"
              >
                <span className="text-lg font-[400] pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 pb-6">
                  <p className="font-[200] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
              <div 
              className="w-full h-[1px] mb-4"
              style={{
                background: 'linear-gradient(90deg, #C6AE64 0%, #9C7238 100%)',
              }}
            ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;