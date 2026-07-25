"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ArrowRight, Lock, Truck } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "./CollectionGrid";

export interface CartItem extends ProductItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onProceedToCheckout?: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onProceedToCheckout,
}: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.numericPrice * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#050505]/70 backdrop-blur-md flex justify-end">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-[#FDFBF7] border-l-2 border-[#D4AF37] h-full flex flex-col justify-between p-6 md:p-8 text-[#050505] shadow-2xl relative"
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE1D0]">
              <div>
                <h3 className="font-playfair text-2xl font-light uppercase tracking-wider text-[#050505]">
                  PRIVATE SELECTION
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {items.length} Atelier {items.length === 1 ? "Piece" : "Pieces"} Selected
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#8C6D23] hover:text-[#050505] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="py-6 space-y-6 max-h-[50vh] overflow-y-auto pr-2">
              {items.length === 0 ? (
                <div className="text-center py-12 text-[#8C6D23]">
                  <p className="font-playfair text-lg text-[#050505] mb-2">Your selection is empty</p>
                  <p className="text-xs font-light">Explore our Privé Collection to add bespoke garments.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#F5F0E6] border border-[#EAE1D0] relative group shadow-xs"
                  >
                    <div className="relative w-20 h-24 bg-[#EAE1D0] flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-playfair text-sm text-[#050505] font-medium line-clamp-1">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#8C6D23] hover:text-red-600 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] font-mono text-[#D4AF37] font-semibold block mt-0.5">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex justify-between items-end mt-2">
                        <div className="flex items-center border border-[#EAE1D0] bg-[#FDFBF7]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2.5 py-0.5 text-xs text-[#8C6D23] hover:text-[#050505]"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-mono text-[#050505] font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2.5 py-0.5 text-xs text-[#8C6D23] hover:text-[#050505]"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono text-sm text-[#050505] font-semibold">
                          €{(item.numericPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="pt-6 border-t border-[#EAE1D0] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#2A2A2A] font-light">
                  <span>Insured Global Courier</span>
                  <span className="text-[#D4AF37] font-mono font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between text-[#2A2A2A] font-light">
                  <span>Atelier Fitting Guarantee</span>
                  <span className="text-[#D4AF37] font-mono font-semibold">Included</span>
                </div>
                <div className="flex justify-between text-base font-serif text-[#050505] pt-2 border-t border-[#EAE1D0]">
                  <span>Valuation Total</span>
                  <span className="font-mono text-[#050505] font-semibold">
                    €{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onProceedToCheckout) onProceedToCheckout();
                }}
                className="w-full py-4 bg-[#050505] text-[#FDFBF7] font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-md hover:bg-[#D4AF37] hover:text-[#050505] transition-all border border-[#D4AF37]"
              >
                Proceed to Private Checkout <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#8C6D23] uppercase tracking-widest font-mono pt-2">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-[#D4AF37]" /> Encrypted</span>
                <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-[#D4AF37]" /> Private Courier</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
