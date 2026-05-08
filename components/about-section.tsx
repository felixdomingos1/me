'use client';
import { motion } from 'framer-motion';
import { Award, Code, Database, Globe, Layout, Smartphone, Server, Shield, Zap, Clock, Users, TrendingUp } from 'lucide-react';

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

const achievements = [
  { icon: <Award className="w-5 h-5" />, title: "5+ Anos", description: "de experiência" },
  { icon: <Users className="w-5 h-5" />, title: "15+ Projetos", description: "entregues com sucesso" },
  { icon: <Globe className="w-5 h-5" />, title: "3 Países", description: "clientes atendidos" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "50+ Features", description: "implementadas" },
];

export function AboutSection() {
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
            Sobre <span className="text-primary-neon">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória, habilidades e o que me motiva
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
              <div className="text-primary-neon flex justify-center mb-2">{item.icon}</div>
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
                <Zap className="text-primary-neon w-5 h-5" /> Quem sou eu?
              </h3>
              <p className="text-text-gray leading-relaxed">
                Desenvolvedor com mais de 5 anos de experiência no mercado de tecnologia,
                focado no desenvolvimento de soluções de aplicações web e mobile eficientes
                e escaláveis para usuários finais.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Code className="text-primary-neon w-5 h-5" /> Especializações
              </h3>
              <p className="text-text-gray leading-relaxed">
                Especializado no ecossistema JavaScript, com expertise em React, Next.js,
                Node.js e TypeScript. Apaixonado por fornecer código limpo e de alto
                desempenho com uma excelente experiência do usuário.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="text-primary-neon w-5 h-5" /> Em Evolução
              </h3>
              <p className="text-text-gray leading-relaxed">
                Atualmente em evolução na stack C#/.NET, desenvolvendo APIs REST e
                aprofundando conhecimentos em EF Core, ASP.NET e SQL Server.
              </p>
            </div>

            {/* Info Pessoal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Informações Pessoais</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📍 Localização</p>
                  <p className="text-white text-sm">Benfica, Luanda - Angola</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📧 Email</p>
                  <p className="text-white text-sm break-all">felixsdomingos93@gmail.com</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">📱 Telefone</p>
                  <p className="text-white text-sm">+244 926 195 572</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs flex items-center gap-1">🌐 Idiomas</p>
                  <p className="text-white text-sm">Português (Nativo), Inglês (Fluente)</p>
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
                <TrendingUp className="text-primary-neon w-5 h-5" /> Stack & Habilidades
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
                    <span className="text-white/30 text-[10px]">{skill.projects} projetos</span>
                    <span className="text-white/30 text-[10px]">Nível {skill.level >= 90 ? 'Especialista' : skill.level >= 80 ? 'Avançado' : 'Intermediário'}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Diferenciais */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Diferenciais</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-text-gray p-3 bg-white/5 rounded-lg">
                  <Award className="w-4 h-4 text-primary-neon" />
                  <span className="text-sm">Clean Code & SOLID</span>
                </div>
                <div className="flex items-center gap-2 text-text-gray p-3 bg-white/5 rounded-lg">
                  <Globe className="w-4 h-4 text-primary-neon" />
                  <span className="text-sm">APIs RESTful & GraphQL</span>
                </div>
                <div className="flex items-center gap-2 text-text-gray p-3 bg-white/5 rounded-lg">
                  <Clock className="w-4 h-4 text-primary-neon" />
                  <span className="text-sm">Metodologias Ágeis</span>
                </div>
                <div className="flex items-center gap-2 text-text-gray p-3 bg-white/5 rounded-lg">
                  <Users className="w-4 h-4 text-primary-neon" />
                  <span className="text-sm">Liderança Técnica</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
