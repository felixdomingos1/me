'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const neonGlow =
  '0 0 20px rgba(0, 242, 254, 0.6), 0 0 30px rgba(189, 0, 255, 0.4)';

export function Navigation({
  activeTab,
  setActiveTab,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: t('items.home') },
    { id: 'about', label: t('items.about') },
    { id: 'experience', label: t('items.experience') },
    { id: 'projects', label: t('items.projects') },
    { id: 'contact', label: t('items.contact') },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);

    const section = document.getElementById(tab);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl px-4 py-3 shadow-2xl">

          {/* LOGO */}
          <motion.div
            whileHover={{
              textShadow: neonGlow,
              scale: 1.03,
            }}
            className="text-lg sm:text-xl font-black tracking-tighter text-white cursor-pointer select-none"
          >
            {t('logo').slice(0, -1)}
            <span className="text-primary-neon">.</span>
          </motion.div>

          <div className="hidden lg:flex items-center bg-zinc-900/50 border border-white/5 rounded-full p-1.5">
            {navItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-white'
                  }`}
                style={
                  activeTab === tab.id
                    ? { textShadow: neonGlow }
                    : {}
                }
              >
                {tab.label}

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/5 border border-white/10 -z-10"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.5,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* SOCIALS */}
            <div className="flex items-center gap-3 border-r border-zinc-800 pr-4">
              <SocialIcon
                href="https://github.com/felixdomingos1"
                icon={<FaGithub size={18} />}
              />

              <SocialIcon
                href="https://linkedin.com/in/felixdomingos"
                icon={<FaLinkedin size={18} />}
              />
            </div>

            {/* LANGUAGE SWITCHER */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white border border-white/10 hover:border-primary-neon/30 transition-all cursor-pointer"
              >
                <Globe size={13} />
                {locale.toUpperCase()}
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-24 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden"
                  >
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => switchLocale(l.code)}
                        className={`w-full px-4 py-2.5 text-left text-xs font-semibold tracking-wider transition-all cursor-pointer ${locale === l.code
                            ? 'text-primary-neon bg-white/10'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CV BUTTON */}
            <motion.a
              href="/cv/fullstack-felix-domingos-cv.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 0 25px rgba(0, 242, 254, 0.35)',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer"
            >
              <Download size={14} />
              {t('cv')}
            </motion.a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden text-white cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="lg:hidden mt-3 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col p-3">

                {navItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab.id
                        ? 'bg-white/10 text-primary-neon'
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}

                {/* MOBILE LANG SWITCHER */}
                <div className="flex items-center gap-2 mt-4 border-t border-white/5 pt-4">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        switchLocale(l.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${locale === l.code
                          ? 'bg-primary-neon/20 text-primary-neon border border-primary-neon/30'
                          : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white'
                        }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                {/* MOBILE SOCIALS */}
                <div className="flex items-center justify-between mt-4 border-t border-white/5 pt-4">

                  <div className="flex items-center gap-4">
                    <SocialIcon
                      href="https://github.com/felixdomingos1"
                      icon={<FaGithub size={18} />}
                    />

                    <SocialIcon
                      href="https://linkedin.com/in/felixdomingos"
                      icon={<FaLinkedin size={18} />}
                    />
                  </div>

                  <motion.a
                    href="/cv/fullstack-felix-domingos-cv.pdf"
                    download
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Download size={13} />
                    {t('cv')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function SocialIcon({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -2,
        color: '#00f2fe',
        filter:
          'drop-shadow(0 0 8px rgba(0, 242, 254, 0.8))',
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="text-zinc-500 transition-all cursor-pointer"
    >
      {icon}
    </motion.a>
  );
}
