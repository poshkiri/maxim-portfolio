import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  Github,
  Mail,
  Send,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

type Project = {
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
};

type ContactLink = {
  label: string;
  href: string;
  icon: typeof Send;
};

const navItems = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
  'GitHub',
  'Vite',
  'Cursor',
  'Codex',
  'ChatGPT',
];

const projects: Project[] = [
  {
    title: 'Vibe Coding AI Landing',
    description:
      'Современный учебный лендинг на React, TypeScript и Tailwind CSS. Реализованы тёмная тема, адаптивная верстка, grid-фон, glow-эффекты, glassmorphism-карточки, анимации и контактный блок.',
    demoUrl: 'https://vibe-coding-ai-omega.vercel.app/',
    githubUrl: 'https://github.com/poshkiri/vibe-coding-ai',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'AI Resume Builder',
    description:
      'Учебное React-приложение для создания текста резюме. Реализованы форма, live-preview, улучшение текста по шаблону, копирование результата, очистка формы и адаптивный UI.',
    demoUrl: 'https://ai-resume-builder-eta-teal.vercel.app/',
    githubUrl: 'https://github.com/poshkiri/ai-resume-builder',
    tags: ['React', 'Forms', 'Live Preview', 'UI'],
  },
  {
    title: 'AI Task Dashboard',
    description:
      'Учебное React-приложение для управления задачами. Реализованы добавление задач, фильтры, поиск, статистика, localStorage и локальное улучшение описаний по шаблону.',
    demoUrl: 'https://ai-task-dashboard-woad.vercel.app/',
    githubUrl: 'https://github.com/poshkiri/ai-task-dashboard',
    tags: ['React', 'TypeScript', 'localStorage', 'Dashboard'],
  },
];

const contactLinks: ContactLink[] = [
  // Replace these contacts if the portfolio should use another public profile.
  { label: 'Telegram', href: 'https://t.me/poshkiri', icon: Send },
  { label: 'Email', href: 'mailto:MP_samilop@mail.ru', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/poshkiri', icon: Github },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070806] text-white">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-glow" />

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070806]/78 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="brand-logo">
          <span className="brand-mark" aria-hidden="true">
            <Code2 className="h-5 w-5" />
          </span>
          <span>Maxim.dev</span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-lime-200">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contacts" className="hidden rounded-full border border-lime-300/30 bg-lime-300/10 px-5 py-3 text-sm font-medium text-lime-50 shadow-glow transition hover:-translate-y-0.5 hover:border-lime-200/60 hover:bg-lime-300/20 sm:inline-flex">
          Связаться
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
        <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-sm text-lime-100 shadow-glow backdrop-blur">
          <Sparkles className="h-4 w-4 text-lime-300" />
          Junior Frontend Developer
        </motion.div>
        <motion.h1 variants={fadeUp} className="max-w-5xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          Frontend-разработчик с фокусом на современные интерфейсы и AI-инструменты
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Создаю адаптивные лендинги, интерфейсы и учебные React-проекты с использованием TypeScript, Tailwind CSS, Framer Motion и AI-инструментов.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn-primary">
            Смотреть проекты
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#contacts" className="btn-secondary">
            Связаться
          </a>
        </motion.div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-[34px] bg-lime-400/15 blur-3xl animate-pulseGlow" />
        <div className="hero-card animate-float">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-lime-200">Portfolio snapshot</p>
              <h2 className="mt-2 text-3xl font-semibold">Максим</h2>
              <p className="mt-2 leading-7 text-zinc-300">React, TypeScript, UI, adaptive layout</p>
            </div>
            <div className="rounded-2xl border border-lime-300/25 bg-lime-300/10 p-4 text-lime-100 shadow-glow">
              <TerminalSquare className="h-7 w-7" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['3 проекта', '13 навыков', 'AI tools'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 text-center text-sm text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Обо мне" title="Развиваюсь через практику и понятные UI-проекты">
      <motion.div variants={fadeUp} className="glass-panel max-w-4xl">
        <p className="text-lg leading-8 text-zinc-300">
          Я начинающий frontend-разработчик. Изучаю React, TypeScript, Tailwind CSS и современные AI-инструменты: Cursor, Codex, ChatGPT и Claude. Делаю учебные проекты, чтобы развивать навыки верстки, компонентного подхода, адаптива, анимаций и работы с UI.
        </p>
      </motion.div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Навыки" title="Стек, который я развиваю">
      <motion.div variants={stagger} className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.div key={skill} variants={fadeUp} whileHover={{ y: -3, scale: 1.025 }} className="skill-badge">
            <Code2 className="h-4 w-4 text-lime-200" />
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Проекты" title="Учебные работы для портфолио">
      <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -7, scale: 1.01 }} className="glass-panel group">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>
        </div>
        <div className="hidden rounded-2xl border border-amber-300/25 bg-amber-400/10 p-3 text-amber-100 shadow-amber sm:block">
          <Bot className="h-6 w-6" />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-zinc-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
          Demo
          <ExternalLink className="h-5 w-5" />
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
          GitHub
          <Github className="h-5 w-5" />
        </a>
      </div>
    </motion.article>
  );
}

function Contact() {
  return (
    <section id="contacts" className="px-5 py-20 sm:px-8 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={fadeUp}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-lime-300/20 bg-white/[0.055] px-6 py-14 text-center shadow-amber backdrop-blur-2xl sm:px-12 sm:py-16"
      >
        <div className="absolute inset-x-8 -top-28 h-56 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-8 h-52 w-52 rounded-full bg-amber-500/18 blur-3xl" />
        <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          Открыт к junior-задачам, стажировкам и frontend-проектам
        </h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Готов развиваться в команде, выполнять реальные задачи, улучшать интерфейсы и быстро учиться на практике.
        </p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className={index === 0 ? 'btn-primary' : 'btn-secondary'}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
        <div>
          <p className="font-semibold text-white">Maxim.dev</p>
          <p className="mt-2">Frontend, UI and AI-assisted development</p>
        </div>
        <p>© 2026 Maxim.dev</p>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm text-amber-100">
            {eyebrow}
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}

export default App;
