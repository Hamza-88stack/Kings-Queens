import { Reveal } from "./ui/Reveal";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Dry Cleaning",
      desc: "Professional solvent cleaning for suits, dresses, coats and delicate fabrics. Eco-friendly products, meticulous hand-finishing.",
    },
    {
      id: "02",
      title: "Shirt Service",
      desc: "Beautifully cleaned and crisply pressed shirts returned on hangers or folded. Same-day turnaround available.",
    },
    {
      id: "03",
      title: "Laundry & Service Wash",
      desc: "Full-service wash, tumble dry and fold. Starting from £26 per load. Neatly packaged and returned fresh.",
    },
    {
      id: "04",
      title: "Wedding Dresses",
      desc: "Specialist cleaning, stain removal, restoration and preservation. Protect the memories woven into every stitch.",
    },
    {
      id: "05",
      title: "Shoe Cleaning & Repair",
      desc: "Professional restoration for trainers, leather shoes and luxury footwear. Sole repair, deep cleaning, polish.",
    },
    {
      id: "06",
      title: "Alterations",
      desc: "Expert tailoring to ensure your garments fit perfectly and reflect your personal style. From trouser hems to full relines.",
    },
    {
      id: "07",
      title: "Curtains & Household",
      desc: "Duvets, bed linen, curtains, rugs, cushion covers. Professionally cleaned and returned ready to use.",
    },
    {
      id: "08",
      title: "Hotels & Business",
      desc: "Bespoke contracts for Hilton, Shangri-La, Park Plaza, Airbnb hosts, care homes and corporate clients.",
    },
  ];

  return (
    <section id="services" className="py-32 px-[6vw] md:px-[4vw]">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 flex-wrap">
        <Reveal>
          <div className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            What We Do
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.01em] max-w-[600px]">
            Everything perfectly <em className="italic text-gold">taken care of.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="max-w-[360px]">
          <p className="text-[0.9rem] text-txt2 leading-[1.7] font-light">
            From everyday shirts to couture wedding gowns, every piece receives the red carpet treatment you'd expect from London's premier cleaners.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-bdr2">
        {services.map((svc, i) => (
          <Reveal key={svc.id} delay={i * 0.1} className="h-full">
            <div className="group h-full p-10 border-b lg:border-b-0 border-r border-bdr2 relative overflow-hidden transition-colors duration-300 hover:bg-bg2 cursor-default 
              sm:nth-2n:border-r-0 lg:nth-2n:border-r
              lg:nth-4n:border-r-0
              last:border-b-0 sm:last:border-b-0 sm:nth-last-2:border-b-0 lg:border-b-[1px]
              [&]:border-b border-bdr2
              lg:[&:nth-child(n+5)]:border-b-0
            ">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gold origin-left scale-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <div className="text-[0.62rem] font-semibold tracking-[0.15em] text-txt3 mb-7 tabular-nums">
                {svc.id}
              </div>
              <h3 className="font-serif text-[1.35rem] font-semibold mb-3">{svc.title}</h3>
              <p className="text-[0.85rem] text-txt2 leading-[1.75] font-normal">{svc.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
