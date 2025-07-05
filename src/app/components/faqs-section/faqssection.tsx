"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What types of charts do you sell?",
      answer: "We offer a wide range of downloadable charts including astrology charts, trading and investment charts, educational diagrams and custom chart solutions. Each chart is created with Excel, accuracy and clear visual understanding."
    },
    {
      question: "Are the charts digital or physical products?",
      answer: "All our charts are digital products delivered as downloadable files. This allows for instant access and the ability to print multiple copies if needed."
    },
    {
      question: "How do I receive my chart after purchase?",
      answer: "After completing your purchase, you&apos;ll receive an email with download links to your charts. The files will be available for download immediately and you can access them from your account dashboard."
    },
    {
      question: "What file formats do the charts come in?",
      answer: "Our charts are provided in multiple formats including PDF, PNG, and SVG to ensure compatibility with various devices and printing requirements. Some charts may also include editable formats like AI or PSD files."
    },
    {
      question: "Can I print the charts at home?",
      answer: "Yes, all our digital charts are designed to be print-friendly. They come in high resolution and are optimized for standard paper sizes. We recommend using quality paper for the best results."
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