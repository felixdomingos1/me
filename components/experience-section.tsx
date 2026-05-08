// components/experience-section.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Code,
  Users,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
  Star,
} from 'lucide-react';

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: 'CTO (Chief Technology Officer)',
    company: 'Mobinads Cloud',
    location: 'Remoto',
    period: '2024 - Presente',
    type: 'current',
    techStack: ['Golang', 'React', 'AWS', 'PostgreSQL', 'Redis'],
    achievements: [
      'Arquitetura escalável com 1M+ requests/dia',
      'Redução de 40% em infraestrutura',
      'Liderança de equipe técnica',
    ],
    description: [
      'Liderança técnica e arquitetura cloud',
      'Desenvolvimento de plataforma de advertising',
      'Gestão de equipe de desenvolvimento',
      'Implementação de CI/CD e boas práticas',
    ],
    link: 'https://mobinads.cloud',
    icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 2,
    title: 'Software Engineer Sênior',
    company: 'Kiala Jobs',
    location: 'Remoto',
    period: '2024 - Presente',
    type: 'current',
    techStack: ['Node.js', 'Golang', 'MongoDB', 'ElasticSearch', 'Docker'],
    achievements: [
      'ElasticSearch com 200ms response',
      'Integração com APIs externas',
      'Cobertura de testes >85%',
    ],
    description: [
      'Plataforma de recrutamento e empregos',
      'Microsserviços com Node.js e Golang',
      'Integração com APIs de terceiros',
      'Escalabilidade e performance',
    ],
    link: 'https://kialajobs.com',
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 3,
    title: 'CTO (Chief Technology Officer)',
    company: 'Digital Síndico',
    location: 'Remoto',
    period: '2024 - Presente',
    type: 'current',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    achievements: [
      'Gateway de pagamentos',
      'Arquitetura serverless',
      'Retenção de usuários +60%',
    ],
    description: [
      'Liderança técnica da plataforma',
      'Arquitetura fullstack moderna',
      'Sistema de pagamentos',
      'Segurança e conformidade',
    ],
    link: 'https://digitalsindico.com',
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'NeatXpress',
    location: 'Remoto',
    period: '2024 - Presente',
    type: 'current',
    techStack: ['React', 'Next.js', 'Tailwind', 'Mapbox', 'TypeScript'],
    achievements: [
      'LCP reduzido em 50%',
      'PWA com 95+ Lighthouse',
      'Design system reutilizável',
    ],
    description: [
      'Interfaces com React e Next.js',
      'Integração com APIs REST',
      'Performance e SEO',
      'Componentização moderna',
    ],
    link: 'https://neatxpress.org',
    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 5,
    title: 'Fullstack & UI/UX Developer',
    company: 'BitKabir - Angola',
    location: 'Luanda, Angola',
    period: '2024 - 2025',
    type: 'past',
    techStack: ['Next.js', 'React Native', 'Flutter', 'Java', 'Figma'],
    achievements: [
      '3 aplicações em produção',
      'Design system implementado',
      'Entrega mais rápida',
    ],
    description: [
      'Soluções para logística e mobilidade',
      'UI/UX Design moderno',
      'Aplicações web e mobile',
    ],
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 6,
    title: 'Fullstack Developer',
    company: 'LexifyTech - Brazil',
    location: 'Remoto',
    period: '2024',
    type: 'past',
    techStack: ['Next.js', 'Express', 'MongoDB', 'TypeScript'],
    achievements: [
      'Entrega antecipada do MVP',
      'Integração com APIs externas',
      'Documentação da API',
    ],
    description: [
      'Projeto Listagreen',
      'Backend com Express',
      'Integrações fullstack',
    ],
    link: 'https://lexifytech.com',
    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    id: 7,
    title: 'Fullstack Web Developer',
    company: 'Dline-Code',
    location: 'Luanda, Angola',
    period: '2022 - 2023',
    type: 'past',
    techStack: ['React', 'Next.js', 'Node.js', 'Git', 'SEO'],
    achievements: [
      'SEO +40%',
      'CI/CD com GitHub Actions',
      'Migração de projetos',
    ],
    description: [
      'Soluções React.js e Next.js',
      'Integração de APIs',
      'SEO e otimização',
    ],
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
];

function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      className="
        px-2.5 py-1
        rounded-lg
        text-[10px] sm:text-[11px]
        border border-white/10
        bg-white/4
        text-zinc-300
        transition-all duration-300
        hover:border-primary-neon/30
        hover:text-primary-neon
      "
    >
      {tech}
    </span>
  );
}

export function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const totalYears = `${new Date().getFullYear() - 2021}+`;
  const stats = {
    totalYears: totalYears,
    companies: experiences.length,
    currentRole: experiences.filter((e) => e.type === 'current').length,
    techStack: [...new Set(experiences.flatMap((e) => e.techStack))].length,
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-26 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-neon/20 bg-primary-neon/10 px-4 py-2 mb-5">
            <Briefcase className="w-4 h-4 text-primary-neon" />

            <span className="text-xs sm:text-sm font-medium text-primary-neon">
              Trajetória Profissional
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Experiência{' '}
            <span className="text-primary-neon">
              Profissional
            </span>
          </h2>

          <div className="w-24 h-1 rounded-full bg-linear-to-r from-primary-neon to-accent-purple mx-auto mt-5" />

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed">
            Mais de 5 anos desenvolvendo soluções modernas,
            escaláveis e focadas em performance.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              label: 'Experiência',
              value: stats.totalYears,
              suffix: 'anos',
            },
            {
              icon: <Briefcase className="w-5 h-5" />,
              label: 'Empresas',
              value: stats.companies,
              suffix: '',
            },
            {
              icon: <Rocket className="w-5 h-5" />,
              label: 'Projetos',
              value: stats.currentRole,
              suffix: 'ativos',
            },
            {
              icon: <Code className="w-5 h-5" />,
              label: 'Tecnologias',
              value: stats.techStack,
              suffix: '+',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-white/3
                backdrop-blur-xl
                p-5
                text-center
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary-neon/30
              "
            >
              <div className="absolute inset-0 bg-linear-to-r from-primary-neon/0 via-primary-neon/0 to-accent-purple/0 group-hover:from-primary-neon/5 group-hover:via-primary-neon/10 group-hover:to-accent-purple/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex justify-center text-primary-neon mb-3">
                  {stat.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                  <span className="text-sm text-zinc-500 ml-1">
                    {stat.suffix}
                  </span>
                </h3>

                <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* linha */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary-neon via-accent-purple to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`
                  relative flex
                  ${index % 2 === 0
                    ? 'md:justify-start'
                    : 'md:justify-end'}
                `}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                  <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary-neon to-accent-purple flex items-center justify-center shadow-lg shadow-primary-neon/30">
                    {exp.icon}
                  </div>
                </div>

                {/* CARD */}
                <motion.div
                  animate={{
                    scale: hoveredCard === exp.id ? 1.01 : 1,
                  }}
                  className="
                    relative
                    w-full
                    md:w-[calc(50%-3rem)]
                    rounded-3xl
                    border border-white/10
                    bg-linear-to-br from-white/4 to-white/2
                    backdrop-blur-xl
                    overflow-hidden
                    transition-all duration-300
                    hover:border-primary-neon/30
                    hover:shadow-2xl
                    hover:shadow-primary-neon/5
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-primary-neon/0 via-primary-neon/0 to-accent-purple/0 hover:from-primary-neon/5 hover:via-primary-neon/10 hover:to-accent-purple/5 transition-all duration-500" />

                  <div className="relative z-10 p-5 sm:p-6">
                    {/* top */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {exp.title}
                          </h3>

                          {exp.type === 'current' && (
                            <div className="flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-1">
                              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                              <span className="text-[10px] text-green-400 font-medium uppercase">
                                Atual
                              </span>
                            </div>
                          )}
                        </div>

                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-neon font-medium hover:underline"
                          >
                            {exp.company}

                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-primary-neon font-medium">
                            {exp.company}
                          </span>
                        )}

                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-zinc-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>

                          <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700" />

                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* STACK */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.techStack.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>

                    {/* achievements */}
                    <div className="mb-5 rounded-2xl border border-white/5 bg-black/20 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Principais Resultados
                        </span>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 text-primary-neon shrink-0" />

                            <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-zinc-400 text-xs sm:text-sm leading-relaxed"
                        >
                          <span className="text-primary-neon mt-1">
                            ▹
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-center backdrop-blur-xl">
            <Award className="w-4 h-4 text-primary-neon" />

            <span className="text-xs sm:text-sm text-zinc-300">
              Disponível para novos desafios e oportunidades
            </span>

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
