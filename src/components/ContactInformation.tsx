import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playPop } from '../utils/sound';
import { Github, Instagram, Copy, Check, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactInformation: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    playPop();
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    playPop();
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.mobile);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact-information"
      className="relative h-screen min-h-screen snap-start snap-always bg-white text-zinc-900 py-20 px-6 sm:px-16 md:px-24 border-t border-zinc-100 flex flex-col justify-between items-end text-right overflow-hidden"
    >
      {/* Left-Side Background Video */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[52vw] md:w-[48vw] lg:w-[45vw] h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-90"
          src="/assets/aistudio/Untitled_video__4__55a8eebf.mp4"
        />
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
        className="relative z-10 max-w-3xl ml-auto w-full my-auto flex flex-col items-end text-right"
      >
        {/* Main Title */}
        <div className="mb-6 text-right">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-zinc-950 tracking-tight">
            You’ve Reached The End, <br />
            Or The Beginning.
          </h2>
          <p className="text-sm sm:text-lg font-mono text-zinc-400 mt-1">
            Contact Information
          </p>
        </div>

        {/* Email & Details closer to each other */}
        <div className="space-y-1.5 mb-4 text-right">
          <div>
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className="font-display font-bold text-2xl sm:text-4xl text-zinc-900 hover:text-zinc-600 transition-colors inline-block"
            >
              {PERSONAL_INFO.contacts.email}
            </a>
          </div>
          <div>
            <a
              href={`tel:${PERSONAL_INFO.contacts.mobile.replace(/\s+/g, '')}`}
              className="font-display font-semibold text-lg sm:text-2xl text-zinc-700 hover:text-black transition-colors inline-block"
            >
              {PERSONAL_INFO.contacts.mobile}
            </a>
          </div>
        </div>

        {/* Social / Action Circle Buttons: GitHub, Instagram, Copy Email, Copy Phone */}
        <div className="flex items-center justify-end gap-2.5 mb-2">
          {/* GitHub button */}
          <a
            href="https://github.com/tonioo1"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub (tonioo1)"
            className="h-10 w-10 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-all hover:scale-105"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Instagram button */}
          <a
            href="https://www.instagram.com/lazy.hippo24/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram (@lazy.hippo24)"
            className="h-10 w-10 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-all hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
          </a>

          {/* Copy Email button (swapped with Instagram) */}
          <button
            onClick={handleCopyEmail}
            title="Copy Email to Clipboard"
            className="h-10 w-10 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-all hover:scale-105 cursor-pointer"
          >
            {copiedEmail ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
          </button>

          {/* Copy Phone button */}
          <button
            onClick={handleCopyPhone}
            title="Copy Mobile Number"
            className="h-10 w-10 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-all hover:scale-105 cursor-pointer"
          >
            {copiedPhone ? <Check className="h-4 w-4 text-emerald-600" /> : <span className="font-mono text-xs">+63</span>}
          </button>
        </div>

        {/* Feedback message when copied */}
        {(copiedEmail || copiedPhone) && (
          <div className="text-xs font-mono text-emerald-600 animate-in fade-in mt-1 text-right">
            {copiedEmail ? 'Email copied to clipboard!' : 'Phone number copied!'}
          </div>
        )}
      </motion.div>

      {/* Footer info with Cartooneast Design Inspiration note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl ml-auto w-full pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-end sm:items-center justify-between text-xs font-mono text-zinc-400 gap-4 text-right"
      >
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer order-2 sm:order-1"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          <span>Back to Top</span>
        </button>

        <div className="flex flex-col items-end text-right order-1 sm:order-2 space-y-1">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name} · BS Computer Science 4th Year</span>
          <span className="text-[11px] text-zinc-500">
            Design Inspiration: Anurag Bandyopadhyay (Cartooneast)
          </span>
          <span className="text-[10px] text-zinc-400">
            Portfolio design inspired by the visual style and user experience of Cartooneast.
          </span>
        </div>
      </motion.div>
    </section>
  );
};
