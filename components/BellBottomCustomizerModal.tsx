"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, ArrowLeft, Sliders, ShieldCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface BellBottomCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const FABRICS = [
  { id: "linen", name: "100% Pure Irish Flax Linen", priceAdd: 0, image: "/bellbottom_beige.png" },
  { id: "crepe", name: "Atelier High-Twist Wool Crepe", priceAdd: 100, image: "/bellbottom_black.png" },
  { id: "denim", name: "14oz Japanese Indigo Denim", priceAdd: 50, image: "/bellbottom_denim.png" },
];

const COLORS = [
  { id: "beige", name: "Sand Beige", hex: "#E6D5C3", bgImg: "/bellbottom_beige.png" },
  { id: "black", name: "Obsidian Black", hex: "#0D0D0D", bgImg: "/bellbottom_black.png" },
  { id: "indigo", name: "Raw Indigo Blue", hex: "#1A2536", bgImg: "/bellbottom_denim.png" },
];

const WAIST_STYLES = [
  { id: "plain", name: "Plain Extended Waistband (No loops)", desc: "Clean seamless high fashion front" },
  { id: "loops", name: "Classic Wide Belt Loops", desc: "For holding statement belts" },
  { id: "adjusters", name: "Double Side Buckle Adjusters", desc: "Traditional side tabs, classic bespoke feel" },
];

const RISE_STYLES = [
  { id: "high", name: "Retro High Rise (11.5-inch)", desc: "Classic 70s look, lengthens leg silhouette" },
  { id: "mid", name: "Modern Mid Rise (9.5-inch)", desc: "Sits comfortably at natural waist" },
];

const FLARE_WIDTHS = [
  { id: "24inch", name: "24-inch Leg Opening (Standard Bell Bottom)", desc: "Signature retro shape" },
  { id: "22inch", name: "22-inch Leg Opening (Subtle Flare)", desc: "Conservative, modern tapered silhouette" },
  { id: "26inch", name: "26-inch Leg Opening (Dramatic Bell Bottom)", desc: "Commanding runway profile" },
];

export default function BellBottomCustomizerModal({ isOpen, onClose, onAddToCart }: BellBottomCustomizerModalProps) {
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedWaist, setSelectedWaist] = useState(WAIST_STYLES[0]);
  const [selectedRise, setSelectedRise] = useState(RISE_STYLES[0]);
  const [selectedFlare, setSelectedFlare] = useState(FLARE_WIDTHS[0]);
  const [monogram, setMonogram] = useState("MKV");
  const [size, setSize] = useState("Custom Anatomical Fit");

  const basePrice = 1250;
  const totalEUR = basePrice + selectedFabric.priceAdd;
  const totalUSD = Math.round(totalEUR * 1.08);
  const totalINR = Math.round(totalEUR * 90);

  const handleCustomAddToCart = () => {
    const customProduct: ProductItem = {
      id: `BELLBOTTOM-CUSTOM-${Date.now().toString().slice(-4)}`,
      title: `Custom Bespoke Bell Bottom Trousers`,
      category: "Bespoke Tailoring",
      priceEUR: totalEUR,
      priceUSD: totalUSD,
      priceINR: totalINR,
      tag: `Bespoke Custom (${selectedColor.name})`,
      image: selectedColor.bgImg,
      description: `Bespoke tailored flared trousers in ${selectedColor.name} ${selectedFabric.name}. Styled with ${selectedWaist.name}, ${selectedRise.name}, and ${selectedFlare.name}. Inner waistband monogram: '${monogram}'.`,
      fabrics: [selectedFabric.name, "Unlined Inner Seam Piping bindings"],
      atelierTime: "45 Hours Hand-Crafting",
    };

    onAddToCart(customProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-2xl overflow-y-auto">
        <div className="min-h-screen w-full bg-[#FDFBF7] text-[#050505] flex flex-col justify-between">
          
          {/* Header */}
          <header className="sticky top-0 z-30 bg-[#050505] text-[#FDFBF7] py-5 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/40 shadow-2xl">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Return To Atelier
            </button>

            <div className="text-center">
              <h2 className="font-playfair text-xl md:text-2xl font-light tracking-[0.2em] text-[#FDFBF7]">
                DESIGN YOUR BELL BOTTOM PANTS
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#D4AF37] block font-semibold">
                CUSTOMIZED TO PERFECTION • MAKVORA FLARES
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

          {/* Main Body */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-16 flex-1">
            
            {/* Fabric Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-12 text-[#FDFBF7] shadow-2xl">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
                  Finest Flared Tailoring
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-[#FDFBF7]">
                  PREMIUM CLOTH FOR BESPOKE BELL BOTTOMS
                </h1>
                <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                  Crafted by Suresh Tailor and Rahul with a high rise waist, clean hip drape, and structural flare openings designed to balance your natural posture perfectly.
                </p>

                {/* 3 Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <span className="block font-mono text-xs font-bold text-[#D4AF37] mb-1">24-in</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">SIGNATURE FLARE</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sliders className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">HIGH RISE CUT</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sparkles className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">HAND-PLEATED</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[4/3] w-full border border-[#D4AF37]/40 overflow-hidden shadow-xl bg-[#0D0D0D]">
                <Image
                  src={selectedColor.bgImg}
                  alt="Custom Bell Bottoms Preview"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/80 backdrop-blur-md p-3 border border-[#D4AF37]/40 flex justify-between items-center text-xs">
                  <span className="font-mono text-[#D4AF37] font-semibold">{selectedFlare.name}</span>
                  <span className="font-mono text-[#FDFBF7] font-bold">€{totalEUR.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Design Options */}
            <div>
              <div className="text-center mb-10">
                <h3 className="font-playfair text-3xl font-light uppercase tracking-wider text-[#050505]">
                  DESIGN IT YOUR WAY
                </h3>
                <p className="text-xs font-mono text-[#8C6D23] uppercase tracking-widest mt-1">
                  Customize the waistband, waist rise, flare width, and initial monograms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Waist style */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">WAISTBAND CLOSURE</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select clean waistband, adjusters, or belt loops.</p>
                  <select
                    value={selectedWaist.id}
                    onChange={(e) => setSelectedWaist(WAIST_STYLES.find(w => w.id === e.target.value) || WAIST_STYLES[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {WAIST_STYLES.map((w) => (
                      <option key={w.id} value={w.id}>{w.name}</option>
                    ))}
                  </select>
                </div>

                {/* Rise style */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">WAIST RISE</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Choose high rise or mid rise flare.</p>
                  <select
                    value={selectedRise.id}
                    onChange={(e) => setSelectedRise(RISE_STYLES.find(r => r.id === e.target.value) || RISE_STYLES[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {RISE_STYLES.map((r) => (
                      <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                  </select>
                </div>

                {/* Flare width */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">FLARE BOTTOM WIDTH</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select leg opening flare circumference.</p>
                  <select
                    value={selectedFlare.id}
                    onChange={(e) => setSelectedFlare(FLARE_WIDTHS.find(f => f.id === e.target.value) || FLARE_WIDTHS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {FLARE_WIDTHS.map((f) => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>

                {/* Monogram */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">CUSTOM MONOGRAM</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Add your custom initials on waistband inner lining.</p>
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

            {/* Customizer */}
            <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                    Bespoke Flare Builder
                  </span>
                  <h3 className="font-playfair text-3xl font-light text-[#FDFBF7]">
                    CHOOSE FLARED SILHOUETTE, FABRIC & FIT
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-[#D4AF37] block">Valuation</span>
                  <span className="text-2xl font-bold text-[#FDFBF7]">€{totalEUR.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Fabrics */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    1. Select Fabric
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
                          <span>{fab.name}</span>
                          {fab.priceAdd > 0 && <span className="font-mono">+€{fab.priceAdd}</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    2. Select Color
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

                {/* Sizing */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    3. Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-white/20 p-3 text-xs text-[#FDFBF7] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Custom Anatomical Fit">Custom Anatomical Measurement (42 Points)</option>
                    <option value="30">Size 30</option>
                    <option value="32">Size 32</option>
                    <option value="34">Size 34</option>
                    <option value="36">Size 36</option>
                  </select>
                </div>

                {/* Info */}
                <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#E5E5E5] font-light space-y-2">
                  <p className="font-semibold text-[#D4AF37] uppercase font-mono">Bespoke Fit Promise</p>
                  <p>Our tailoring house provides complimentary fittings and lifetime adjustments for your bespoke trousers.</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-xs text-[#E5E5E5] font-light">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Includes Lifetime Master Fitting Guarantee & Insured Global Courier</span>
                </div>

                <button
                  onClick={handleCustomAddToCart}
                  className="w-full md:w-auto px-10 py-5 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-4 h-4" /> Add Custom Bell Bottoms To Selection
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="bg-[#050505] text-[#D4AF37] text-center py-6 border-t border-[#D4AF37]/30 text-xs font-mono">
            © 2026 MAKVORA PARIS S.A. • Bespoke Bell Bottoms Customizer Protocol
          </footer>

        </div>
      </div>
    </AnimatePresence>
  );
}
