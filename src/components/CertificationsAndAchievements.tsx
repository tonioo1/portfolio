import React, { useState } from 'react';
import { playClick, playPop } from '../utils/sound';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  date: string;
  image: string;
}

const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'deans-list-highest-distinction',
    title: "Dean's Listee — Highest Distinction",
    subtitle: 'Second Semester, Academic Year 2023 – 2024',
    institution: 'University of Negros Occidental - Recoletos',
    date: 'August 13, 2024',
    image: '/assets/aistudio/image_7cd7ae77.png',
  },
  {
    id: 'cit-aptitude-highest-score',
    title: 'Highest Score — CIT Aptitude & Diagnostic Test',
    subtitle: 'College of Information Technology',
    institution: 'University of Negros Occidental - Recoletos',
    date: 'August 14, 2023',
    image: '/assets/aistudio/image_75740901.png',
  },
  {
    id: 'deans-list-higher-commendation',
    title: 'Academic Performance — Higher Commendation',
    subtitle: 'First Semester, Academic Year 2023 – 2024',
    institution: 'University of Negros Occidental - Recoletos',
    date: 'February 21, 2024',
    image: '/assets/aistudio/image_95c38e80.png',
  },
  {
    id: 'best-actor-film-festival',
    title: 'Best Actor in a Leading Role',
    subtitle: 'Sine Recoleto Film Festival',
    institution: 'Ayala Malls Capitol Central',
    date: 'March 15, 2024',
    image: '/assets/aistudio/image_87002c0f.png',
  },
  {
    id: 'stem-senior-high-honors',
    title: 'With Honors — Senior High STEM',
    subtitle: 'Grade 11 - CASTOR, S.Y. 2021 – 2022',
    institution: 'Bacolod City National High School',
    date: 'July 2022',
    image: '/assets/aistudio/image_61c081d3.png',
  },
  {
    id: 'blood-donor-appreciation',
    title: 'Certificate of Appreciation — Donor',
    subtitle: 'Bloodletting Activity with Negros First Provincial Blood Center',
    institution: 'Colegio San Agustin - Bacolod',
    date: 'October 7, 2023',
    image: '/assets/aistudio/image_04b45672.png',
  },
];

export const CertificationsAndAchievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleCardClick = (cert: CertificateItem) => {
    playPop();
    setSelectedCert(cert);
  };

  return (
    <section
      id="certifications-and-achievements"
      className="relative h-screen min-h-screen snap-start snap-always bg-white text-zinc-900 py-20 px-6 sm:px-16 md:px-24 border-t border-zinc-100 flex flex-col justify-center text-right overflow-hidden"
    >
      {/* Left-Side Background Video spanning from left to middle */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[52vw] md:w-[48vw] lg:w-[45vw] h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-90"
          src="/assets/aistudio/Untitled_video__3__ad0af0ef.mp4"
        />
        {/* Mobile lighter wash for crisp legibility */}
        <div className="absolute inset-0 bg-white/30 sm:hidden pointer-events-none" />
        {/* Soft edge blend into the white background */}
        <div className="absolute inset-y-0 right-0 w-32 sm:w-44 bg-gradient-to-r from-transparent to-white pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>

      {/* Container constrained to right side (middle to right, compact size) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg md:max-w-xl ml-auto my-auto flex flex-col items-end text-right"
      >
        
        {/* Section Heading */}
        <div className="mb-5 flex flex-col items-end text-right">
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight">
            Certifications and Achievements
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
            Click any certificate to inspect in full view
          </p>
        </div>

        {/* Clean 3x2 Collage Grid */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 py-2 px-1">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCardClick(cert)}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200/90 shadow-2xs hover:border-zinc-900 bg-zinc-100 cursor-pointer transition-colors"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Small note at bottom */}
        <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right">
          * Other certifications and acheivements are still in the process of compiling, others areto be added.
        </p>

      </motion.div>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              playClick();
              setSelectedCert(null);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 120, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.94 }}
              transition={{
                type: 'spring',
                damping: 26,
                stiffness: 280,
                mass: 0.8,
              }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-2xl text-right flex flex-col items-end"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => {
                  playClick();
                  setSelectedCert(null);
                }}
                className="absolute top-6 left-6 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-black cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header info */}
              <div className="mb-4 w-full text-right">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-950">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
                  {selectedCert.subtitle}
                </p>
              </div>

              {/* High-Resolution Certificate Photo */}
              <div className="w-full rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 mb-5 shadow-inner">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[50vh] mx-auto"
                />
              </div>

              {/* Institutional details */}
              <div className="w-full mb-5 text-right text-xs font-mono text-zinc-500 space-y-1">
                <div>Issuing Authority: <span className="text-zinc-800 font-semibold">{selectedCert.institution}</span></div>
                <div>Date Conferred: <span className="text-zinc-800 font-semibold">{selectedCert.date}</span></div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between w-full pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-400">
                <button
                  onClick={() => {
                    playClick();
                    setSelectedCert(null);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-black text-xs cursor-pointer transition-colors"
                >
                  Close View
                </button>
                <span>Verified Certificate Dossier</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
