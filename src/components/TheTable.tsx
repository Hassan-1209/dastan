import React, { useState } from 'react';
import { Utensils, Sparkles, X, Globe } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  country: string;
  role: string;
  description: string;
  top: string;
  left: string;
  image: string;
}

export const TheTable: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 'ramen',
      name: 'TONKOTSU RAMEN',
      country: 'Japan',
      role: 'Slow Pork Marrow Broth',
      description: '18-hour rich pork bone broth topped with handmade wheat noodles, soft-boiled ajitsuke tamago egg, and tender chashu.',
      top: '28%',
      left: '22%',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'biryani',
      name: 'HYDERABADI DUM BIRYANI',
      country: 'India / Pakistan',
      role: 'Clay Pot Saffron Rice',
      description: 'Dough-sealed clay deg filled with long-grain Basmati rice, Spanish saffron threads, and overnight spiced mutton.',
      top: '45%',
      left: '48%',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'tacos',
      name: 'OAXACAN BIRRIA TACOS',
      country: 'Mexico',
      role: 'Plancha Crisped Tacos',
      description: 'Corn tortillas dipped in guajillo chili fat, crisped on a plancha with melted Oaxaca cheese and braised beef.',
      top: '68%',
      left: '28%',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'lasagna',
      name: 'LASAGNA BOLOGNESE',
      country: 'Italy',
      role: 'Baked Pasta Gratin',
      description: 'Layered fresh egg pasta sheet gratin with slow-cooked ragù alla Bolognese, creamy béchamel, and Parmigiano-Reggiano.',
      top: '25%',
      left: '72%',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'tagine',
      name: 'MARRAKESH LAMB TAGINE',
      country: 'Morocco',
      role: 'Conical Clay Vessel',
      description: 'Clay conical tagine slow-simmered with lamb shoulder, sweet prunes, toasted almonds, and warm cinnamon-ras el hanout.',
      top: '72%',
      left: '68%',
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="table"
      className="py-32 bg-[#FAF7F2] relative overflow-hidden bg-grain border-t border-[#1C1B18]/10"
      aria-label="Chapter 08 - The Global Table"
    >
      {/* Chapter Watermark Number */}
      <div className="absolute top-10 left-6 text-[20vw] leading-none font-serif font-bold text-[#1C1B18]/[0.03] select-none pointer-events-none">
        08
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px w-12 bg-[#D48C29]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#D48C29]">
            08 — THE GLOBAL TABLE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1C1B18] tracking-tight uppercase">
              ONE GLOBAL <br />
              <span className="italic font-normal text-[#D48C29]">SHARED TABLE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5C5850] mt-3 font-sans max-w-lg leading-relaxed">
              Explore the global dining feast from above. Click any floating dish node on the flat-lay table to unveil its cultural place at the table.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-2">
            <Globe className="w-4 h-4" /> TOP-DOWN FEAST COMPOSITION
          </span>
        </div>

        {/* Top-Down Editorial Flat-Lay Dining Composition */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-[#1C1B18]/10 aspect-[16/10] sm:aspect-[21/9] bg-[#1C1B18] group">
          
          {/* Table Background Photo */}
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85"
            alt="Top-down editorial photograph of a global family dining table"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-[#1C1B18]/30 to-transparent" />

          {/* Interactive Floating Hotspots */}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot)}
              data-cursor="EXPLORE"
              style={{ top: spot.top, left: spot.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/hotspot focus-visible:outline-2 focus-visible:outline-[#D48C29] z-20"
            >
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1B18]/90 backdrop-blur-md text-[#FAF7F2] border border-[#D48C29]/60 hover:bg-[#D48C29] hover:text-[#1C1B18] transition-all duration-300 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#D48C29] group-hover/hotspot:bg-[#1C1B18] animate-ping" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest">{spot.id}</span>
              </div>
            </button>
          ))}

          {/* Selected Hotspot Detail Overlay Card */}
          {selectedHotspot && (
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md bg-[#1C1B18]/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-[#FAF7F2] shadow-2xl z-30 animate-fade-in">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#D48C29] uppercase tracking-widest">
                    {selectedHotspot.country} • {selectedHotspot.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-tight mt-0.5">
                    {selectedHotspot.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close detail"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                {selectedHotspot.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-serif text-[#D48C29]">
                <span>Origin: {selectedHotspot.country}</span>
                <span className="flex items-center gap-1 font-sans text-[10px] uppercase font-bold text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-[#D48C29]" />
                  <span>GLOBAL TABLE</span>
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
