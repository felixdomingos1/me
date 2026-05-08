'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

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
    description: 'Plataforma de advertising digital e monetização de tráfego mobile',
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
    description: 'Plataforma de recrutamento e empregos para Angola e África',
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
    description: 'Gestão completa para condomínios com app mobile',
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
    description: 'Plataforma de colaboração e gestão de projetos',
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
    description: 'Streaming de conteúdo audiovisual para o mercado africano',
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
    description: 'Soluções de logística e entregas expressas',
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
    description: 'App para descoberta de filmes',
    tech: ['Next.js', 'API', 'Tailwind'],
    image: '/projects/findermovie.png',
    liveUrl: 'https://findermovie.vercel.app',
    hasImage: false,
    category: 'challenge'
  },
  {
    id: 8,
    title: 'Go Burguer',
    description: 'Sistema de pedidos online de fast-food',
    tech: ['React', 'Node.js'],
    image: '/projects/go-burguer.png',
    liveUrl: 'https://goo-burguer.vercel.app/',
    hasImage: true,
    category: 'challenge'
  },
  {
    id: 9,
    title: 'IASD KM12B Platform',
    description: 'Sistema institucional e eventos da igreja',
    tech: ['Next.js', 'TypeScript'],
    image: '/projects/iasd.png',
    liveUrl: 'https://iasdkm12.vercel.app/',
    hasImage: true,
    category: 'challenge'
  },

  {
    id: 10,
    title: 'App Financeiro (Mentoria)',
    description: 'Projeto UI/UX para app financeiro (Gelson Pedro)',
    tech: ['Figma', 'UI/UX'],
    image: '/projects/figma-finance.png',
    liveUrl: 'https://www.figma.com/design/EVKUv6UKSXbDAGrkdZKvRb/App-de-finan%C3%A7as',
    hasImage: true,
    category: 'design'
  },
  {
    id: 11,
    title: 'Arena Game Angola',
    description: 'Plataforma de jogos online em Angola',
    tech: ['Figma', 'UI Design'],
    image: '/projects/arena-game.png',
    liveUrl: 'https://www.figma.com/design/TC15OaAE65dR6Se4DINX8g/Arena-Game',
    hasImage: true,
    category: 'design'
  },
  {
    id: 12,
    title: 'Kitoko App',
    description: 'Marketplace de salões e produtos capilares',
    tech: ['Figma', 'UI/UX'],
    image: '/projects/kitoko.png',
    liveUrl: 'https://www.figma.com/design/6me7WMd05QJ2WXVsXBNs9Q/Sistema---Kitoko',
    hasImage: true,
    category: 'design'
  },

  {
    id: 13,
    title: 'Mentoria Rocketseat',
    description: 'Evolução frontend e comunidade',
    tech: ['Figma', 'Community'],
    image: '/projects/rocketseat-mentoria.png',
    liveUrl: 'https://www.figma.com/design/aLPUHMkSgLRmkDkUy3wpEv/Portfolio-Dev--Community-',
    hasImage: true,
    category: 'mentorship'
  },

  {
    id: 14,
    title: 'Portfolio Antigo',
    description: 'Versão anterior do meu portfólio',
    tech: ['React', 'CSS'],
    image: '/projects/portfolio-old.png',
    liveUrl: 'https://felixdomingos.vercel.app/',
    hasImage: true,
    category: 'legacy'
  },
  {
    id: 18,
    title: 'Delégua - Linguagem de Programação',
    description:
      'Linguagem de programação em português com múltiplos dialetos e interpretador próprio (open-source)',
    tech: ['TypeScript', 'ANTLR', 'Node.js', 'Open Source'],
    image: '/projects/delegua.png',
    liveUrl: 'https://github.com/felixdomingos1/delegua',
    hasImage: false,
    featured: false,
    category: 'dev',
  },
  {
    id: 19,
    title: 'API Federação',
    description:
      'Arquitetura backend em .NET com separação em camadas (Core, Infra, Application, API)',
    tech: ['C#', '.NET', 'Clean Architecture', 'Microservices'],
    image: '/projects/api-federacao.png',
    liveUrl: 'https://github.com/felixdomingos1/api-federacao',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
  {
    id: 20,
    title: 'Backend Base System',
    description:
      'Estrutura backend escalável com Node.js, Prisma e arquitetura modular pronta para produção',
    tech: ['Node.js', 'TypeScript', 'Prisma', 'MySQL'],
    image: '/projects/backend.png',
    liveUrl: 'https://github.com/felixdomingos1/Backend',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
  {
    id: 21,
    title: 'Chat Comunitário',
    description:
      'Plataforma de chat para comunidades com Next.js, Prisma e arquitetura moderna fullstack',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/chatcomunitario.png',
    liveUrl: 'https://github.com/felixdomingos1/ChatComunitario',
    hasImage: false,
    featured: false,
    category: 'dev'
  },
];

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'dev', label: 'Desenvolvimento' },
  { key: 'challenge', label: 'Desafios' },
  { key: 'design', label: 'Design' },
  { key: 'mentorship', label: 'Mentoria' },
  { key: 'legacy', label: 'Legado' }
] as const;

export function ProjectSection() {
  const [active, setActive] = useState<string>('all');

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
            Meus <span className="text-primary-neon">Projetos</span>
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
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
              ) : (
                <div className="h-1 flex items-center justify-center bg-white/5 border-b border-white/10">
                  {/* <span className="text-white/40 text-sm">
                    Sem preview disponível
                  </span> */}
                </div>
              )}

              <div className="p-5">
                <h4 className="text-white font-semibold group-hover:text-primary-neon">
                  {project.title}
                </h4>

                <p className="text-zinc-400 text-xs mt-1 line-clamp-2">
                  {project.description}
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
                  Ver projeto
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
