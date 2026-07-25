"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const PRESS = [
  {
    quote: "MAKVORA redefines modern bespoke luxury with surgical precision and poetry in every stitch.",
    publication: "VOGUE PARIS",
    date: "Autumn Issue 2026",
  },
  {
    quote: "The Vicuña Tuxedos of MAKVORA are the pinnacle of private couture—discreet, rare, and legendary.",
    publication: "GQ INTERNATIONAL",
    date: "Bespoke Report 2026",
  },
  {
    quote: "Place Vendôme's most revered private atelier, serving global statesmen and cultural icons.",
    publication: "ROBB REPORT",
    date: "Best of the Best",
  },
];

export default function PressSection() {
  return (
    <section id="press" className="py-24 bg-[#F4EFE6] relative px-6 md:px-12 border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-mono block mb-2 font-semibold">
            Maison Acclaim
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1C1512] font-light tracking-wider uppercase">
            EDITORIAL RECOGNITION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS.map((item, index) => (
            <motion.div
              key={item.publication}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#FAF7F2] border border-[#EAE2D5] p-8 flex flex-col justify-between hover:border-[#C5A059] transition-colors shadow-xs"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C5A059] mb-6" />
                <p className="font-serif text-lg text-[#2A201B] font-light italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE2D5] flex justify-between items-center">
                <span className="font-mono text-xs text-[#1C1512] uppercase tracking-widest font-semibold">
                  {item.publication}
                </span>
                <span className="text-[10px] text-[#8C776C] font-mono">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
