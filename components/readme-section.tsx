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
  Users
} from 'lucide-react';

import { useMemo, useState } from 'react';

type DayData = {
  date: Date;
  count: number;
};

const generateActivityData = (): Map<string, number> => {
  const startDate = new Date(2020, 5, 1);
  const endDate = new Date();

  const data = new Map<string, number>();

  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0];

    const activity =
      Math.random() < 0.7
        ? Math.floor(Math.random() * 8)
        : Math.floor(Math.random() * 15);

    data.set(dateStr, activity);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const getWeeksData = (
  activityData: Map<string, number>
): DayData[][] => {
  const weeks: DayData[][] = [];

  let currentWeek: DayData[] = [];

  const startDate = new Date(2020, 5, 1);

  const firstDay = new Date(startDate);

  const dayOfWeek = firstDay.getDay();

  firstDay.setDate(firstDay.getDate() - dayOfWeek);

  const currentDate = new Date(firstDay);

  const endDate = new Date();

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0];

    const count = activityData.get(dateStr) || 0;

    currentWeek.push({
      date: new Date(currentDate),
      count
    });

    if (currentDate.getDay() === 6 || currentDate >= endDate) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weeks;
};

const getActivityColor = (count: number) => {
  if (count === 0) return 'bg-[#161b22]';
  if (count <= 2) return 'bg-green-900/40';
  if (count <= 5) return 'bg-green-700/60';
  if (count <= 8) return 'bg-green-500/80';

  return 'bg-green-400';
};

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
  'Dez'
];

const years = [2020, 2021, 2022, 2023, 2024, 2025];

const stats = [
  {
    icon: <GitCommit className="w-4 h-4" />,
    label: 'Contribuições',
    value: '1.284',
    change: '+12%'
  },
  {
    icon: <Star className="w-4 h-4" />,
    label: 'Repositórios',
    value: '45',
    change: '+3'
  },
  {
    icon: <Users className="w-4 h-4" />,
    label: 'Seguidores',
    value: '127',
    change: '+8'
  },
  {
    icon: <Code className="w-4 h-4" />,
    label: 'Commits',
    value: '3.2k',
    change: '+15%'
  }
];

export function ReadmeSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const activityData = useMemo(() => generateActivityData(), []);

  const weeksData = useMemo(() => {
    const filteredData = new Map<string, number>();

    activityData.forEach((value, key) => {
      const year = parseInt(key.split('-')[0]);

      if (year === selectedYear) {
        filteredData.set(key, value);
      }
    });

    return getWeeksData(filteredData);
  }, [activityData, selectedYear]);

  const stacks = [
    {
      name: 'Frontend',
      icon: <Layout className="w-3.5 h-3.5 text-primary-neon" />,
      items: 'Next.js, React, TypeScript'
    },
    {
      name: 'Backend',
      icon: <Server className="w-3.5 h-3.5 text-accent-purple" />,
      items: 'Node.js, Go, .NET'
    },
    {
      name: 'Mobile',
      icon: <Smartphone className="w-3.5 h-3.5 text-primary-neon" />,
      items: 'React Native'
    },
    {
      name: 'Database',
      icon: <Code className="w-3.5 h-3.5 text-accent-purple" />,
      items: 'PostgreSQL, Prisma, MongoDB'
    }
  ];

  const experiences = [
    {
      company: 'Mobinads Cloud',
      role: 'Chief Technology Officer',
      badge: 'Tech Lead'
    },
    {
      company: 'Kiala Jobs',
      role: 'Senior Software Engineer',
      badge: 'Backend'
    },
    {
      company: 'Digital Síndico',
      role: 'Chief Technology Officer',
      badge: 'Fullstack'
    }
  ];

  const getTotalContributions = () => {
    let total = 0;

    weeksData.forEach((week) => {
      week.forEach((day) => {
        total += day.count;
      });
    });

    return total.toLocaleString();
  };

  return (
    <div className="group bg-[#050507] rounded-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary-neon/20">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-5 py-4 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="text-primary-neon">➜</span>

            <span className="text-zinc-500">
              ~/portfolio/
            </span>

            <span className="text-white">
              README.md
            </span>
          </div>
        </div>

        <a
          href="/cv/felix-domingos-cv.pdf"
          download
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary-neon/10 border border-primary-neon/20 text-primary-neon text-[11px] font-semibold hover:bg-primary-neon hover:text-black transition-all duration-300 cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Download Resume
        </a>
      </div>

      {/* BODY */}
      <div className="p-4 sm:p-6 lg:p-8">


        {/* GITHUB ACTIVITY */}
        <section className="bg-white/[0.03] rounded-2xl border border-white/10 p-4 sm:p-6 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary-neon/10 border border-primary-neon/20">
                <Calendar className="w-4 h-4 text-primary-neon" />
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  Atividade no GitHub
                </h3>

                <p className="text-zinc-500 text-[11px] sm:text-xs">
                  Contribuições e commits durante o ano
                </p>
              </div>
            </div>

            {/* Years */}
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300 cursor-pointer border ${selectedYear === year
                    ? 'bg-primary-neon text-black border-primary-neon'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-black/30 border border-white/5 rounded-xl p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-primary-neon">
                    {stat.icon}
                  </div>

                  <span className="text-[10px] text-green-400">
                    {stat.change}
                  </span>
                </div>

                <p className="text-white text-lg font-bold">
                  {stat.value}
                </p>

                <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CALENDAR */}
          <div className="w-full overflow-x-auto custom-scrollbar pb-4">
            <div className="min-w-[760px]">
              {/* Months */}
              <div className="flex justify-between px-8 mb-3">
                {months.map((month) => (
                  <span
                    key={month}
                    className="text-[10px] text-zinc-500 min-w-[40px]"
                  >
                    {month}
                  </span>
                ))}
              </div>

              {/* Weeks */}
              <div className="flex gap-[3px]">
                {weeksData.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="flex flex-col gap-[3px]"
                  >
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        title={`${day.date.toLocaleDateString(
                          'pt-BR'
                        )}: ${day.count} contribuições`}
                        className={`
                          w-[11px]
                          h-[11px]
                          rounded-[2px]
                          ${getActivityColor(day.count)}
                          hover:scale-125
                          hover:ring-1
                          hover:ring-primary-neon
                          transition-all
                          duration-200
                          cursor-pointer
                        `}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
                {/* Legend */}
                <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                  <span>Menos</span>

                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-[2px] bg-[#161b22]" />
                    <div className="w-3 h-3 rounded-[2px] bg-green-900/40" />
                    <div className="w-3 h-3 rounded-[2px] bg-green-700/60" />
                    <div className="w-3 h-3 rounded-[2px] bg-green-500/80" />
                    <div className="w-3 h-3 rounded-[2px] bg-green-400" />
                  </div>

                  <span>Mais</span>
                </div>

                {/* Total */}
                <div className="text-[11px] text-primary-neon font-medium">
                  {getTotalContributions()} contribuições em {selectedYear}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:felixsdemingos93@gmail.com"
            className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary-neon/20 hover:bg-primary-neon/5 transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-neon/10 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary-neon" />
            </div>

            <div>
              <p className="text-white text-sm font-medium">
                Email
              </p>

              <p className="text-zinc-500 text-xs">
                felixsdemingos93@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+244926195572"
            className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary-neon/20 hover:bg-primary-neon/5 transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-neon/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary-neon" />
            </div>

            <div>
              <p className="text-white text-sm font-medium">
                Telefone
              </p>

              <p className="text-zinc-500 text-xs">
                +244 926 195 572
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
