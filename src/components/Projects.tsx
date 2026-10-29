import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ExternalLink, Layers, RefreshCw } from 'lucide-react';
import { playClick, playPop } from '../utils/sound';

interface ProjectCard {
  id: string;
  title: string;
  url: string;
  image: string;
  badge: string;
}

const INITIAL_PROJECTS: ProjectCard[] = [
  {
    id: 'citsf-mlbb',
    title: 'MLBB Mini Tournament | Standings',
    url: 'https://citsf-mlbb.pages.dev/',
    image: '/assets/aistudio/image_67b76efa.png',
    badge: 'citsf-mlbb.pages.dev',
  },
  {
    id: 'sorry-54v',
    title: 'Chinese Apology Humor',
    url: 'https://sorry-54v.pages.dev/',
    image: '/assets/aistudio/image_cf37b7bc.png',
    badge: 'sorry-54v.pages.dev',
  },
];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCard[]>(INITIAL_PROJECTS);

  const cycleCard = () => {
    playPop();
    setProjects((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 80;
    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.offset.y) > swipeThreshold
    ) {
      cycleCard();
    }
  };

  return (
    <section
      id="projects"
      className="relative h-screen min-h-screen snap-start snap-always bg-white text-zinc-900 py-24 px-6 sm:px-16 md:px-24 border-t border-zinc-100 flex flex-col justify-center text-right overflow-hidden"
    >
      {/* Left-Side Background Video */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[56vw] md:w-[50vw] lg:w-[46vw] h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-90"
          src="/assets/aistudio/Untitled_video__2__07de342c.mp4"
        />
        {/* Mobile lighter wash for crisp legibility */}
        <div className="absolute inset-0 bg-white/30 sm:hidden pointer-events-none" />
        {/* Soft edge blend into the white background */}
        <div className="absolute inset-y-0 right-0 w-32 sm:w-44 bg-gradient-to-r from-transparent to-white pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full md:max-w-[56vw] lg:max-w-[60vw] ml-auto my-auto flex flex-col items-end text-right"
      >
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8 flex flex-col items-end text-right">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-zinc-950 tracking-tight">
            Projects
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
            Drag top card away to reveal next · Hover to view title & visit link
          </p>
        </div>

        {/* Stacked Cards Bundle Container (Enlarged on PC) */}
        <div className="relative w-full aspect-[16/10] max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl pb-2">
          <AnimatePresence initial={false} mode="popLayout">
            {projects.map((project, index) => {
              const isTop = index === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{
                    scale: 0.94,
                    y: 16,
                    rotate: isTop ? 0 : -3,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: isTop ? 1 : 0.94,
                    y: isTop ? 0 : 16,
                    rotate: isTop ? 0 : -3,
                    zIndex: isTop ? 10 : 5,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0.85,
                    x: 240,
                    opacity: 0,
                    transition: { duration: 0.35, ease: 'easeOut' },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                  }}
                  drag={isTop}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.8}
                  onDragEnd={isTop ? handleDragEnd : undefined}
                  className={`absolute inset-0 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white select-none ${
                    isTop
                      ? 'cursor-grab active:cursor-grabbing'
                      : 'cursor-default pointer-events-none'
                  } group`}
                >
                  {/* Card Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />

                  {/* Title Description Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/80 text-white p-5 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs text-right">
                    
                    {/* Top Row: Visit Link and Badge */}
                    <div className="flex items-center justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClick();
                        }}
                        title={`Visit ${project.title}`}
                        className="p-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-105 transition-all shadow-md flex items-center gap-1.5 text-xs font-mono font-semibold"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Open Live Site</span>
                      </a>

                      <span className="text-[11px] font-mono text-zinc-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                        {project.badge}
                      </span>
                    </div>

                    {/* Center: Title Description */}
                    <div className="my-auto space-y-1">
                      <h3 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-emerald-400">
                        {project.url}
                      </p>
                    </div>

                    {/* Bottom: Drag Hint */}
                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="text-zinc-300">Drag to flip card ↗</span>
                      <span>Project {isTop ? '1 of 2' : '2 of 2'}</span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Stack Controls & Actions */}
        <div className="flex items-center justify-between w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-5 pt-3 border-t border-zinc-100 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-500">
              Active: <strong className="text-zinc-900">{projects[0].title}</strong>
            </span>
          </div>
        </div>

        {/* Small note at bottom */}
        <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right">
          * Other projects are still in the process of compiling, other projects to be added.
        </p>
      </motion.div>
    </section>
  );
};
