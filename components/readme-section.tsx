'use client';

import {
  Calendar,
  Code,
  ExternalLink,
  GitCommit,
  Layout,
  Mail,
  Phone,
  Server,
  Smartphone,
  Star,
  Users,
  Globe,
  Trophy,
  Sparkles,
  Briefcase,
} from 'lucide-react';

import { useMemo, useState } from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import activityDataJSON from '@/data/github-activity.json';

type DayData = {
  date: Date;
  count: number;
};

type ContributionYear =
  | '2020'
  | '2021'
  | '2022'
  | '2023'
  | '2024'
  | '2025'
  | '2026';

type ContributionData =
  typeof activityDataJSON.contributions;

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const years = [
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
];

const stats = [
  {
    icon: <GitCommit className="w-4 h-4" />,
    label: 'Contribuições',
    value: '8.9k',
    change: '+24%',
  },
  {
    icon: <Star className="w-4 h-4" />,
    label: 'Repositórios',
    value: '45',
    change: '+3',
  },
  {
    icon: <Users className="w-4 h-4" />,
    label: 'Seguidores',
    value: '127',
    change: '+8',
  },
  {
    icon: <Code className="w-4 h-4" />,
    label: 'Commits',
    value: '5.3k',
    change: '+18%',
  },
];

const generateRealisticActivityData = (
  year: number
): Map<string, number> => {
  const data = new Map<string, number>();

  const startDate = new Date(year, 0, 1);

  const endDate =
    year === 2026
      ? new Date(2026, 4, 8)
      : new Date(year, 11, 31);

  const yearKey = String(year) as ContributionYear;

  const yearData: ContributionData[ContributionYear] =
    activityDataJSON.contributions[yearKey];

  if (!yearData) return data;

  const monthData = yearData.months;

  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const monthIndex = currentDate.getMonth();

    const month =
      months[monthIndex] as keyof typeof monthData;

    const monthTotal = monthData[month] || 0;

    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const avgDaily = Math.max(
      1,
      Math.floor(monthTotal / daysInMonth)
    );

    let activityCount = 0;

    const isWeekend =
      currentDate.getDay() === 0 ||
      currentDate.getDay() === 6;

    if (isWeekend) {
      activityCount = Math.floor(
        Math.random() * (avgDaily + 3)
      );
    } else {
      activityCount =
        Math.floor(Math.random() * (avgDaily * 2)) +
        Math.floor(avgDaily * 0.7);
    }

    activityCount = Math.min(activityCount, 15);

    const dateStr = currentDate
      .toISOString()
      .split('T')[0];

    data.set(dateStr, activityCount);

    currentDate.setDate(
      currentDate.getDate() + 1
    );
  }

  return data;
};

const getWeeksData = (
  activityData: Map<string, number>,
  year: number
): DayData[][] => {
  const weeks: DayData[][] = [];

  let currentWeek: DayData[] = [];

  const startDate = new Date(year, 0, 1);

  const firstDay = new Date(startDate);

  const dayOfWeek = firstDay.getDay();

  firstDay.setDate(
    firstDay.getDate() - dayOfWeek
  );

  const currentDate = new Date(firstDay);

  const endDate =
    year === 2026
      ? new Date(2026, 12, 31)
      : new Date(year, 11, 31);

  while (currentDate <= endDate) {
    const dateStr = currentDate
      .toISOString()
      .split('T')[0];

    const count =
      activityData.get(dateStr) || 0;

    currentWeek.push({
      date: new Date(currentDate),
      count,
    });

    if (
      currentDate.getDay() === 6 ||
      currentDate >= endDate
    ) {
      weeks.push([...currentWeek]);

      currentWeek = [];
    }

    currentDate.setDate(
      currentDate.getDate() + 1
    );
  }

  return weeks;
};

const getActivityColor = (
  count: number
) => {
  if (count === 0) return 'bg-[#161b22]';

  if (count <= 2)
    return 'bg-green-900/40';

  if (count <= 5)
    return 'bg-green-700/60';

  if (count <= 8)
    return 'bg-green-500/80';

  return 'bg-green-400';
};

export function ReadmeSection() {
  const [selectedYear, setSelectedYear] =
    useState<number>(2026);

  const activityData = useMemo(() => {
    return generateRealisticActivityData(
      selectedYear
    );
  }, [selectedYear]);

  const weeksData = useMemo(() => {
    return getWeeksData(
      activityData,
      selectedYear
    );
  }, [activityData, selectedYear]);

  const stacks = [
    {
      name: 'Frontend',
      icon: (
        <Layout className="w-4 h-4 text-primary-neon" />
      ),
      items:
        'Next.js, React, TypeScript',
    },
    {
      name: 'Backend',
      icon: (
        <Server className="w-4 h-4 text-accent-purple" />
      ),
      items:
        'Node.js, Golang, .NET',
    },
    {
      name: 'Mobile',
      icon: (
        <Smartphone className="w-4 h-4 text-primary-neon" />
      ),
      items:
        'React Native, Expo',
    },
    {
      name: 'Database',
      icon: (
        <Code className="w-4 h-4 text-accent-purple" />
      ),
      items:
        'PostgreSQL, Prisma, MongoDB',
    },
  ];

  const experiences = [
    {
      company: 'Mobinads Cloud',
      role:
        'Chief Technology Officer',
      badge: 'Tech Lead',
    },
    {
      company: 'Kiala Jobs',
      role:
        'Senior Software Engineer',
      badge: 'Tech Lead',
    },
    {
      company: 'Digital Síndico',
      role:
        'Chief Technology Officer',
      badge: 'Tech Lead',
    },
    {
      company: '42 Luanda',
      role: 'Cadete',
      badge:
        'Aluno',
    },
  ];

  const achievements = [
    'Desenvolvimento de plataformas escaláveis',
    'Arquitetura backend moderna',
    'Open Source & contribuição técnica',
    'UI/UX Design avançado',
  ];

  const getTotalContributions =
    () => {
      let total = 0;

      weeksData.forEach((week) => {
        week.forEach((day) => {
          total += day.count;
        });
      });

      return total.toLocaleString();
    };

  const getYearNote = () => {
    if (selectedYear === 2026) {
      return ' (até 08/05/2026)';
    }

    return '';
  };

  return (
    <div className="w-full max-w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#050507] shadow-2xl transition-all duration-500 hover:border-primary-neon/20">

      {/* HEADER */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-4 backdrop-blur-xl sm:px-5">

        {/* 🔒 FIXO (lado esquerdo) */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex shrink-0 gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>

          <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] sm:text-[11px]">
            <span className="text-primary-neon">➜</span>

            <span className="truncate text-zinc-500">
              ~/portfolio/
            </span>

            <span className="truncate text-white">
              README.md
            </span>
          </div>
        </div>

        {/* 🔓 SCROLL NORMAL (lado direito) */}
        <a
          href="/cv/fullstack-felix-domingos-cv.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-xl border border-primary-neon/20 bg-primary-neon/10 px-4 py-2 text-[11px] font-semibold text-primary-neon transition-all duration-300 hover:bg-primary-neon hover:text-black"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Download Resume
        </a>
      </div>
      <div className="space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-primary-neon/10 via-transparent to-accent-purple/10 p-4 sm:p-6">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary-neon/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent-purple/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-primary-neon/20 bg-primary-neon/10 px-4 py-1 text-xs text-primary-neon">
                Fullstack Developer
              </div>

              <div className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-4 py-1 text-xs text-accent-purple">
                UI/UX Specialist
              </div>
            </div>

            <h1 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-4xl">
              Construindo produtos digitais
              modernos, escaláveis e com
              foco em experiência.
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Desenvolvedor Fullstack
              apaixonado por arquitetura
              de software, performance,
              UI/UX e sistemas modernos.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/felixdomingos1"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-primary-neon/30 hover:bg-primary-neon/10"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/felixdomingos"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-primary-neon/30 hover:bg-primary-neon/10"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="https://felixdomingos.vercel.app"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-primary-neon/30 hover:bg-primary-neon/10"
              >
                <Globe className="h-4 w-4" />
                Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* STACKS */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border border-primary-neon/20 bg-primary-neon/10 p-2">
              <Sparkles className="h-4 w-4 text-primary-neon" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Stack Tecnológica
              </h3>

              <p className="text-xs text-zinc-500">
                Tecnologias e ecossistemas
                principais
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stacks.map((stack, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:border-primary-neon/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  {stack.icon}

                  <h4 className="font-semibold text-white">
                    {stack.name}
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {stack.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB */}
        <section className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-primary-neon/20 bg-primary-neon/10 p-2">
                <Calendar className="h-4 w-4 text-primary-neon" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Atividade no GitHub
                </h3>

                <p className="text-[11px] text-zinc-500 sm:text-xs">
                  Contribuições e commits
                  durante o ano
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() =>
                    setSelectedYear(year)
                  }
                  className={`rounded-lg border px-3 py-1.5 text-[11px] font-medium transition-all duration-300 sm:text-xs ${selectedYear === year
                    ? 'border-primary-neon bg-primary-neon text-black'
                    : 'border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-black/30 p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-primary-neon">
                    {stat.icon}
                  </div>

                  <span className="text-[10px] text-green-400">
                    {stat.change}
                  </span>
                </div>

                <p className="text-lg font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CALENDAR */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-175 md:min-w-190">
              <div className="mb-3 flex justify-between px-2 sm:px-8">
                {months.map((month) => (
                  <span
                    key={month}
                    className="min-w-8 text-[9px] text-zinc-500 sm:min-w-10 sm:text-[10px]"
                  >
                    {month}
                  </span>
                ))}
              </div>

              <div className="flex gap-xs sm:gap-0.75">
                {weeksData.map(
                  (week, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="flex flex-col gap-xs sm:gap-0.75"
                    >
                      {week.map(
                        (day, dayIndex) => (
                          <div
                            key={dayIndex}
                            title={`${day.date.toLocaleDateString(
                              'pt-BR'
                            )}: ${day.count
                              } contribuições`}
                            className={`
                              h-2.25
                              w-2.25
                              sm:h-2.75
                              sm:w-2.75
                              rounded-xs
                              ${getActivityColor(
                              day.count
                            )}
                              cursor-pointer
                              transition-all
                              duration-200
                              hover:scale-125
                              hover:ring-1
                              hover:ring-primary-neon
                            `}
                          />
                        )
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                  <span>Menos</span>

                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-xs bg-[#161b22]" />
                    <div className="h-3 w-3 rounded-xs bg-green-900/40" />
                    <div className="h-3 w-3 rounded-xs bg-green-700/60" />
                    <div className="h-3 w-3 rounded-xs bg-green-500/80" />
                    <div className="h-3 w-3 rounded-xs bg-green-400" />
                  </div>

                  <span>Mais</span>
                </div>

                <div className="text-[11px] font-medium text-primary-neon">
                  {getTotalContributions()}{' '}
                  contribuições em{' '}
                  {selectedYear}
                  {getYearNote()}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border border-primary-neon/20 bg-primary-neon/10 p-2">
              <Briefcase className="h-4 w-4 text-primary-neon" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Experiência
              </h3>

              <p className="text-xs text-zinc-500">
                Empresas e posições ocupadas
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/3 p-4 transition hover:border-primary-neon/20"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">
                    {exp.company}
                  </h4>

                  <span className="rounded-full border border-primary-neon/20 bg-primary-neon/10 px-2 py-0.5 text-[10px] text-primary-neon">
                    {exp.badge}
                  </span>
                </div>

                <p className="mt-2 text-xs text-zinc-400">
                  {exp.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-2">
              <Trophy className="h-4 w-4 text-yellow-400" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Destaques
              </h3>

              <p className="text-xs text-zinc-500">
                Áreas de atuação e evolução
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/3 p-4 text-sm text-zinc-300"
              >
                ✨ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="mailto:felixsdemingos93@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:border-primary-neon/20 hover:bg-primary-neon/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-neon/10">
              <Mail className="h-4 w-4 text-primary-neon" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-white">
                Email
              </p>

              <p className="truncate text-xs text-zinc-500">
                felixsdemingos93@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+244926195572"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:border-primary-neon/20 hover:bg-primary-neon/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-neon/10">
              <Phone className="h-4 w-4 text-primary-neon" />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Telefone
              </p>

              <p className="text-xs text-zinc-500">
                +244 926 195 572
              </p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
