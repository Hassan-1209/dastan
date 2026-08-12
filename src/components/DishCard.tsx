import React from 'react';
import { BookOpen, Clock, Flame, MapPin } from 'lucide-react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
  onOpenStory: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onOpenStory }) => {
  return (
    <article
      className="group bg-[#F4EFE6] border border-[#1C1B18]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        {/* Dish Image Header */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE6D8]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/60 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-[#1C1B18]/80 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] font-bold uppercase tracking-wider">
              {dish.category}
            </span>
            {dish.urduName && (
              <span className="px-2.5 py-1 rounded-md bg-[#D48C29]/90 backdrop-blur-md text-[#1C1B18] font-serif text-xs font-bold">
                {dish.urduName}
              </span>
            )}
          </div>

          {/* Bottom Image Overlay Info */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E5A83B]" />
              <span className="truncate max-w-[140px]">{dish.origin.split('&')[0]}</span>
            </span>
            <span className="flex items-center gap-1 text-white/90">
              <Clock className="w-3.5 h-3.5 text-[#E5A83B]" />
              <span>{dish.cookTime}</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-serif text-2xl font-bold text-[#1C1B18] group-hover:text-[#D48C29] transition-colors leading-snug">
              {dish.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#5C5850] line-clamp-2 mb-4 font-sans leading-relaxed">
            {dish.shortDescription}
          </p>

          {/* Key Ingredients tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dish.keyIngredients.slice(0, 3).map((ing, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#EDE6D8] text-[11px] text-[#5C5850] font-sans"
              >
                {ing}
              </span>
            ))}
            {dish.keyIngredients.length > 3 && (
              <span className="px-1.5 py-0.5 text-[10px] text-[#8C867A] font-mono">
                +{dish.keyIngredients.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-[#1C1B18]/5 flex items-center justify-between">
        <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#8C867A]">
          <Flame className="w-3.5 h-3.5 text-[#D48C29]" />
          <span>{dish.spiceLevel}</span>
        </div>

        <button
          onClick={() => onOpenStory(dish)}
          className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#1C1B18] hover:text-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29] p-1"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#D48C29]" />
          <span>Read Story</span>
        </button>
      </div>
    </article>
  );
};
