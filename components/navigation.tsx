'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const neonGlow =
  '0 0 20px rgba(0, 242, 254, 0.6), 0 0 30px rgba(189, 0, 255, 0.4)';

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contacto' },
];

export function Navigation({
  activeTab,
  setActiveTab,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between  bg-black/40 backdrop-blur-xl px-4 py-3 shadow-2xl">

          {/* LOGO */}
          <motion.div
            whileHover={{
              textShadow: neonGlow,
              scale: 1.03,
            }}
            className="text-lg sm:text-xl font-black tracking-tighter text-white cursor-pointer select-none"
          >
            FELIDOM
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
              CV
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
                    CV
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
