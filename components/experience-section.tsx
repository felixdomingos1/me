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
  Star
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
      'Arquitetura de sistema escalável processando 1M+ requests/dia',
      'Redução de 40% nos custos de infraestrutura',
      'Equipe de 5 engenheiros liderada'
    ],
    description: [
      'Liderança técnica e arquitetura de soluções cloud',
      'Desenvolvimento de plataforma de advertising digital',
      'Gestão de equipe de desenvolvimento',
      'Implementação de melhores práticas e CI/CD'
    ],
    link: 'https://mobinads.cloud',
    icon: <Rocket className="w-5 h-5" />
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
      'Implementação de busca com ElasticSearch (200ms response)',
      'Integração com 10+ APIs de parceiros',
      'Cobertura de testes >85%'
    ],
    description: [
      'Desenvolvimento de plataforma de recrutamento e empregos',
      'Arquitetura de microsserviços com Node.js e Golang',
      'Integração com APIs de terceiros',
      'Otimização de performance e escalabilidade'
    ],
    link: 'https://kialajobs.com',
    icon: <Users className="w-5 h-5" />
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
      'Implementação de gateway de pagamentos',
      'Migração para arquitetura serverless',
      'Aumento de 60% na retenção de usuários'
    ],
    description: [
      'Liderança técnica da plataforma de gestão condominial',
      'Arquitetura fullstack com Next.js e Node.js',
      'Implementação de sistema de pagamentos',
      'Segurança e conformidade de dados'
    ],
    link: 'https://digitalsindico.com',
    icon: <Shield className="w-5 h-5" />
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
      'Redução de 50% no LCP',
      'Implementação de PWA com 95+ Lighthouse score',
      'Componentes reutilizáveis com Storybook'
    ],
    description: [
      'Desenvolvimento de interfaces com React.js e Next.js',
      'Integração com APIs RESTful',
      'Otimização de performance e SEO',
      'Criação de componentes reutilizáveis'
    ],
    link: 'https://neatxpress.org',
    icon: <Code className="w-5 h-5" />
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
      'Desenvolvimento de 3 aplicações em produção',
      'Design system implementado',
      'Redução de 30% no tempo de desenvolvimento'
    ],
    description: [
      'Desenvolvimento de soluções para transporte, logística e mobilidade',
      'UI/UX Design e implementação',
      'Tecnologias: Next.js, React Native, Flutter, Java'
    ],
    icon: <Zap className="w-5 h-5" />
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
      'Integração com 5+ APIs externas',
      'Documentação completa da API'
    ],
    description: [
      'Projeto Listagreen com Next.js e Express',
      'Integração com MongoDB',
      'Desenvolvimento de features fullstack'
    ],
    link: 'https://lexifytech.com',
    icon: <TrendingUp className="w-5 h-5" />
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
      'Otimização SEO +40% em tráfego orgânico',
      'Implementação de CI/CD com GitHub Actions',
      'Migração de 5 projetos legados'
    ],
    description: [
      'Implementação de soluções com React.js e Next.js',
      'Integração de APIs e otimização de SEO',
      'Controle de versão com Git/GitHub'
    ],
    icon: <Award className="w-5 h-5" />
  }
];

// Componente de Tecnologia Badge
function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-[10px] font-medium rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:border-primary-neon/30 hover:text-primary-neon transition-all duration-300">
      {tech}
    </span>
  );
}

export function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Estatísticas
  const stats = {
    totalYears: '5+',
    companies: experiences.length,
    currentRole: experiences.filter(e => e.type === 'current').length,
    techStack: [...new Set(experiences.flatMap(e => e.techStack))].length
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-neon/10 border border-primary-neon/20 mb-4">
            <Briefcase className="w-3 h-3 text-primary-neon" />
            <span className="text-xs font-medium text-primary-neon">Trajetória Profissional</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-primary-neon">Profissional</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            Mais de 5 anos construindo soluções tecnológicas de alto impacto
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Award className="w-4 h-4" />, label: 'Experiência', value: stats.totalYears, suffix: 'anos' },
            { icon: <Briefcase className="w-4 h-4" />, label: 'Empresas', value: stats.companies, suffix: '' },
            { icon: <Rocket className="w-4 h-4" />, label: 'Atuação Atual', value: stats.currentRole, suffix: 'projetos' },
            { icon: <Code className="w-4 h-4" />, label: 'Tecnologias', value: stats.techStack, suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:border-primary-neon/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-neon/0 via-primary-neon/0 to-accent-purple/0 group-hover:from-primary-neon/5 group-hover:via-primary-neon/10 group-hover:to-accent-purple/5 transition-all duration-500" />
              <div className="relative">
                <div className="text-primary-neon flex justify-center mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-white">{stat.value}<span className="text-sm text-zinc-500 ml-0.5">{stat.suffix}</span></p>
                <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-neon via-accent-purple to-transparent" />

          {/* Marcadores de ano */}
          <div className="absolute left-[19px] md:left-1/2 transform md:-translate-x-1/2 -top-2 w-3 h-3 rounded-full bg-primary-neon shadow-lg shadow-primary-neon/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-5 md:gap-8 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Ícone do Timeline com animação */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary-neon to-accent-purple flex items-center justify-center z-10 shadow-lg shadow-primary-neon/20">
                <motion.div
                  animate={{ scale: hoveredCard === exp.id ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.icon}
                </motion.div>
              </div>

              {/* Linha conectora */}
              <div className="absolute left-10 md:left-1/2 top-5 w-8 h-px bg-gradient-to-r from-primary-neon/50 to-transparent md:from-primary-neon/30 md:to-transparent" />

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                <motion.div
                  animate={{
                    scale: hoveredCard === exp.id ? 1.02 : 1,
                    borderColor: hoveredCard === exp.id ? 'rgba(0, 242, 254, 0.3)' : 'rgba(255, 255, 255, 0.05)'
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative group/card bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 hover:shadow-xl hover:shadow-primary-neon/5"
                >
                  {/* Badge de status */}
                  {exp.type === 'current' && (
                    <div className="absolute -top-2 -right-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-[9px] text-green-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Atual
                      </div>
                    </div>
                  )}

                  {/* Título e Empresa */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover/card:text-primary-neon transition-colors">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary-neon text-sm font-medium hover:underline group/company"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/company:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="text-primary-neon text-sm font-medium">{exp.company}</span>
                    )}
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <span className="text-zinc-500 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <span className="text-zinc-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.techStack.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>

                  {/* Principais realizações */}
                  {exp.achievements && (
                    <div className="mb-3 p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Principais Realizações</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <ChevronRight className="w-3 h-3 text-primary-neon" />
                            <span className="text-[11px] text-zinc-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Descrição */}
                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-xs flex items-start gap-2">
                        <span className="text-primary-neon mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-neon/0 via-primary-neon/0 to-accent-purple/0 group-hover/card:from-primary-neon/5 group-hover/card:via-primary-neon/10 group-hover/card:to-accent-purple/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer com chamada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Award className="w-4 h-4 text-primary-neon" />
            <span className="text-sm text-zinc-400">
              Disponível para novas oportunidades e desafios
            </span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
