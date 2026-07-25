"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Sliders, CheckCircle2, ShieldCheck, Sparkles, Compass, Scissors, ShoppingBag, Eye, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface SafariOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomizer: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const SAFARI_VARIATIONS = [
  {
    id: "SAF-001",
    name: "Emerald Green Mandarin Bandhgala Safari",
    tag: "Mannequin Edition • Bandhgala Cut",
    image: "/safari_green_mandarin.png",
    priceEUR: 6400,
    priceINR: 575000,
    fabric: "100% Supima Cotton Twill",
    desc: "Structured mandarin collar bandhgala safari suit with custom horn buttons, upper flap pocket, and precision tapered trousers.",
  },
  {
    id: "SAF-002",
    name: "Beige Linen Belted Safari Suit",
    tag: "Fedora & Resort Edition",
    image: "/safari_beige_linen.png",
    priceEUR: 6800,
    priceINR: 610000,
    fabric: "Pure Irish Flax Linen",
    desc: "Relaxed tropical weight safari jacket with waist belt, open notch collar, 4 utility flap pockets, fedora hat pairing, and wide trousers.",
  },
  {
    id: "SAF-003",
    name: "Royal Gray Heritage Bandhgala Safari",
    tag: "Gala & Ceremonial Edition",
    image: "/safari_gray_bandhgala.png",
    priceEUR: 7200,
    priceINR: 650000,
    fabric: "Italian Silk Wool Blend",
    desc: "Imperial tailored gray bandhgala with metallic buttons, double chest pockets, paired with royal blue turban & silk pocket square.",
  },
  {
    id: "SAF-004",
    name: "Royal Navy Military Utility Safari",
    tag: "Classic Savile Cut",
    image: "/safari_suit_hero.png",
    priceEUR: 6800,
    priceINR: 600000,
    fabric: "Huddersfield Heavyweight Cotton",
    desc: "Sleek double-belted military safari suit engineered with 4 utility pockets, brass hardware, and unlined inner body.",
  },
];

const FABRIC_TYPES = [
  { name: "100% Huddersfield Supima Cotton", origin: "UK", desc: "Long-staple breathable cotton, soft drape with high crease resistance." },
  { name: "Pure Irish Flax Linen", origin: "Ireland", desc: "Ultra-cool natural weave designed for warm climates and travel." },
  { name: "Italian Silk Wool Safari Blend", origin: "Italy", desc: "Lustrous ceremonial fabric with subtle sheen and structured drape." },
  { name: "Tuscan Heavyweight Military Twill", origin: "Florence", desc: "Rugged elegance built for international luxury expeditions." },
];

const SIZES = [
  { code: "38R", eu: "EU 48", chest: "38 in / 96 cm", waist: "32 in / 81 cm" },
  { code: "40R", eu: "EU 50", chest: "40 in / 101 cm", waist: "34 in / 86 cm" },
  { code: "42R", eu: "EU 52", chest: "42 in / 106 cm", waist: "36 in / 91 cm" },
  { code: "44R", eu: "EU 54", chest: "44 in / 111 cm", waist: "38 in / 96 cm" },
  { code: "CUSTOM", eu: "42 Points", chest: "Anatomical Measurement", waist: "Tailored by Suresh & Rahul" },
];

export default function SafariOverviewModal({
  isOpen,
  onClose,
  onOpenCustomizer,
  onAddToCart,
}: SafariOverviewModalProps) {
  const [selectedSuit, setSelectedSuit] = useState(SAFARI_VARIATIONS[0]);
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
      fabrics: [selectedSuit.fabric, "Unlined Breathable Inside"],
      atelierTime: "75 Hours Hand-Tailoring",
    };
    onAddToCart(prod);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#FDFBF7] text-[#050505] overflow-y-auto w-screen h-screen flex flex-col justify-between">
        
        {/* STICKY TOP NAVIGATION HEADER */}
        <header className="sticky top-0 z-40 bg-[#050505] text-[#FDFBF7] py-4 px-6 md:px-12 flex items-center justify-between border-b-2 border-[#D4AF37] shadow-2xl">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Return To Maison
          </button>

          <div className="text-center">
            <h2 className="font-playfair text-xl md:text-2xl font-light tracking-[0.2em] text-[#FDFBF7]">
              ROYAL SAFARI SUITS COLLECTION
            </h2>
            <span className="text-[9px] uppercase font-mono tracking-[0.35em] text-[#D4AF37] block font-semibold">
              OVERVIEW & BESPOKE FABRIC GUIDE • MAKVORA PARIS
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

        {/* MAIN FULL PAGE CONTENT BODY */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-16 flex-1">
          
          {/* SECTION 1: HERO SHOWCASE (FULL SCREEN SLIDE PREVIEW) */}
          <div className="bg-[#050505] border-2 border-[#D4AF37] p-6 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Model Image Display & 4 Slide Thumbnails */}
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

                {/* 4 Interactive Thumbnail Slide Controls */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block font-semibold">
                    Tap to Switch Slide / Model View:
                  </span>
                  <div className="grid grid-cols-4 gap-3">
                    {SAFARI_VARIATIONS.map((varSuit, idx) => (
                      <button
                        key={varSuit.id}
                        onClick={() => setSelectedSuit(varSuit)}
                        className={`relative aspect-[3/4] w-full border transition-all overflow-hidden bg-[#0D0D0D] ${
                          selectedSuit.id === varSuit.id
                            ? "border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/60 opacity-100 scale-105"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={varSuit.image}
                          alt={varSuit.name}
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

              {/* Right Column: Suit Overview Details */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                    Master Tailor Edition • Suresh Tailor & Rahul
                  </span>
                  
                  <h1 className="font-playfair text-3xl md:text-5xl font-light text-[#FDFBF7] leading-tight">
                    {selectedSuit.name}
                  </h1>

                  <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                    {selectedSuit.desc}
                  </p>

                  <div className="bg-[#0D0D0D] border border-white/10 p-5 space-y-3 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#D4AF37]">Fabric Weave:</span>
                      <span>{selectedSuit.fabric}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#D4AF37]">Inner Construction:</span>
                      <span>100% Unlined Breathable Inside</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#D4AF37]">Valuation:</span>
                      <span className="text-lg font-bold text-[#FDFBF7]">€{selectedSuit.priceEUR.toLocaleString()} (₹{selectedSuit.priceINR.toLocaleString('en-IN')})</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons at Bottom of Hero Box */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer();
                    }}
                    className="w-full py-4 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <Sliders className="w-4 h-4" /> Customize Your Safari Suit (Design It Your Way)
                  </button>

                  <button
                    onClick={handleAcquireSelected}
                    className="w-full py-3.5 bg-white/10 border border-[#D4AF37]/60 text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add This Ready Piece To Selection
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2: COMPLETE MODEL LOOKS GALLERY GRID */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                  Complete Atelier Collection
                </span>
                <h3 className="font-playfair text-3xl font-light text-[#050505] uppercase">
                  ROYAL SAFARI SUITS GALLERY
                </h3>
              </div>
              <p className="text-xs font-mono text-[#8C6D23] mt-2 md:mt-0">
                Tap any model card to inspect details & order
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SAFARI_VARIATIONS.map((varSuit, idx) => (
                <div
                  key={varSuit.id}
                  className={`p-4 border flex flex-col justify-between transition-all group ${
                    selectedSuit.id === varSuit.id
                      ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37] shadow-xl"
                      : "bg-[#F5F0E6] text-[#050505] border-[#EAE1D0] hover:border-[#D4AF37]"
                  }`}
                >
                  <button onClick={() => setSelectedSuit(varSuit)} className="w-full text-left">
                    <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden bg-[#0D0D0D]">
                      <Image
                        src={varSuit.image}
                        alt={varSuit.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-[#050505]/90 px-2 py-0.5 text-[9px] font-mono text-[#D4AF37] border border-[#D4AF37]/40">
                        Slide 0{idx + 1}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${selectedSuit.id === varSuit.id ? "text-[#D4AF37]" : "text-[#8C6D23]"}`}>
                      {varSuit.id}
                    </span>
                    <h4 className="font-playfair text-base font-light mb-2 line-clamp-1">{varSuit.name}</h4>
                    <span className={`font-mono text-sm font-semibold block mb-3 ${selectedSuit.id === varSuit.id ? "text-[#FDFBF7]" : "text-[#050505]"}`}>
                      €{varSuit.priceEUR.toLocaleString()}
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

          {/* SECTION 3: AVAILABLE LUXURY FABRICS OVERVIEW */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 my-16">
            <div className="bg-[#F5F0E6] border border-[#EAE1D0] p-8 md:p-10 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                  Atelier Textile Standards
                </span>
                <h3 className="font-playfair text-3xl font-light text-[#050505]">
                  AVAILABLE LUXURY FABRICS & WEAVES
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FABRIC_TYPES.map((fab) => (
                  <div key={fab.name} className="bg-[#FDFBF7] p-6 border border-[#EAE1D0] space-y-2 shadow-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block">
                      Mill Origin: {fab.origin}
                    </span>
                    <h4 className="font-playfair text-lg text-[#050505] font-light">{fab.name}</h4>
                    <p className="text-xs text-[#2A2A2A] font-light leading-relaxed">{fab.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 4: SIZE & FIT CHART */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16">
            <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] space-y-6 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                    Anatomical Sizing Chart
                  </span>
                  <h3 className="font-playfair text-3xl font-light text-[#FDFBF7]">
                    ROYAL SAFARI SUIT FIT GUIDE
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#D4AF37] mt-2 md:mt-0">
                  Precision Tolerance: 0.5 mm
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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
                    <div className="font-mono text-lg font-bold">{sz.code}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-80">{sz.eu}</div>
                    <div className="text-[11px] mt-2 font-mono">Chest: {sz.chest}</div>
                    <div className="text-[11px] font-mono">Waist: {sz.waist}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 5: BOTTOM CUSTOMIZE CTA BANNER */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16">
            <div className="bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] border-2 border-[#D4AF37] p-10 text-center text-[#FDFBF7] space-y-6 shadow-2xl">
              <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto animate-pulse" />
              <h3 className="font-playfair text-3xl md:text-4xl font-light text-[#FDFBF7]">
                WOULD YOU LIKE TO CUSTOMIZE YOUR OWN SAFARI SUIT?
              </h3>
              <p className="text-xs md:text-sm text-[#E5E5E5] max-w-xl mx-auto font-light leading-relaxed">
                Choose from 4 lapel styles, 8 pocket configurations, custom waist belts, and personal monogramming on Huddersfield luxury cottons.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer();
                }}
                className="px-10 py-5 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-white transition-all inline-flex items-center gap-3"
              >
                <Sliders className="w-4 h-4" /> Start Customizing Now (Design It Your Way)
              </button>
            </div>
          </div>

        </div>

        {/* ALWAYS VISIBLE STICKY BOTTOM ACTION BAR */}
        <div className="sticky bottom-0 z-40 bg-[#050505] text-[#FDFBF7] p-4 px-6 md:px-12 border-t-2 border-[#D4AF37] flex items-center justify-between shadow-2xl">
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-mono text-[#D4AF37] font-semibold">Selected: {selectedSuit.name}</span>
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
              <Sliders className="w-4 h-4" /> Customize Safari Suit (Design It Your Way)
            </button>
          </div>
        </div>

      </div>
    </AnimatePresence>
  );
}
