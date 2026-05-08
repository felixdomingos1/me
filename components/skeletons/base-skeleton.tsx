'use client';

import { motion } from 'framer-motion';

interface BaseSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BaseSkeleton({ className = '', children }: BaseSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative overflow-hidden bg-[#050507] border border-white/10 rounded-2xl ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {children}
    </motion.div>
  );
}

export function SkeletonLine({ width = 'w-full', height = 'h-4', className = '' }) {
  return (
    <div className={`${height} ${width} ${className} bg-white/10 rounded-lg animate-pulse`} />
  );
}

export function SkeletonCircle({ size = 'w-12 h-12', className = '' }) {
  return (
    <div className={`${size} ${className} bg-white/10 rounded-full animate-pulse`} />
  );
}
