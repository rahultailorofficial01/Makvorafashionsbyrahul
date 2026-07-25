"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What is the turnaround time for a bespoke suit or sherwani?",
    answer: "Each bespoke commission by Master Tailor Suresh Tailor and Rahul requires 4 to 6 weeks, involving 2 to 3 personal fittings to ensure an absolute anatomical fit.",
  },
  {
    id: 2,
    question: "How do private fitting appointments work?",
    answer: "You can schedule a private session at our Paris Place Vendôme, London Savile Row, or Indian atelier salons. We also offer private master tailor visits directly to your residence or luxury hotel worldwide.",
  },
  {
    id: 3,
    question: "Can I request custom fabric swatches prior to commissioning?",
    answer: "Yes, our Privé Client Concierge dispatches rare textile sample boxes (including 100% Peruvian Vicuña, 24k Gold Thread Silk, and Royal Banarasi Brocade) directly to registered clients.",
  },
  {
    id: 4,
    question: "What makes MAKVORA floating canvas different from fused suits?",
    answer: "Every MAKVORA suit is constructed with hand-stitched Mongolian horsehair and Irish linen canvas. We never use synthetic glue or fusing, allowing the garment to contour naturally to your physique.",
  },
  {
    id: 5,
    question: "Do you offer international shipping and fitting guarantees?",
    answer: "We provide insured global courier delivery and a lifetime fitting adjustment guarantee for all original bespoke commissions.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-28 bg-[#FDFBF7] border-t border-[#EAE1D0] px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-3 font-semibold">
            <HelpCircle className="w-4 h-4" /> Client Concierge Knowledge
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#050505] font-light uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0D0D0D] border border-[#D4AF37]/30 transition-colors overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center text-[#FDFBF7] font-playfair text-xl font-light hover:text-[#D4AF37] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">0{faq.id}.</span>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-[#E5E5E5] font-light leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
