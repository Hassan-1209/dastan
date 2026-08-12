import React, { useState } from 'react';
import { ArrowRight, Heart, Globe } from 'lucide-react';
import { ShareStoryModal } from './ShareStoryModal';

interface FinalCTAProps {
  onExploreWorld: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreWorld }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <section
        className="py-36 bg-[#1C1B18] text-[#FAF7F2] relative overflow-hidden bg-grain border-t border-white/10"
        aria-label="Final Call to Action"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D48C29]/20 border border-[#D48C29]/40 text-[#D48C29] text-xs font-mono font-bold uppercase tracking-[0.2em]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>COMMUNAL INVITATION</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.92] uppercase">
            WHAT TASTES <br />
            LIKE <span className="italic font-normal text-[#D48C29]">HOME</span> <br />
            TO YOU?
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-[#8C867A] max-w-xl mx-auto leading-relaxed">
            «Join the DASTAN global exhibition by sharing your own comfort story, family dish, or table memory.»
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => setIsShareModalOpen(true)}
              data-cursor="SHARE"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#D48C29] text-[#1C1B18] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#FAF7F2] transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 focus-visible:outline-2 focus-visible:outline-[#D48C29]"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>SHARE YOUR STORY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWorld}
              data-cursor="WORLD"
              className="w-full sm:w-auto px-9 py-4 rounded-full border border-white/20 bg-transparent text-white font-sans text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 focus-visible:outline-2 focus-visible:outline-white"
            >
              <Globe className="w-4 h-4 text-[#D48C29]" />
              <span>EXPLORE THE WORLD</span>
            </button>
          </div>

        </div>
      </section>

      <ShareStoryModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
};
