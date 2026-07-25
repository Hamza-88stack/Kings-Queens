import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Content Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <img 
               src="/images/luxury-dry-cleaning-hero.jpg"
               alt="Tailor at work"
               className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 border border-neutral-800"
             />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">Established Excellence</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">A Legacy of Quality</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Founded on the principles of traditional craftsmanship and modern convenience, Kings & Queens Dry Cleaning has established itself as London's premier garment care specialist. We noticed a gap in the market for a service that truly respects the investment people make in their wardrobes.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We don't just "wash clothes." We inspect, diagnose, treat, and finish every item with a level of detail that is rare in today's fast-paced world. From the solvents we use to the way we package your items, every step is designed to extend the life of your garments.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ValueCard 
            number="01" 
            title="Quality First" 
            desc="We never compromise on quality for speed. Every garment passes a 3-point inspection before it is returned to you."
          />
           <ValueCard 
            number="02" 
            title="Eco-Conscious" 
            desc="We utilise modern, biodegradable solvents that are tough on dirt but safe for the environment and your skin."
          />
           <ValueCard 
            number="03" 
            title="Customer Service" 
            desc="Our team is dedicated to providing a seamless, stress-free experience. We are here to serve you."
          />
        </div>

        {/* Location Section */}
        <div className="bg-neutral-900 p-12 text-center">
            <h2 className="text-3xl font-serif text-white mb-8">Visit Our Boutique</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-neutral-400">
               <div className="flex flex-col items-center">
                  <MapPin className="text-amber-500 mb-4" size={32} />
                  <p>123 High Street, Kensington</p>
                  <p>London, W8 5SA</p>
               </div>
               <div className="h-px w-24 bg-neutral-700 md:h-12 md:w-px" />
               <div className="flex flex-col items-center">
                  <Clock className="text-amber-500 mb-4" size={32} />
                  <p>Mon - Fri: 08:00 - 19:00</p>
                  <p>Sat: 09:00 - 17:00</p>
               </div>
               <div className="h-px w-24 bg-neutral-700 md:h-12 md:w-px" />
               <div className="flex flex-col items-center">
                  <Phone className="text-amber-500 mb-4" size={32} />
                  <p>020 1234 5678</p>
                  <p>info@knqdcl.co.uk</p>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}

function ValueCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="border-t border-amber-500/30 pt-8">
      <span className="text-amber-500 text-4xl font-serif block mb-4 opacity-50">{number}</span>
      <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-4">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}
