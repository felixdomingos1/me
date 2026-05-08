'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Navigation } from '../components/navigation';
import { ProjectSection } from '../components/project-section';
import { ReadmeSection } from '../components/readme-section';
import { PageTransition } from '../components/page-transition';
import { Background3D } from '../components/background-3d';
import { ContactSection } from '../components/contact-section';
import { CompaniesSection } from '../components/companies-section';
import { ExperienceSection } from '../components/experience-section';
import { AboutSection } from '../components/about-section';
import { ProfileBoard } from '../components/profile-board';

import { HomeSkeleton } from '../components/skeletons/home-skeleton';
import { ProjectSkeleton } from '../components/skeletons/project-skeleton';
import { AboutSkeleton } from '../components/skeletons/about-skeleton';
import { ExperienceSkeleton } from '../components/skeletons/experience-skeleton';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setContentLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setContentLoading(true);

    setTimeout(() => {
      setContentLoading(false);
    }, 300);
  };

  const renderContent = () => {
    if (contentLoading) {
      switch (activeTab) {
        case 'home':
          return <HomeSkeleton />;
        case 'about':
          return <AboutSkeleton />;
        case 'experience':
          return <ExperienceSkeleton />;
        case 'projects':
          return <ProjectSkeleton />;
        default:
          return <HomeSkeleton />;
      }
    }

    switch (activeTab) {
      case 'home':
        return (
          <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-26">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] 2xl:grid-cols-[420px_minmax(0,1fr)] items-start">
                {/* LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full"
                >
                  <ProfileBoard />
                </motion.div>

                {/* RIGHT */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="min-w-0 w-full overflow-hidden"
                >
                  <ReadmeSection />
                </motion.div>
              </div>
            </div>
          </section>
        );

      case 'about':
        return <AboutSection />;

      case 'experience':
        return <ExperienceSection />;

      case 'projects':
        return <ProjectSection />;

      case 'companies':
        return <CompaniesSection />;

      case 'contact':
        return <ContactSection />;

      default:
        return null;
    }
  };

  if (isLoading) {
    return <PageTransition />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <Background3D />

      <div className="relative z-10">
        <Navigation
          activeTab={activeTab}
          setActiveTab={handleTabChange} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
            }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
