import React, { useState } from 'react';
import { DISHES } from '../data/dishes';
import { Sparkles, Heart } from 'lucide-react';

export const ComfortAcrossBorders: React.FC = () => {
  const [selectedComparisonIndex, setSelectedComparisonIndex] = useState(0);

  const COMPARISONS = [
    {
      country1: 'JAPAN',
      dish1: 'Tonkotsu Ramen',
      country2: 'PAKISTAN',
      dish2: 'Hyderabadi Biryani',
      sharedTrait: 'The Patience of Slow Extraction',
      description: '18-hour slow pork bone boiling in Tokyo meets 12-hour saffron dum clay pot sealing in Hyderabad—two distant continents honoring time and steam.',
      image1: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      country1: 'ITALY',
      dish1: 'Lasagna Bolognese',
      country2: 'MEXICO',
      dish2: 'Oaxacan Birria Tacos',
      sharedTrait: 'The Seduction of Slow Tomatoes & Fire',
      description: 'Overnight ragù layered with béchamel in Naples meets guajillo chili beef braised and crisped on a plancha in Oaxaca—both delivering deep, savory warmth.',
      image1: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    },
    {
      country1: 'KOREA',
      dish1: 'Kimchi Jjigae',
      country2: 'FRANCE',
      dish2: 'Soupe à l’Oignon',
      sharedTrait: 'Bubbling Remedies for Freezing Evenings',
      description: 'Tangy fermented kimchi stew bubbling in a Korean black earthenware ttukbaegi meets dark caramelized onion broth under melted French Gruyère.',
      image1: 'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const currentComp = COMPARISONS[selectedComparisonIndex];

  return (
    <section
      id="borders"
      className="py-32 bg-[#FAF7F2] relative overflow-hidden bg-grain border-y border-[#1C1B18]/10"
      aria-label="Chapter 04 - Comfort Across Borders"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 right-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        04
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            04 — COMFORT ACROSS BORDERS
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1C1B18] tracking-tight uppercase">
            DIFFERENT RECIPES. <br />
            <span className="italic font-normal text-[#D48C29]">SAME FEELING.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C5850] mt-3 font-sans max-w-xl leading-relaxed">
            The point is never to compare which cuisine is superior. The magic lies in discovering how different cultures express the exact same human desire for warmth and belonging.
          </p>
        </div>

        {/* Tab Controls for Comparative Pairings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {COMPARISONS.map((comp, idx) => {
            const isSelected = idx === selectedComparisonIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedComparisonIndex(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                  isSelected
                    ? 'bg-[#1C1B18] text-[#FAF7F2] border-[#D48C29] shadow-xl scale-[1.02]'
                    : 'bg-[#EDE6D8]/60 text-[#1C1B18]/80 border-[#1C1B18]/10 hover:border-[#D48C29]'
                }`}
              >
                <div className="flex items-center justify-between mb-2 text-xs font-mono">
                  <span className={isSelected ? 'text-[#D48C29]' : 'text-[#8C867A]'}>
                    PAIRING 0{idx + 1}
                  </span>
                  <Heart className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D48C29]' : 'text-[#8C867A]'}`} />
                </div>
                <p className="font-serif text-lg font-bold uppercase truncate">
                  {comp.country1} × {comp.country2}
                </p>
                <p className={`text-[11px] font-sans truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#5C5850]'}`}>
                  {comp.sharedTrait}
                </p>
              </button>
            );
          })}
        </div>

        {/* Side-By-Side Visual Comparison Card */}
        <div className="bg-[#1C1B18] text-[#FAF7F2] rounded-[32px] p-8 sm:p-12 shadow-2xl border border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            
            {/* Dish 1 Frame */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={currentComp.image1}
                alt={currentComp.dish1}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-mono text-[10px] font-bold uppercase">
                  {currentComp.country1}
                </span>
                <p className="font-serif text-2xl font-bold text-white uppercase mt-1">
                  {currentComp.dish1}
                </p>
              </div>
            </div>

            {/* Central Equal Sign / Shared Idea */}
            <div className="lg:col-span-2 text-center flex flex-col items-center justify-center space-y-2 py-4">
              <div className="w-12 h-12 rounded-full bg-[#D48C29]/20 border border-[#D48C29] text-[#D48C29] flex items-center justify-center font-serif text-2xl font-bold">
                =
              </div>
              <span className="text-[10px] font-mono text-[#D48C29] uppercase tracking-widest">
                SHARED SOUL
              </span>
            </div>

            {/* Dish 2 Frame */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={currentComp.image2}
                alt={currentComp.dish2}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-mono text-[10px] font-bold uppercase">
                  {currentComp.country2}
                </span>
                <p className="font-serif text-2xl font-bold text-white uppercase mt-1">
                  {currentComp.dish2}
                </p>
              </div>
            </div>

          </div>

          {/* Description & Core Shared Values */}
          <div className="text-center max-w-3xl mx-auto space-y-6 pt-6 border-t border-white/10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#D48C29] uppercase">
              {currentComp.sharedTrait}
            </h3>

            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {currentComp.description}
            </p>

            {/* The 5 Shared Essence Pillars */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-white/90">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">WARM</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">FAMILIAR</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">SLOW</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">SHARED</span>
              <span className="px-4 py-1.5 rounded-full bg-[#D48C29] text-[#1C1B18] font-bold">HOME</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
