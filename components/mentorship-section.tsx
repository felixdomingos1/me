'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  BookOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  Link as LinkIcon,
  Download,
  ExternalLink,
  Users,
  Award,
  Star,
  Clock,
  Play,
  Terminal,
  Smartphone,
  Layout,
  Server,
} from 'lucide-react';
import Image from 'next/image';
import { FaFigma } from 'react-icons/fa';

// Tipos de conteúdo
type ContentType = 'code' | 'figma' | 'video' | 'document' | 'link';

interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  url?: string;
  code?: string;
  language?: string;
  image?: string;
  duration?: string;
  downloadUrl?: string;
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  duration: string;
  contents: ContentItem[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  students: number;
  rating: number;
  chapters: Chapter[];
}

// Dados de exemplo - substitua pelos seus dados reais
const modulesData: Module[] = [
  {
    id: '1',
    title: 'Fundamentos do Desenvolvimento Fullstack',
    description: 'Aprenda os conceitos fundamentais para se tornar um desenvolvedor fullstack completo.',
    icon: <Layout className="w-6 h-6" />,
    level: 'Iniciante',
    duration: '40 horas',
    students: 156,
    rating: 4.8,
    chapters: [
      {
        id: '1-1',
        title: 'Introdução ao Ecossistema JavaScript',
        description: 'Entenda o universo JavaScript e suas ferramentas',
        duration: '2h 30min',
        contents: [
          {
            id: '1-1-1',
            title: 'História e Evolução do JavaScript',
            type: 'video',
            description: 'Conheça a evolução da linguagem que domina a web',
            url: 'https://youtu.be/example1',
            duration: '15min',
          },
          {
            id: '1-1-2',
            title: 'Configurando Ambiente de Desenvolvimento',
            type: 'code',
            description: 'Instale e configure Node.js, npm e suas primeiras ferramentas',
            language: 'bash',
            code: `# Instalar Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts

# Verificar instalação
node --version
npm --version

# Criar primeiro projeto
mkdir meu-primeiro-projeto
cd meu-primeiro-projeto
npm init -y`,
          },
          {
            id: '1-1-3',
            title: 'Material de Apoio - Slides',
            type: 'document',
            description: 'Slides completos da aula',
            downloadUrl: '/materiais/slides-aula1.pdf',
          },
        ],
      },
      {
        id: '1-2',
        title: 'JavaScript Moderno (ES6+)',
        description: 'Domine as features modernas do JavaScript',
        duration: '4h',
        contents: [
          {
            id: '1-2-1',
            title: 'Arrow Functions e Template Strings',
            type: 'code',
            description: 'Aprenda a sintaxe moderna do JavaScript',
            language: 'javascript',
            code: `// Arrow Functions
const saudacao = (nome) => {
  return \`Olá, \${nome}!\`;
};

// Arrow Function com retorno implícito
const dobrar = (x) => x * 2;

// Template Strings
const nome = "João";
const idade = 25;
const mensagem = \`Meu nome é \${nome} e tenho \${idade} anos.\`;

// Exemplo prático
const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Carlos', idade: 30 },
  { nome: 'Mariana', idade: 28 }
];

const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes); // ['Ana', 'Carlos', 'Mariana']`,
          },
          {
            id: '1-2-2',
            title: 'Destructuring e Spread Operator',
            type: 'code',
            description: 'Aprenda a desestruturar objetos e arrays',
            language: 'javascript',
            code: `// Destructuring de objetos
const pessoa = {
  nome: 'Félix',
  idade: 30,
  cidade: 'Luanda',
  profissao: 'Desenvolvedor'
};

const { nome, idade, ...resto } = pessoa;
console.log(nome); // Félix
console.log(resto); // { cidade: 'Luanda', profissao: 'Desenvolvedor' }

// Destructuring de arrays
const cores = ['vermelho', 'azul', 'verde', 'amarelo'];
const [primeira, segunda, ...outras] = cores;

// Spread Operator
const novosUsuarios = [...usuarios, { nome: 'Pedro', idade: 35 }];

// Exemplo em função
function configurarAPI({ url, metodo = 'GET', headers = {} }) {
  console.log(\`Chamando \${metodo} para \${url}\`);
  return { url, metodo, headers };
}`,
          },
          {
            id: '1-2-3',
            title: 'Design do Sistema - Protótipo',
            type: 'figma',
            description: 'Protótipo do sistema que vamos construir',
            url: 'https://figma.com/file/example',
            image: '/mentorship/figma-demo.png',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Arquitetura de Software Avançada',
    description: 'Domine padrões de projeto, clean architecture e microsserviços.',
    icon: <Server className="w-6 h-6" />,
    level: 'Avançado',
    duration: '60 horas',
    students: 89,
    rating: 4.9,
    chapters: [
      {
        id: '2-1',
        title: 'Clean Architecture na Prática',
        description: 'Implemente clean architecture em projetos reais',
        duration: '6h',
        contents: [
          {
            id: '2-1-1',
            title: 'Estrutura de Pastas e Organização',
            type: 'code',
            description: 'Organização de projeto com clean architecture',
            language: 'typescript',
            code: `// Estrutura de diretórios
// src/
//   ├── domain/
//   │   ├── entities/
//   │   ├── usecases/
//   │   └── repositories/
//   ├── infrastructure/
//   │   ├── database/
//   │   └── http/
//   └── presentation/
//       ├── controllers/
//       └── middlewares/

// Exemplo de entidade
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Use case
class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    return this.userRepository.save(user);
  }
}`,
          },
          {
            id: '2-1-2',
            title: 'Arquitetura Hexagonal',
            type: 'video',
            description: 'Explicação detalhada sobre arquitetura hexagonal',
            url: 'https://youtu.be/example',
            duration: '45min',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'React Native Avançado',
    description: 'Desenvolva apps mobile profissionais com React Native',
    icon: <Smartphone className="w-6 h-6" />,
    level: 'Intermediário',
    duration: '50 horas',
    students: 112,
    rating: 4.7,
    chapters: [
      {
        id: '3-1',
        title: 'Performance e Otimização',
        description: 'Técnicas avançadas para apps performáticos',
        duration: '3h',
        contents: [
          {
            id: '3-1-1',
            title: 'Memoização e Hooks Avançados',
            type: 'code',
            description: 'Otimizando componentes com useMemo e useCallback',
            language: 'typescript',
            code: `import React, { useMemo, useCallback, useState } from 'react';
import { FlatList, View, Text } from 'react-native';

// Componente otimizado com memo
const UserCard = React.memo(({ user, onPress }) => {
  console.log(\`Renderizando \${user.name}\`);
  return (
    <TouchableOpacity onPress={() => onPress(user.id)}>
      <Text>{user.name}</Text>
    </TouchableOpacity>
  );
});

// Componente principal
function UserList({ users, filterText }) {
  const [selectedId, setSelectedId] = useState(null);

  // Filtra usuários apenas quando filterText ou users mudam
  const filteredUsers = useMemo(() => {
    console.log('Filtrando usuários...');
    return users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [users, filterText]);

  // Callback memoizado
  const handleUserPress = useCallback((userId) => {
    setSelectedId(userId);
    console.log(\`Usuário \${userId} selecionado\`);
  }, []);

  return (
    <FlatList
      data={filteredUsers}
      renderItem={({ item }) => (
        <UserCard user={item} onPress={handleUserPress} />
      )}
      keyExtractor={item => item.id}
    />
  );
}`,
          },
          {
            id: '3-1-2',
            title: 'Design System no Figma',
            type: 'figma',
            description: 'Componentes e tokens do design system',
            url: 'https://figma.com/file/design-system',
          },
        ],
      },
    ],
  },
];

// Componente de visualização de código
function CodeViewer({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#1a1a2e] rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-primary-neon" />
          <span className="text-xs text-zinc-400">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-zinc-500 hover:text-primary-neon transition-colors"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Componente de conteúdo por tipo
function ContentRenderer({ content }: { content: ContentItem }) {
  switch (content.type) {
    case 'code':
      return (
        <CodeViewer code={content.code || ''} language={content.language || 'javascript'} />
      );
    case 'figma':
      return (
        <div className="relative bg-linear-to-br from-primary-neon/10 to-accent-purple/10 rounded-xl p-6 border border-white/10 text-center">
          <FaFigma className="w-12 h-12 mx-auto mb-3 text-primary-neon" />
          <h4 className="text-white font-semibold mb-2">{content.title}</h4>
          <p className="text-sm text-zinc-400 mb-4">{content.description}</p>
          {content.image && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image src={content.image} alt={content.title} fill className="object-cover" />
            </div>
          )}
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-neon hover:text-white transition-colors"
          >
            Abrir no Figma <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      );
    case 'video':
      return (
        <div className="relative bg-linear-to-br from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-white/10 text-center">
          <Play className="w-12 h-12 mx-auto mb-3 text-red-400" />
          <h4 className="text-white font-semibold mb-2">{content.title}</h4>
          <p className="text-sm text-zinc-400 mb-4">{content.description}</p>
          {content.duration && (
            <span className="inline-block text-xs text-zinc-500 mb-4">{content.duration}</span>
          )}
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors"
          >
            Assistir <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      );
    case 'document':
      return (
        <div className="relative bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-white/10 text-center">
          <FileText className="w-12 h-12 mx-auto mb-3 text-blue-400" />
          <h4 className="text-white font-semibold mb-2">{content.title}</h4>
          <p className="text-sm text-zinc-400 mb-4">{content.description}</p>
          <a
            href={content.downloadUrl}
            download
            className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
          >
            <Download className="w-3 h-3" />
            Baixar Material
          </a>
        </div>
      );
    case 'link':
      return (
        <div className="relative bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-white/10 text-center">
          <LinkIcon className="w-12 h-12 mx-auto mb-3 text-purple-400" />
          <h4 className="text-white font-semibold mb-2">{content.title}</h4>
          <p className="text-sm text-zinc-400 mb-4">{content.description}</p>
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors"
          >
            Acessar <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      );
    default:
      return null;
  }
}

// Componente de Capítulo
function ChapterSection({ chapter, isOpen, onToggle }: { chapter: Chapter; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          {isOpen ? <ChevronDown className="w-4 h-4 text-primary-neon" /> : <ChevronRight className="w-4 h-4 text-primary-neon" />}
          <div>
            <h4 className="text-white font-semibold text-left">{chapter.title}</h4>
            <p className="text-xs text-zinc-500 text-left">{chapter.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-zinc-500" />
          <span className="text-xs text-zinc-500">{chapter.duration}</span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4 border-t border-white/10">
              {chapter.contents.map((content) => (
                <ContentRenderer key={content.id} content={content} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ModuleCard({ module, isExpanded, onToggle }: { module: Module; isExpanded: boolean; onToggle: () => void }) {
  const [openChapters, setOpenChapters] = useState<string[]>([]);

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const levelColors = {
    Iniciante: 'text-green-400 bg-green-500/10',
    Intermediário: 'text-yellow-400 bg-yellow-500/10',
    Avançado: 'text-red-400 bg-red-500/10',
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary-neon/10 text-primary-neon">
              {module.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-sm text-zinc-400 mb-3">{module.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full ${levelColors[module.level]}`}>
                  {module.level}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {module.duration}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Users className="w-3 h-3" /> {module.students} alunos
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {module.rating}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 space-y-3">
              {module.chapters.map((chapter) => (
                <ChapterSection
                  key={chapter.id}
                  chapter={chapter}
                  isOpen={openChapters.includes(chapter.id)}
                  onToggle={() => toggleChapter(chapter.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Componente Principal
export function MentorshipSection() {
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [filterLevel, setFilterLevel] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const filteredModules = modulesData.filter(module => {
    if (filterLevel !== 'todos' && module.level !== filterLevel) return false;
    if (searchTerm && !module.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !module.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const stats = [
    { icon: <BookOpen className="w-4 h-4" />, label: 'Módulos', value: modulesData.length },
    { icon: <Users className="w-4 h-4" />, label: 'Alunos', value: modulesData.reduce((acc, m) => acc + m.students, 0) },
    { icon: <Clock className="w-4 h-4" />, label: 'Horas de Conteúdo', value: '150+' },
    { icon: <Award className="w-4 h-4" />, label: 'Certificados', value: '3' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mentorias e <span className="text-primary-neon">Cursos</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            Acesso exclusivo a materiais, códigos, projetos e mentorias para acelerar sua carreira
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-4 text-center border border-white/10"
            >
              <div className="text-primary-neon flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-2">
            {['todos', 'Iniciante', 'Intermediário', 'Avançado'].map((level) => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterLevel === level
                    ? 'bg-linear-to-r from-primary-neon to-accent-purple text-white'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {level === 'todos' ? 'Todos' : level}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar módulo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary-neon transition-colors"
            />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-4">
          {filteredModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isExpanded={expandedModules.includes(module.id)}
              onToggle={() => toggleModule(module.id)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-linear-to-r from-primary-neon/10 to-accent-purple/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Quer ser mentorado por mim?</h3>
            <p className="text-zinc-400 mb-6">Agende uma mentoria personalizada ou acesse o conteúdo completo</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary-neon to-accent-purple rounded-xl text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Quero me inscrever <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
