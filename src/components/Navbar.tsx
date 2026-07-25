import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { theme } from "../lib/theme";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 border-b border-[#1E1E21] backdrop-blur-md ${
        isScrolled ? "py-4 bg-[#09090B]/90" : "py-6 bg-[#09090B]/80"
      }`}
    >
      <a
        href="#"
        onClick={(e) => scrollToSection(e, "#")}
        className="flex items-center gap-2 font-serif text-xl text-white"
      >
        <span className="text-[#C1A75F] text-2xl">Kings & Queens</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-xs font-medium tracking-widest uppercase text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="tel:02071124884"
          className="text-[#C1A75F] font-medium tabular-nums hover:opacity-80 transition-opacity"
        >
          020 7112 4884
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="px-6 py-2.5 bg-gradient-to-br from-[#AF8C51] via-[#D0BB77] to-[#AF8C51] text-[#09090B] text-sm font-semibold hover:bg-[#D0BB77] transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Book Collection
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#FAFAFA] z-50 relative"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#09090B]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium tracking-widest uppercase text-[#FAFAFA]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:02071124884"
              className="text-[#C1A75F] text-lg font-medium tabular-nums flex items-center gap-2"
            >
              <Phone size={18} />
              020 7112 4884
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-8 py-3 bg-gradient-to-br from-[#AF8C51] via-[#D0BB77] to-[#AF8C51] text-[#09090B] font-semibold"
            >
              Book Collection
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
