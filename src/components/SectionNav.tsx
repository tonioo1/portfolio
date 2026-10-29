import React, { useState, useEffect } from 'react';
import { playClick } from '../utils/sound';

interface SectionItem {
  id: string;
  name: string;
  short: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'about-me', name: 'About Me', short: '01' },
  { id: 'technical-skills', name: 'Technical Skills', short: '02' },
  { id: 'projects', name: 'Projects', short: '03' },
  { id: 'certifications-and-achievements', name: 'Certifications', short: '04' },
  { id: 'contact-information', name: 'Contact', short: '05' },
];

export const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about-me');

  useEffect(() => {
    const scrollTarget = document.getElementById('scroll-container') || window;

    const handleScroll = () => {
      const scrollTop =
        scrollTarget instanceof Window
          ? window.scrollY
          : scrollTarget.scrollTop;
      const scrollPos = scrollTop + window.innerHeight / 3;

      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 pointer-events-auto select-none"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            title={sec.name}
            className="group flex items-center gap-3 cursor-pointer text-left"
          >
            {/* Number Pill / Indicator Button */}
            <div
              className={`h-8 min-w-8 px-2.5 rounded-full text-xs font-mono font-medium flex items-center justify-center transition-all duration-300 border shadow-2xs ${
                isActive
                  ? 'bg-zinc-950 text-white border-zinc-950 scale-105 shadow-sm'
                  : 'bg-white/90 text-zinc-500 border-zinc-200 hover:border-zinc-900 hover:text-black hover:bg-white backdrop-blur-xs'
              }`}
            >
              <span>{sec.short}</span>
            </div>

            {/* Label smoothly appears on hover or when active */}
            <span
              className={`text-[11px] font-mono uppercase tracking-wider transition-all duration-200 hidden md:inline-block ${
                isActive
                  ? 'text-zinc-950 font-semibold opacity-100 translate-x-0'
                  : 'text-zinc-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0'
              }`}
            >
              {sec.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
