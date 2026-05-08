'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Navigation } from '../components/navigation';
import { ProjectSection } from '../components/project-section';
import { ReadmeSection } from '../components/readme-section';
import { PageTransition } from '../components/page-transition';
import { Background3D } from '../components/background-3d';
import { HeroSection } from '../components/hero-section';
import { ContactSection } from '../components/contact-section';
import { CompaniesSection } from '../components/companies-section';
import { ExperienceSection } from '../components/experience-section';
import { AboutSection } from '../components/about-section';
import { ProfileBoard } from '../components/profile-board';
import { MentorshipSection } from '../components/mentorship-section';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProfileBoard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ReadmeSection />
            </motion.div>
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectSection />;
      case 'mentorship':
        return <MentorshipSection />;
      case 'companies':
        return <CompaniesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  if (isLoading) {
    return <PageTransition />;
  }

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <Background3D />
      <div className="relative z-10">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
