import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-neutral-800 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex flex-col items-center group">
           <div className="border border-amber-500/50 px-3 py-1 bg-neutral-950/50 backdrop-blur-sm">
              <span className="font-serif text-xl md:text-2xl tracking-widest text-amber-500 font-bold uppercase group-hover:text-amber-400 transition-colors">
                Kings & Queens
              </span>
           </div>
           <span className="text-[10px] md:text-xs tracking-[0.3em] text-neutral-400 mt-1 uppercase">
             Dry Cleaning
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm uppercase tracking-widest hover:text-amber-400 transition-colors relative py-2",
                location.pathname === link.path ? "text-amber-500" : "text-neutral-300"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+442012345678" 
            className="hidden md:flex items-center gap-2 text-amber-500 border border-amber-500/30 px-4 py-2 hover:bg-amber-500 hover:text-neutral-950 transition-all uppercase text-xs tracking-widest"
          >
            <Phone size={14} />
            <span>020 1234 5678</span>
          </a>
          
          <Link
             to="/contact"
             className="bg-amber-500 text-neutral-950 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors hidden lg:block"
          >
            Book Collection
          </Link>

          <button
            className="md:hidden text-amber-500 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest text-neutral-300 hover:text-amber-500"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-neutral-800 my-4" />
              <Link
                to="/contact"
                 onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-neutral-950 py-3 uppercase tracking-widest font-bold"
              >
                <ShoppingBag size={16} />
                Book Collection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
