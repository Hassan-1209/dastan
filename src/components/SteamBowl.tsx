import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export const SteamBowl: React.FC = () => {
  return (
    <section
      className="py-16 bg-[#F4EFE6] border-y border-[#1C1B18]/5 relative overflow-hidden"
      aria-label="Pure CSS Art Steaming Bowl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EDE6D8] border border-[#1C1B18]/10 text-xs font-mono text-[#D48C29] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CRAFTED IN PURE CSS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1B18] mb-2">
          THE ART OF STEAM
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5850] font-sans max-w-md mx-auto mb-10">
          A purely CSS-rendered clay vessel capturing the warmth, herbs, and rising aroma of slow-simmered comfort.
        </p>

        {/* CSS Steaming Bowl Illustration */}
        <div className="relative w-64 h-64 mx-auto flex flex-col items-center justify-center">
          
          {/* Animated Steam Plumes */}
          <div className="absolute -top-6 flex space-x-5 z-20 pointer-events-none">
            <div className="w-3 h-20 bg-gradient-to-t from-white/70 via-white/40 to-transparent blur-sm rounded-full animate-steam-1" />
            <div className="w-2.5 h-24 bg-gradient-to-t from-white/80 via-white/50 to-transparent blur-sm rounded-full animate-steam-2" />
            <div className="w-3.5 h-18 bg-gradient-to-t from-white/60 via-white/30 to-transparent blur-sm rounded-full animate-steam-3" />
          </div>

          {/* Rim Glow */}
          <div className="absolute top-16 w-48 h-8 rounded-full bg-[#E5A83B]/20 blur-md" />

          {/* Bowl Vessel Outer (Clay Pot) */}
          <div className="relative w-48 h-28 bg-gradient-to-b from-[#8C5228] via-[#6E3C23] to-[#4A2511] rounded-b-[100px] shadow-xl border-t-4 border-[#A36636] flex flex-col items-center justify-start overflow-hidden">
            
            {/* Inner Broth & Garnishes (Top surface) */}
            <div className="w-full h-8 bg-gradient-to-r from-[#D48C29] via-[#C07818] to-[#944E2C] rounded-full border-b border-[#6E3C23] relative flex items-center justify-center overflow-hidden shadow-inner">
              
              {/* CSS Noodles / Strands */}
              <div className="absolute w-36 h-4 border-b-2 border-dashed border-[#F4EFE6]/60 rounded-full top-1" />
              <div className="absolute w-28 h-4 border-b-2 border-dashed border-[#F4EFE6]/40 rounded-full top-2" />

              {/* CSS Half Soft-Boiled Egg */}
              <div className="absolute left-6 top-1 w-6 h-4 bg-[#FAF7F2] rounded-full border border-amber-200 flex items-center justify-center shadow-sm">
                <div className="w-3 h-2.5 bg-[#E5A83B] rounded-full" />
              </div>

              {/* CSS Green Chili Slices */}
              <div className="absolute right-8 top-1.5 w-2.5 h-2.5 bg-[#3E5244] rounded-full border border-[#5A7361] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#FAF7F2] rounded-full" />
              </div>
              <div className="absolute right-12 top-2 w-2 h-2 bg-[#3E5244] rounded-full" />

              {/* Red Chili Flakes */}
              <div className="absolute left-16 top-2 w-1.5 h-1.5 bg-[#C0392B] rounded-full" />
              <div className="absolute right-16 top-1 w-1.5 h-1.5 bg-[#C0392B] rounded-full" />
            </div>

            {/* Clay Pot Decorative Carving Lines */}
            <div className="mt-4 w-36 h-0.5 bg-[#4A2511] opacity-60" />
            <div className="mt-2 w-24 h-0.5 bg-[#4A2511] opacity-40" />

            {/* Pot Brand Stamp */}
            <div className="mt-2 text-[8px] font-mono font-bold tracking-widest text-[#E5A83B]/80 uppercase">
              DASTAN
            </div>
          </div>

          {/* Wooden Trivet Stand Base */}
          <div className="w-40 h-3 bg-[#3A2213] rounded-full mt-1 border-t border-[#6E3C23] shadow-md flex items-center justify-center">
            <div className="w-32 h-1 bg-[#26150B] rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
};
