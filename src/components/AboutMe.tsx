import React from 'react';
import { motion } from 'framer-motion';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      className="relative h-screen min-h-screen snap-start snap-always bg-white text-zinc-900 flex flex-col justify-between px-6 sm:px-16 md:px-24 pt-28 pb-10 text-right overflow-hidden"
    >
      {/* Left-Side Background Video */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[48vw] md:w-[42vw] lg:w-[38vw] h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-90"
          src="/assets/aistudio/Untitled_video_e0149181.mp4"
        />
        {/* Soft edge blend into the white background */}
        <div className="absolute inset-y-0 right-0 w-32 sm:w-44 bg-gradient-to-r from-transparent to-white pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>

      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl ml-auto w-full my-auto flex flex-col items-end text-right"
      >
        {/* "Hi," kicker */}
        <span className="text-xs sm:text-sm font-mono text-zinc-400 mb-3 block">
          Hi,
        </span>

        {/* Title Heading */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl text-zinc-950 tracking-tighter leading-[0.95]">
          I Code.<br />
          Design Interfaces.<br />
          Apply.
        </h1>
      </motion.div>

      {/* Credentials right on top of PORTFOLIO / 2026 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl ml-auto w-full flex flex-col items-end text-right mt-auto"
      >
        <div className="space-y-1 mb-6 flex flex-col items-end text-right">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight">
            Antonio Jr. Camacho
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-500">
            BS in Computer Science (4th year), Undergraduate
          </p>
          <div className="pt-2 flex flex-col items-end gap-1 text-xs text-zinc-400 font-mono">
            <span>· AI-Assisted Web Development</span>
            <span>· Graphic Designing</span>
          </div>
        </div>

        {/* Bottom divider with PORTFOLIO / 2026 */}
        <div className="w-full flex items-center justify-end text-xs font-mono text-zinc-400 pt-5 border-t border-zinc-100">
          <span>PORTFOLIO / 2026</span>
        </div>
      </motion.div>
    </section>
  );
};
