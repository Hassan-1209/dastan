import React, { useState } from 'react';
import { Region, Dish } from '../types';
import { DISHES } from '../data/dishes';
import { Compass, Globe, ArrowRight, Sparkles } from 'lucide-react';

interface WorldDiscoveryProps {
  onSelectDish: (dish: Dish) => void;
  onFilterRegion: (region: Region) => void;
}

interface RegionInfo {
  id: Region;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
  coordinates: { x: number; y: number }; // Percentage positions on SVG map
}

export const WorldDiscovery: React.FC<WorldDiscoveryProps> = ({
  onSelectDish,
  onFilterRegion
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('ASIA');

  const REGIONS_DATA: RegionInfo[] = [
    {
      id: 'ASIA',
      name: 'Asia',
      tagline: 'Broths, Dumplings & Royal Steams',
      description: 'From 18-hour ramen broths in Tokyo to saffron dum biryani in Hyderabad and fiery kimchi stews in Seoul, Asian comfort revolves around slow extraction, rice, and aromatic fire.',
      icon: '🌏',
      highlights: ['Japan (Ramen)', 'India (Biryani)', 'Korea (Kimchi Jjigae)', 'Pakistan (Karahi)'],
      coordinates: { x: 72, y: 42 }
    },
    {
      id: 'EUROPE',
      name: 'Europe',
      tagline: 'Caramelized Broths, Pasta & Baked Gratins',
      description: 'Overnight ragùs in Naples, Parisian caramelized onion soup, and golden Greek moussaka celebrate patience, butter, wine, and baked cheese crusts.',
      icon: '🌍',
      highlights: ['Italy (Lasagna)', 'France (Onion Soup)', 'Greece (Moussaka)'],
      coordinates: { x: 50, y: 32 }
    },
    {
      id: 'AFRICA',
      name: 'Africa',
      tagline: 'Clay Tagines, Earthy Grains & Sweet Spice',
      description: 'Clay vessel tagines from Marrakesh to rich Egyptian koshari and spicy West African jollof—African comfort is built on slow stewing, dates, honey, and communal grains.',
      icon: '🌍',
      highlights: ['Morocco (Lamb Tagine)', 'Egypt (Koshari)', 'West Africa (Jollof)'],
      coordinates: { x: 50, y: 55 }
    },
    {
      id: 'MIDDLE EAST',
      name: 'Middle East',
      tagline: 'Hand-Folded Dumplings, Yogurt & Spiced Butter',
      description: 'Handfolded manti dumplings, aromatic rice pilafs, and garlic yogurt drizzles—Middle Eastern comfort turns simple wheat and spices into warm family traditions.',
      icon: '🕌',
      highlights: ['Turkey (Manti)', 'Lebanon (Kibbeh)', 'Iran (Tahdig)'],
      coordinates: { x: 58, y: 45 }
    },
    {
      id: 'NORTH AMERICA',
      name: 'North America',
      tagline: 'Plancha Tacos, Consommé & Skillet Cheese',
      description: 'Crispy Birria tacos with hot dipping consommé, smoky cast iron macaroni and cheese, and slow-braised Southern pots that evoke warmth across borders.',
      icon: '🌎',
      highlights: ['Mexico (Birria Tacos)', 'United States (Baked Mac & Cheese)'],
      coordinates: { x: 25, y: 38 }
    },
    {
      id: 'SOUTH AMERICA',
      name: 'South America',
      tagline: 'Black Bean Stews, Farofa & Hearth Fires',
      description: 'Feijoada black bean stews slow-cooked with smoked meats, wood-fired empanadas, and hearty mountain stews bring families together on weekend afternoons.',
      icon: '🌎',
      highlights: ['Brazil (Feijoada)', 'Argentina (Empanadas)', 'Peru (Lomo Saltado)'],
      coordinates: { x: 33, y: 70 }
    },
    {
      id: 'OCEANIA',
      name: 'Oceania',
      tagline: 'Earthy Earth Ovens & Pacific Seafood',
      description: 'Hangi earth ovens, slow-roasted root vegetables, coconut seafood broths, and coastal comfort dishes cooked with timber and fire.',
      icon: '🌏',
      highlights: ['New Zealand (Hāngī)', 'Pacific Islands (Coconut Stew)'],
      coordinates: { x: 88, y: 75 }
    }
  ];

  const activeRegionInfo = REGIONS_DATA.find((r) => r.id === selectedRegion) || REGIONS_DATA[0];
  const regionDishes = DISHES.filter((d) => d.region === selectedRegion);

  const handleRegionClick = (regionId: Region) => {
    setSelectedRegion(regionId);
    onFilterRegion(regionId);
  };

  return (
    <section
      id="world"
      className="py-32 bg-[#1C1B18] text-[#FAF7F2] relative overflow-hidden bg-grain"
      aria-label="Chapter 02 - Global Geographic Discovery"
    >
      {/* Background Watermark Number */}
      <div className="absolute top-10 left-6 text-[20vw] leading-none font-serif font-bold text-white/[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            02 — GLOBAL DISCOVERY
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight uppercase">
              ONE WORLD. <br />
              <span className="italic font-normal text-[#D48C29]">COUNTLESS TABLES.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8C867A] mt-3 font-sans max-w-xl leading-relaxed">
              Explore the global geography of comfort. Select any region below to discover how different cultures express the same feeling of home.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#D48C29] uppercase tracking-widest shrink-0">
            <Globe className="w-4 h-4" />
            <span>INTERACTIVE GLOBAL MAP</span>
          </div>
        </div>

        {/* Region Selector Pills (Mobile Scrollable / Desktop Grid) */}
        <div
          role="tablist"
          aria-label="Global regions selector"
          className="flex overflow-x-auto md:grid md:grid-cols-7 gap-2.5 mb-12 pb-2 scrollbar-none"
        >
          {REGIONS_DATA.map((reg) => {
            const isSelected = reg.id === selectedRegion;
            return (
              <button
                key={reg.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleRegionClick(reg.id)}
                className={`px-4 py-3 rounded-2xl border text-center transition-all duration-300 shrink-0 font-sans text-xs font-bold uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                  isSelected
                    ? 'bg-[#D48C29] text-[#1C1B18] border-[#D48C29] shadow-xl scale-[1.02]'
                    : 'bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-center space-x-1.5">
                  <span>{reg.icon}</span>
                  <span>{reg.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive World Canvas & Region Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive World Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-[32px] p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* World Map SVG Graphic Background */}
            <div className="absolute inset-0 p-6 opacity-20 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-full text-white fill-current">
                {/* Simplified Stylized Continents Outlines */}
                <path d="M150,150 Q200,100 300,140 Q350,200 280,280 Q200,320 140,250 Z" /> {/* N America */}
                <path d="M280,320 Q320,300 350,380 Q320,480 260,420 Q240,360 280,320 Z" /> {/* S America */}
                <path d="M450,120 Q520,100 580,150 Q560,220 480,200 Q420,160 450,120 Z" /> {/* Europe */}
                <path d="M460,220 Q550,200 580,300 Q540,420 450,380 Q420,280 460,220 Z" /> {/* Africa */}
                <path d="M600,100 Q800,80 880,180 Q820,320 680,280 Q620,200 600,100 Z" /> {/* Asia */}
                <path d="M780,340 Q880,320 900,420 Q840,460 760,400 Z" /> {/* Oceania */}
              </svg>
            </div>

            {/* Interactive Pins on Map */}
            <div className="relative z-10 w-full h-[260px] sm:h-[320px]">
              {REGIONS_DATA.map((reg) => {
                const isSelected = reg.id === selectedRegion;
                return (
                  <button
                    key={reg.id}
                    onClick={() => handleRegionClick(reg.id)}
                    style={{
                      left: `${reg.coordinates.x}%`,
                      top: `${reg.coordinates.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
                      isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                    }`}
                  >
                    <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider transition-all shadow-lg ${
                      isSelected
                        ? 'bg-[#D48C29] text-[#1C1B18] border-[#D48C29]'
                        : 'bg-[#1C1B18]/90 text-white/90 border-white/20 hover:border-[#D48C29]'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                      <span>{reg.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Active Region Indicator */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4" /> ACTIVE REGION: {activeRegionInfo.name}
              </span>
              <span className="text-[11px] font-sans text-white/60">
                {regionDishes.length} Featured {regionDishes.length === 1 ? 'Dish' : 'Dishes'}
              </span>
            </div>

          </div>

          {/* Region Spotlight Card & Dishes List (5 cols) */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#D48C29]/20 text-[#D48C29] font-mono text-xs font-bold uppercase tracking-widest">
                  {activeRegionInfo.icon} REGION FOCUS
                </span>
                <span className="text-xs font-mono text-[#8C867A] uppercase tracking-widest">
                  {activeRegionInfo.name}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  {activeRegionInfo.name}
                </h3>
                <p className="text-xs font-mono text-[#D48C29] uppercase tracking-widest mt-1">
                  {activeRegionInfo.tagline}
                </p>
              </div>

              <p className="text-sm text-white/80 font-sans leading-relaxed">
                {activeRegionInfo.description}
              </p>

              {/* Dishes from this region */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs font-mono text-[#8C867A] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D48C29]" /> ICONIC DISHES
                </p>

                <div className="space-y-2">
                  {regionDishes.map((dish) => (
                    <button
                      key={dish.id}
                      onClick={() => onSelectDish(dish)}
                      className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D48C29] hover:bg-white/[0.08] transition-all text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-serif text-base font-bold text-white group-hover:text-[#D48C29] transition-colors">
                            {dish.name}
                          </p>
                          <p className="text-[10px] text-[#8C867A] font-sans uppercase">
                            {dish.country} • {dish.category}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8C867A] group-hover:text-[#D48C29] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => {
                  const el = document.getElementById('dishes');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full bg-[#D48C29] text-[#1C1B18] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#FAF7F2] transition-colors flex items-center justify-center space-x-2"
              >
                <span>VIEW ALL {activeRegionInfo.name} DISHES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
