import React, { useEffect, useRef } from 'react';
import { X, MapPin, Clock, Utensils, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { Dish } from '../types';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!dish) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] text-[#1C1B18] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#1C1B18]/10 relative bg-grain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#1C1B18]/10">
          <div className="flex items-center space-x-3">
            <span className="px-3.5 py-1 rounded-full bg-[#1C1B18] text-[#FAF7F2] font-mono text-xs font-bold uppercase tracking-wider">
              {dish.country}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#D48C29] text-[#1C1B18] font-mono text-xs font-bold uppercase tracking-wider">
              {dish.category}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close Dish Story Modal"
            className="p-2 rounded-full border border-[#1C1B18]/20 text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#FAF7F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#EDE6D8]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/85 via-[#1C1B18]/20 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <h2 id="dish-modal-title" className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              {dish.name}
            </h2>
            {dish.nativeName && (
              <p className="font-serif italic text-lg text-[#D48C29] mt-0.5">
                {dish.nativeName}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D48C29] mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Origin: {dish.origin} ({dish.country})
              </span>
              <span className="flex items-center gap-1 text-white/80">
                <Clock className="w-3.5 h-3.5" /> Prep: {dish.prepTime} | Cook: {dish.cookTime}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Human Story Quote */}
          <div className="p-5 rounded-2xl bg-[#EDE6D8] border border-[#1C1B18]/10 space-y-2">
            <p className="text-xs font-mono text-[#D48C29] uppercase tracking-widest flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#D48C29]" />
              <span>THE HUMAN STORY</span>
            </p>
            <blockquote className="font-serif italic text-base sm:text-lg text-[#1C1B18] leading-relaxed">
              «"{dish.whyPeopleLoveIt}"»
            </blockquote>
          </div>

          {/* Full Cultural Story */}
          <div>
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C29] mb-3">
              CULTURAL ORIGIN & STORY
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#5C5850] leading-relaxed">
              {dish.fullStory}
            </p>
          </div>

          {/* When Traditionally Enjoyed */}
          <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#1C1B18]/10 space-y-1">
            <h4 className="text-xs font-mono text-[#D48C29] uppercase tracking-widest font-bold">
              WHEN TRADITIONALLY ENJOYED
            </h4>
            <p className="text-xs sm:text-sm text-[#1C1B18] font-sans">
              {dish.whenEnjoyed}
            </p>
          </div>

          {/* Ingredients & Flavor Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#1C1B18]/10">
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C29] mb-3">
                KEY INGREDIENTS
              </h3>
              <ul className="space-y-2">
                {dish.keyIngredients.map((ing, idx) => (
                  <li key={idx} className="text-xs text-[#5C5850] font-sans flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5244]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C29] mb-3">
                FLAVOR ARCHITECTURE
              </h3>
              <div className="space-y-2">
                {dish.flavorProfile.map((note, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#F4EFE6] border border-[#1C1B18]/5 flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D48C29] shrink-0" />
                    <span className="text-xs text-[#5C5850] font-sans font-medium">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Serving Suggestion */}
          <div className="pt-4 border-t border-[#1C1B18]/10">
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C29] mb-2">
              SERVING SUGGESTION & PAIRING
            </h3>
            <p className="text-xs text-[#5C5850] font-sans leading-relaxed mb-3">
              {dish.servingSuggestion}
            </p>
            {dish.pairedWith && (
              <div className="p-3 rounded-xl bg-[#EDE6D8] border border-[#1C1B18]/10 flex items-center space-x-2 text-xs font-mono text-[#1C1B18]">
                <Utensils className="w-4 h-4 text-[#D48C29]" />
                <span><strong>Recommended Pair:</strong> {dish.pairedWith}</span>
              </div>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 rounded-xl bg-[#1C1B18] text-[#FAF7F2] flex items-center justify-between text-xs font-mono">
            <span>Region: <strong>{dish.region}</strong> ({dish.country})</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#D48C29] text-[#1C1B18] font-sans font-bold uppercase tracking-wider text-[11px] hover:bg-[#FAF7F2] transition-colors"
            >
              CLOSE STORY
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
