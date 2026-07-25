"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Ruler, PackageCheck, Layers, Sparkles, CheckCircle2 } from "lucide-react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: typeof Scissors;
  details: string;
  quote: string;
  spec: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Anatomical Measurement",
    subtitle: "42 Precision Points",
    icon: Ruler,
    details: "Master Tailor Suresh Tailor analyzes posture, shoulder slope, and natural stance, taking 42 distinct anatomical dimensions to construct a unique structural form.",
    quote: "A true bespoke garment does not merely fit the body; it glorifies the posture.",
    spec: "Precision: 0.5 mm Tolerance",
  },
  {
    id: 2,
    title: "Pattern Blueprinting",
    subtitle: "Hand-Cut Master Cardboard",
    icon: Scissors,
    details: "Using traditional bone shears and French curve rulers, your unique pattern is hand-drafted onto heavy cardstock, stored permanently in our Paris & Atelier vault.",
    quote: "Every line drawn carries the legacy of two centuries of bespoke tailoring art.",
    spec: "Archived for Life in Master Vault",
  },
  {
    id: 3,
    title: "Floating Canvas Basting",
    subtitle: "Horsehair & Linen Core",
    icon: Layers,
    details: "We build a floating internal structure using natural Mongolian horsehair canvas and Irish linen. No synthetic fusing is ever permitted.",
    quote: "The jacket breathes with you, molding richer to your form with every wearing.",
    spec: "100% Hand-Padded Canvas",
  },
  {
    id: 4,
    title: "Final Hand-Stitching",
    subtitle: "Silk Thread Buttonholes",
    icon: PackageCheck,
    details: "Every buttonhole requires 45 minutes of delicate hand-worked pure silk thread stitching by Master Tailor Suresh Tailor and Rahul.",
    quote: "True luxury lives in the details invisible to the untrained eye.",
    spec: "Hand-Carved Buffalo Horn Buttons",
  },
];

const FABRICS = [
  {
    name: "Wild Peruvian Vicuña",
    rarity: "Strictly Quota Restricted",
    origin: "High Andes, Peru",
    description: "The softest fiber known to mankind (12 microns). Only 12 garments produced annually.",
    color: "#C19A6B",
  },
  {
    name: "24k Gold Thread Silk",
    rarity: "Custom Atelier Weave",
    origin: "Lyon, France",
    description: "Pure mulberry silk intertwined with microscopic 24-karat solid gold wire for subtle illumination.",
    color: "#D4AF37",
  },
  {
    name: "Obsidian Cotton Velvet",
    rarity: "Limited Mill Run",
    origin: "Tuscany, Italy",
    description: "Deep light-absorbing matte velvet with an unmatched density and liquid-smooth touch.",
    color: "#1C1512",
  },
  {
    name: "Royal Banarasi Sherwani Silk",
    rarity: "Handwoven Heritage",
    origin: "Varanasi, India",
    description: "Hand-spun silk with pure zari silver and gold brocade weave for ceremonial royalty.",
    color: "#8C6D23",
  },
];

export default function CraftsmanshipSection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedFabric, setSelectedFabric] = useState<number>(0);

  const stepData = STEPS.find((s) => s.id === activeStep) || STEPS[0];
  const Icon = stepData.icon;

  // Calculate progress percentage (0 to 100%)
  const progressPercent = ((activeStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <section id="craftsmanship" className="py-32 bg-[#FDFBF7] relative px-6 md:px-12 border-t border-[#EAE1D0] overflow-hidden">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-mono block mb-3 font-semibold">
            Heritage Ateliers • Master Tailor Suresh Tailor
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-[#050505] font-light tracking-wider uppercase mb-6">
            THE ART OF BESPOKE
          </h2>
          <p className="text-[#2A2A2A] text-sm md:text-base font-light leading-relaxed">
            Unlike mass luxury, MAKVORA garments are entirely constructed by hand without glue or synthetic shortcuts. Experience the four stages of bespoke perfection.
          </p>
        </div>

        {/* Animated Stepper Progress Bar */}
        <div className="relative mb-12 max-w-5xl mx-auto">
          {/* Connecting Base Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#EAE1D0] -translate-y-1/2 z-0 hidden md:block" />
          
          {/* Animated Motion Progress Line */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-1 bg-[#D4AF37] -translate-y-1/2 z-0 hidden md:block shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          />

          {/* 4 Steps Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {STEPS.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;
              const isPassed = step.id < activeStep;
              return (
                <motion.button
                  key={step.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-6 text-left border transition-all duration-500 relative flex flex-col justify-between h-48 shadow-md ${
                    isActive
                      ? "bg-[#050505] border-[#D4AF37] text-[#FDFBF7] shadow-xl"
                      : isPassed
                      ? "bg-[#0D0D0D] border-[#D4AF37]/50 text-[#E5E5E5]"
                      : "bg-[#0D0D0D] border-[#2A2A2A] text-[#E5E5E5] hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className={`font-mono text-xs font-semibold ${isActive ? "text-[#D4AF37]" : "text-[#D4AF37]/70"}`}>
                      0{step.id}
                    </span>
                    <div className={`p-2 rounded-full ${isActive ? "bg-[#D4AF37] text-[#050505]" : "bg-[#2A2A2A] text-[#D4AF37]"}`}>
                      <StepIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-playfair text-lg font-light tracking-wide text-[#FDFBF7] mb-1">
                      {step.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#D4AF37] block font-medium">
                      {step.subtitle}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Display Panel (HIGH CONTRAST TEXT) */}
        <div className="bg-[#0D0D0D] border border-[#D4AF37]/40 p-8 md:p-12 mb-24 relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold mb-4 bg-[#D4AF37]/10 px-3 py-1 border border-[#D4AF37]/30">
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Stage 0{stepData.id} Protocol</span>
                </div>

                <h3 className="font-playfair text-3xl md:text-4xl text-[#FDFBF7] font-light mb-6">
                  {stepData.title}
                </h3>

                <p className="text-[#E5E5E5] text-sm md:text-base font-light leading-relaxed mb-6">
                  {stepData.details}
                </p>

                <blockquote className="border-l-2 border-[#D4AF37] pl-4 py-2 italic font-playfair text-[#FDFBF7] text-base md:text-lg bg-white/5 mb-6">
                  &ldquo;{stepData.quote}&rdquo;
                </blockquote>
              </div>

              <div className="lg:col-span-4 bg-[#050505] p-8 border border-[#D4AF37]/40 text-center shadow-xl">
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-4 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block mb-2 font-semibold">
                  Atelier Benchmark
                </span>
                <span className="font-mono text-lg font-light text-balance text-[#FDFBF7]">
                  {stepData.spec}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature 1: Textile Library & Swatches (HIGH CONTRAST TEXT) */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair text-2xl text-[#050505] font-light tracking-wide uppercase">
              Exclusive Textile Library & Swatches
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {FABRICS.map((fab, idx) => (
              <motion.button
                key={fab.name}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedFabric(idx)}
                className={`p-6 border text-left transition-all duration-300 shadow-lg ${
                  selectedFabric === idx
                    ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                    : "bg-[#0D0D0D] text-[#FDFBF7] border-[#2A2A2A] hover:border-[#D4AF37]/60"
                }`}
              >
                <div className="w-9 h-9 rounded-full mb-4 border border-[#D4AF37] shadow-md flex items-center justify-center" style={{ backgroundColor: fab.color }}>
                  {selectedFabric === idx && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <h4 className="font-playfair text-lg font-light mb-1 text-[#FDFBF7]">{fab.name}</h4>
                <span className="text-[10px] font-mono uppercase tracking-wider block mb-2 text-[#D4AF37] font-semibold">{fab.rarity}</span>
                <p className="text-xs font-light leading-relaxed text-[#E5E5E5]">{fab.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
