import { Reveal } from "./ui/Reveal";

export function Process() {
  const steps = [
    {
      id: "1",
      title: "You Book",
      desc: "Schedule online, via WhatsApp, or by phone. Flexible slots including evenings and weekends.",
    },
    {
      id: "2",
      title: "We Collect",
      desc: "Pop items in a bag. Our driver arrives at your door to collect and confirm what you need done.",
    },
    {
      id: "3",
      title: "We Clean",
      desc: "Professionally cleaned, pressed and finished with eco-friendly products and meticulous care.",
    },
    {
      id: "4",
      title: "Delivered Back",
      desc: "Garments returned within 24 hours — clean, pressed and ready. Satisfaction guaranteed.",
    },
  ];

  return (
    <section id="process" className="py-32 px-[6vw] md:px-[4vw] bg-bg2 border-y border-bdr2">
      <Reveal className="text-center mb-20 mx-auto">
        <div className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
          How It Works
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.01em] max-w-[460px] mx-auto">
          Fresh laundry, <em className="italic text-gold">zero hassle.</em>
        </h2>
      </Reveal>

      <div className="max-w-[1050px] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
        <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-bdr" />
        
        {steps.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.15}>
            <div className="text-center relative px-6 group">
              <div className="w-14 h-14 rounded-full border border-bdr bg-bg2 flex items-center justify-center mx-auto mb-8 relative z-10 font-serif text-[1.1rem] text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold-dim">
                {step.id}
              </div>
              <h3 className="font-serif text-[1.05rem] mb-2">{step.title}</h3>
              <p className="text-[0.8rem] text-txt2 leading-[1.7] font-light">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
