"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenFitting: () => void;
}

const NAV_LINKS = [
  { name: "Haute Couture", href: "#couture" },
  { name: "Bespoke Atelier", href: "#craftsmanship" },
  { name: "Runway '26", href: "#lookbook" },
  { name: "Press & Maison", href: "#press" },
];

export default function Navbar({ cartCount, onOpenCart, onOpenFitting }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#FAF7F2]/90 backdrop-blur-xl border-b border-[#EAE2D5] shadow-lg"
            : "py-7 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col items-start">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.35em] font-light text-[#1C1512] group-hover:text-[#C5A059] transition-colors duration-300">
              MAKVORA
            </span>
            <span className="text-[9px] uppercase tracking-[0.45em] text-[#C5A059] font-mono -mt-1 font-semibold">
              PARIS • BESPOKE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-xs uppercase tracking-[0.2em] text-[#2A201B] hover:text-[#C5A059] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-6 text-[#1C1512]">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenFitting}
              className="flex items-center space-x-2 text-xs uppercase tracking-widest bg-[#1C1512] text-[#FAF7F2] px-5 py-2.5 hover:bg-[#C5A059] hover:text-[#1C1512] transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#1C1512]" />
              <span>Book Fitting</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onOpenCart}
              className="relative hover:text-[#C5A059] transition-colors p-2"
              aria-label="Shopping Selection"
            >
              <ShoppingBag className="w-5 h-5 text-[#1C1512]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={onOpenCart} className="relative p-1">
              <ShoppingBag className="w-6 h-6 text-[#1C1512]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1C1512] p-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FAF7F2] flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-8 items-center text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl uppercase tracking-[0.25em] text-[#1C1512] hover:text-[#C5A059] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-16 h-[1px] bg-[#C5A059]/40 my-4" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFitting();
                }}
                className="w-full max-w-xs py-3.5 bg-[#1C1512] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
              >
                Book Bespoke Fitting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}