import React, { useState } from 'react';
import { Clock, MapPin, Sparkles, BookOpen, ChevronRight, CheckCircle2, Utensils } from 'lucide-react';
import { Dish } from '../types';

interface SignatureDishProps {
  dish: Dish;
  onOpenModal: (dish: Dish) => void;
}

export const SignatureDish: React.FC<SignatureDishProps> = ({ dish, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'ingredients' | 'flavor'>('story');

  return (
    <section
      id="signature"
      className="py-32 bg-[#FAF7F2] relative overflow-hidden bg-grain"
      aria-label="Chapter 02 - The Signature Dish"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 right-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-[#D48C29]" />
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
              02 — THE DISH
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#8C867A] uppercase">
            PAKISTAN • TRADITIONAL • 45 MIN
          </span>
        </div>

        {/* Feature Hero Dish Banner - Art Object Presentation */}
        <div className="bg-[#1C1B18] text-[#FAF7F2] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Dish Visual Art Presentation (5 cols) */}
          <div
            data-cursor="ART OBJECT"
            className="lg:col-span-5 relative min-h-[420px] lg:min-h-[620px] overflow-hidden group"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18] via-[#1C1B18]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1C1B18]" />
            
            {/* Top Badges */}
            <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] text-xs font-bold uppercase tracking-wider">
                {dish.urduName || 'لاہوری کڑاہی'}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAF7F2] text-xs font-mono border border-white/10">
                {dish.calories || '620 kcal'}
              </span>
            </div>

            {/* Bottom Overlay Info for Mobile */}
            <div className="absolute bottom-6 left-6 right-6 z-10 lg:hidden">
              <h3 className="font-serif text-4xl font-bold text-white mb-1 tracking-tight">KARAHI</h3>
              <p className="text-xs text-[#D48C29] flex items-center gap-1 font-mono uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> {dish.origin}
              </p>
            </div>
          </div>

          {/* Right: Editorial Information Panel (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between">
            <div>
              {/* Header Metadata */}
              <div className="hidden lg:flex items-center justify-between mb-6 text-xs font-mono text-[#D48C29] border-b border-white/10 pb-4">
                <span className="flex items-center gap-2 tracking-widest uppercase">
                  <MapPin className="w-4 h-4" /> {dish.origin}
                </span>
                <span className="flex items-center gap-2 text-white/70 tracking-widest uppercase">
                  <Clock className="w-4 h-4 text-[#D48C29]" /> PREP: {dish.prepTime} | COOK: {dish.cookTime}
                </span>
              </div>

              <h2 className="hidden lg:block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight uppercase">
                KARAHI
              </h2>

              <p className="text-[#8C867A] text-base sm:text-lg mb-10 leading-relaxed font-sans">
                {dish.shortDescription}
              </p>

              {/* Interactive Tabs */}
              <div className="flex border-b border-white/10 mb-8 space-x-8">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`pb-3 text-xs font-sans uppercase tracking-[0.2em] transition-colors relative ${
                    activeTab === 'story'
                      ? 'text-[#D48C29] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  The Heritage Story
                  {activeTab === 'story' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D48C29]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('flavor')}
                  className={`pb-3 text-xs font-sans uppercase tracking-[0.2em] transition-colors relative ${
                    activeTab === 'flavor'
                      ? 'text-[#D48C29] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Flavor Profile
                  {activeTab === 'flavor' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D48C29]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-3 text-xs font-sans uppercase tracking-[0.2em] transition-colors relative ${
                    activeTab === 'ingredients'
                      ? 'text-[#D48C29] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Key Ingredients
                  {activeTab === 'ingredients' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D48C29]" />
                  )}
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[150px]">
                {activeTab === 'story' && (
                  <div className="space-y-4 animate-fade-in">
                    <blockquote className="text-white/90 font-serif italic text-base sm:text-lg leading-relaxed border-l-2 border-[#D48C29] pl-5 py-1">
                      "{dish.fullStory}"
                    </blockquote>
                    <p className="text-xs text-[#8C867A] font-mono flex items-center gap-2 pt-2 uppercase tracking-wider">
                      <Utensils className="w-3.5 h-3.5 text-[#D48C29]" />
                      <span>Pairing: {dish.pairedWith}</span>
                    </p>
                  </div>
                )}

                {activeTab === 'flavor' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
                    {dish.flavorProfile.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start space-x-3"
                      >
                        <Sparkles className="w-4 h-4 text-[#D48C29] shrink-0 mt-0.5" />
                        <span className="text-xs text-white/90 font-sans tracking-wide">{note}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="flex flex-wrap gap-2.5 animate-fade-in">
                    {dish.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-white/90 font-sans flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D48C29]" />
                        <span>{ing}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#8C867A]">
                <span className="uppercase tracking-wider">Spice Profile:</span>
                <span className="px-3 py-1 rounded-full bg-[#D48C29]/20 text-[#D48C29] font-bold uppercase tracking-wider">
                  {dish.spiceLevel}
                </span>
              </div>

              <button
                onClick={() => onOpenModal(dish)}
                data-cursor="READ STORY"
                className="group inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full bg-[#D48C29] text-[#1C1B18] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#FAF7F2] transition-all duration-300 shadow-xl focus-visible:outline-2 focus-visible:outline-[#D48C29]"
              >
                <BookOpen className="w-4 h-4" />
                <span>DISCOVER FULL STORY</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
