import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Phone, MapPin, Instagram, Facebook, Clock, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-rich-black text-white font-sans selection:bg-gold-500 selection:text-rich-black">
      <ScrollToTop />
      {/* Top Bar - Contact Info */}
      <div className="bg-charcoal border-b border-white/5 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider text-gray-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-gold-400 transition-colors">
              <Phone className="w-3 h-3 mr-2" /> 020 7123 4567
            </span>
            <span className="flex items-center hover:text-gold-400 transition-colors">
              <MapPin className="w-3 h-3 mr-2" /> Chelsea, London
            </span>
            <span className="flex items-center hover:text-gold-400 transition-colors">
              <Clock className="w-3 h-3 mr-2" /> Mon-Sat: 8am - 7pm
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gold-400 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-gold-400 transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-rich-black/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 group flex items-center gap-3">
            <Crown className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                KINGS <span className="text-gold-500">&</span> QUEENS
              </h1>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-gold-500 uppercase">Dry Cleaning & Laundrette</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Pricing", path: "/pricing" },
              { name: "About", path: "/#about" }, // Linking to home section for now or create page
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide hover:text-gold-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link 
              to="/book" 
              className="px-6 py-2.5 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-rich-black transition-all duration-300 text-sm font-semibold tracking-wide uppercase"
            >
              Book Collection
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-white hover:text-gold-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-rich-black z-40 flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8 p-8">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/book" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-gold-500 text-rich-black text-lg font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Book Collection
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-rich-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-serif font-bold text-white mb-4">
                KINGS <span className="text-gold-500">&</span> QUEENS
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                London’s premier garment care service. We treat your clothes with the royalty they deserve.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Dry Cleaning</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Laundry Service</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Ironing & Pressing</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Wedding Dresses</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Alterations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/#about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-gold-500 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Locations</Link></li>
                <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                  <span>123 King's Road, Chelsea,<br/>London, SW3 4PL</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                  <span>020 7123 4567</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                  <span>Mon - Sat: 8:00am - 7:00pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kings & Queens Dry Cleaning. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
