import React from 'react';
import { DishCategory } from '../types';

interface MenuFilterProps {
  categories: DishCategory[];
  activeCategory: DishCategory;
  onSelectCategory: (category: DishCategory) => void;
  dishCounts: Record<DishCategory, number>;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  dishCounts,
}) => {
  return (
    <div
      role="region"
      aria-label="Menu category filters"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = dishCounts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 border flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-[#D48C29] ${
              isActive
                ? 'bg-[#1C1B18] text-[#FAF7F2] border-[#1C1B18] shadow-md scale-105'
                : 'bg-[#EDE6D8]/60 text-[#5C5850] border-[#1C1B18]/10 hover:border-[#D48C29] hover:text-[#1C1B18] hover:bg-[#EDE6D8]'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-[#D48C29] text-[#1C1B18] font-bold' : 'bg-[#1C1B18]/10 text-[#5C5850]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
