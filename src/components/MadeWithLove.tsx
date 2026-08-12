import React from 'react';
import { Heart } from 'lucide-react';

export const MadeWithLove: React.FC = () => {
  return (
    <section
      className="py-24 bg-[#F4EFE6] relative overflow-hidden border-b border-[#1C1B18]/5"
      aria-label="Made With Love Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1A1815] text-white min-h-[500px] flex items-center p-8 sm:p-16">
          
          {/* Background Photo */}
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=85"
            alt="Hands preparing food with love and tradition"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1815] via-[#1A1815]/90 to-transparent" />

          {/* Content overlay */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D48C29]/20 border border-[#D48C29]/40 text-[#E5A83B] text-xs font-mono font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>PASSION & HERITAGE</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
              MADE WITH <br />
              <span className="italic font-normal text-[#D48C29]">LOVE.</span>
            </h2>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-white/90 border-l-2 border-[#D48C29] pl-4 py-1 leading-relaxed">
              "Because the best recipes are rarely written down. <br className="hidden sm:inline" />
              They're remembered."
            </blockquote>

            <p className="text-sm sm:text-base text-[#8C867A] font-sans leading-relaxed">
              No stopwatch can measure the exact moment meat surrenders into tenderness. It requires an instinct passed down through touch, smell, and love across generations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
