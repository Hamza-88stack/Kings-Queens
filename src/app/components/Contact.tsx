import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-[6vw] md:px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-bdr2">
      <Reveal>
        <div className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
          Get in Touch
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.01em] max-w-[600px] mb-10">
          The best dry cleaning, delivered to <em className="italic text-gold">your door.</em>
        </h2>

        <div className="mb-9">
          <h3 className="font-serif text-[0.95rem] mb-2.5">Visit</h3>
          <p className="text-[0.85rem] text-txt2 leading-[1.8] font-light">
            Kings & Queens Dry Cleaning<br />221 Waterloo Road<br />London SE1 8XH
          </p>
        </div>

        <div className="mb-9">
          <h3 className="font-serif text-[0.95rem] mb-2.5">Call</h3>
          <p className="text-[0.85rem] text-txt2 leading-[1.8] font-light">
            <a href="tel:02071124884" className="hover:text-gold transition-colors">020 7112 4884</a>
          </p>
        </div>

        <div className="mb-9">
          <h3 className="font-serif text-[0.95rem] mb-2.5">Email</h3>
          <p className="text-[0.85rem] text-txt2 leading-[1.8] font-light">
            <a href="mailto:kingsandqueens.dcl@gmail.com" className="hover:text-gold transition-colors">kingsandqueens.dcl@gmail.com</a>
          </p>
        </div>

        <a
          href="https://wa.me/447512244796"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-white text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-all duration-250 hover:bg-[#1FB855] hover:-translate-y-px mt-5"
        >
          Chat on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-bg3 p-11 border border-bdr2">
          <h3 className="font-serif text-[1.5rem] mb-7">Book a Collection</h3>
          {submitted ? (
            <p className="py-12 text-center font-serif text-[1.2rem] animate-pulse">
              Thank you. We'll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-txt3">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-3.5 py-3 bg-bg border border-bdr text-txt text-[0.85rem] font-sans outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-txt3">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    required
                    className="w-full px-3.5 py-3 bg-bg border border-bdr text-txt text-[0.85rem] font-sans outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-txt3">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-3.5 py-3 bg-bg border border-bdr text-txt text-[0.85rem] font-sans outline-none transition-colors focus:border-gold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-txt3">Service</label>
                <div className="relative">
                  <select
                    className="w-full px-3.5 py-3 bg-bg border border-bdr text-txt text-[0.85rem] font-sans outline-none transition-colors focus:border-gold appearance-none cursor-pointer"
                  >
                    <option>Dry Cleaning</option>
                    <option>Laundry / Service Wash</option>
                    <option>Shirt Service</option>
                    <option>Wedding Dress</option>
                    <option>Shoe Cleaning & Repair</option>
                    <option>Alterations</option>
                    <option>Curtains & Household</option>
                    <option>Hotel / Business Contract</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="#71717A" strokeWidth="1.5"/>
                     </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-txt3">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3.5 py-3 bg-bg border border-bdr text-txt text-[0.85rem] font-sans outline-none transition-colors focus:border-gold min-h-[90px] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2.5 px-9 py-4 mt-2 font-sans text-[0.76rem] font-semibold tracking-[0.12em] uppercase bg-linear-to-br from-gold-deep via-gold-h to-gold-deep text-bg transition-all duration-250 hover:bg-gold-h hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,164,78,0.25)] border-none cursor-pointer"
              >
                Send Enquiry
                <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
