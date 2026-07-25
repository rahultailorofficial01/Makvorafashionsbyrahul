"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Lock, CreditCard, Landmark, Coins, ArrowLeft, CheckCircle2, Truck, Sparkles, Receipt, Download } from "lucide-react";
import Image from "next/image";
import { CartItem } from "./CartDrawer";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export default function CheckoutModal({ isOpen, onClose, items, onClearCart }: CheckoutModalProps) {
  const [step, setStep] = useState<"checkout" | "success">("checkout");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wire" | "upi" | "crypto">("card");
  
  // Client details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("France");
  const [zip, setZip] = useState("");

  const subtotal = items.reduce((acc, item) => acc + item.numericPrice * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !address) return;
    setStep("success");
    onClearCart();
  };

  const handleFinish = () => {
    setStep("checkout");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-2xl overflow-y-auto">
        <div className="min-h-screen w-full flex flex-col justify-between bg-[#FDFBF7] text-[#050505]">
          
          {/* Top Fixed Navigation Header */}
          <header className="sticky top-0 z-30 bg-[#050505] text-[#FDFBF7] py-5 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/30 shadow-xl">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return To Selection
            </button>

            <div className="flex flex-col items-center">
              <span className="font-playfair text-2xl tracking-[0.35em] text-[#FDFBF7] font-light">
                MAKVORA
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] font-mono font-semibold">
                PARIS • SECURE PRIVÉ CHECKOUT
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#D4AF37] hover:text-white transition-colors"
              title="Close Checkout"
            >
              <X className="w-6 h-6" />
            </button>
          </header>

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 flex-1">
            {step === "checkout" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Form Details */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] block mb-2 font-semibold">
                      Step 1 of 2 • Client Identification
                    </span>
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#050505] font-light">
                      DELIVERY & ATELIER DETAILS
                    </h2>
                  </div>

                  <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-6">
                    {/* Personal Info */}
                    <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                      <h3 className="text-xs uppercase tracking-widest text-[#8C6D23] font-mono font-semibold">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Full Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Lord Alexander Wright"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Private Email</label>
                          <input
                            type="email"
                            placeholder="client@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Telephone / WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="+33 1 42 68 00 00"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          suppressHydrationWarning
                          autoComplete="off"
                          className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                      <h3 className="text-xs uppercase tracking-widest text-[#8C6D23] font-mono font-semibold">
                        Global Insured Courier Shipping Address
                      </h3>
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Street Address & Suite</label>
                        <input
                          type="text"
                          placeholder="12 Place Vendôme, Suite 400"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          suppressHydrationWarning
                          autoComplete="off"
                          className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">City</label>
                          <input
                            type="text"
                            placeholder="Paris / London / Mumbai"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Postal Code</label>
                          <input
                            type="text"
                            placeholder="75001"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono text-[#8C6D23] mb-1">Country</label>
                          <input
                            type="text"
                            placeholder="France / India / USA"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#FDFBF7] border border-[#EAE1D0] px-4 py-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="bg-[#F5F0E6] p-6 border border-[#EAE1D0] space-y-4">
                      <h3 className="text-xs uppercase tracking-widest text-[#8C6D23] font-mono font-semibold">
                        Step 2 of 2 • Preferred Payment Protocol
                      </h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`p-4 border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                            paymentMethod === "card"
                              ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37]"
                              : "bg-[#FDFBF7] border-[#EAE1D0] text-[#050505] hover:border-[#D4AF37]"
                          }`}
                        >
                          <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Black Card / Visa</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("wire")}
                          className={`p-4 border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                            paymentMethod === "wire"
                              ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37]"
                              : "bg-[#FDFBF7] border-[#EAE1D0] text-[#050505] hover:border-[#D4AF37]"
                          }`}
                        >
                          <Landmark className="w-5 h-5 text-[#D4AF37]" />
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Swiss Wire</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("upi")}
                          className={`p-4 border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                            paymentMethod === "upi"
                              ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37]"
                              : "bg-[#FDFBF7] border-[#EAE1D0] text-[#050505] hover:border-[#D4AF37]"
                          }`}
                        >
                          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">UPI / NetBanking</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("crypto")}
                          className={`p-4 border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                            paymentMethod === "crypto"
                              ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37]"
                              : "bg-[#FDFBF7] border-[#EAE1D0] text-[#050505] hover:border-[#D4AF37]"
                          }`}
                        >
                          <Coins className="w-5 h-5 text-[#D4AF37]" />
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Vault Crypto</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Right Column: Order Summary & Purchase Execution */}
                <div className="lg:col-span-5">
                  <div className="bg-[#050505] border-2 border-[#D4AF37] p-8 text-[#FDFBF7] shadow-2xl sticky top-28 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                        Commission Summary
                      </span>
                      <h3 className="font-playfair text-2xl font-light text-[#FDFBF7]">
                        SELECTED BESPOKE PIECES
                      </h3>
                    </div>

                    {/* Items List */}
                    <div className="space-y-4 max-h-60 overflow-y-auto pr-2 border-y border-white/10 py-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                          <div className="relative w-14 h-16 bg-[#1A1A1A] flex-shrink-0">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-playfair text-sm text-[#FDFBF7] font-light line-clamp-1">{item.title}</h4>
                            <span className="text-[10px] font-mono text-[#D4AF37]">Qty: {item.quantity} • {item.category}</span>
                          </div>
                          <span className="font-mono text-xs font-semibold text-[#FDFBF7]">
                            €{(item.numericPrice * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-2 text-xs text-[#E5E5E5] font-light">
                      <div className="flex justify-between">
                        <span>Items Valuation</span>
                        <span className="font-mono text-[#FDFBF7]">€{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Insured Global Courier</span>
                        <span className="font-mono text-[#D4AF37]">Complimentary</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Master Tailor Fitting Guarantee</span>
                        <span className="font-mono text-[#D4AF37]">Included</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-white/10 text-base font-serif text-[#FDFBF7]">
                        <span>Total Commission</span>
                        <span className="font-mono text-[#D4AF37] font-semibold">€{subtotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      form="checkout-form"
                      className="w-full py-4 bg-[#D4AF37] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-white hover:text-[#050505] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" /> Authorize Commission Purchase
                    </button>

                    <div className="flex items-center justify-center gap-4 text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted</span>
                      <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Private Courier</span>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Success Confirmation View */
              <div className="max-w-2xl mx-auto bg-[#050505] border-2 border-[#D4AF37] p-10 text-center text-[#FDFBF7] my-12 shadow-2xl space-y-6">
                <CheckCircle2 className="w-20 h-20 text-[#D4AF37] mx-auto animate-bounce" />
                
                <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] font-semibold block">
                  Commission Reference: MKV-ORD-2026-88912
                </span>
                
                <h2 className="font-playfair text-4xl font-light text-[#FDFBF7]">
                  PURCHASE CONFIRMED
                </h2>

                <p className="text-[#E5E5E5] text-sm leading-relaxed max-w-md mx-auto font-light">
                  Thank you, <span className="text-[#D4AF37] font-medium">{name}</span>. Your bespoke order has been authorized. Master Tailor Suresh Tailor & Rahul have initiated pattern preparation.
                </p>

                <div className="bg-[#0D0D0D] border border-white/10 p-6 text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#D4AF37]">Client:</span>
                    <span>{name} ({email})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#D4AF37]">Destination:</span>
                    <span>{address}, {city}, {country}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#D4AF37]">Payment Method:</span>
                    <span className="uppercase">{paymentMethod} Authorized</span>
                  </div>
                  <div className="flex justify-between pt-1 font-semibold text-sm">
                    <span className="text-[#D4AF37]">Total Authorized:</span>
                    <span className="text-[#FDFBF7]">€{subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => alert("Downloading encrypted MAKVORA invoice receipt PDF...")}
                    className="flex-1 py-3.5 bg-white/10 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-mono uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download Receipt
                  </button>
                  
                  <button
                    onClick={handleFinish}
                    className="flex-1 py-3.5 bg-[#D4AF37] text-[#050505] text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all shadow-md"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
}
