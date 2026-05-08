'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  Award,
  Briefcase,
  Code,
  Download,
  MapPin
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function ProfileBoard() {
  const handleDownloadCV = () => {
    const cvUrl = '/cv/felix-domingos-cv.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'felix-domingos-cv.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: <Briefcase className="w-4 h-4" />, label: 'Experiência', value: '5+ anos' },
    { icon: <Code className="w-4 h-4" />, label: 'Projetos', value: '15+' },
    { icon: <Award className="w-4 h-4" />, label: 'Tech Stack', value: '10+' },
  ];

  const skills = [
    'React/Next.js',
    'React Native',
    'Node.js',
    'C#/.NET',
    'Golang',
    'TypeScript',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060606]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,242,254,0.08)]"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-linear(circle_at_top_left,rgba(0,242,254,0.12),transparent_35%),radial-linear(circle_at_bottom_right,rgba(189,0,255,0.12),transparent_35%)]" />

      {/* CAPA */}
      <div className="relative h-52 sm:h-60 md:h-72 overflow-visible">
        <Image
          src="/img/capa.png"
          alt="Cover"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/90" />

        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary-neon/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-purple/20 blur-3xl" />
        <div className="
  absolute
  -bottom-20
  sm:-bottom-24
  md:-bottom-28
  left-1/2
  z-20
  -translate-x-1/2
">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-linear-to-r from-primary-neon to-accent-purple blur-3xl opacity-70" />
            <div className="relative rounded-full bg-linear-to-br from-primary-neon to-accent-purple p-1 shadow-[0_0_60px_rgba(0,242,254,0.35)]">
              <div className="
  relative
  h-36
  w-36
  sm:h-44
  sm:w-44
  md:h-56
  md:w-56
  lg:h-64
  lg:w-64
  overflow-hidden
  rounded-full
  border-4
  md:border-[6px]
  border-black
  bg-black
">  <Image
                  src="/img/fundo_black.png"
                  alt="Félix Sanjala Domingos"
                  fill
                  priority
                  className="object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}<div className="
  relative
  z-10
  px-4
  sm:px-6
  pb-8
  sm:pb-10
  pt-24
  sm:pt-28
  md:pt-36
  text-center
"><h1 className="
  text-2xl
  sm:text-3xl
  md:text-4xl
  font-black
  text-white
  leading-tight
">
          Félix Sanjala Domingos
        </h1>
        <p className="
  text-primary-neon
  mt-2
  text-sm
  sm:text-base
">
          Fullstack Developer & UI/UX Specialist
        </p>

        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <MapPin className="h-3 w-3 text-primary-neon" />
          Benfica, Luanda - Angola
        </div>

        {/* STATS */}<div className="
  mt-6
  grid
  grid-cols-1
  sm:grid-cols-3
  gap-3
">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex justify-center text-primary-neon">
                {s.icon}
              </div>
              <p className="text-white font-bold">{s.value}</p>
              <p className="text-[10px] text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ACTIONS */}<div className="
  mt-8
  flex
  flex-col
  sm:flex-row
  gap-3
  justify-center
">
          <button
            onClick={handleDownloadCV}
            className="
  rounded-xl
  bg-linear-to-r
  from-primary-neon
  to-accent-purple
  px-5
  py-3
  text-sm
  font-bold
  text-white
  w-full
  sm:w-auto
"
          >
            <Download className="inline w-4 h-4 mr-2" />
            Download CV
          </button>

          <a
            href="https://github.com/felixdomingos1"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
