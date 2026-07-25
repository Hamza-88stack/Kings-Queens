export function Marquee() {
  const content = (
    <div className="flex items-center gap-10 px-5 whitespace-nowrap">
      {[
        "Free Collection & Delivery",
        "24-Hour Turnaround",
        "Satisfaction Guaranteed",
        "Eco-Friendly Products",
        "130,000+ Customers Served",
        "Serving Hotels Across London",
        "5,433 Five-Star Reviews",
      ].map((text, i) => (
        <div key={i} className="flex items-center gap-10">
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-txt3">
            {text}
          </span>
          <div className="w-[3px] h-[3px] rounded-full bg-gold shrink-0" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-5 border-y border-bdr2 bg-bg2 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
