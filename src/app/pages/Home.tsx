import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Star, Truck, Clock, ShieldCheck } from "lucide-react";

const HERO_IMG = "/images/luxury-dry-cleaning-hero.jpg";
const SERVICE_IMG = "/images/private-clients-wardrobe.jpg";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMG} 
            alt="Luxury Suit" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-amber-500 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-bold">
              London's Premier Garment Care
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Kings <span className="text-amber-500">&</span> Queens
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto mb-10 italic">
              "Leave the dirty work to us."
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-amber-500 text-neutral-950 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors min-w-[200px]"
              >
                Book Collection
              </Link>
              <Link 
                to="/services" 
                className="border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-950 transition-colors min-w-[200px]"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <div className="bg-neutral-900 border-y border-neutral-800 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <FeatureItem 
            icon={<Truck className="text-amber-500" size={32} />}
            title="We Pick, We Deliver"
            desc="Door-to-door service across London. Schedule a time that suits you."
          />
          <FeatureItem 
            icon={<ShieldCheck className="text-amber-500" size={32} />}
            title="Master Care"
            desc="Expert handling of delicate fabrics, leather, suede, and couture."
          />
          <FeatureItem 
            icon={<Clock className="text-amber-500" size={32} />}
            title="Fast Turnaround"
            desc="Standard 48hr service with express 24hr options available."
          />
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Refining the Art of <br/> Garment Care
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
                At Kings & Queens, we understand that your wardrobe is an investment. Our meticulous cleaning process combines traditional craftsmanship with modern eco-friendly technology to ensure your garments return to you in pristine condition.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-10 text-lg">
                Whether it's your daily business attire, a delicate wedding gown, or household linens, we treat every item with royal care.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-amber-500 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">
                Read Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-500/30 -z-10 translate-x-4 translate-y-4" />
              <img 
                src={SERVICE_IMG} 
                alt="Fabric Care" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
           <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">What We Do</h3>
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">Our Services</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Dry Cleaning" desc="Expert stain removal and gentle cleaning for suits, dresses, and coats." />
              <ServiceCard title="Laundry & Pressing" desc="Crisp, perfectly ironed shirts and bed linens, folded or hung." />
              <ServiceCard title="Alterations" desc="Professional tailoring and repairs to ensure the perfect fit." />
              <ServiceCard title="Wedding Dresses" desc="Specialist preservation and boxing for your most cherished gown." />
              <ServiceCard title="Leather & Suede" desc="Restoration and cleaning for natural skins and furs." />
              <ServiceCard title="Household" desc="Deep cleaning for duvets, curtains, and upholstery covers." />
           </div>

           <div className="mt-16">
             <Link 
               to="/services"
               className="bg-transparent border border-amber-500 text-amber-500 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-amber-500 hover:text-neutral-950 transition-colors"
             >
               View All Services
             </Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950/80" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready for the Royal Treatment?</h2>
          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a collection today and experience the difference. We pick up from your home or office.
          </p>
          <Link 
            to="/contact" 
            className="bg-amber-500 text-neutral-950 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-950 transition-colors inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center md:items-start p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group bg-neutral-950 border border-neutral-800 p-8 hover:border-amber-500/50 transition-colors text-left relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-300" />
      <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6">{desc}</p>
      <span className="text-neutral-500 text-xs uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-2">
        Learn More <ArrowRight size={12} />
      </span>
    </div>
  );
}
