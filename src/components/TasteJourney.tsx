import React, { useState } from 'react';
import { JOURNEY_STAGES } from '../data/journey';
import { Compass, Sparkles, ChevronRight, Flame } from 'lucide-react';

export const TasteJourney: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const currentStage = JOURNEY_STAGES[selectedStepIndex];

  // Global Horizontal Story Sequence Items
  const globalStories = [
    {
      title: '01 / TOASTING & BLOOMING',
      desc: 'Toasting whole cumin, star anise, or dried guajillo chilies in hot oil to unlock essential aromas.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '02 / HEARTH & CARAMELIZATION',
      desc: 'Reducing tomatoes, onions, or pork marrow bones over high heat to extract rich umami glaze.',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '03 / SLOW STEAM LOCK',
      desc: 'Clay pots, clay tagines, or oven casseroles locking steam for tenderizing slow roasts.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '04 / UNVEILING AT THE TABLE',
      desc: 'Lifting the lid or slicing the baked crust, filling the room with comforting perfumes.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="journey"
      className="py-32 bg-[#1C1B18] text-[#FAF7F2] relative overflow-hidden bg-grain"
      aria-label="Chapter 05 - The Global Taste Journey"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 right-6 text-[20vw] leading-none font-serif font-bold text-white/[0.03] select-none pointer-events-none">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            05 — THE GLOBAL TASTE JOURNEY
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight uppercase">
              THE GLOBAL <br />
              <span className="italic font-normal text-[#D48C29]">STORYTELLING JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8C867A] mt-3 max-w-xl font-sans leading-relaxed">
              From soil and spice harvest to the kitchen hearth and the family table, follow the six universal stages that turn food into home.
            </p>
          </div>
          <span className="font-mono text-xs text-[#D48C29] flex items-center gap-2 uppercase tracking-widest shrink-0">
            <Compass className="w-4 h-4" /> STAGE 0{selectedStepIndex + 1} OF 06
          </span>
        </div>

        {/* Journey Timeline Sequence Bar */}
        <div
          role="tablist"
          aria-label="Global journey stages timeline"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12"
        >
          {JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = idx === selectedStepIndex;
            return (
              <button
                key={stage.step}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                  isSelected
                    ? 'bg-[#D48C29] text-[#1C1B18] border-[#D48C29] shadow-2xl scale-[1.02]'
                    : 'bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#1C1B18]' : 'text-[#D48C29]'}`}>
                    0{idx + 1}
                  </span>
                  {isSelected && <Flame className="w-3.5 h-3.5 text-[#1C1B18]" />}
                </div>
                <p className={`font-serif text-base font-bold truncate uppercase ${isSelected ? 'text-[#1C1B18]' : 'text-white'}`}>
                  {stage.title}
                </p>
                <p className={`text-[10px] uppercase tracking-wider truncate font-sans mt-0.5 ${isSelected ? 'text-[#1C1B18]/80' : 'text-[#8C867A]'}`}>
                  {stage.keyAction}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/[0.03] border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 rounded-full bg-[#D48C29]/20 text-[#D48C29] font-mono text-xs font-bold uppercase tracking-widest">
                STAGE 0{currentStage.step}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8C867A]">
                {currentStage.subtitle}
              </span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase">
              {currentStage.title}
            </h3>

            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {currentStage.description}
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <p className="text-xs font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D48C29]" />
                <span>UNIVERSAL TRUTH</span>
              </p>
              <p className="text-sm text-white/90 italic font-serif leading-relaxed">
                «"{currentStage.culturalNote}"»
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <button
                disabled={selectedStepIndex === 0}
                onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                PREVIOUS
              </button>
              <button
                disabled={selectedStepIndex === JOURNEY_STAGES.length - 1}
                onClick={() => setSelectedStepIndex((prev) => Math.min(JOURNEY_STAGES.length - 1, prev + 1))}
                className="px-6 py-2.5 rounded-full bg-[#D48C29] text-[#1C1B18] text-xs font-sans font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF7F2] transition-colors flex items-center space-x-2"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              data-cursor="TIMELINE"
              className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={currentStage.image}
                alt={currentStage.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-white/90 bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="uppercase tracking-widest text-[#D48C29]">Universal Pillar:</span>
                <p className="font-serif text-base text-white mt-0.5">{currentStage.keyAction}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Horizontal Storytelling Sequence Strip */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-3xl font-bold uppercase tracking-tight text-white">
              GLOBAL KITCHEN MILESTONES
            </h3>
            <span className="text-xs font-mono text-[#8C867A] uppercase tracking-widest hidden sm:inline">
              ← SCROLL HORIZONTALLY →
            </span>
          </div>

          {/* Desktop Horizontal Scroll Container / Mobile Vertical Stack */}
          <div className="flex flex-col md:flex-row md:overflow-x-auto gap-6 pb-6 scrollbar-thin">
            {globalStories.map((item, idx) => (
              <div
                key={idx}
                data-cursor="VIEW"
                className="w-full md:w-[320px] lg:w-[380px] shrink-0 rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden group hover:border-[#D48C29]/50 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold text-[#D48C29] mb-2 uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
