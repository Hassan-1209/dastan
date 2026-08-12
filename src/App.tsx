import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryIntro } from './components/StoryIntro';
import { WorldDiscovery } from './components/WorldDiscovery';
import { FoodCollection } from './components/FoodCollection';
import { ComfortAcrossBorders } from './components/ComfortAcrossBorders';
import { TasteJourney } from './components/TasteJourney';
import { IngredientCloud } from './components/IngredientCloud';
import { MemorySection } from './components/MemorySection';
import { SteamBowl } from './components/SteamBowl';
import { TheTable } from './components/TheTable';
import { MadeWithLove } from './components/MadeWithLove';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { Region, Dish } from './types';

export default function App() {
  const [selectedDishModal, setSelectedDishModal] = useState<Dish | null>(null);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<Region>('ALL');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectRegionFromWorld = (region: Region) => {
    setSelectedRegionFilter(region);
    scrollToSection('dishes');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1B18] font-sans selection:bg-[#D48C29]/20 selection:text-[#6E3C23]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Sticky Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 01 Hero Section */}
        <Hero
          onExploreWorld={() => scrollToSection('world')}
          onFindComfort={() => scrollToSection('dishes')}
        />

        {/* 02 Chapter 01: The Concept & Story */}
        <StoryIntro />

        {/* 03 Chapter 02: Global Discovery Map */}
        <WorldDiscovery
          onSelectDish={(dish) => setSelectedDishModal(dish)}
          onFilterRegion={handleSelectRegionFromWorld}
        />

        {/* 04 Chapter 03: Find Your Comfort (Dishes Archive) */}
        <FoodCollection
          selectedRegionFilter={selectedRegionFilter}
          onOpenStory={(dish) => setSelectedDishModal(dish)}
        />

        {/* 05 Chapter 04: Comfort Across Borders Side-By-Side Comparison */}
        <ComfortAcrossBorders />

        {/* 06 Chapter 05: Global Taste Journey Timeline */}
        <TasteJourney />

        {/* 07 Chapter 06: Shared Staples Ingredient Constellation */}
        <IngredientCloud />

        {/* 08 Chapter 07: Stories From Home Memory Wall */}
        <MemorySection />

        {/* Pure CSS Art Steaming Bowl */}
        <SteamBowl />

        {/* 09 Chapter 08: One Global Shared Table */}
        <TheTable />

        {/* 10 Brand Manifesto */}
        <MadeWithLove />

        {/* 11 Final Call To Action */}
        <FinalCTA
          onExploreWorld={() => scrollToSection('world')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessible Dish Story Modal */}
      <DishDetailModal
        dish={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
      />
    </div>
  );
}
