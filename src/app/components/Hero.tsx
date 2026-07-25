import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[6vw] md:px-[4vw] pt-40 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_70%_40%,var(--color-gold-g),transparent_65%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-[0.68rem] font-semibold tracking-[0.3em] uppercase text-gold mb-10 flex items-center gap-5"
      >
        <div className="w-8 h-px bg-gold" />
        Est. 15+ years — Waterloo, London
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="font-serif font-medium text-[clamp(3.2rem,8vw,7.8rem)] leading-[1.06] tracking-[-0.015em] max-w-[900px]"
      >
        Dry cleaning for<br />those who hate<br />
        <span className="italic text-gold inline-block relative overflow-hidden align-bottom h-[1.08em]">
          <span className="flex flex-col animate-rotate-text">
            <span className="block h-[1.08em] leading-[1.08] whitespace-nowrap">bad service</span>
            <span className="block h-[1.08em] leading-[1.08] whitespace-nowrap">waiting</span>
            <span className="block h-[1.08em] leading-[1.08] whitespace-nowrap">surprises</span>
            <span className="block h-[1.08em] leading-[1.08] whitespace-nowrap">bad service</span>
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        className="text-[1.05rem] font-normal text-txt2 leading-[1.75] max-w-[460px] mt-10"
      >
        Expert dry cleaners trusted by London's finest hotels. Free collection & delivery. 24-hour turnaround.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="flex gap-4 mt-11 flex-wrap flex-col sm:flex-row"
      >
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 font-sans text-[0.76rem] font-semibold tracking-[0.12em] uppercase bg-linear-to-br from-gold-deep via-gold-h to-gold-deep text-bg transition-all duration-250 hover:bg-gold-h hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,164,78,0.25)]"
        >
          Book a Collection
          <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
        </a>
        <a
          href="https://wa.me/447512244796"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 font-sans text-[0.76rem] font-semibold tracking-[0.12em] uppercase bg-transparent text-txt border border-bdr transition-all duration-250 hover:border-gold hover:text-gold"
        >
          WhatsApp Us
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        className="mt-20 pt-10 border-t border-bdr2 flex flex-col md:flex-row md:items-center gap-10 md:gap-10 flex-wrap"
      >
        <div>
          <div className="text-gold text-sm tracking-[3px] mb-1">★★★★★</div>
          <div className="text-[0.73rem] text-txt3">
            <strong className="text-txt font-semibold">5,433</strong> reviews on Google
          </div>
        </div>
        <div className="hidden md:block w-px h-7 bg-bdr" />
        <div className="flex gap-7 items-center flex-wrap">
          {["Hilton", "Shangri-La", "Park Plaza", "Somerset House"].map((brand) => (
            <span
              key={brand}
              className="font-serif text-[0.92rem] italic text-txt3 transition-colors duration-200 hover:text-gold cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
