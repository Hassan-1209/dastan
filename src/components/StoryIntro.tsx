import React from 'react';
import { Home, Users, Globe, Sparkles } from 'lucide-react';

export const StoryIntro: React.FC = () => {
  return (
    <section
      id="story"
      className="py-32 bg-[#F4EFE6] relative overflow-hidden border-y border-[#1C1B18]/10 bg-grain"
      aria-label="Chapter 01 - The Concept"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 left-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Label */}
        <div className="flex items-center space-x-3 mb-16">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            01 — THE CONCEPT
          </span>
        </div>

        {/* Asymmetric Magazine Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Huge Statement & Vertical Decorative Line (7 cols) */}
          <div className="lg:col-span-7 relative pl-0 sm:pl-8">
            {/* Vertical Line Connecting Section */}
            <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#D48C29] via-[#1C1B18]/20 to-transparent" />

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#1C1B18] leading-[0.92] mb-8">
              EVERY CULTURE <br />
              <span className="italic font-normal text-[#D48C29]">HAS A TASTE</span> <br />
              OF HOME.
            </h2>

            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#5C5850] mb-8 border-l-2 border-[#D48C29] pl-5 py-1">
              «No matter where we come from or what language we speak, comfort food is the universal thread that binds humanity to memory, warmth, and belonging.»
            </blockquote>

            <div className="space-y-6 text-[#5C5850] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
              <p>
                In a world that moves too fast, comfort food is our shared anchor. Long before recipes were published in books or posted online, they were handed down through whispers, hands, and shared meals.
              </p>
              <p>
                DASTAN was created to celebrate this universal human heritage. Whether it is a steaming bowl of Tonkotsu ramen in Tokyo, a clay pot of biryani in Hyderabad, or crisp birria tacos in Oaxaca—every dish carries a story of who we are and where we come from.
              </p>
            </div>

            {/* Core Cultural Pillars */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[#1C1B18]/10">
              <div className="flex flex-col items-start">
                <div className="p-2.5 rounded-xl bg-[#EDE6D8] text-[#D48C29] mb-3">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B18]">Sanctuary</h3>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-0.5">The Kitchen</p>
              </div>

              <div className="flex flex-col items-start">
                <div className="p-2.5 rounded-xl bg-[#EDE6D8] text-[#3E5244] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B18]">Lineage</h3>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-0.5">Generations</p>
              </div>

              <div className="flex flex-col items-start">
                <div className="p-2.5 rounded-xl bg-[#EDE6D8] text-[#6E3C23] mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B18]">Global</h3>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-0.5">Every Culture</p>
              </div>

              <div className="flex flex-col items-start">
                <div className="p-2.5 rounded-xl bg-[#EDE6D8] text-[#944E2C] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B18]">Belonging</h3>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-0.5">Shared Table</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Full-Bleed Editorial Photography Spread (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div
              data-cursor="THE TABLE"
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#EDE6D8] border border-[#1C1B18]/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Global family gathering around a traditional dining table spread with comfort food"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] p-5 rounded-2xl bg-[#1C1B18]/80 backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-sans text-[#D48C29] font-bold uppercase tracking-[0.2em] mb-1">
                  EXHIBITION SPREAD
                </p>
                <p className="font-serif text-xl italic text-white/95">
                  «Where food feeds the soul long before it reaches the plate.»
                </p>
              </div>
            </div>

            {/* Fine Decorative Corner Bracket */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#D48C29]/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

        </div>

      </div>
    </section>
  );
};
