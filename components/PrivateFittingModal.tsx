"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, User, Mail, Phone, CheckCircle2, Sparkles, ArrowLeft, Send } from "lucide-react";

interface PrivateFittingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ATELIERS = [
  { id: "paris", name: "Paris - Place Vendôme", address: "12 Place Vendôme, 75001 Paris" },
  { id: "london", name: "London - Savile Row", address: "18 Savile Row, Mayfair, London" },
  { id: "milan", name: "Milan - Via Montenapoleone", address: "Via Montenapoleone 8, Milano" },
  { id: "tokyo", name: "Tokyo - Ginza Salon", address: "6-7-1 Ginza, Chuo-ku, Tokyo" },
  { id: "concierge", name: "Private Residence / Hotel Visit", address: "Worldwide Master Tailor Courier" },
];

const SERVICES = [
  "Bespoke Suit & Tuxedo Fitting",
  "Haute Couture Gown Consultation",
  "Vicuña Overcoat Commission",
  "Full Season Wardrobe Curation",
];

export default function PrivateFittingModal({ isOpen, onClose }: PrivateFittingModalProps) {
  const [atelier, setAtelier] = useState(ATELIERS[0].id);
  const [service, setService] = useState(SERVICES[0]);
  const [date, setDate] = useState("2026-08-15");
  const [time, setTime] = useState("14:00");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setConfirmed(true);
  };

  const resetForm = () => {
    setConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#050505]/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
        
        {/* ALWAYS VISIBLE FLOATING CLOSE CROSS BUTTON */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={resetForm}
          className="fixed top-6 right-6 z-50 p-3.5 bg-[#050505] text-[#D4AF37] border-2 border-[#D4AF37] rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 flex items-center justify-center group"
          title="Close & Return to Homepage"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-2xl w-full max-h-[90vh] flex flex-col bg-[#FDFBF7] border-2 border-[#D4AF37] p-6 md:p-8 text-[#050505] shadow-2xl my-6 rounded-sm"
        >
          {/* Header Action Bar with Return Button */}
          <div className="flex items-center justify-between border-b border-[#EAE1D0] pb-4 mb-4 flex-shrink-0">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-[#050505] font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return To Homepage
            </button>
            <button
              onClick={resetForm}
              className="p-1 text-[#050505] hover:text-[#D4AF37] transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {!confirmed ? (
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {/* Scrollable Form Body */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] font-semibold mb-1">
                    <Sparkles className="w-4 h-4" /> Private Client Consultation
                  </div>
                  <h2 className="font-playfair text-2xl md:text-3xl font-light mb-1">
                    RESERVE YOUR PRIVATE FITTING
                  </h2>
                  <p className="text-[#2A2A2A] text-xs font-light">
                    Experience personal one-on-one consultation with Master Tailor Suresh Tailor & Rahul.
                  </p>
                </div>

                <form id="fitting-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Atelier Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#8C6D23] font-mono mb-2 font-semibold">
                      1. Select Preferred Atelier Location
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ATELIERS.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => setAtelier(loc.id)}
                          className={`p-3 text-left border text-xs transition-all ${
                            atelier === loc.id
                              ? "bg-[#050505] text-[#FDFBF7] border-[#D4AF37]"
                              : "bg-[#F5F0E6] border-[#EAE1D0] text-[#2A2A2A] hover:text-[#050505]"
                          }`}
                        >
                          <div className="font-medium flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {loc.name}
                          </div>
                          <div className={`text-[10px] mt-1 ${atelier === loc.id ? "text-[#D4AF37]" : "text-[#8C6D23]"}`}>{loc.address}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#8C6D23] font-mono mb-2 font-semibold">
                      2. Type of Bespoke Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#F5F0E6] border border-[#EAE1D0] p-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-[#8C6D23] font-mono mb-2 font-semibold">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#F5F0E6] border border-[#EAE1D0] p-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-[#8C6D23] font-mono mb-2 font-semibold">
                        Preferred Time (Local)
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#F5F0E6] border border-[#EAE1D0] p-3 text-xs text-[#050505] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Input */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#8C6D23] font-mono mb-2 font-semibold">
                      3. Client Contact Details
                    </label>
                    <div className="space-y-3">
                      <div className="relative">
                        <User className="w-4 h-4 text-[#8C6D23] absolute left-3 top-3.5" />
                        <input
                          type="text"
                          placeholder="Full Name (e.g. Lord Alexander Wright)"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          suppressHydrationWarning
                          autoComplete="off"
                          className="w-full bg-[#F5F0E6] border border-[#EAE1D0] pl-10 pr-3 py-3 text-xs text-[#050505] placeholder-[#8C6D23] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#8C6D23] absolute left-3 top-3.5" />
                          <input
                            type="email"
                            placeholder="Private Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#F5F0E6] border border-[#EAE1D0] pl-10 pr-3 py-3 text-xs text-[#050505] placeholder-[#8C6D23] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#8C6D23] absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            placeholder="Telephone / WhatsApp"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            suppressHydrationWarning
                            autoComplete="off"
                            className="w-full bg-[#F5F0E6] border border-[#EAE1D0] pl-10 pr-3 py-3 text-xs text-[#050505] placeholder-[#8C6D23] focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* STICKY ALWAYS VISIBLE SUBMIT FOOTER */}
              <div className="pt-4 mt-4 border-t border-[#EAE1D0] bg-[#FDFBF7] flex-shrink-0">
                <button
                  type="submit"
                  form="fitting-form"
                  className="w-full py-4 bg-[#050505] text-[#FDFBF7] font-semibold text-xs uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 shadow-lg border border-[#D4AF37] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Confirm Appointment Request
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 flex-1 flex flex-col justify-center">
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2 font-semibold">
                Appointment Reference: MKV-FITT-2026-9831
              </span>
              <h2 className="font-playfair text-3xl font-light text-[#050505] mb-4">
                FITTING RESERVED
              </h2>
              <p className="text-[#2A2A2A] text-sm max-w-md mx-auto leading-relaxed mb-8">
                Thank you, <span className="text-[#050505] font-semibold">{name}</span>. Our Senior Atelier Concierge will reach out via <span className="text-[#050505] font-semibold">{email}</span> within 2 hours to confirm your private session on <span className="text-[#050505] font-semibold">{date}</span> at <span className="text-[#050505] font-semibold">{time}</span>.
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-[#050505] text-[#FDFBF7] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all border border-[#D4AF37] mx-auto"
              >
                Return to Homepage
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
