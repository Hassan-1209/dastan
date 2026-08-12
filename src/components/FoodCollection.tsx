import React, { useState, useMemo } from 'react';
import { Region, DishCategory, Dish } from '../types';
import { DISHES } from '../data/dishes';
import { BookOpen, Clock, MapPin, Globe, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

interface FoodCollectionProps {
  onOpenStory: (dish: Dish) => void;
  selectedRegionFilter?: Region;
}

export const FoodCollection: React.FC<FoodCollectionProps> = ({
  onOpenStory,
  selectedRegionFilter = 'ALL'
}) => {
  const [activeRegion, setActiveRegion] = useState<Region>(selectedRegionFilter);
  const [activeCategory, setActiveCategory] = useState<DishCategory>('ALL');

  const regions: Region[] = ['ALL', 'ASIA', 'EUROPE', 'AFRICA', 'MIDDLE EAST', 'NORTH AMERICA', 'SOUTH AMERICA', 'OCEANIA'];
  const categories: DishCategory[] = ['ALL', 'RICE', 'NOODLES', 'SOUPS', 'STEW', 'BAKED', 'GRILLED', 'DESSERT', 'BREAKFAST'];

  // Combined filtering logic
  const filteredDishes = useMemo(() => {
    return DISHES.filter((dish) => {
      const matchRegion = activeRegion === 'ALL' || dish.region === activeRegion;
      const matchCategory = activeCategory === 'ALL' || dish.category === activeCategory;
      return matchRegion && matchCategory;
    });
  }, [activeRegion, activeCategory]);

  return (
    <section
      id="dishes"
      className="py-32 bg-[#F4EFE6] relative overflow-hidden border-t border-[#1C1B18]/10 bg-grain"
      aria-label="Chapter 03 - Find Your Comfort Collection"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 left-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-[#D48C29]" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
                03 — THE GLOBAL ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1C1B18] tracking-tight uppercase">
              FIND YOUR <br />
              <span className="italic font-normal text-[#D48C29]">COMFORT</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5850] max-w-md font-sans leading-relaxed">
            Filter by geographic region or culinary category to explore comfort dishes prepared in home kitchens around the globe.
          </p>
        </div>

        {/* Dual Filter Controls Bar */}
        <div className="bg-[#FAF7F2] border border-[#1C1B18]/10 rounded-3xl p-6 shadow-xl mb-14 space-y-6">
          
          {/* Row 1: Region Filters */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D48C29] uppercase tracking-widest mb-3">
              <Globe className="w-4 h-4" />
              <span>REGION FILTER:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((reg) => {
                const isActive = activeRegion === reg;
                return (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                      isActive
                        ? 'bg-[#1C1B18] text-[#FAF7F2] shadow-md scale-105'
                        : 'bg-[#EDE6D8] text-[#1C1B18]/80 hover:bg-[#1C1B18]/10'
                    }`}
                  >
                    {reg}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Category Filters */}
          <div className="pt-4 border-t border-[#1C1B18]/10">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D48C29] uppercase tracking-widest mb-3">
              <Filter className="w-4 h-4" />
              <span>CATEGORY FILTER:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                      isActive
                        ? 'bg-[#D48C29] text-[#1C1B18] font-bold shadow-md'
                        : 'bg-white text-[#1C1B18]/70 border border-[#1C1B18]/10 hover:border-[#D48C29]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Counter & Reset */}
          <div className="pt-3 border-t border-[#1C1B18]/10 flex items-center justify-between text-xs font-mono text-[#8C867A]">
            <span>Showing {filteredDishes.length} {filteredDishes.length === 1 ? 'Dish' : 'Dishes'}</span>
            {(activeRegion !== 'ALL' || activeCategory !== 'ALL') && (
              <button
                onClick={() => {
                  setActiveRegion('ALL');
                  setActiveCategory('ALL');
                }}
                className="text-[#D48C29] underline hover:text-[#1C1B18] uppercase tracking-widest font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

        {/* Empty State Fallback */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-20 bg-[#FAF7F2] rounded-3xl border border-[#1C1B18]/10 space-y-4">
            <Sparkles className="w-8 h-8 text-[#D48C29] mx-auto" />
            <h3 className="font-serif text-2xl font-bold uppercase text-[#1C1B18]">No dishes found</h3>
            <p className="text-sm text-[#5C5850] max-w-md mx-auto font-sans">
              No comfort dishes match the selected combination of region and category. Try expanding your search filters.
            </p>
            <button
              onClick={() => {
                setActiveRegion('ALL');
                setActiveCategory('ALL');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1C1B18] text-[#FAF7F2] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#D48C29] hover:text-[#1C1B18] transition-colors"
            >
              SHOW ALL GLOBAL DISHES
            </button>
          </div>
        )}

        {/* Asymmetric Magazine Spread Layout */}
        <div className="space-y-12">
          {filteredDishes.map((dish, index) => {
            const isEven = index % 2 === 0;
            const isFeature = index % 3 === 0;

            if (isFeature) {
              // Large Feature Hero Spread (Full-width 12-col asymmetric)
              return (
                <article
                  key={dish.id}
                  onClick={() => onOpenStory(dish)}
                  data-cursor="READ STORY"
                  className="group cursor-pointer rounded-[32px] overflow-hidden bg-[#FAF7F2] border border-[#1C1B18]/10 shadow-lg hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  <div className={`lg:col-span-7 relative min-h-[360px] lg:min-h-[480px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/70 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-6 left-6 flex items-center space-x-2">
                      <span className="px-3.5 py-1 rounded-full bg-[#1C1B18]/90 backdrop-blur-md text-[#FAF7F2] font-mono text-xs uppercase tracking-wider">
                        {dish.country}
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-mono text-xs font-bold uppercase tracking-wider">
                        {dish.category}
                      </span>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#8C867A] mb-4 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#D48C29]" /> {dish.origin}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#D48C29]" /> {dish.cookTime}</span>
                      </div>

                      <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1B18] group-hover:text-[#D48C29] transition-colors leading-tight mb-3 uppercase">
                        {dish.name}
                      </h3>

                      {dish.nativeName && (
                        <p className="text-sm font-serif italic text-[#D48C29] mb-4">
                          {dish.nativeName}
                        </p>
                      )}

                      <p className="text-sm sm:text-base text-[#5C5850] font-sans leading-relaxed mb-6">
                        {dish.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {dish.keyIngredients.map((ing, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-[#EDE6D8] text-xs text-[#5C5850] font-sans">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#1C1B18]/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#8C867A] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D48C29]" /> {dish.comfortLevel || 'Rich & Hearty'}
                      </span>
                      <span className="inline-flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-widest text-[#1C1B18] group-hover:text-[#D48C29] transition-colors">
                        <span>EXPLORE STORY</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            }

            // Compact Asymmetric Split Card
            return (
              <article
                key={dish.id}
                onClick={() => onOpenStory(dish)}
                data-cursor="READ STORY"
                className="group cursor-pointer rounded-3xl bg-[#FAF7F2] border border-[#1C1B18]/10 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-4 aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE6D8] relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1C1B18]/80 backdrop-blur-md text-[#D48C29] text-xs font-mono font-bold uppercase">
                    {dish.country}
                  </span>
                </div>

                <div className="md:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#8C867A] mb-2 uppercase tracking-widest">
                      <span>{dish.category} • {dish.origin}</span>
                      <span>{dish.cookTime}</span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-[#1C1B18] group-hover:text-[#D48C29] transition-colors mb-1 uppercase">
                      {dish.name}
                    </h3>

                    {dish.nativeName && (
                      <p className="text-xs font-serif italic text-[#D48C29] mb-2">
                        {dish.nativeName}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#5C5850] font-sans leading-relaxed mb-4">
                      {dish.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1C1B18]/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {dish.keyIngredients.slice(0, 3).map((ing, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded bg-[#EDE6D8] text-[11px] text-[#5C5850]">
                          {ing}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center space-x-1 text-xs font-sans font-bold uppercase tracking-wider text-[#D48C29] shrink-0">
                      <span>READ STORY</span>
                      <BookOpen className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
