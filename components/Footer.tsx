"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#1C1512] text-[#FAF7F2] pt-24 pb-12 border-t border-[#3D2E27] px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#3D2E27]">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex flex-col items-start">
            <span className="font-serif text-3xl tracking-[0.35em] font-light text-[#FAF7F2]">
              MAKVORA
            </span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-mono font-semibold">
              PARIS • HAUTE COUTURE
            </span>
          </div>

          <p className="text-[#C4B298] text-xs font-light leading-relaxed max-w-sm">
            House of high tailoring, luxury Vicuña outerwear, and custom haute couture. Headquartered at Place Vendôme, Paris.
          </p>

          <div className="flex items-center gap-2 text-xs text-[#C5A059] font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Fédération de la Haute Couture et de la Mode</span>
          </div>
        </div>

        {/* Ateliers Navigation */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Ateliers</h4>
          <ul className="space-y-2.5 text-xs text-[#C4B298] font-light">
            <li><a href="#concierge" className="hover:text-[#FAF7F2] transition-colors">Paris — Place Vendôme</a></li>
            <li><a href="#concierge" className="hover:text-[#FAF7F2] transition-colors">London — Savile Row</a></li>
            <li><a href="#concierge" className="hover:text-[#FAF7F2] transition-colors">Milan — Via Montenapoleone</a></li>
            <li><a href="#concierge" className="hover:text-[#FAF7F2] transition-colors">Tokyo — Ginza Salon</a></li>
            <li><a href="#concierge" className="hover:text-[#FAF7F2] transition-colors">Private Home Visits</a></li>
          </ul>
        </div>

        {/* Collections Navigation */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Collections</h4>
          <ul className="space-y-2.5 text-xs text-[#C4B298] font-light">
            <li><a href="#couture" className="hover:text-[#FAF7F2] transition-colors">Bespoke Tuxedos</a></li>
            <li><a href="#couture" className="hover:text-[#FAF7F2] transition-colors">Haute Couture Gowns</a></li>
            <li><a href="#couture" className="hover:text-[#FAF7F2] transition-colors">Vicuña Overcoats</a></li>
            <li><a href="#craftsmanship" className="hover:text-[#FAF7F2] transition-colors">Textile Library</a></li>
            <li><a href="#lookbook" className="hover:text-[#FAF7F2] transition-colors">Runway Archives</a></li>
          </ul>
        </div>

        {/* VIP Newsletter */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Private Gazette Invitation
          </h4>
          <p className="text-[#C4B298] text-xs font-light">
            Receive encrypted preview invitations for upcoming runway presentations and rare fabric harvests.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter private email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                suppressHydrationWarning
                autoComplete="off"
                className="bg-[#2A201B] border border-[#3D2E27] border-r-0 px-4 py-3 text-xs text-[#FAF7F2] placeholder-[#8C776C] focus:border-[#C5A059] focus:outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-[#C5A059] text-[#1C1512] px-5 text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF7F2] transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-xs text-[#C5A059] bg-[#C5A059]/10 p-3 border border-[#C5A059]/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>Invitation dispatched. Check your inbox.</span>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#8C776C] font-mono">
        <p suppressHydrationWarning>&copy; 2026 MAKVORA PARIS S.A. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Atelier</a>
          <a href="#" className="hover:text-[#C5A059] transition-colors">Authenticity Verification</a>
        </div>
      </div>
    </footer>
  );
}
