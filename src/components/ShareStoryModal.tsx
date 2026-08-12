import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, Send, CheckCircle2 } from 'lucide-react';

interface ShareStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareStoryModal: React.FC<ShareStoryModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [story, setStory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim() || !author.trim()) return;
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setAuthor('');
      setLocation('');
      setStory('');
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] text-[#1C1B18] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#1C1B18]/10 relative bg-grain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1C1B18]/10">
          <div className="flex items-center space-x-2 text-[#D48C29]">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-serif text-xl font-bold text-[#1C1B18]">Share Your Food Story</span>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close Share Modal"
            className="p-2 rounded-full border border-[#1C1B18]/20 text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#FAF7F2] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#3E5244]/10 text-[#3E5244] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1B18]">Thank You for Sharing!</h3>
            <p className="text-sm text-[#5C5850] font-sans max-w-xs mx-auto">
              Your memory has been added to the DASTAN community archives.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#5C5850] mb-1">
                Your Story Title / Memory Name *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Grandma's Sunday Biryani"
                className="w-full px-4 py-2.5 rounded-xl border border-[#1C1B18]/20 bg-[#F4EFE6] text-sm font-sans focus:outline-none focus:border-[#D48C29]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#5C5850] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Saima K."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#1C1B18]/20 bg-[#F4EFE6] text-sm font-sans focus:outline-none focus:border-[#D48C29]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#5C5850] mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Rawalpindi"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#1C1B18]/20 bg-[#F4EFE6] text-sm font-sans focus:outline-none focus:border-[#D48C29]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#5C5850] mb-1">
                Your Food Memory / Story *
              </label>
              <textarea
                required
                rows={4}
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="What dish brings you back home? Describe the aromas, sounds, and people around the table..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#1C1B18]/20 bg-[#F4EFE6] text-sm font-sans focus:outline-none focus:border-[#D48C29]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#1C1B18] text-[#FAF7F2] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#D48C29] hover:text-[#1C1B18] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Memory to Archives</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
