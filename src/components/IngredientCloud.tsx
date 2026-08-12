import React, { useState } from 'react';
import { INGREDIENTS } from '../data/ingredients';
import { Ingredient } from '../types';
import { Globe, Flame, CheckCircle2 } from 'lucide-react';

export const IngredientCloud: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(INGREDIENTS[0]);

  return (
    <section
      id="ingredients"
      className="py-32 bg-[#FAF7F2] relative overflow-hidden bg-grain border-y border-[#1C1B18]/10"
      aria-label="Chapter 06 - The Global Ingredient Constellation"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 left-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        06
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            06 — THE GLOBAL INGREDIENT CONSTELLATION
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1C1B18] tracking-tight uppercase">
            SHARED <span className="italic font-normal text-[#D48C29]">STAPLES</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C5850] mt-3 font-sans max-w-xl leading-relaxed">
            The same humble ingredient travels around the globe, transforming into distinct regional comfort signatures. Select any ingredient to reveal its world footprint.
          </p>
        </div>

        {/* Desktop Constellation Layout / Mobile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Orbital Constellation Visual (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[480px] flex items-center justify-center">
            
            {/* Orbital Rays & Circle Guides */}
            <div className="hidden md:block absolute inset-0 m-auto w-[420px] h-[420px] rounded-full border border-dashed border-[#D48C29]/30 animate-slow-spin pointer-events-none" />
            <div className="hidden md:block absolute inset-0 m-auto w-[280px] h-[280px] rounded-full border border-[#1C1B18]/10 pointer-events-none" />

            {/* Central Steaming Dish Focal Point */}
            <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-[#FAF7F2] shadow-2xl border-2 border-[#D48C29] flex flex-col items-center justify-center text-center">
              <img
                src={selectedIngredient.image}
                alt={selectedIngredient.name}
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1C1B18]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-[#FAF7F2]">
                <span className="font-serif text-xs font-bold text-[#D48C29] uppercase">{selectedIngredient.nativeName || selectedIngredient.name}</span>
                <span className="font-sans text-[11px] font-semibold truncate">{selectedIngredient.name}</span>
              </div>
            </div>

            {/* Orbital Ingredient Node Buttons (Desktop Orbital Positions) */}
            <div className="hidden md:block">
              {INGREDIENTS.map((ing, idx) => {
                const isSelected = selectedIngredient.id === ing.id;
                // Calculate orbital positions in degrees
                const total = INGREDIENTS.length;
                const angle = (idx * (360 / total) - 90) * (Math.PI / 180);
                const radius = 210; // px distance from center
                const x = Math.round(Math.cos(angle) * radius);
                const y = Math.round(Math.sin(angle) * radius);

                return (
                  <button
                    key={ing.id}
                    onClick={() => setSelectedIngredient(ing)}
                    data-cursor="SELECT"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute inset-0 m-auto w-28 h-12 rounded-full border text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-lg ${
                      isSelected
                        ? 'bg-[#1C1B18] text-[#FAF7F2] border-[#D48C29] scale-110 z-20 shadow-xl'
                        : 'bg-[#FAF7F2] text-[#1C1B18] border-[#1C1B18]/20 hover:border-[#D48C29] hover:bg-[#F4EFE6] z-10'
                    }`}
                  >
                    <span className="truncate">{ing.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Fallback Grid */}
            <div className="md:hidden w-full grid grid-cols-2 gap-2 mt-6">
              {INGREDIENTS.map((ing) => {
                const isSelected = selectedIngredient.id === ing.id;
                return (
                  <button
                    key={ing.id}
                    onClick={() => setSelectedIngredient(ing)}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all ${
                      isSelected
                        ? 'bg-[#1C1B18] text-[#FAF7F2] border-[#D48C29]'
                        : 'bg-[#F4EFE6] text-[#1C1B18] border-[#1C1B18]/10'
                    }`}
                  >
                    <p className="font-bold uppercase">{ing.name}</p>
                    <p className="text-[10px] text-[#D48C29] font-serif italic">{ing.nativeName || ing.role}</p>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Ingredient World Detail Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C1B18] text-[#FAF7F2] rounded-[32px] p-8 sm:p-10 shadow-2xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> GLOBAL FOOTPRINT
                </span>
                <span className="px-3 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-mono text-xs font-bold uppercase">
                  {selectedIngredient.name}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-white uppercase tracking-tight">
                  {selectedIngredient.name}
                </h3>
                <p className="text-xs font-sans text-[#D48C29] uppercase tracking-widest mt-1 font-semibold">
                  {selectedIngredient.role}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                <p className="text-xs font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D48C29]" /> FLAVOR CHARACTER
                </p>
                <p className="text-sm text-white/90 font-sans font-medium">
                  {selectedIngredient.flavorProfile}
                </p>
              </div>

              {/* Cross-Cultural Expressions */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono text-[#8C867A] uppercase tracking-widest">
                  GLOBAL EXPRESSIONS
                </p>
                <div className="space-y-2">
                  {selectedIngredient.globalExpressions?.map((expr, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D48C29] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs font-bold text-white uppercase">{expr.region}: </span>
                        <span className="text-xs text-white/80 font-sans">{expr.dish}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                <p className="text-xs sm:text-sm text-white/80 font-serif italic leading-relaxed">
                  «"{selectedIngredient.culturalSignificance}"»
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
