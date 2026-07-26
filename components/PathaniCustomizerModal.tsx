"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, ArrowLeft, Sliders, ShieldCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface PathaniCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const FABRICS = [
  { id: "linen", name: "100% Pure Italian Linen", priceAdd: 0, image: "/pathani_olive_green.png" },
  { id: "cottonsilk", name: "Lustrous Cotton-Silk Blend", priceAdd: 100, image: "/pathani_brown_classic.png" },
  { id: "velvetsilk", name: "French Velvet-Silk Special", priceAdd: 300, image: "/pathani_black_embroidered.png" },
];

const COLORS = [
  { id: "olive", name: "Military Olive Green", hex: "#3D4837", bgImg: "/pathani_olive_green.png" },
  { id: "brown", name: "Rich Walnut Brown", hex: "#5C4A3C", bgImg: "/pathani_brown_classic.png" },
  { id: "black", name: "Obsidian Black", hex: "#0D0D0D", bgImg: "/pathani_black_embroidered.png" },
];

const COLLAR_STYLES = [
  { id: "shirt", name: "Traditional Soft Shirt Collar", desc: "Classic casual open-neck Pathani aesthetic" },
  { id: "mandarin", name: "Tailored Mandarin Band Collar", desc: "Clean and neat heritage profile" },
];

const SHOULDER_TABS = [
  { id: "tabs", name: "Military Epaulettes (Shoulder Tabs)", desc: "Distinct buttoned tabs on shoulders" },
  { id: "clean", name: "Clean Seamless Shoulders", desc: "Minimalist modern tailoring look" },
];

const SHALWAR_STYLES = [
  { id: "gathered", name: "Traditional Gathered Shalwar Pants", desc: "Classic gathered loose fit at ankles" },
  { id: "straight", name: "Modern Straight-Leg Trousers", desc: "Tapered contemporary fit" },
];

export default function PathaniCustomizerModal({ isOpen, onClose, onAddToCart }: PathaniCustomizerModalProps) {
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedCollar, setSelectedCollar] = useState(COLLAR_STYLES[0]);
  const [selectedTabs, setSelectedTabs] = useState(SHOULDER_TABS[0]);
  const [selectedShalwar, setSelectedShalwar] = useState(SHALWAR_STYLES[0]);
  const [monogram, setMonogram] = useState("MKV");
  const [size, setSize] = useState("Custom Anatomical Fit");

  const basePrice = 2100;
  const totalEUR = basePrice + selectedFabric.priceAdd;
  const totalUSD = Math.round(totalEUR * 1.08);
  const totalINR = Math.round(totalEUR * 90);

  const handleCustomAddToCart = () => {
    const customProduct: ProductItem = {
      id: `PATHANI-CUSTOM-${Date.now().toString().slice(-4)}`,
      title: `Custom Bespoke Pathani Suit`,
      category: "Bespoke Tailoring",
      priceEUR: totalEUR,
      priceUSD: totalUSD,
      priceINR: totalINR,
      tag: `Bespoke Custom (${selectedColor.name})`,
      image: selectedColor.bgImg,
      description: `Bespoke tailored Pathani suit in ${selectedColor.name} ${selectedFabric.name}. Designed with ${selectedCollar.name}, ${selectedTabs.name}, and ${selectedShalwar.name}. Custom pocket monogram: '${monogram}'.`,
      fabrics: [selectedFabric.name, "Silk Thread Embroidered Cuffs"],
      atelierTime: "60 Hours Master Crafting",
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
                DESIGN YOUR PATHANI SUIT
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#D4AF37] block font-semibold">
                CUSTOMIZED TO PERFECTION • MAKVORA HERITAGE
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
                  Heritage Indian Silhouette
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-[#FDFBF7]">
                  PREMIUM CLOTH FOR HAND-STITCHED PATHANI SUITS
                </h1>
                <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                  Tailored under the master direction of Suresh Tailor and Rahul, utilizing comfortable gathered shalwar drafts and clean double-stitched shirt collar fronts.
                </p>

                {/* 3 Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <span className="block font-mono text-xs font-bold text-[#D4AF37] mb-1">100%</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">PURE LINEN</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sliders className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">SHOULDER TABS</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sparkles className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">ZARI EMBROIDERED</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[4/3] w-full border border-[#D4AF37]/40 overflow-hidden shadow-xl bg-[#0D0D0D]">
                <Image
                  src={selectedColor.bgImg}
                  alt="Custom Pathani Suit Preview"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/80 backdrop-blur-md p-3 border border-[#D4AF37]/40 flex justify-between items-center text-xs">
                  <span className="font-mono text-[#D4AF37] font-semibold">{selectedCollar.name}</span>
                  <span className="font-mono text-[#FDFBF7] font-bold">€{totalEUR.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Options */}
            <div>
              <div className="text-center mb-10">
                <h3 className="font-playfair text-3xl font-light uppercase tracking-wider text-[#050505]">
                  DESIGN IT YOUR WAY
                </h3>
                <p className="text-xs font-mono text-[#8C6D23] uppercase tracking-widest mt-1">
                  Choose collar profile, shoulder tabs style, shalwar leg styling, and pocket monograms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Collar Style */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">COLLAR STYLE</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select soft shirt collar or structured mandarin band.</p>
                  <select
                    value={selectedCollar.id}
                    onChange={(e) => setSelectedCollar(COLLAR_STYLES.find(c => c.id === e.target.value) || COLLAR_STYLES[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {COLLAR_STYLES.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* Shoulder tabs */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">SHOULDER TABS</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select epaulettes tabs or modern plain shoulder line.</p>
                  <select
                    value={selectedTabs.id}
                    onChange={(e) => setSelectedTabs(SHOULDER_TABS.find(t => t.id === e.target.value) || SHOULDER_TABS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {SHOULDER_TABS.map((t) => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>

                {/* Shalwar pants styling */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">SHALWAR PANTS</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Choose gathered traditional shalwar or modern straight pants.</p>
                  <select
                    value={selectedShalwar.id}
                    onChange={(e) => setSelectedShalwar(SHALWAR_STYLES.find(s => s.id === e.target.value) || SHALWAR_STYLES[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {SHALWAR_STYLES.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Monogram */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">CUSTOM MONOGRAM</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Add custom embroidery initials on chest pocket flap.</p>
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

            {/* Builder Selection */}
            <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                    Bespoke Pathani Builder
                  </span>
                  <h3 className="font-playfair text-3xl font-light text-[#FDFBF7]">
                    CHOOSE FABRIC, COLOR & FIT
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

                {/* Size */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-mono text-[#D4AF37] font-semibold">
                    3. Fitting size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-white/20 p-3 text-xs text-[#FDFBF7] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Custom Anatomical Fit">Custom Anatomical Measurement (42 Points)</option>
                    <option value="38">Size 38</option>
                    <option value="40">Size 40</option>
                    <option value="42">Size 42</option>
                    <option value="44">Size 44</option>
                  </select>
                </div>

                {/* Info */}
                <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#E5E5E5] font-light space-y-2">
                  <p className="font-semibold text-[#D4AF37] uppercase font-mono">Bespoke Fit Promise</p>
                  <p>Our tailoring house provides complimentary fittings and lifetime adjustments for your bespoke attire.</p>
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
                  <ShoppingBag className="w-4 h-4" /> Add Custom Pathani To Selection
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="bg-[#050505] text-[#D4AF37] text-center py-6 border-t border-[#D4AF37]/30 text-xs font-mono">
            © 2026 MAKVORA PARIS S.A. • Bespoke Pathani Customizer Protocol
          </footer>

        </div>
      </div>
    </AnimatePresence>
  );
}
