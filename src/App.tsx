/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionNav } from './components/SectionNav';
import { AboutMe } from './components/AboutMe';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Projects } from './components/Projects';
import { CertificationsAndAchievements } from './components/CertificationsAndAchievements';
import { ContactInformation } from './components/ContactInformation';

export default function App() {
  return (
    <div
      id="scroll-container"
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white"
    >
      {/* Far Left Section Quick-Jump Buttons */}
      <SectionNav />

      {/* Main Sections Flow */}
      <main>
        {/* 1. About Me */}
        <AboutMe />

        {/* 2. Technical Skills */}
        <TechnicalSkills />

        {/* 3. Projects (Blank, title only) */}
        <Projects />

        {/* 4. Certifications and Achievements (Collage with hover description) */}
        <CertificationsAndAchievements />

        {/* 5. Contact Information */}
        <ContactInformation />
      </main>
    </div>
  );
}
