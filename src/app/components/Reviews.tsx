import { Reveal } from "./ui/Reveal";

export function Reviews() {
  const reviews = [
    {
      text: "Absolutely outstanding service. I brought in my favourite jeans covered in stubborn grass and paint stains. Somehow, these guys worked magic. The stains are completely gone and the jeans look brand new.",
      author: "Margarita P.",
      initial: "M",
    },
    {
      text: "Amazing service. They handled my silk dress and winter coat with real care. Collection was discreet, everything came back perfectly pressed and beautifully fresh.",
      author: "Anastasia K.",
      initial: "A",
    },
    {
      text: "We used Kings & Queens during our London stay. Shirts and suits were cleaned quickly, delivered to the hotel on time, and packed beautifully. Highly recommend.",
      author: "Dmitri S.",
      initial: "D",
    },
  ];

  return (
    <section id="reviews" className="py-32 px-[6vw] md:px-[4vw]">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div>
            <div className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
              Client Reviews
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.01em] max-w-[600px]">
              Over 130,000 people trust <em className="italic text-gold">the crown.</em>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bdr2 border border-bdr2">
        {reviews.map((review, i) => (
          <Reveal key={i} delay={i * 0.15} className="h-full">
            <div className="bg-bg p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-bg2 min-h-[300px] h-full">
              <div className="font-serif text-[1rem] italic leading-[1.75] text-txt mb-8 relative pt-7">
                <span className="absolute top-[-0.3rem] left-0 font-serif text-[3.5rem] text-gold opacity-20 leading-none">“</span>
                {review.text}
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-bdr2">
                <div className="w-[34px] h-[34px] rounded-full bg-gold-dim border border-gold flex items-center justify-center font-serif text-[0.8rem] text-gold">
                  {review.initial}
                </div>
                <div>
                  <div className="text-[0.82rem] font-medium">{review.author}</div>
                  <div className="text-[0.68rem] text-txt3 mt-px">Google Review</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
