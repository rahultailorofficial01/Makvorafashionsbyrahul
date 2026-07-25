"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, ChevronRight, Camera } from "lucide-react";
import Image from "next/image";

interface LookbookItem {
  id: string;
  title: string;
  location: string;
  season: string;
  image: string;
  photographer: string;
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "LOOK-01",
    title: "The Midnight Velvet Tuxedo",
    location: "Grand Palais, Paris",
    season: "AW 2026 Collection",
    image: "/hero_fashion_bg.png",
    photographer: "Jean-Luc Moreau",
  },
  {
    id: "LOOK-02",
    title: "Obsidian Pinstripe Bespoke Blazer",
    location: "Atelier Place Vendôme",
    season: "Privé Tailoring",
    image: "/look_bespoke_blazer.png",
    photographer: "Elena Rostova",
  },
  {
    id: "LOOK-03",
    title: "Emerald Silk Haute Gown",
    location: "Opéra Garnier, Paris",
    season: "Couture Gala '26",
    image: "/look_haute_gown.png",
    photographer: "Marcello Vance",
  },
  {
    id: "LOOK-04",
    title: "Imperial Vicuña Overcoat",
    location: "Hotel de Crillon, Paris",
    season: "Winter Collection",
    image: "/look_overcoat.png",
    photographer: "Henri Dupont",
  },
];

export default function LookbookSection() {
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  return (
    <section id="lookbook" className="py-32 bg-[#FAF7F2] relative px-6 md:px-12 border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-mono block mb-3 font-semibold">
              Editorial & Runway
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#1C1512] font-light tracking-wider uppercase">
              AUTUMN RUNWAY '26
            </h2>
          </div>
          <p className="text-[#4A3B33] text-sm max-w-sm font-light mt-4 md:mt-0 tracking-wide">
            Captured live during Paris Haute Couture Week. Tap any look for editorial notes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOOKBOOK_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onClick={() => setSelectedLook(item)}
              className="group relative h-[480px] bg-[#EAE2D5] overflow-hidden cursor-pointer border border-[#EAE2D5] hover:border-[#C5A059] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/90 via-[#1C1512]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 bg-[#FAF7F2]/90 backdrop-blur-md text-[#1C1512] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#C5A059]">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Card Label */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] block mb-1 font-semibold">
                  {item.season}
                </span>
                <h3 className="font-serif text-xl font-light mb-2 group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[11px] text-[#C4B298] font-light flex items-center gap-1">
                  <Camera className="w-3 h-3 text-[#C5A059]" /> {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedLook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1C1512]/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedLook(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-[#FAF7F2] border border-[#C5A059] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLook(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-[#1C1512] text-[#FAF7F2] hover:text-[#C5A059] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:col-span-7 relative h-[450px] md:h-[600px] bg-[#1C1512]">
                <Image
                  src={selectedLook.image}
                  alt={selectedLook.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-[#F4EFE6] text-[#1C1512]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1C1512] bg-[#C5A059]/20 px-3 py-1 border border-[#C5A059] mb-6 font-semibold">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    Editorial Archives
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#8C776C] font-mono block mb-2">
                    {selectedLook.id} • {selectedLook.season}
                  </span>

                  <h3 className="font-serif text-3xl font-light tracking-wide mb-4 text-[#1C1512]">
                    {selectedLook.title}
                  </h3>

                  <div className="space-y-3 pt-4 border-t border-[#EAE2D5] text-xs text-[#4A3B33] font-light">
                    <p><span className="text-[#8C776C] font-mono uppercase">Location:</span> {selectedLook.location}</p>
                    <p><span className="text-[#8C776C] font-mono uppercase">Photography:</span> {selectedLook.photographer}</p>
                    <p><span className="text-[#8C776C] font-mono uppercase">Availability:</span> Made-to-measure by private commission only</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EAE2D5] mt-6">
                  <a
                    href="#couture"
                    onClick={() => setSelectedLook(null)}
                    className="w-full py-3.5 bg-[#1C1512] text-[#FAF7F2] text-center font-semibold text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#1C1512] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    View Couture Piece <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
