"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Sliders, CheckCircle2, ShieldCheck, Sparkles, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface PathaniOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomizer: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const PATHANI_VARIATIONS = [
  {
    id: "PTN-001",
    name: "Military Style Olive Green Pathani",
    tag: "Atelier Linen • Chest Flaps & Epaulettes",
    image: "/pathani_olive_green.png",
    priceEUR: 2200,
    priceINR: 195000,
    fabric: "100% Pure Italian Linen",
    desc: "A contemporary military-cut pathani suit detailed with buttoned chest flap pockets, functional shoulder epaulettes, matching straight-draped trousers.",
  },
  {
    id: "PTN-002",
    name: "Classic Rich Brown Pathani Suit",
    tag: "Cotton-Silk • Classic Shalwar Cut",
    image: "/pathani_brown_classic.png",
    priceEUR: 2100,
    priceINR: 185000,
    fabric: "Premium Cotton-Silk Blend",
    desc: "Bespoke comfort meets traditional grandeur. Soft-rolled sleeves, breast utility pockets, paired with custom gathered shalwar pants.",
  },
  {
    id: "PTN-003",
    name: "Royal Black Zari Embroidered Pathani",
    tag: "Zari Velvet-Silk • Gala Special",
    image: "/pathani_black_embroidered.png",
    priceEUR: 2600,
    priceINR: 230000,
    fabric: "Merino Silk-Velvet Blend",
    desc: "Designed for grand celebrations. Features rich gold zari hand-embroidered collars, designer metallic buttons, and a matching fluid black shalwar.",
  },
];

const FABRIC_TYPES = [
  { name: "Pure Italian Flax Linen", origin: "Loro Piana, Italy", desc: "Crisp and cooling natural weave optimized for sophisticated daytime events." },
  { name: "Lustrous Cotton-Silk Blend", origin: "Varanasi, India", desc: "A soft hybrid weave that shines subtly under warm banquet lighting." },
  { name: "Merino Silk-Velvet Blend", origin: "Lyon, France", desc: "Plush fabric weight showcasing deep colors and gold zari embroideries beautifully." },
];

const SIZES = [
  { code: "38", chest: "38 in / 96 cm", length: "40 in / 101 cm" },
  { code: "40", chest: "40 in / 101 cm", length: "42 in / 106 cm" },
  { code: "42", chest: "42 in / 106 cm", length: "44 in / 111 cm" },
  { code: "44", chest: "44 in / 111 cm", length: "46 in / 116 cm" },
  { code: "CUSTOM", chest: "Anatomical Fit", length: "Bespoke Coordinates" },
];

export default function PathaniOverviewModal({
  isOpen,
  onClose,
  onOpenCustomizer,
  onAddToCart,
}: PathaniOverviewModalProps) {
  const [selectedSuit, setSelectedSuit] = useState(PATHANI_VARIATIONS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[4]);

  if (!isOpen) return null;

  const handleAcquireSelected = () => {
    const prod: ProductItem = {
      id: selectedSuit.id,
      title: selectedSuit.name,
      category: "Bespoke Tailoring",
      priceEUR: selectedSuit.priceEUR,
      priceUSD: Math.round(selectedSuit.priceEUR * 1.08),
      priceINR: selectedSuit.priceINR,
      tag: selectedSuit.tag,
      image: selectedSuit.image,
      description: selectedSuit.desc,
      fabrics: [selectedSuit.fabric, "Handmade Button Plackets"],
      atelierTime: "60 Hours Master Crafting",
    };
    onAddToCart(prod);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#FDFBF7] text-[#050505] overflow-y-auto w-screen h-screen flex flex-col justify-between">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-40 bg-[#050505] text-[#FDFBF7] py-4 px-6 md:px-12 flex items-center justify-between border-b-2 border-[#D4AF37] shadow-2xl">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Return To Maison
          </button>

          <div className="text-center">
            <h2 className="font-playfair text-xl md:text-2xl font-light tracking-[0.2em] text-[#FDFBF7]">
              BESPOKE PATHANI SUITS COLLECTION
            </h2>
            <span className="text-[9px] uppercase font-mono tracking-[0.35em] text-[#D4AF37] block font-semibold">
              OVERVIEW & FABRIC SPECIFICATIONS • MAKVORA PARIS
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#D4AF37] hover:text-white transition-colors"
            title="Close Overview"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-16 flex-1">
          
          {/* Showcase Section */}
          <div className="bg-[#050505] border-2 border-[#D4AF37] p-6 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Image & Thumbnails */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[3/4] w-full border border-[#D4AF37]/40 overflow-hidden shadow-2xl bg-[#0D0D0D]">
                  <Image
                    src={selectedSuit.image}
                    alt={selectedSuit.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#050505]/90 backdrop-blur-md px-3 py-1 border border-[#D4AF37]/40 text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-semibold">
                    {selectedSuit.tag}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block font-semibold">
                    Select Pathani Style Slide:
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {PATHANI_VARIATIONS.map((varPTN, idx) => (
                      <button
                        key={varPTN.id}
                        onClick={() => setSelectedSuit(varPTN)}
                        className={`relative aspect-[3/4] w-full border transition-all overflow-hidden bg-[#0D0D0D] ${
                          selectedSuit.id === varPTN.id
                            ? "border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/60 opacity-100 scale-105"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={varPTN.image}
                          alt={varPTN.name}
                          fill
                          className="object-cover object-top"
                        />
                        <span className="absolute bottom-1 right-1 bg-black/90 px-1.5 text-[9px] font-mono text-[#D4AF37] font-bold">
                          0{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Detail */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                    Heritage Royal Attire • Suresh Tailor & Rahul
                  </span>
                  
                  <h1 className="font-playfair text-3xl md:text-5xl font-light text-[#FDFBF7] leading-tight">
                    {selectedSuit.name}
                  </h1>

                  <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                    {selectedSuit.desc}
                  </p>

                  <div className="bg-[#0D0D0D] border border-white/10 p-5 space-y-3 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#D4AF37]">Premium Cloth:</span>
                      <span>{selectedSuit.fabric}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#D4AF37]">Details & Fitting:</span>
                      <span>Epaulettes, Chest Pockets, Gathered/Straight Bottom Options</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#D4AF37]">Valuation:</span>
                      <span className="text-lg font-bold text-[#FDFBF7]">€{selectedSuit.priceEUR.toLocaleString()} (₹{selectedSuit.priceINR.toLocaleString('en-IN')})</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer();
                    }}
                    className="w-full py-4 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <Sliders className="w-4 h-4" /> Customize Pathani Suit (Design It Your Way)
                  </button>

                  <button
                    onClick={handleAcquireSelected}
                    className="w-full py-3.5 bg-white/10 border border-[#D4AF37]/60 text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add Ready Selection
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: Complete Lookbook Grid */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                  Atelier Pathani Library
                </span>
                <h3 className="font-playfair text-3xl font-light text-[#050505] uppercase">
                  PATHANI SUIT VARIATIONS
                </h3>
              </div>
              <p className="text-xs font-mono text-[#8C6D23] mt-2 md:mt-0">
                Tap to inspect details and choose size
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PATHANI_VARIATIONS.map((varPTN, idx) => (
                <div
                  key={varPTN.id}
                  className={`p-4 border flex flex-col justify-between transition-all group ${
                    selectedSuit.id === varPTN.id
                      ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37] shadow-xl"
                      : "bg-[#F5F0E6] text-[#050505] border-[#EAE1D0] hover:border-[#D4AF37]"
                  }`}
                >
                  <button onClick={() => setSelectedSuit(varPTN)} className="w-full text-left">
                    <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden bg-[#0D0D0D]">
                      <Image
                        src={varPTN.image}
                        alt={varPTN.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-[#050505]/90 px-2 py-0.5 text-[9px] font-mono text-[#D4AF37] border border-[#D4AF37]/40">
                        Slide 0{idx + 1}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${selectedSuit.id === varPTN.id ? "text-[#D4AF37]" : "text-[#8C6D23]"}`}>
                      {varPTN.id}
                    </span>
                    <h4 className="font-playfair text-base font-light mb-2 line-clamp-1">{varPTN.name}</h4>
                    <span className={`font-mono text-sm font-semibold block mb-3 ${selectedSuit.id === varPTN.id ? "text-[#FDFBF7]" : "text-[#050505]"}`}>
                      €{varPTN.priceEUR.toLocaleString()}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer();
                    }}
                    className="w-full py-2.5 bg-[#D4AF37] text-[#050505] font-semibold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-1.5 mt-2"
                  >
                    <Sliders className="w-3 h-3" /> Customize
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Fabrics */}
          <div className="bg-[#F5F0E6] border border-[#EAE1D0] p-8 md:p-10 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                Luxury Suitings
              </span>
              <h3 className="font-playfair text-3xl font-light text-[#050505]">
                AVAILABLE PATHANI FABRICS & SHADES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FABRIC_TYPES.map((fab) => (
                <div key={fab.name} className="bg-[#FDFBF7] p-6 border border-[#EAE1D0] space-y-2 shadow-xs">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Origin: {fab.origin}
                  </span>
                  <h4 className="font-playfair text-lg text-[#050505] font-light">{fab.name}</h4>
                  <p className="text-xs text-[#2A2A2A] font-light leading-relaxed">{fab.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sizing & Fit Guide */}
          <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                  Atelier Specs
                </span>
                <h3 className="font-playfair text-3xl font-light text-[#FDFBF7]">
                  ROYAL PATHANI SIZE & HEIGHT CHART
                </h3>
              </div>
              <span className="text-xs font-mono text-[#D4AF37] mt-2 md:mt-0">
                Bespoke Drafting Standard
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {SIZES.map((sz) => (
                <button
                  key={sz.code}
                  onClick={() => setSelectedSize(sz)}
                  className={`p-4 border text-left transition-all ${
                    selectedSize.code === sz.code
                      ? "bg-[#D4AF37] text-[#050505] border-[#D4AF37] font-semibold"
                      : "bg-[#0D0D0D] text-[#FDFBF7] border-white/10 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="font-mono text-lg font-bold">Size {sz.code}</div>
                  <div className="text-[11px] mt-2 font-mono">Chest: {sz.chest}</div>
                  <div className="text-[11px] font-mono">Length: {sz.length}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ALWAYS VISIBLE STICKY BOTTOM ACTION BAR */}
        <div className="sticky bottom-0 z-40 bg-[#050505] text-[#FDFBF7] p-4 px-6 md:px-12 border-t-2 border-[#D4AF37] flex items-center justify-between shadow-2xl">
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-mono text-[#D4AF37] font-semibold">Active Selection: {selectedSuit.name}</span>
            <span className="font-mono text-sm font-bold text-[#FDFBF7]">€{selectedSuit.priceEUR.toLocaleString()}</span>
          </div>

          <div className="w-full md:w-auto flex items-center justify-center gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenCustomizer();
              }}
              className="w-full md:w-auto px-8 py-3.5 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4" /> Customize Pathani Suit (Design It Your Way)
            </button>
          </div>
        </div>

      </div>
    </AnimatePresence>
  );
}
