import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="relative py-24 px-[4vw] text-center bg-linear-to-br from-gold-deep via-gold-h to-[#C1A75F] text-bg overflow-hidden">
        {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_60px,rgba(0,0,0,0.03)_60px,rgba(0,0,0,0.03)_120px)] pointer-events-none" />
      
      <Reveal className="relative z-10">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-medium text-bg leading-[1.18] mb-3">
          100% happy or we re-clean<br />your items for free.
        </h2>
        <p className="text-[0.92rem] text-[rgba(9,9,11,0.5)] mb-9">
          Free collection. 24-hour turnaround. No surprises.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 font-sans text-[0.76rem] font-semibold tracking-[0.12em] uppercase bg-bg text-gold transition-all duration-250 hover:bg-bg2 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] border-none"
        >
          Book Your Collection
          <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </div>
  );
}
