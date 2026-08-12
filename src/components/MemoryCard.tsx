import React, { useState } from 'react';
import { Memory } from '../types';
import { MapPin, Calendar, Heart, ArrowUpRight } from 'lucide-react';

interface MemoryCardProps {
  memory: Memory;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer bg-[#FAF7F2] border border-[#1C1B18]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE6D8]">
          <img
            src={memory.image}
            alt={memory.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-[#D48C29] text-[#1A1815] font-mono text-[10px] font-bold uppercase tracking-wider">
              {memory.tag}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="font-serif text-xl font-bold">{memory.title}</p>
            <p className="text-[11px] text-[#E5A83B] font-mono">{memory.subtitle}</p>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <p className="text-xs sm:text-sm text-[#5C5850] font-serif italic leading-relaxed">
            "{memory.story}"
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-[#1C1B18]/5 flex items-center justify-between text-xs font-mono text-[#8C867A] bg-[#F4EFE6]">
        <div className="flex items-center space-x-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#D48C29]" />
          <span className="truncate max-w-[150px]">{memory.location}</span>
        </div>
        <div className="flex items-center space-x-1 text-[#1C1B18] font-bold group-hover:text-[#D48C29]">
          <span>{memory.author}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </article>
  );
};
