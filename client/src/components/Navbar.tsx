import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false); // close mobile menu if open

    if (href === "/" || href === "#hero" || href === "/#hero") {
      if (location === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 150);
      }
    } else if (href.startsWith("/#") || href.startsWith("#")) {
      const sectionId = href.replace(/^\/?#/, "");
      if (location === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleClick("/")}
        >
          <img
            src="/wapdev-logo.png"
            alt="WAPDEV Logo"
            className="h-9 w-9 object-contain rounded-lg transition-transform group-hover:scale-105"
            onError={(e) => {
              // fallback if needed
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-2xl font-bold tracking-tighter text-white">
            WAPDEV
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleClick("/#contact")}
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer shadow-[0_0_20px_rgba(122,92,243,0.35)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className="text-lg font-medium text-gray-300 hover:text-primary text-left cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleClick("/#contact")}
              className="w-full bg-primary text-white py-3 rounded-xl text-center text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer mt-2"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
