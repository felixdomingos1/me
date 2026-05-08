'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PageTransition() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`" />

          <div className="relative z-10 w-full max-w-md px-10">
            <div className="flex justify-between items-end mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Status: System Online
              </motion.span>
              <motion.span className="text-primary-neon">
                {Math.floor(progress)}%
              </motion.span>
            </div>

            <div className="relative h-0.5 w-full bg-zinc-800 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary-neon"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary-neon shadow-[0_0_15px_#your-neon-color]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-8 overflow-hidden">
              <motion.h2
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                className="text-xl font-medium tracking-tighter"
              >
                FÉLIX DOMINGOS
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[10px] font-mono text-zinc-500 mt-1 tracking-widest uppercase"
              >
                Creative Developer / Fullstack
              </motion.p>
            </div>

            <div className="mt-12 h-6 overflow-hidden">
              <motion.p
                key={Math.floor(progress / 20)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-[9px] font-mono text-primary-neon/60 uppercase"
              >
                {progress < 30 && "> Initializing core modules..."}
                {progress >= 30 && progress < 60 && "> Compiling visual shaders..."}
                {progress >= 60 && progress < 90 && "> Establishing neural connection..."}
                {progress >= 90 && "> Ready for interaction."}
              </motion.p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
