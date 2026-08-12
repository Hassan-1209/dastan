import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['story', 'world', 'dishes', 'journey', 'memories', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { name: 'STORY', id: 'story' },
    { name: 'WORLD', id: 'world' },
    { name: 'DISHES', id: 'dishes' },
    { name: 'JOURNEY', id: 'journey' },
    { name: 'MEMORIES', id: 'memories' },
    { name: 'ABOUT', id: 'about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#1C1B18]/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left group focus-visible:outline-2 focus-visible:outline-[#D48C29]"
            aria-label="DASTAN - Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#1C1B18] group-hover:text-[#D48C29] transition-colors">
              DASTAN
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#5C5850] uppercase font-sans font-medium">
              The Taste of Home
            </span>
          </button>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs tracking-widest font-sans uppercase transition-all duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#D48C29] font-bold'
                      : 'text-[#1C1B18]/80 hover:text-[#1C1B18] font-semibold'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D48C29] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('world')}
              className="group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1C1B18] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#D48C29] hover:text-[#1C1B18] transition-all duration-300 shadow-sm focus-visible:outline-2 focus-visible:outline-[#D48C29]"
            >
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden inline-flex items-center space-x-2 px-3.5 py-2 rounded-full border border-[#1C1B18]/15 text-[#1C1B18] hover:border-[#D48C29] hover:text-[#D48C29] transition-colors font-sans text-xs font-medium uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-[#D48C29]"
            aria-label="Open Navigation Menu"
          >
            <span>Menu</span>
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};
