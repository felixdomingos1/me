'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  hasImage: boolean;
  featured?: boolean;
  category: 'dev' | 'design' | 'mentorship' | 'challenge' | 'legacy';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Mobinads Cloud',
    description: 'projects.items.0.description',
    tech: ['React', 'Node.js', 'Golang', 'PostgreSQL', 'Redis'],
    image: '/projects/mobinads.png',
    liveUrl: 'https://mobinads.cloud',
    featured: true,
    hasImage: true,
    category: 'dev'
  },
  {
    id: 2,
    title: 'Kiala Jobs',
    description: 'projects.items.1.description',
    tech: ['Next.js', 'Node.js', 'Golang', 'MongoDB', 'ElasticSearch'],
    hasImage: true,
    image: '/projects/kialajobs.png',
    liveUrl: 'https://kialajobs.com',
    featured: true,
    category: 'dev'
  },
  {
    id: 3,
    title: 'Digital Síndico',
    description: 'projects.items.2.description',
    tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/projects/digitalsindico.png',
    liveUrl: 'https://digitalsindico.com',
    hasImage: true,
    featured: true,
    category: 'dev'
  },
  {
    id: 4,
    title: 'Skylla',
    description: 'projects.items.3.description',
    tech: ['React', 'TypeScript', 'Go', 'Tailwind CSS'],
    image: '/projects/skylla.png',
    liveUrl: 'https://skylla.app',
    hasImage: true,
    featured: true,
    category: 'dev'
  },
  {
    id: 5,
    title: 'FlixHome',
    description: 'projects.items.4.description',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'FFmpeg'],
    image: '/projects/flixhome.png',
    liveUrl: 'https://flixhome.app',
    featured: true,
    hasImage: true,
    category: 'dev'
  },
  {
    id: 6,
    title: 'NeatXpress',
    description: 'projects.items.5.description',
    tech: ['React', 'Next.js', 'Mapbox', 'Tailwind CSS'],
    image: '/projects/neatxpress.png',
    liveUrl: 'https://neatxpress.org',
    hasImage: true,
    featured: true,
    category: 'dev'
  },
  {
    id: 7,
    title: 'FinderMovie',
    description: 'projects.items.6.description',
    tech: ['Next.js', 'API', 'Tailwind'],
    image: '/projects/findermovie.png',
    liveUrl: 'https://findermovie.vercel.app',
    hasImage: false,
    category: 'challenge'
  },
  {
    id: 8,
    title: 'Go Burguer',
    description: 'projects.items.7.description',
    tech: ['React', 'Node.js'],
    image: '/projects/go-burguer.png',
    liveUrl: 'https://go-burguer.vercel.app/',
    hasImage: true,
    category: 'challenge'
  },
  {
    id: 9,
    title: 'IASD KM12B Platform',
    description: 'projects.items.8.description',
    tech: ['Next.js', 'TypeScript'],
    image: '/projects/iasd.png',
    liveUrl: 'https://iasdkm12.vercel.app/',
    hasImage: true,
    category: 'challenge'
  },
  {
    id: 10,
    title: 'projects.items.9.title',
    description: 'projects.items.9.description',
    tech: ['Figma', 'UI/UX'],
    image: '/projects/figma-finance.png',
    liveUrl: 'https://www.figma.com/design/EVKUv6UKSXbDAGrkdZKvRb/App-de-finan%C3%A7as',
    hasImage: true,
    category: 'design'
  },
  {
    id: 11,
    title: 'projects.items.10.title',
    description: 'projects.items.10.description',
    tech: ['Figma', 'UI Design'],
    image: '/projects/arena-game.png',
    liveUrl: 'https://www.figma.com/design/TC15OaAE65dR6Se4DINX8g/Arena-Game',
    hasImage: true,
    category: 'design'
  },
  {
    id: 12,
    title: 'projects.items.11.title',
    description: 'projects.items.11.description',
    tech: ['Figma', 'UI/UX'],
    image: '/projects/kitoko.png',
    liveUrl: 'https://www.figma.com/design/6me7WMd05QJ2WXVsXBNs9Q/Sistema---Kitoko',
    hasImage: true,
    category: 'design'
  },
  {
    id: 13,
    title: 'projects.items.12.title',
    description: 'projects.items.12.description',
    tech: ['Figma', 'Community'],
    image: '/projects/rocketseat-mentoria.png',
    liveUrl: 'https://www.figma.com/design/aLPUHMkSgLRmkDkUy3wpEv/Portfolio-Dev--Community-',
    hasImage: true,
    category: 'mentorship'
  },
  {
    id: 14,
    title: 'projects.items.13.title',
    description: 'projects.items.13.description',
    tech: ['React', 'CSS'],
    image: '/projects/portfolio-old.png',
    liveUrl: 'https://github.com/felixdomingos1',
    hasImage: true,
    category: 'legacy'
  },
  {
    id: 18,
    title: 'projects.items.14.title',
    description: 'projects.items.14.description',
    tech: ['TypeScript', 'ANTLR', 'Node.js', 'Open Source'],
    image: '/projects/delegua.png',
    liveUrl: 'https://github.com/felixdomingos1/delegua',
    hasImage: false,
    featured: false,
    category: 'dev',
  },
  {
    id: 19,
    title: 'projects.items.15.title',
    description: 'projects.items.15.description',
    tech: ['C#', '.NET', 'Clean Architecture', 'Microservices'],
    image: '/projects/api-federacao.png',
    liveUrl: 'https://github.com/felixdomingos1/api-federacao',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
  {
    id: 20,
    title: 'projects.items.16.title',
    description: 'projects.items.16.description',
    tech: ['Node.js', 'TypeScript', 'Prisma', 'MySQL'],
    image: '/projects/backend.png',
    liveUrl: 'https://github.com/felixdomingos1/Backend',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
  {
    id: 21,
    title: 'projects.items.17.title',
    description: 'projects.items.17.description',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/chatcomunitario.png',
    liveUrl: 'https://github.com/felixdomingos1/ChatComunitario',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
];

export function ProjectSection() {
  const [active, setActive] = useState<string>('all');
  const t = useTranslations('projects');

  const categories = [
    { key: 'all', label: t('filters.all') },
    { key: 'dev', label: t('filters.dev') },
    { key: 'challenge', label: t('filters.challenge') },
    { key: 'design', label: t('filters.design') },
    { key: 'mentorship', label: t('filters.mentorship') },
    { key: 'legacy', label: t('filters.legacy') }
  ] as const;

  type ProjectItem = { title: string; description: string };

  const getProjectTitle = (p: Project) => {
    if (p.title.startsWith('projects.items')) {
      const index = parseInt(p.title.split('.')[2]);
      return (t.raw('items') as ProjectItem[])[index].title;
    }
    return p.title;
  };

  const getProjectDescription = (p: Project) => {
    if (p.description.startsWith('projects.items')) {
      const parts = p.description.split('.');
      const index = parseInt(parts[2]);
      return (t.raw('items') as ProjectItem[])[index].description;
    }
    return p.description;
  };

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('title')} <span className="text-primary-neon">{t('titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full mt-3" />
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm transition ${active === c.key
                  ? 'bg-primary-neon text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary-neon/40"
            >
              {project.hasImage ? (
                <div className="h-40 relative">
                  <Image
                    src={project.image!}
                    alt={getProjectTitle(project)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
              ) : (
                <div className="h-32 flex items-center justify-center bg-white/5 border-b border-white/10">
                  <span className="text-white/40 text-sm">
                    {t('noPreview')}
                  </span>
                </div>
              )}

              <div className="p-5">
                <h4 className="text-white font-semibold group-hover:text-primary-neon">
                  {getProjectTitle(project)}
                </h4>

                <p className="text-zinc-400 text-xs mt-1 line-clamp-2">
                  {getProjectDescription(project)}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 bg-white/5 rounded text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-primary-neon text-xs">
                  {t('viewProject')}
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
