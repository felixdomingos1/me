'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Users, Shield, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const icons = [<Cpu key="c" className="w-6 h-6" />, <Users key="u" className="w-6 h-6" />, <Shield key="s" className="w-6 h-6" />, <Zap key="z1" className="w-6 h-6" />, <Zap key="z2" className="w-6 h-6" />, <Zap key="z3" className="w-6 h-6" />];

const techArrays = [
  ['React', 'Node.js', 'Golang', 'PostgreSQL', 'Redis', 'AWS'],
  ['Next.js', 'Node.js', 'Golang', 'MongoDB', 'ElasticSearch', 'Docker'],
  ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Stripe'],
  ['React', 'TypeScript', 'Tailwind CSS', 'Go APIs'],
  ['Next.js', 'Node.js', 'MongoDB', 'FFmpeg'],
  ['React', 'Next.js', 'Tailwind CSS', 'Mapbox'],
];

const links = [
  'https://mobinads.cloud',
  'https://kialajobs.com',
  'https://digitalsindico.com',
  'https://skylla.app',
  'https://flixhome.app',
  'https://neatxpress.org',
];

export function CompaniesSection() {
  const t = useTranslations('companies');
  const items = t.raw('items') as {
    id: number; name: string; role: string;
    description: string; highlights: string[];
  }[];

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
            {t('title')} <span className="text-primary-neon">{t('titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((company, index) => (
            <motion.a
              key={company.id}
              href={links[index] || '#'}
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
                    {icons[index] || <Cpu className="w-6 h-6" />}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary-neon transition-colors" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                <p className="text-primary-neon text-sm mb-3">{company.role}</p>
                <p className="text-text-gray text-sm mb-4 line-clamp-2">{company.description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(techArrays[index] || []).slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                      {tech}
                    </span>
                  ))}
                  {(techArrays[index] || []).length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                      +{(techArrays[index] || []).length - 3}
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
