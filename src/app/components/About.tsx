import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-32 px-[6vw] md:px-[4vw] bg-bg2 border-t border-bdr2 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <Reveal>
        <div className="relative">
          <div className="w-full aspect-[4/5] bg-linear-to-b from-bg3 to-bg border border-bdr2 flex items-center justify-center relative overflow-hidden">
            {/* Replaced placeholder with an actual image */}
             <ImageWithFallback 
                src="/images/knq-storefront-elite.jpg"
                alt="Kings & Queens Dry Cleaning storefront at 221 Waterloo Road, London SE1"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-4 border border-gold/15 pointer-events-none">
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-[150px] h-[150px] bg-linear-to-br from-gold-deep via-gold-h to-gold-deep flex flex-col items-center justify-center text-center z-10 shadow-2xl">
            <div className="font-serif text-[2.6rem] text-bg leading-none">SE1</div>
            <div className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-bg opacity-70 mt-1">
              Waterloo Road
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
          Our Story
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.01em] max-w-[600px]">
          Established over 15 years ago, rooted <em className="italic text-gold">in London.</em>
        </h2>
        <p className="text-[0.92rem] text-txt2 leading-[1.8] font-light mt-7 max-w-[460px]">
          Kings & Queens Dry Cleaning and Laundrette has been delivering the finest dry cleaning, laundry, alteration and restoration services from Waterloo, Central London. With exacting quality, peerless service and reducing environmental impact at the heart of our philosophy.
        </p>
        <p className="text-[0.92rem] text-txt2 leading-[1.8] font-light mt-7 max-w-[460px]">
          From a single laundrette, we've grown into a trusted partner for Hilton, Shangri-La, Park Plaza, Airbnb hosts, Somerset House, London South Bank University, and over 130,000 individual customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-9">
          {[
            "Free Collection & Delivery",
            "24-Hour Turnaround",
            "Eco-Friendly Products",
            "Satisfaction Guarantee",
            "Same-Day Available",
            "WhatsApp Booking",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 text-[0.82rem] font-medium">
              <div className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
              {feat}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 font-sans text-[0.76rem] font-semibold tracking-[0.12em] uppercase bg-linear-to-br from-gold-deep via-gold-h to-gold-deep text-bg transition-all duration-250 hover:bg-gold-h hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,164,78,0.25)]"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
