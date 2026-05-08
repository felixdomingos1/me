'use client';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-[1.3/1] bg-card-bg rounded-xl border border-white/5 overflow-hidden group p-4 flex flex-col justify-end"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 0 20px ${project.color}33, 0 0 2px ${project.color}` : 'none',
        borderColor: isHovered ? project.color : 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="absolute inset-2 top-2 bottom-12 rounded-lg bg-black overflow-hidden z-0 border border-white/5">
        <div className="absolute inset-0 bg-linear-to-br from-bg-dark to-black flex items-center justify-center">
          <span className="text-white/10 text-6xl font-black">?</span>
        </div>
        {/* Se tiver a imagem real, descomente:
         <Image src={project.image} alt={project.title} fill className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
         */}
      </div>

      <div className="relative z-10 text-left">
        <h3 className="text-lg font-extrabold tracking-tighter text-white group-hover:text-primary-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-text-gray font-mono uppercase tracking-wider">
          {project.category}
        </p>
      </div>

      <div className="absolute bottom-4 right-4 text-text-gray/50 text-sm font-mono z-10">
        [ ]
      </div>
    </motion.div>
  );
}
