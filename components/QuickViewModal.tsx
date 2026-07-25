"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Shield, Clock, Check } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

const SIZES = ["EU 46 (S)", "EU 48 (M)", "EU 50 (L)", "EU 52 (XL)", "Custom Bespoke Measure"];

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#1C1512]/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full bg-[#FAF7F2] border border-[#C5A059] grid grid-cols-1 md:grid-cols-12 shadow-2xl text-[#1C1512] my-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-[#1C1512] text-[#FAF7F2] hover:text-[#C5A059] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Panel */}
          <div className="md:col-span-6 relative h-[380px] md:h-full min-h-[400px] bg-[#EAE2D5]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FAF7F2] bg-[#1C1512]/90 px-3 py-1 border border-[#C5A059] font-semibold">
                {product.tag}
              </span>
            </div>
          </div>

          {/* Details Panel */}
          <div className="md:col-span-6 p-8 flex flex-col justify-between bg-[#F4EFE6]">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono font-semibold block mb-2">
                {product.category}
              </span>
              <h2 className="font-serif text-3xl font-light mb-4 leading-tight text-[#1C1512]">
                {product.title}
              </h2>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE2D5]">
                <span className="font-mono text-2xl text-[#1C1512] font-semibold">{product.price}</span>
                <span className="text-xs text-[#8C776C] uppercase tracking-widest">Incl. VAT & Courier</span>
              </div>

              <p className="text-xs text-[#4A3B33] font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs */}
              <div className="space-y-2 mb-6 text-xs text-[#4A3B33] font-light bg-[#FAF7F2] p-4 border border-[#EAE2D5] shadow-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Handcrafted: {product.atelierTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Textiles: {product.fabrics.join(", ")}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-[11px] uppercase tracking-widest text-[#8C776C] font-mono mb-2 font-semibold">
                  Select Sizing Option
                </label>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-2 text-[11px] uppercase tracking-wider transition-all border ${
                        selectedSize === sz
                          ? "bg-[#1C1512] text-[#FAF7F2] border-[#1C1512] font-semibold"
                          : "bg-[#FAF7F2] border-[#EAE2D5] text-[#4A3B33] hover:border-[#C4B298]"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#EAE2D5] space-y-3">
              <button
                onClick={handleAdd}
                className="w-full py-4 bg-[#1C1512] text-[#FAF7F2] font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-md hover:bg-[#C5A059] hover:text-[#1C1512] transition-all"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#C5A059]" /> Added To Selection
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Acquire Piece — {product.price}
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
