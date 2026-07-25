"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, ArrowLeft, Scissors, Sliders, ShieldCheck, Compass, ShoppingBag, RefreshCw } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface SafariCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const FABRICS = [
  { id: "huddersfield", name: "100% Huddersfield Supima Cotton", origin: "United Kingdom", priceAdd: 0, image: "/safari_suit_hero.png" },
  { id: "irish_linen", name: "Irish Pure Flax Safari Linen", origin: "Belfast, Ireland", priceAdd: 300, image: "/safari_suit_tan.png" },
  { id: "vicuna_cotton", name: "Peruvian Vicuña & Silk Cotton Blend", origin: "High Andes, Peru", priceAdd: 1200, image: "/look_overcoat.png" },
  { id: "tuscan_twill", name: "Tuscan Heavyweight Military Twill", origin: "Florence, Italy", priceAdd: 450, image: "/look_bespoke_blazer.png" },
];

const COLORS = [
  { id: "navy", name: "Royal Midnight Navy", hex: "#1A2536", bgImg: "/safari_suit_hero.png" },
  { id: "khaki", name: "Classic Sand Khaki", hex: "#C5B396", bgImg: "/safari_suit_tan.png" },
  { id: "olive", name: "Imperial Military Olive", hex: "#3B4734", bgImg: "/safari_suit_hero.png" },
  { id: "black", name: "Obsidian Noir Black", hex: "#0D0D0D", bgImg: "/hero_fashion_bg.png" },
];

const LAPELS = [
  { id: "spread", name: "Safari Spread Collar", desc: "Traditional open wide collar with button tab" },
  { id: "notch", name: "Modern Notch Lapel", desc: "Clean tailored suit silhouette" },
  { id: "mandarin", name: "Royal Mandarin Collar", desc: "Minimalist neckband without lapels" },
  { id: "peak", name: "High Peak Lapel", desc: "Bold, commanding double-breasted style" },
];

const POCKETS = [
  { id: "4flap", name: "4 Box Pleat Flap Pockets", desc: "Classic safari design with brass buttons" },
  { id: "2flap2slant", name: "2 Upper Flap & 2 Lower Slant Pockets", desc: "Sleek utility hybrid" },
  { id: "hidden", name: "Hidden Zipper Utility Pockets", desc: "Clean modern profile for global travel" },
];

const SAFARI_TYPES = [
  { id: "military", name: "New Military Safari", desc: "Structured shoulder epaulettes & full waist belt", price: 6800 },
  { id: "classic", name: "Classic Short-Sleeve Safari", desc: "Relaxed tropical weight with breast pockets", price: 5400 },
  { id: "leisure", name: "Leisure Style Belted Safari", desc: "Soft unlined cotton jacket with horn buttons", price: 6200 },
];

export default function SafariCustomizerModal({ isOpen, onClose, onAddToCart }: SafariCustomizerModalProps) {
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedLapel, setSelectedLapel] = useState(LAPELS[0]);
  const [selectedPocket, setSelectedPocket] = useState(POCKETS[0]);
  const [selectedType, setSelectedType] = useState(SAFARI_TYPES[0]);
  const [monogram, setMonogram] = useState("MKV");
  const [size, setSize] = useState("Custom Anatomical Fit");

  const totalEUR = selectedType.price + selectedFabric.priceAdd;
  const totalUSD = Math.round(totalEUR * 1.08);
  const totalINR = Math.round(totalEUR * 90);

  const handleCustomAddToCart = () => {
    const customProduct: ProductItem = {
      id: `SAFARI-CUSTOM-${Date.now().toString().slice(-4)}`,
      title: `Custom Bespoke ${selectedType.name}`,
      category: "Bespoke Tailoring",
      priceEUR: totalEUR,
      priceUSD: totalUSD,
      priceINR: totalINR,
      tag: `Customized (${selectedFabric.name.split(" ")[1]}, ${selectedColor.name})`,
      image: selectedColor.bgImg,
      description: `Bespoke ${selectedType.name} in ${selectedColor.name} ${selectedFabric.name}. Features ${selectedLapel.name}, ${selectedPocket.name}, and custom monogram '${monogram}'.`,
      fabrics: [selectedFabric.name, "100% Breathable Cotton Unlined"],
      atelierTime: "75 Hours Hand-Tailoring",
    };

    onAddToCart(customProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-2xl overflow-y-auto">
        <div className="min-h-screen w-full bg-[#FDFBF7] text-[#050505] flex flex-col justify-between">
          
          {/* Top Sticky Header */}
          <header className="sticky top-0 z-30 bg-[#050505] text-[#FDFBF7] py-5 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/40 shadow-2xl">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Return To Atelier
            </button>

            <div className="text-center">
              <h2 className="font-playfair text-xl md:text-2xl font-light tracking-[0.2em] text-[#FDFBF7]">
                DESIGN IT YOUR WAY
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#D4AF37] block font-semibold">
                CUSTOMIZED TO PERFECTION • MAKVORA SAFARI
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#D4AF37] hover:text-white transition-colors"
              title="Close Customizer"
            >
              <X className="w-6 h-6" />
            </button>
          </header>

          {/* Main Customizer Content Body */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-16 flex-1">
            
            {/* Section 1: Hero Banner "Luxury Cottons & Unlined Inside" */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-12 text-[#FDFBF7] shadow-2xl">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
                  Finest Global Fabrics
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-[#FDFBF7]">
                  LUXURY COTTONS & SAFARI LINENS
                </h1>
                <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                  Presenting a range of finest fabrics from the most reputed mills across the globe—from Huddersfield UK to Loro Piana Italy. MAKVORA brings you quintessentially sartorial safari tailored suits.
                </p>

                {/* 3 Circular Badges (From Reference Screenshot) */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <span className="block font-mono text-xs font-bold text-[#D4AF37] mb-1">100%</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">PURE COTTON</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sliders className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">UNLINED INSIDE</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Compass className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">TRAVEL FRIENDLY</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[4/3] w-full border border-[#D4AF37]/40 overflow-hidden shadow-xl">
                <Image
                  src={selectedColor.bgImg}
                  alt="Custom Safari Suit Preview"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/80 backdrop-blur-md p-3 border border-[#D4AF37]/40 flex justify-between items-center text-xs">
                  <span className="font-mono text-[#D4AF37] font-semibold">{selectedType.name}</span>
                  <span className="font-mono text-[#FDFBF7] font-bold">€{totalEUR.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Section 2: 4 Design Customization Cards (From Reference Screenshot) */}
            <div>
              <div className="text-center mb-10">
                <h3 className="font-playfair text-3xl font-light uppercase tracking-wider text-[#050505]">
                  DESIGN IT YOUR WAY
                </h3>
                <p className="text-xs font-mono text-[#8C6D23] uppercase tracking-widest mt-1">
                  Select your lapel, pocket, belt, and custom initials
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Lapel Styles */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">4 LAPEL STYLES</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select the collar and lapel of your choice.</p>
                  <select
                    value={selectedLapel.id}
                    onChange={(e) => setSelectedLapel(LAPELS.find(l => l.id === e.target.value) || LAPELS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {LAPELS.map((l) => (
                      <option key={l.id} value={l.id}>{l.name}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Customize Pockets */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">CUSTOMIZE POCKETS</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">8 pocket styles tailored to suit your journey.</p>
                  <select
                    value={selectedPocket.id}
                    onChange={(e) => setSelectedPocket(POCKETS.find(p => p.id === e.target.value) || POCKETS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {POCKETS.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Belt It Up */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">BELT IT UP</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Add waist belts, brass loops, epaulettes & cuffs.</p>
                  <div className="p-2.5 bg-[#FDFBF7] border border-[#EAE1D0] text-xs font-mono text-[#D4AF37] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" /> Full Safari Belt Included
                  </div>
                </div>

                {/* 4. Monogram You */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">MONOGRAM YOU</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Add your distinct signature initials on lining.</p>
                  <input
                    type="text"
                    maxLength={4}
                    value={monogram}
                    onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                    placeholder="e.g. MKV"
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-mono tracking-widest font-bold uppercase focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Section 3: Interactive Customizer Controls (Fabric, Color, Type, Size) */}
            <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                    Bespoke Atelier Builder
                  </span>
                  <h3 className="font-playfair text-3xl font-light text-[#FDFBF7]">
                    START CUSTOMIZING YOUR SAFARI SUIT
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-[#D4AF37] block">Valuation</span>
                  <span className="text-2xl font-bold text-[#FDFBF7]">€{totalEUR.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Safari Suit Style Type */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    1. Safari Silhouette Type
                  </label>
                  <div className="space-y-2">
                    {SAFARI_TYPES.map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setSelectedType(st)}
                        className={`w-full p-3 text-left border text-xs transition-all ${
                          selectedType.id === st.id
                            ? "bg-[#D4AF37] text-[#050505] border-[#D4AF37] font-semibold"
                            : "bg-[#0D0D0D] text-[#E5E5E5] border-white/10 hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <div className="flex justify-between">
                          <span>{st.name}</span>
                          <span className="font-mono">€{st.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Selection */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    2. Select Premium Fabric
                  </label>
                  <div className="space-y-2">
                    {FABRICS.map((fab) => (
                      <button
                        key={fab.id}
                        onClick={() => setSelectedFabric(fab)}
                        className={`w-full p-3 text-left border text-xs transition-all ${
                          selectedFabric.id === fab.id
                            ? "bg-[#D4AF37] text-[#050505] border-[#D4AF37] font-semibold"
                            : "bg-[#0D0D0D] text-[#E5E5E5] border-white/10 hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <div className="flex justify-between">
                          <span className="line-clamp-1">{fab.name}</span>
                          {fab.priceAdd > 0 && <span className="font-mono">+€{fab.priceAdd}</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    3. Select Color Shading
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {COLORS.map((col) => (
                      <button
                        key={col.id}
                        onClick={() => setSelectedColor(col)}
                        className={`p-3 border text-left flex items-center gap-2 transition-all ${
                          selectedColor.id === col.id
                            ? "bg-[#D4AF37] text-[#050505] border-[#D4AF37] font-semibold"
                            : "bg-[#0D0D0D] text-[#E5E5E5] border-white/10 hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border border-white/30 flex-shrink-0" style={{ backgroundColor: col.hex }} />
                        <span className="text-[11px] line-clamp-1">{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizing & Fits */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    4. Size & Fitting
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-white/20 p-3 text-xs text-[#FDFBF7] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Custom Anatomical Fit">Custom Anatomical Measurement (42 Points)</option>
                    <option value="38R">38 Regular (EU 48)</option>
                    <option value="40R">40 Regular (EU 50)</option>
                    <option value="42R">42 Regular (EU 52)</option>
                    <option value="44R">44 Regular (EU 54)</option>
                  </select>
                </div>
              </div>

              {/* Action Button CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-xs text-[#E5E5E5] font-light">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Includes Lifetime Master Fitting Guarantee & Insured Global Courier</span>
                </div>

                <button
                  onClick={handleCustomAddToCart}
                  className="w-full md:w-auto px-10 py-5 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-4 h-4" /> Add Custom Safari Suit To Selection
                </button>
              </div>
            </div>

            {/* Section 4: "PREMIUM CLOTH MADE FOR ROYALTY" Bottom Showcase */}
            <div className="text-center py-12 border-t border-[#EAE1D0] space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.4em] text-[#D4AF37] font-semibold">
                Haute Couture Standards
              </span>
              <h3 className="font-playfair text-3xl md:text-4xl text-[#050505] font-light">
                PREMIUM CLOTH MADE FOR ROYALTY & DISCREET ELEGANCE
              </h3>
              <p className="text-xs md:text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed font-light">
                Every MAKVORA Safari Suit is individually cut by hand by Master Tailor Suresh Tailor and Rahul. Made from high-performance, easy to maintain luxury cottons—quintessentially sartorial.
              </p>
            </div>

          </div>

          {/* Footer */}
          <footer className="bg-[#050505] text-[#D4AF37] text-center py-6 border-t border-[#D4AF37]/30 text-xs font-mono">
            © 2026 MAKVORA PARIS S.A. • Bespoke Safari Suit Customizer Protocol
          </footer>

        </div>
      </div>
    </AnimatePresence>
  );
}
