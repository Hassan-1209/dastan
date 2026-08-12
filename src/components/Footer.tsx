import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#FAF7F2] py-16 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-wider text-[#D48C29]">
                DASTAN
              </span>
              <span className="text-xs tracking-[0.25em] text-[#8C867A] uppercase mt-0.5">
                The Taste of Home
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8C867A] font-serif italic max-w-sm leading-relaxed">
              «Every culture has a taste of home.» <br />
              A competition-grade digital food exhibition celebrating global comfort food through immersive culinary storytelling, photography, and human memories.
            </p>
          </div>

          {/* Nav Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#D48C29]">
              EXPLORE EXHIBITION
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('story')}
                  className="hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
                >
                  01 — The Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('world')}
                  className="hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
                >
                  02 — Global Discovery Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dishes')}
                  className="hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
                >
                  03 — Comfort Food Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
                >
                  05 — Taste Journey Sequence
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('memories')}
                  className="hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
                >
                  07 — Stories From Home
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#D48C29]">
              GLOBAL ARCHIVE
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#8C867A]">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono">
                Asia
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono">
                Europe
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono">
                Africa
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono">
                Americas
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/20 text-xs text-white/80 hover:text-white hover:border-[#D48C29] transition-colors font-mono"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#D48C29]" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C867A] gap-2 font-mono">
          <p>© 2026 DASTAN — The Taste of Home. All rights reserved.</p>
          <p>DEV Community Challenge: Comfort Food Edition • Perfect Landing</p>
        </div>

      </div>
    </footer>
  );
};
