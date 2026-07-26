"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, ArrowLeft, Sliders, ShieldCheck, ShoppingBag, Coins, CreditCard, Landmark } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface TrousersCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const FABRICS = [
  { id: "merino", name: "100% Italian Merino Wool", priceAdd: 0, image: "/trousers_brown_pleated.png" },
  { id: "flax", name: "Irish Flax Linen-Cotton", priceAdd: 100, image: "/trousers_grey_wool.png" },
  { id: "flannel", name: "Charcoal Flannel Wool", priceAdd: 150, image: "/trousers_light_grey.png" },
];

const COLORS = [
  { id: "brown", name: "Classic Dark Brown", hex: "#4A3B32", bgImg: "/trousers_brown_pleated.png" },
  { id: "grey", name: "Charcoal Grey", hex: "#5C5C5C", bgImg: "/trousers_grey_wool.png" },
  { id: "light_grey", name: "Light Grey", hex: "#CCCCCC", bgImg: "/trousers_light_grey.png" },
];

const WAIST_STYLES = [
  { id: "adjusters", name: "Double Side Adjusters (Brass Buckles)", desc: "Vintage look, no belt needed" },
  { id: "loops", name: "Classic Belt Loops", desc: "For traditional leather belts" },
  { id: "gurkha", name: "Gurkha Cummerbund Band", desc: "Extended waistband wrap closure" },
];

const PLEATS = [
  { id: "single", name: "Single British Pleat", desc: "Classic drape, comfortable sitting room" },
  { id: "double", name: "Double Forward Pleats", desc: "Traditional Italian silhouette, maximum comfort" },
  { id: "flat", name: "Flat-Front (No Pleats)", desc: "Sleek and modern slim profile" },
];

const BOTTOM_CUFFS = [
  { id: "turnup", name: "1.5-inch Turn-Up Cuffs", desc: "Classic drape weight" },
  { id: "plain", name: "Plain Hemmed Bottom", desc: "Clean, continuous slim line" },
];

export default function TrousersCustomizerModal({ isOpen, onClose, onAddToCart }: TrousersCustomizerModalProps) {
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedWaist, setSelectedWaist] = useState(WAIST_STYLES[0]);
  const [selectedPleat, setSelectedPleat] = useState(PLEATS[0]);
  const [selectedCuff, setSelectedCuff] = useState(BOTTOM_CUFFS[0]);
  const [monogram, setMonogram] = useState("MKV");
  const [size, setSize] = useState("Custom Anatomical Fit");

  const basePrice = 1050;
  const totalEUR = basePrice + selectedFabric.priceAdd;
  const totalUSD = Math.round(totalEUR * 1.08);
  const totalINR = Math.round(totalEUR * 90);

  const handleCustomAddToCart = () => {
    const customProduct: ProductItem = {
      id: `TROUSERS-CUSTOM-${Date.now().toString().slice(-4)}`,
      title: `Custom Bespoke Trousers Pants`,
      category: "Bespoke Tailoring",
      priceEUR: totalEUR,
      priceUSD: totalUSD,
      priceINR: totalINR,
      tag: `Bespoke Custom (${selectedColor.name})`,
      image: selectedColor.bgImg,
      description: `Bespoke tailored trousers pants in ${selectedColor.name} ${selectedFabric.name}. Styled with ${selectedWaist.name}, ${selectedPleat.name}, and ${selectedCuff.name}. Waistband monogram: '${monogram}'.`,
      fabrics: [selectedFabric.name, "Waistband Satin Lining Bindings"],
      atelierTime: "40 Hours Hand-Stitching",
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
                DESIGN YOUR TROUSERS PANTS
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#D4AF37] block font-semibold">
                CUSTOMIZED TO PERFECTION • MAKVORA TROUSERS
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

          {/* Body */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-16 flex-1">
            
            {/* Fabric Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-12 text-[#FDFBF7] shadow-2xl">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
                  Finest Premium Wool & Cotton
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-[#FDFBF7]">
                  PREMIUM CLOTH FOR MADE TO MEASURE PANTS
                </h1>
                <p className="text-[#E5E5E5] text-xs md:text-sm font-light leading-relaxed">
                  Every trouser is drafted by Suresh Tailor and Rahul on cardstock using your precise 18 drape coordinates. Breathable waistband construction ensures perfect comfort.
                </p>

                {/* 3 Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <span className="block font-mono text-xs font-bold text-[#D4AF37] mb-1">100%</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">ITALIAN WOOL</span>
                  </div>
                  <div className="text-center p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg">
                    <Sliders className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5E5E5]">SIDE ADJUSTERS</span>
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
                  alt="Custom Trousers Preview"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/80 backdrop-blur-md p-3 border border-[#D4AF37]/40 flex justify-between items-center text-xs">
                  <span className="font-mono text-[#D4AF37] font-semibold">{selectedWaist.name}</span>
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
                  Choose your waistband closure, pleats, bottom turn-ups, and custom monogram initials
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Waistband style */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">WAISTBAND CLOSURE</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select double adjusters or classic belt loops.</p>
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

                {/* Pleats selection */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">PLEATS TYPE</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Choose single pleat, double pleats or flat-front.</p>
                  <select
                    value={selectedPleat.id}
                    onChange={(e) => setSelectedPleat(PLEATS.find(p => p.id === e.target.value) || PLEATS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {PLEATS.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Bottom cuffs */}
                <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-playfair text-xl text-[#050505]">BOTTOM TURN-UPS</h4>
                  <p className="text-xs text-[#2A2A2A] font-light">Select 1.5-inch turn-up cuffs or clean plain hem.</p>
                  <select
                    value={selectedCuff.id}
                    onChange={(e) => setSelectedCuff(BOTTOM_CUFFS.find(c => c.id === e.target.value) || BOTTOM_CUFFS[0])}
                    className="w-full bg-[#FDFBF7] border border-[#EAE1D0] p-2.5 text-xs text-[#050505] font-medium focus:border-[#D4AF37] focus:outline-none"
                  >
                    {BOTTOM_CUFFS.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
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

            {/* Builder Selector */}
            <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 md:p-10 text-[#FDFBF7] shadow-2xl space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-widest font-semibold block mb-1">
                    Bespoke Pants Builder
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
                    <option value="30">Size 30 (Waist 76cm)</option>
                    <option value="32">Size 32 (Waist 81cm)</option>
                    <option value="34">Size 34 (Waist 86cm)</option>
                    <option value="36">Size 36 (Waist 91cm)</option>
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
                  <ShoppingBag className="w-4 h-4" /> Add Custom Trousers To Selection
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="bg-[#050505] text-[#D4AF37] text-center py-6 border-t border-[#D4AF37]/30 text-xs font-mono">
            © 2026 MAKVORA PARIS S.A. • Bespoke Trousers Customizer Protocol
          </footer>

        </div>
      </div>
    </AnimatePresence>
  );
}
