'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Users, Shield, Zap } from 'lucide-react';

const companies = [
  {
    id: 1,
    name: 'Mobinads Cloud',
    role: 'Chief Technology Officer (CTO)',
    logo: '/companies/mobinads.png',
    description: 'Plataforma inovadora de advertising digital e monetização de tráfego mobile. Solução completa para publishers e anunciantes.',
    technologies: ['React', 'Node.js', 'Golang', 'PostgreSQL', 'Redis', 'AWS'],
    highlights: [
      'Arquitetura de sistema em microserviços',
      'Processamento de milhões de requests por dia',
      'Sistema de bidding em tempo real',
      'Dashboard analytics com dados em tempo real'
    ],
    link: 'https://mobinads.cloud',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 2,
    name: 'Kiala Jobs',
    role: 'Software Engineer Sênior',
    logo: '/companies/kialajobs.png',
    description: 'Plataforma de recrutamento e empregos que conecta talentos às melhores oportunidades em Angola e África.',
    technologies: ['Next.js', 'Node.js', 'Golang', 'MongoDB', 'ElasticSearch', 'Docker'],
    highlights: [
      'Sistema de matching de candidaturas com IA',
      'Integração com APIs de empresas parceiras',
      'Dashboard administrativo completo',
      'Notificações em tempo real'
    ],
    link: 'https://kialajobs.com',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    name: 'Digital Síndico',
    role: 'Chief Technology Officer (CTO)',
    logo: '/companies/digitalsindico.png',
    description: 'Plataforma completa para gestão de condomínios, oferecendo soluções de comunicação, financeiro e reservas.',
    technologies: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Stripe'],
    highlights: [
      'Sistema de pagamentos integrado',
      'App mobile para moradores e síndicos',
      'Gestão de reservas de áreas comuns',
      'Relatórios financeiros automatizados'
    ],
    link: 'https://digitalsindico.com',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 4,
    name: 'Skylla',
    role: 'Frontend Developer',
    logo: '/companies/skylla.png',
    description: 'Plataforma inovadora da Planfity para gestão de projetos e colaboração em equipe.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Go APIs'],
    highlights: [
      'Interface moderna e responsiva',
      'Consumo de APIs em tempo real',
      'Componentes reutilizáveis',
      'Performance otimizada'
    ],
    link: 'https://skylla.app',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 5,
    name: 'FlixHome',
    role: 'Contribuidor',
    logo: '/companies/flixhome.png',
    description: 'Plataforma de streaming de conteúdo audiovisual com foco no mercado africano.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'FFmpeg'],
    highlights: [
      'Player de vídeo customizado',
      'Sistema de recomendações',
      'Catálogo de conteúdo organizado',
      'Experiência mobile-first'
    ],
    link: 'https://flixhome.app',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 6,
    name: 'NeatXpress',
    role: 'Frontend Developer',
    logo: '/companies/neatxpress.png',
    description: 'Soluções de logística e entregas expressas com tecnologia de ponta.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Mapbox'],
    highlights: [
      'Rastreamento de entregas em tempo real',
      'Dashboard de gestão de rotas',
      'Interface intuitiva para entregadores',
      'Integração com maps'
    ],
    link: 'https://neatxpress.org',
    icon: <Zap className="w-6 h-6" />
  }
];

export function CompaniesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas que <span className="text-primary-neon">Atuo/Atuei</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            Conheça as empresas onde aplico minha expertise como CTO e Engenheiro de Software Sênior
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.a
              key={company.id}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-neon/50 transition-all duration-300 h-full hover:transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary-neon/20 to-accent-purple/20 flex items-center justify-center text-primary-neon group-hover:scale-110 transition-transform">
                    {company.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary-neon transition-colors" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                <p className="text-primary-neon text-sm mb-3">{company.role}</p>
                <p className="text-text-gray text-sm mb-4 line-clamp-2">{company.description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                      {tech}
                    </span>
                  ))}
                  {company.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                      +{company.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <ul className="space-y-1">
                  {company.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-white/50 text-xs flex items-center gap-1">
                      <span className="text-primary-neon">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
