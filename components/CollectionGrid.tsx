"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ShoppingBag, ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";

export interface ProductItem {
  id: string;
  title: string;
  category: "Bespoke Tailoring" | "Haute Couture" | "Royal Sherwanis" | "Rare Outerwear";
  priceEUR: number;
  priceUSD: number;
  priceINR: number;
  tag: string;
  image: string;
  description: string;
  fabrics: string[];
  atelierTime: string;
}

export const COLLECTION_ITEMS: ProductItem[] = [
  {
    id: "MKV-001",
    title: "Bespoke Trousers Pants Collection",
    category: "Bespoke Tailoring",
    priceEUR: 1050,
    priceUSD: 1130,
    priceINR: 95000,
    tag: "Overview & Customizer",
    image: "/trousers_brown_pleated.png",
    description: "Individually drafted premium trouser pants featuring double adjusters, front pleats, and finest Italian merino wool weaves.",
    fabrics: ["100% Italian Merino Wool", "Super 150s Wool-Silk Blend"],
    atelierTime: "40 Hours Hand-Stitching",
  },
  {
    id: "MKV-002",
    title: "Royal Safari Suits Collection",
    category: "Bespoke Tailoring",
    priceEUR: 6800,
    priceUSD: 7300,
    priceINR: 600000,
    tag: "Overview & Customizer",
    image: "/safari_green_mandarin.png",
    description: "Handcrafted bandhgala & belted safari suits in Huddersfield luxury cottons, Irish flax linen, and silk wool weaves.",
    fabrics: ["100% Huddersfield Supima Cotton", "Irish Flax Linen", "Silk Wool Blend"],
    atelierTime: "75 Hours Hand-Tailoring",
  },
  {
    id: "MKV-003",
    title: "Royal Heritage Banarasi Sherwani",
    category: "Royal Sherwanis",
    priceEUR: 11500,
    priceUSD: 12500,
    priceINR: 980000,
    tag: "Hand-Crafted Zari Brocade",
    image: "/look_royal_sherwani.png",
    description: "Hand-spun Banarasi silk sherwani woven with pure silver and gold zari threads for royal wedding galas.",
    fabrics: ["Banarasi Mulberry Silk", "24k Real Gold Zari"],
    atelierTime: "160 Hours Hand-Weaving",
  },
  {
    id: "MKV-004",
    title: "Bespoke Bell Bottom Trousers",
    category: "Bespoke Tailoring",
    priceEUR: 1250,
    priceUSD: 1350,
    priceINR: 110000,
    tag: "Overview & Customizer",
    image: "/bellbottom_beige.png",
    description: "Architectural flared trousers featuring custom waist rise options, bold bell-bottom leg opening cuts, and premium linen & crepe fabrics.",
    fabrics: ["100% Pure Irish Flax Linen", "Atelier High-Twist Wool Crepe", "Japanese Indigo Denim"],
    atelierTime: "45 Hours Hand-Crafting",
  },
  {
    id: "MKV-005",
    title: "Bespoke Pathani Suits Collection",
    category: "Bespoke Tailoring",
    priceEUR: 2100,
    priceUSD: 2260,
    priceINR: 185000,
    tag: "Overview & Customizer",
    image: "/pathani_olive_green.png",
    description: "Traditional military-cut pathani suits featuring chest flaps, epaulettes, soft linen-silk fabrics, and gathered loose shalwar pants.",
    fabrics: ["100% Pure Italian Linen", "Premium Cotton-Silk Blend", "French Velvet-Silk"],
    atelierTime: "60 Hours Master Crafting",
  },
];

interface CollectionGridProps {
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export default function CollectionGrid({ onQuickView, onAddToCart }: CollectionGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR">("INR");

  const categories = ["All", "Bespoke Tailoring", "Haute Couture", "Royal Sherwanis", "Rare Outerwear"];

  const filteredItems = activeCategory === "All"
    ? COLLECTION_ITEMS
    : COLLECTION_ITEMS.filter((item) => item.category === activeCategory);

  const formatPrice = (item: ProductItem) => {
    if (currency === "INR") {
      return `₹${item.priceINR.toLocaleString('en-IN')}`;
    }
    if (currency === "USD") {
      return `$${item.priceUSD.toLocaleString('en-US')}`;
    }
    return `€${item.priceEUR.toLocaleString('de-DE')}`;
  };

  return (
    <section id="couture" className="py-32 bg-[#FDFBF7] relative px-6 md:px-12 border-t border-[#EAE1D0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title & Currency Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-mono block mb-3 font-semibold">
              Curated Ateliers 2026 • Suresh Tailor & Rahul
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#050505] font-light tracking-wider uppercase">
              THE PRIVÉ COLLECTION
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6 md:mt-0">
            {/* Dual Currency Switcher */}
            <div className="flex items-center gap-1 bg-[#050505] p-1.5 border border-[#D4AF37]/40 shadow-md">
              <Globe className="w-4 h-4 text-[#D4AF37] ml-2" />
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                  currency === "INR" ? "bg-[#D4AF37] text-[#050505]" : "text-[#E5E5E5] hover:text-[#D4AF37]"
                }`}
              >
                INR ₹
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                  currency === "USD" ? "bg-[#D4AF37] text-[#050505]" : "text-[#E5E5E5] hover:text-[#D4AF37]"
                }`}
              >
                USD $
              </button>
              <button
                onClick={() => setCurrency("EUR")}
                className={`px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                  currency === "EUR" ? "bg-[#D4AF37] text-[#050505]" : "text-[#E5E5E5] hover:text-[#D4AF37]"
                }`}
              >
                EUR €
              </button>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-[#EAE1D0] pb-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative ${
                activeCategory === cat
                  ? "bg-[#050505] text-[#FDFBF7] shadow-md font-semibold border border-[#D4AF37]"
                  : "bg-[#F5F0E6] text-[#2A2A2A] hover:text-[#050505] hover:bg-[#EAE1D0] border border-[#EAE1D0]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product Cards Grid (3:4 fixed aspect ratio & scale: 1.03 gold glow hover effect) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0D0D0D] border border-[#D4AF37]/30 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-300 shadow-xl"
              >
                {/* Product Image Frame (3:4 Fixed Aspect Ratio) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#050505]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FDFBF7] bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 border border-[#D4AF37]/40 font-semibold">
                      {item.id}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#050505] bg-[#D4AF37] backdrop-blur-md px-3 py-1 font-semibold">
                      <Sparkles className="w-3 h-3 text-[#050505]" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={() => onQuickView(item)}
                      className="flex-1 py-3 bg-[#050505]/90 backdrop-blur-md text-[#FDFBF7] border border-[#D4AF37]/60 text-[11px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </button>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="py-3 px-4 bg-[#D4AF37] text-[#050505] text-[11px] uppercase tracking-widest font-semibold hover:bg-[#F3E5AB] transition-all flex items-center justify-center"
                      title="Acquire Piece"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details Section (High Contrast Text) */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#0D0D0D]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono font-semibold block mb-1">
                      {item.category} • {item.atelierTime}
                    </span>
                    <h3 className="font-playfair text-2xl text-[#FDFBF7] font-light tracking-wide mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#E5E5E5] text-xs font-light line-clamp-2 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block font-semibold">Valuation</span>
                      <span className="font-mono text-xl text-[#FDFBF7] font-semibold">{formatPrice(item)}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold hover:text-white flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      Acquire Piece <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}