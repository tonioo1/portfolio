import React, { useState, useRef } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { playClick, playPop } from '../utils/sound';
import {
  Code2,
  PenTool,
  Sparkles,
  Coffee,
  Server,
  FileCode,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const TechnicalSkills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dragging state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleCopy = (code: string) => {
    playPop();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'figma':
        return <PenTool className="h-4 w-4" />;
      case 'vs code':
        return <Code2 className="h-4 w-4" />;
      case 'google ai studio':
        return <Sparkles className="h-4 w-4" />;
      case 'java':
        return <Coffee className="h-4 w-4" />;
      case 'php':
        return <Server className="h-4 w-4" />;
      case 'html':
      case 'html5':
        return <FileCode className="h-4 w-4" />;
      case 'css':
      case 'css3':
        return <Layers className="h-4 w-4" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  // Scroll listeners to update active indicator
  const updateActiveIndex = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * (SKILLS_DATA.length - 1));
    setActiveIndex(Math.min(SKILLS_DATA.length - 1, Math.max(0, index)));
  };

  const handleScrollLeft = () => {
    playClick();
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: -280,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    playClick();
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: 280,
      behavior: 'smooth',
    });
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const distance = (x - startX) * 1.3;
    if (Math.abs(distance) > 6) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftPos - distance;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (skill: SkillItem) => {
    if (hasDragged) return; // Prevent opening modal when dragging
    playPop();
    setActiveSkill(skill);
  };

  const scrollToIndex = (idx: number) => {
    playClick();
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const target = (idx / (SKILLS_DATA.length - 1)) * maxScroll;
    scrollContainerRef.current.scrollTo({
      left: target,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="technical-skills"
      className="relative h-screen min-h-screen snap-start snap-always bg-white text-zinc-900 py-24 px-6 sm:px-16 md:px-24 border-t border-zinc-100 flex flex-col justify-center text-right overflow-hidden"
    >
      {/* Left-Side Background Video */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[48vw] md:w-[42vw] lg:w-[38vw] h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-90"
          src="/assets/aistudio/1029_1__922d9d5d.mp4"
        />
        {/* Mobile lighter wash for crisp legibility */}
        <div className="absolute inset-0 bg-white/30 sm:hidden pointer-events-none" />
        {/* Soft edge blend into the white background */}
        <div className="absolute inset-y-0 right-0 w-32 sm:w-44 bg-gradient-to-r from-transparent to-white pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>

      {/* Container constrained to right half (from middle to right side) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full md:max-w-[50vw] ml-auto my-auto flex flex-col items-end text-right"
      >
        
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-end text-right">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-zinc-950 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
            Tools, software, programming languages, and technologies
          </p>
        </div>

        {/* Carousel Wrapper with Left & Right Arrows */}
        <div className="relative w-full">
          {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/95 border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-800 hover:text-black shadow-md hover:scale-105 transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/95 border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-800 hover:text-black shadow-md hover:scale-105 transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Draggable Carousel Track */}
          <div
            ref={scrollContainerRef}
            onScroll={updateActiveIndex}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`w-full overflow-x-auto no-scrollbar scroll-smooth flex gap-4 px-2 py-3 select-none ${
              isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {SKILLS_DATA.map((skill) => (
              <div
                key={skill.id}
                onClick={() => handleCardClick(skill)}
                className="w-[240px] sm:w-[260px] shrink-0 p-5 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/80 hover:border-zinc-900 transition-all flex flex-col justify-between text-right cursor-pointer group shadow-2xs hover:shadow-md"
              >
                {/* Top Row: Icon only (percentage number removed) */}
                <div className="flex items-center justify-end text-xs font-mono text-zinc-400 mb-4">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 group-hover:text-black group-hover:border-zinc-400 transition-colors">
                    {getToolIcon(skill.name)}
                  </div>
                </div>

                {/* Skill Title, Progress Bar & "Expertise Bar" label */}
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 group-hover:text-black tracking-tight mb-2">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-200/80 h-1.5 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-zinc-900 h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  {/* Replaced text with "Expertise Bar" */}
                  <p className="text-xs text-zinc-400 font-mono">
                    Expertise Bar
                  </p>
                </div>

                {/* Bottom hint */}
                <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500 group-hover:text-black transition-colors">Inspect →</span>
                  <span>{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Indicator Relocated to the Center */}
        <div className="flex items-center justify-center w-full mt-6 gap-2">
          {SKILLS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-zinc-900'
                  : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={`Go to skill ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>

      {/* Skill Detail Modal */}
      {activeSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-2xl text-right flex flex-col items-end">
            <button
              onClick={() => {
                playClick();
                setActiveSkill(null);
              }}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-black cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 w-full text-right">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                {activeSkill.category}
              </span>
              <div className="mt-1">
                <h3 className="font-display font-bold text-2xl text-zinc-950">
                  {activeSkill.name}
                </h3>
              </div>

              {/* Progress Bar in modal */}
              <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden mt-3 mb-1">
                <div
                  className="bg-zinc-900 h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeSkill.proficiency}%` }}
                />
              </div>

              {/* Replaced text under progress bar with "Expertise Bar" */}
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Expertise Bar
              </p>
            </div>

            <p className="text-sm text-zinc-700 leading-relaxed mb-5 text-right w-full">
              {activeSkill.description}
            </p>

            <div className="mb-5 w-full text-right">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <button
                  onClick={() => handleCopy(activeSkill.highlightCodeOrWorkflow)}
                  className="flex items-center gap-1 hover:text-black cursor-pointer"
                >
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
                <span>Code & Workflow Architecture:</span>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-900 text-zinc-100 text-xs font-mono overflow-x-auto leading-relaxed text-left">
                <code>{activeSkill.highlightCodeOrWorkflow}</code>
              </pre>
            </div>

            <div className="flex items-center justify-between w-full pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-400">
              <button
                onClick={() => {
                  playClick();
                  setActiveSkill(null);
                }}
                className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-black text-xs cursor-pointer"
              >
                Done
              </button>
              <span>Experience: {activeSkill.experience}</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
