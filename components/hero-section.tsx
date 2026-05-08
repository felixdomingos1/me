'use client';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="relative w-28 h-28 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary-neon to-accent-purple animate-pulse" />
          <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="text-white">Félix </span>
          <span className="bg-linear-to-r from-primary-neon to-accent-purple bg-clip-text text-transparent">
            Domingos
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-gray text-lg mb-8"
        >
          Fullstack Developer & UI/UX Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {['React', 'Next.js', 'Node.js', 'React Native', 'C#/.NET', 'Golang'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
