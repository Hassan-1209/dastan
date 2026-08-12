import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, UtensilsCrossed, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreWorld: () => void;
  onFindComfort: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorld, onFindComfort }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#FAF7F2] bg-grain"
      aria-label="Hero - Every Culture Has A Taste Of Home"
    >
      {/* Background Watermark Chapter Number */}
      <div className="absolute top-10 right-4 lg:right-16 text-[22vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none z-0">
        01
      </div>

      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#D48C29]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#3E5244]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Storytelling Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small Chapter Label */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-[#D48C29]" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
                A GLOBAL COLLECTION OF COMFORT
              </span>
            </div>

            {/* Huge Editorial Display Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-bold tracking-tight text-[#1C1B18] leading-[0.92] mb-8 uppercase">
              EVERY CULTURE <br />
              <span className="font-normal italic text-[#D48C29]">HAS A TASTE</span> <br />
              OF HOME.
            </h1>

            {/* Supporting Text */}
            <blockquote className="text-lg sm:text-2xl font-serif italic text-[#5C5850] mb-8 border-l-2 border-[#D48C29] pl-5 py-1 max-w-xl leading-relaxed">
              «From a bowl of ramen in Tokyo to a pot of biryani shared around a family table, comfort food speaks a language everyone understands.»
            </blockquote>

            <p className="text-xs sm:text-sm text-[#5C5850] max-w-lg mb-10 leading-relaxed font-sans">
              DASTAN celebrates comfort food from every corner of the world—bringing together recipes, memories, ingredients, and human stories that cross borders.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreWorld}
                data-cursor="WORLD"
                className="group inline-flex items-center justify-center space-x-3 px-9 py-4 rounded-full bg-[#1C1B18] text-[#FAF7F2] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#D48C29] hover:text-[#1C1B18] transition-all duration-300 shadow-lg focus-visible:outline-2 focus-visible:outline-[#D48C29]"
              >
                <Globe className="w-4 h-4 text-[#D48C29] group-hover:text-[#1C1B18] transition-colors" />
                <span>EXPLORE THE WORLD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onFindComfort}
                data-cursor="DISCOVER"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-[#1C1B18]/20 bg-transparent text-[#1C1B18] font-sans text-xs font-bold uppercase tracking-widest hover:border-[#1C1B18] hover:bg-[#EDE6D8]/60 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29]"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D48C29]" />
                <span>FIND YOUR COMFORT FOOD</span>
              </button>
            </div>

            {/* Global Cultural Micro-Stats */}
            <div className="mt-14 pt-8 border-t border-[#1C1B18]/10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl font-bold text-[#1C1B18]">8</p>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-1">Global Regions</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#1C1B18]">100%</p>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-1">Human Stories</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#1C1B18]">1</p>
                <p className="text-[11px] text-[#8C867A] uppercase tracking-wider mt-1">Shared Table</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Global Hero Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Featured Photo Frame */}
            <div
              data-cursor="GLOBAL CULINARY"
              className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-[#1C1B18]/10 transition-transform duration-200 ease-out group"
              style={{
                transform: reducedMotion
                  ? 'none'
                  : `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px)`
              }}
            >
              {/* Main Food Photo - Global Table Composition */}
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                alt="Global comfort food table feast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Warm Soft Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-[#1C1B18]/25 to-transparent pointer-events-none" />

              {/* Floating Culinary Badges representing multiple cultures */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                  🇯🇵 TOKYO
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                  🇮🇹 NAPLES
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                  🇵🇰 LAHORE
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                  🇲🇽 OAXACA
                </span>
              </div>

              {/* Floating Editorial Dish Label */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1C1B18]/90 backdrop-blur-md border border-white/10 text-[#FAF7F2] z-20 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="p-2 rounded-xl bg-[#D48C29]/20 text-[#D48C29]">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </span>
                    <div>
                      <p className="font-serif text-lg font-bold leading-tight text-[#FAF7F2]">One World. Countless Tables.</p>
                      <p className="text-[10px] text-[#8C867A] uppercase tracking-widest mt-0.5">Global Comfort Food Exhibition</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-sans px-3 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-bold uppercase tracking-wider">
                    Global
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Fine Lines */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-[#D48C29]/40 rounded-bl-3xl pointer-events-none hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#D48C29]/40 rounded-tr-3xl pointer-events-none hidden sm:block" />

          </div>

        </div>
      </div>
    </section>
  );
};
