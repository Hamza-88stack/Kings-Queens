import { motion } from "motion/react";
import { Link } from "react-router";
import { Shirt, Scissors, Archive, Droplets, BedDouble, Footprints } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "dry-cleaning",
      title: "Dry Cleaning",
      icon: <Shirt size={40} className="text-amber-500" />,
      desc: "Our core service. We use eco-friendly solvents that are tough on stains but gentle on fibres. Perfect for suits, silk blouses, wool coats, and delicate fabrics.",
      details: ["Hand spotting for stains", "Gentle solvent cleaning", "Hand finishing & pressing", "Eco-friendly process"]
    },
    {
      id: "laundry",
      title: "Laundry & Ironing",
      icon: <Droplets size={40} className="text-amber-500" />,
      desc: "Wash, dry, and fold service for your everyday clothes, plus a premium shirt service where collars and cuffs get extra attention before being hand-finished.",
      details: ["Shirt service (hung or folded)", "Wash & Fold", "Bed linens", "Tablecloths"]
    },
    {
      id: "alterations",
      title: "Tailoring & Alterations",
      icon: <Scissors size={40} className="text-amber-500" />,
      desc: "Our on-site master tailor can perform everything from simple hem repairs to complete suit resizing. Look your best with clothes that fit perfectly.",
      details: ["Hem shortening", "Waist adjustments", "Zip replacement", "Tapering & resizing"]
    },
    {
      id: "household",
      title: "Household Items",
      icon: <BedDouble size={40} className="text-amber-500" />,
      desc: "Refresh your home with our deep cleaning service for bulky items that are hard to clean at home.",
      details: ["Duvets & Pillows", "Curtains & Drapes", "Sofa Covers", "Rugs & Carpets"]
    },
    {
      id: "wedding",
      title: "Wedding & Couture",
      icon: <Archive size={40} className="text-amber-500" />,
      desc: "Preserve your most precious memories. We specialise in cleaning and boxing wedding dresses with acid-free tissue paper for long-term storage.",
      details: ["Pre-wedding steaming", "Post-wedding cleaning", "Preservation boxing", "Veil cleaning"]
    },
    {
      id: "shoes",
      title: "Shoes & Leather",
      icon: <Footprints size={40} className="text-amber-500" />,
      desc: "Don't neglect your accessories. We offer cleaning and restoration for leather jackets, suede items, designer handbags, and shoes.",
      details: ["Shoe shining & repair", "Handbag restoration", "Leather jacket cleaning", "Suede brushing"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Services</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive garment care solutions tailored to your needs. From daily laundry to delicate couture, we handle it all with royal attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center group hover:border-amber-500/30 transition-colors"
            >
              <div className="shrink-0 bg-neutral-950 p-6 rounded-full border border-neutral-800 group-hover:border-amber-500 transition-colors">
                {service.icon}
              </div>
              
              <div className="flex-grow">
                <h2 className="text-2xl font-serif text-white mb-4">{service.title}</h2>
                <p className="text-neutral-400 mb-6 max-w-3xl leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-amber-500/80">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 mt-6 md:mt-0">
                <Link
                  to="/pricing"
                  className="inline-block px-6 py-3 border border-neutral-700 text-neutral-300 uppercase text-xs tracking-widest hover:bg-white hover:text-neutral-950 transition-all"
                >
                  View Prices
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-amber-500 p-12 text-center rounded-sm">
           <h2 className="text-3xl font-serif text-neutral-950 mb-4">Can't find what you're looking for?</h2>
           <p className="text-neutral-900 mb-8 max-w-xl mx-auto">
             We handle many specialist items upon request. Give us a call to discuss your specific requirements.
           </p>
           <a 
             href="tel:+442012345678"
             className="inline-block bg-neutral-950 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors"
           >
             Contact Us
           </a>
        </div>
      </div>
    </div>
  );
}