"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck, Crown, Award, PhoneCall } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenFitting: () => void;
}

export default function HeroSection({ onOpenFitting }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-20">
      
      {/* 1. Background Video Layer with Fallback Poster & Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero_fashion_bg.png"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-a-needle-and-thread-43180-large.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
        </video>
        
        {/* Dark Gradient Overlay (50-60% opacity for 100% text readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
      </div>

      {/* Visual Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/15 rounded-full blur-[180px] pointer-events-none z-0 animate-warm-glow" />

      {/* Hero Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* 2. Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D0D0D]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-mono mb-8 backdrop-blur-md shadow-lg"
        >
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>EST. 2001 • BESPOKE TAILORING HOUSE</span>
        </motion.div>

        {/* Massive Center Title with Stagger Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-[#FDFBF7] font-light uppercase leading-none drop-shadow-2xl">
            MAKVORA
          </h1>
          
          {/* Tagline */}
          <p className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#D4AF37] font-mono font-medium block mt-4">
            Handcrafted Luxury • Perfect Fit • Timeless Elegance
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#E5E5E5] font-light text-sm md:text-lg max-w-2xl leading-relaxed tracking-wider mb-10 text-balance"
        >
          Crafting world-class bespoke tuxedos, royal sherwanis, and handmade Vicuña suits with 25+ years of family heritage and Parisian precision.
        </motion.p>

        {/* 4. Action CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenFitting}
            className="px-9 py-4 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:bg-[#F3E5AB] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] transition-all duration-300 text-center"
          >
            Book Private Fitting
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#couture"
            className="px-9 py-4 bg-white/5 border border-white/20 backdrop-blur-md text-[#FDFBF7] font-light text-xs uppercase tracking-[0.25em] hover:bg-white/10 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-300 text-center"
          >
            Explore Privé Collection
          </motion.a>
        </motion.div>

        {/* 3. Founder & Legacy Attribution (Bottom Signature Block) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-5 bg-[#0D0D0D]/80 border border-[#D4AF37]/30 backdrop-blur-md max-w-2xl w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block font-semibold">
                25+ Years Family Legacy & Heritage
              </span>
              <p className="text-xs md:text-sm text-[#FDFBF7] font-serif tracking-wide">
                Founded & Crafted by <span className="italic text-[#D4AF37] font-medium">Master Tailor Suresh Tailor</span> • Co-crafted by <span className="italic text-[#D4AF37] font-medium">Rahul</span>
              </p>
            </div>
          </div>

          <button
            onClick={onOpenFitting}
            className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] border-b border-[#D4AF37] hover:text-white transition-colors whitespace-nowrap"
          >
            Request Private Consultation &rarr;
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-neutral-400"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[#D4AF37]">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}