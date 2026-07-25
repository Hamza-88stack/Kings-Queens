import { Link } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 text-neutral-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="inline-block border border-amber-500/50 px-4 py-2">
                <span className="font-serif text-xl tracking-widest text-amber-500 font-bold uppercase">
                  Kings & Queens
                </span>
             </div>
            <p className="text-sm leading-relaxed max-w-xs">
              London's premier dry cleaning and laundry service. We treat your garments with the royal care they deserve.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Facebook size={18} />} />
              <SocialLink icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing List</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book a Collection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0" size={18} />
                <span>123 High Street, Kensington<br />London, W8 5SA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span>020 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <span>concierge@knqdcl.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sunday</span>
                <span className="text-amber-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} Kings & Queens Dry Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all"
    >
      {icon}
    </a>
  );
}
