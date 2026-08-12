import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, BookOpen, Globe, Utensils, Compass, Heart, Info } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { name: 'STORY', id: 'story', icon: BookOpen, desc: 'Every culture has a taste of home' },
    { name: 'WORLD', id: 'world', icon: Globe, desc: 'Interactive global geographic discovery' },
    { name: 'DISHES', id: 'dishes', icon: Utensils, desc: 'Editorial global comfort collection' },
    { name: 'JOURNEY', id: 'journey', icon: Compass, desc: 'From ingredient to memory' },
    { name: 'MEMORIES', id: 'memories', icon: Heart, desc: 'Stories from family tables' },
    { name: 'ABOUT', id: 'about', icon: Info, desc: 'About DASTAN digital exhibition' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#1C1B18] text-[#FAF7F2] transition-opacity duration-300 bg-grain"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-wider text-[#D48C29]">DASTAN</span>
          <span className="text-[10px] tracking-widest text-[#8C867A] uppercase font-sans">The Taste of Home</span>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="p-2.5 rounded-full border border-white/15 text-[#FAF7F2] hover:bg-white/10 hover:border-[#D48C29] transition-colors focus-visible:outline-2 focus-visible:outline-[#D48C29]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-6 py-8 overflow-y-auto flex flex-col justify-between">
        <nav className="space-y-4">
          <p className="text-xs tracking-widest text-[#D48C29] uppercase font-mono mb-2">CHAPTERS</p>
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#D48C29]/40 transition-all text-left group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#D48C29]/10 text-[#D48C29] group-hover:bg-[#D48C29] group-hover:text-[#1C1B18] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-[#D48C29]">0{idx + 1}</span>
                      <span className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-[#D48C29] transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8C867A] mt-0.5">{link.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8C867A] group-hover:text-[#D48C29] group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </nav>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
          <button
            onClick={() => handleLinkClick('world')}
            className="w-full py-3.5 px-6 rounded-full bg-[#D48C29] text-[#1C1B18] font-bold tracking-widest text-xs hover:bg-[#FAF7F2] transition-colors flex items-center justify-center space-x-2 font-sans shadow-lg"
          >
            <span>EXPLORE THE WORLD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-center text-xs text-[#8C867A]">
            <p className="font-serif italic">«Every culture has a taste of home.»</p>
          </div>
        </div>
      </div>
    </div>
  );
};
