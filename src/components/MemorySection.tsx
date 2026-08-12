import React, { useState } from 'react';
import { MEMORIES } from '../data/memories';
import { MemoryCard } from './MemoryCard';
import { ShareStoryModal } from './ShareStoryModal';
import { Volume2, Heart, Plus } from 'lucide-react';

export const MemorySection: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <section
      id="memories"
      className="py-32 bg-[#1C1B18] text-[#FAF7F2] relative overflow-hidden bg-grain"
      aria-label="Chapter 07 - Stories From Home"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 right-6 text-[20vw] leading-none font-serif font-bold text-white/[0.03] select-none pointer-events-none">
        07
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center space-x-3 mb-12">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            07 — STORIES FROM HOME
          </span>
        </div>

        {/* Sensory Echoes Callout */}
        <div className="py-16 border-y border-white/10 mb-16 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D48C29] uppercase tracking-[0.2em]">
            <Volume2 className="w-4 h-4" />
            <span>SENSORY ECHOES</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white/95 leading-tight tracking-tight uppercase">
              «THE SOUND OF SPICES HITTING HOT OIL.»
            </h2>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#D48C29] italic leading-tight tracking-tight">
              «THE STEAM RISING FROM THE POT.»
            </h2>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white/95 leading-tight tracking-tight uppercase">
              «SOMEONE CALLING EVERYONE TO THE TABLE.»
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-[#8C867A] uppercase tracking-widest max-w-md mx-auto pt-4">
            Food is the language through which love is spoken without words.
          </p>
        </div>

        {/* Header Action to Share Memory */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              GLOBAL MEMORY WALL
            </h3>
            <p className="text-xs sm:text-sm text-[#8C867A] font-sans mt-1">
              Personal reflections from family tables around the world.
            </p>
          </div>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#D48C29] text-[#1C1B18] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#FAF7F2] transition-colors shadow-lg self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>SHARE YOUR MEMORY</span>
          </button>
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMORIES.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>

      </div>

      {/* Share Story Modal */}
      <ShareStoryModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </section>
  );
};
