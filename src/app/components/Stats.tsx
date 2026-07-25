import { Reveal } from "./ui/Reveal";

export function Stats() {
  const stats = [
    { value: "5,433", label: "Five-Star Reviews" },
    { value: "130,000+", label: "Customers Served" },
    { value: "15+", label: "Years in London" },
    { value: "99.9%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-bdr2">
      {stats.map((stat, i) => (
        <Reveal key={i} delay={i * 0.1} className="h-full">
          <div className="py-12 px-10 text-center border-r border-bdr2 transition-colors duration-300 hover:bg-bg2 h-full border-b sm:border-b-0 last:border-r-0 sm:nth-2n:border-r-0 lg:border-r">
            <div className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] text-gold leading-none">
              {stat.value}
            </div>
            <div className="text-[0.67rem] font-medium tracking-[0.15em] uppercase text-txt3 mt-2">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
