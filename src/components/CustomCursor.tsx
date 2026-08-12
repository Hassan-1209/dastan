import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target element or parent for data-cursor attribute
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor]');
        if (cursorEl) {
          const text = cursorEl.getAttribute('data-cursor') || 'EXPLORE';
          setIsHovered(true);
          setCursorText(text);
          return;
        }
      }
      setIsHovered(false);
      setCursorText('');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'w-20 h-20 bg-[#D48C29]/90 text-[#FAF7F2] backdrop-blur-md shadow-xl scale-110'
            : 'w-8 h-8 border border-[#D48C29]/60 bg-[#1C1B18]/10 backdrop-blur-[2px]'
        }`}
      >
        {isHovered ? (
          <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-center px-1 font-sans animate-fade-in">
            {cursorText}
          </span>
        ) : (
          <div className="w-1.5 h-1.5 rounded-full bg-[#D48C29]" />
        )}
      </div>
    </div>
  );
};
