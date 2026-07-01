'use client';
import { motion } from 'framer-motion';
import { Award, Code, Database, Globe, Layout, Smartphone, Server, Shield, Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

const skills = [
  { name: 'React/Next.js', icon: <Layout className="w-5 h-5" />, level: 92, years: "4+ anos", projects: 12 },
  { name: 'React Native', icon: <Smartphone className="w-5 h-5" />, level: 88, years: "3+ anos", projects: 5 },
  { name: 'Node.js/Express', icon: <Code className="w-5 h-5" />, level: 90, years: "4+ anos", projects: 10 },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" />, level: 88, years: "3+ anos", projects: 15 },
  { name: 'C#/.NET', icon: <Server className="w-5 h-5" />, level: 78, years: "1.5 anos", projects: 3 },
  { name: 'Golang', icon: <Code className="w-5 h-5" />, level: 75, years: "1+ ano", projects: 4 },
  { name: 'SQL/MongoDB', icon: <Database className="w-5 h-5" />, level: 85, years: "4+ anos", projects: 12 },
  { name: 'UI/UX Design', icon: <Layout className="w-5 h-5" />, level: 82, years: "3+ anos", projects: 8 },
];

export function AboutSection() {
  const t = useTranslations('about');
  const achievements = t.raw('achievements') as { title: string; description: string }[];
  const differentials = t.raw('differentials.items') as string[];

  const getLevelLabel = (level: number) => {
    const levels = t.raw('skills.levels') as Record<string, string>;
    if (level >= 90) return levels.expert;
    if (level >= 80) return levels.advanced;
    return levels.intermediate;
  };

  return (
    <section id="about-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-primary-neon/30 transition-all"
            >
              <div className="text-primary-neon flex justify-center mb-2">{index === 0 ? <Award className="w-5 h-5" /> : index === 1 ? <Users className="w-5 h-5" /> : index === 2 ? <Globe className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}</div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-text-gray text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Texto Sobre */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Zap className="text-primary-neon w-5 h-5" /> {t('sections.who.title')}
              </h3>
              <p className="text-text-gray leading-relaxed">
                {t('sections.who.text')}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Code className="text-primary-neon w-5 h-5" /> {t('sections.specialties.title')}
              </h3>
              <p className="text-text-gray leading-relaxed">
                {t('sections.specialties.text')}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="text-primary-neon w-5 h-5" /> {t('sections.evolving.title')}
              </h3>
              <p className="text-text-gray leading-relaxed">
                {t('sections.evolving.text')}
              </p>
            </div>

            {/* Info Pessoal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">{t('sections.personalInfo.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📍 {t('sections.personalInfo.location')}</p>
                  <p className="text-white text-sm">{t('sections.personalInfo.locationValue')}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📧 {t('sections.personalInfo.email')}</p>
                  <p className="text-white text-sm break-all">{t('sections.personalInfo.emailValue')}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📱 {t('sections.personalInfo.phone')}</p>
                  <p className="text-white text-sm">{t('sections.personalInfo.phoneValue')}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">🌐 {t('sections.personalInfo.languages')}</p>
                  <p className="text-white text-sm">{t('sections.personalInfo.languagesValue')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-primary-neon w-5 h-5" /> {t('skills.title')}
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-neon">{skill.icon}</span>
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-text-gray text-xs">{skill.years}</span>
                      <span className="text-primary-neon text-sm font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-linear-to-r from-primary-neon to-accent-purple rounded-full relative"
                    >
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.05 }}
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-white/30 text-[10px]">{t('skills.projects', { count: skill.projects })}</span>
                    <span className="text-white/30 text-[10px]">{t('skills.level', { level: getLevelLabel(skill.level) })}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Diferenciais */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">{t('differentials.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {differentials.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-text-gray p-3 bg-white/5 rounded-lg">
                    {i === 0 ? <Award className="w-4 h-4 text-primary-neon" /> :
                     i === 1 ? <Globe className="w-4 h-4 text-primary-neon" /> :
                     i === 2 ? <Clock className="w-4 h-4 text-primary-neon" /> :
                     <Users className="w-4 h-4 text-primary-neon" />}
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
