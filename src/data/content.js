export const personal = {
  name:       'Arda Mahir Ünlü',
  nameShort:  'Arda Mahir',
  nameLast:   'Ünlü.',
  initials:   'AMÜ',
  role:       { en: 'Full-Stack Web Developer', tr: 'Full-Stack Web Geliştirici' },
  tagline: {
    en: 'I build fast, clean, accessible web applications — from architecture to deployment. Always curious about the foundations of how systems work.',
    tr: 'Hızlı, temiz ve erişilebilir web uygulamaları geliştiriyorum — mimariden yayına almaya kadar. Sistemlerin yüzeyinin altına bakmak, kod yazmak kadar ilgimi çekiyor.',
  },
  // ── CONTACT LINKS ──────────────────────────────
  linkedin:   'https://linkedin.com/in/ardamahirunlu',
  github:     'https://github.com/uardamahir',
  githubUser: 'uardamahir',
  email:      'uardamahir@gmail.com',
  // ── EMAILJS ────────────────────────────────────
  emailjs: {
    serviceId:  'service_37lnyef',
    templateId: 'template_vbtca5c',
    publicKey:  'Mrv89eIha945Mbx2c',
  },
}

export const about = {
  stats: [
    { num: '10+', label: { en: 'Projects',      tr: 'Proje'     } },
    { num: '8+',  label: { en: 'Technologies',  tr: 'Teknoloji' } },
    { num: '∞',   label: { en: 'Curiosity',     tr: 'Merak'     } },	
    ,
  ],
  paragraphs: {
    en: [
      `I'm a <strong>full-stack developer</strong> based in Ankara — I build clean, functional web applications and I take the craft seriously.`,
      `What drives me is <strong>understanding systems at a deeper level</strong> — how they're structured, why they behave the way they do, and where they break.`,
      `I've lived and worked in Turkey, Poland, and the USA. <strong>Different places, same curiosity.</strong>`,
    ],
    tr: [
      `Ankara merkezli bir <strong>full-stack geliştirici</strong>yim. Temiz ve işlevsel web uygulamaları geliştiriyorum — ve her aşamasında kaliteyi önemsiyorum.`,
      `En çok ilgimi çeken <strong>sistemlerin nasıl çalıştığını anlamak</strong> - nasıl inşa edildikleri, neden öyle davrandıkları ve sınırları.`,
      `Kodun ötesinde, Türkiye, Polonya ve Amerika'da yaşadım ve çalıştım — bu deneyimler <strong>düşünme, iş birliği ve problem çözme</strong> biçimimi şekillendirdi.`,
    ],
  },
}

export const education = [
  {
    period: '2018 — 2022',
    degree: { en: 'Computer Science, B.Sc.', tr: 'Bilgisayar Mühendisliği, Lisans' },
    school: { en: 'Namık Kemal University — Tekirdağ', tr: 'Namık Kemal Üniversitesi — Tekirdağ' },
    desc: {
      en: 'Studied algorithms, software architecture, distributed systems, database design and more.',
      tr: 'Algoritmalar, yazılım mimarisi, dağıtık sistemler ve veritabanı tasarımı üzerine eğitim aldım.',
    },
    badge: null,
  },
  {
    period: '2020 — 2021',
    degree: { en: 'Erasmus+ Exchange Student', tr: 'Erasmus+ Değişim Öğrencisi' },
    school: { en: 'AGH University of Science and Technology — Kraków, Poland', tr: 'AGH Bilim ve Teknoloji Üniversitesi — Kraków, Polonya' },
    desc: {
      en: 'Full-scholarship Erasmus+ exchange program. Completed two semesters of Computer Science coursework in an international environment, collaborating with students from across Europe.',
      tr: 'Tam burslu Erasmus+ değişim programı. Uluslararası bir ortamda iki sömestr Bilgisayar Bilimi dersleri aldım; Avrupa\'nın dört bir yanından öğrencilerle iş birliği yaptım.',
    },
    badge: 'Erasmus+ Full Scholarship',
  },
  {
    period: '2023 — 2026',
    degree: { en: 'Philosophy, M.A.', tr: 'Felsefe, Yüksek Lisans' },
    school: { en: 'Hacettepe University — Ankara', tr: 'Hacettepe Üniversitesi — Ankara' },
    desc: {
      en: 'Pursued a master\'s degree in Philosophy alongside software development — where my questions led me.',
      tr: 'Yazılım geliştirmenin yanı sıra felsefe yüksek lisansı yaptım — analitik düşünceyi mühendislik pratiğiyle buluşturuyorum.',
    },
    badge: null,
  },
]

export const experience = [
   {
    period: { en: 'In Progress', tr: 'Devam Ediyor' },
    title:   { en: 'Full-Stack Developer — Personal Project', tr: 'Full-Stack Geliştirici — Kişisel Proje' },
    company: { en: 'FRAKTIA', tr: 'FRAKTIA' },
    desc: {
      en: 'Building FRAKTIA, a detective-style geolocation game where players solve location-based mysteries. A personal project to put all acquired skills into practice — from database design to UI/UX decisions.',
      tr: 'FRAKTIA\'yı geliştiriyorum — oyuncuların konum tabanlı gizemleri çözdüğü, dedektif tarzı bir coğrafi konum oyunu. Veritabanı tasarımından arayüz kararlarına kadar edindiğim tüm becerileri pratiğe dökmek için başlattığım kişisel proje.',
    },
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'MERN'],
  },
  {
    period: { en: 'Internship', tr: 'Staj' },
    title:   { en: 'Software Development Intern', tr: 'Yazılım Geliştirme Stajyeri' },
    company: { en: 'Acıbadem Bilişim', tr: 'Acıbadem Bilişim' },
    desc: {
      en: 'Worked on hospital data systems using Python and PostgreSQL. Developed large-scale data processing functions and optimized reporting pipelines, achieving a 30% improvement in report generation time. Collaborated on rapid bug fixes and user-reported issue resolution.',
      tr: 'Python ve PostgreSQL kullanarak hastane veri sistemleri üzerinde çalıştım. Büyük ölçekli veri işleme fonksiyonları geliştirdim, veritabanı sorgularını optimize ettim ve gerçek klinik verileri işleyen backend pipeline\'larına katkıda bulundum.',
    },
    tags: ['Python', 'PostgreSQL', 'Data Processing', 'Backend'],
  },
  {
  period: { en: '2020 — 2023', tr: '2020 — 2023' },
  title:   { en: 'Volunteer Translator', tr: 'Gönüllü Çevirmen' },
  company: { en: 'Öncül Analitik Felsefe Dergisi', tr: 'Öncül Analitik Felsefe Dergisi' },
  desc: {
    en: 'Translated multiple academic philosophy articles from English to Turkish for Öncül Analitik Felsefe, a well-known analytic philosophy journal. Developed a strong command of precise, nuanced academic language across both languages.',
    tr: 'Hakemli bir analitik felsefe dergisi olan Öncül Analitik Felsefe için birçok akademik felsefe makalesini İngilizce\'den Türkçe\'ye çevirdim...',
  },
  tags: ['English → Turkish', 'Academic Translation', 'Analytic Philosophy'],
},
 {
    period: { en: '2023', tr: '2023' },
    title:   { en: 'Work and Travel — USA', tr: 'Work and Travel — ABD' },
    company: { en: 'WAT Program · United States', tr: 'WAT Programı · Amerika Birleşik Devletleri' },
    desc: {
      en: 'Participated in the Work and Travel USA program — lived and worked independently in the United States, strengthening cross-cultural communication, adaptability, and professional English in a real-world international environment.',
      tr: 'Work and Travel USA programına katıldım — Amerika\'da bağımsız olarak yaşadım ve çalıştım. Kültürlerarası iletişim, uyum yeteneği ve iş İngilizcemi gerçek bir uluslararası ortamda pekiştirdim.',
    },
    tags: ['International Experience', 'Cross-cultural Communication', 'English'],
  },
]

// Shown when GitHub API fails or returns empty
export const fallbackProjects = [
  {
    name: 'ecommerce-platform',
    description: 'Full-stack e-commerce app with React, Node.js, Stripe payments and real-time inventory.',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/ecommerce-platform',
    homepage: '',
  },
  {
    name: 'realtime-chat',
    description: 'WebSocket-based chat app with rooms, presence detection, and message encryption.',
    language: 'JavaScript',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/realtime-chat',
    homepage: '',
  },
  {
    name: 'devtools-cli',
    description: 'Command-line developer toolkit for scaffolding projects and managing environments.',
    language: 'Go',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/devtools-cli',
    homepage: '',
  },
  {
    name: 'api-gateway',
    description: 'Lightweight API gateway with rate limiting, auth middleware, and request logging.',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/api-gateway',
    homepage: '',
  },
  {
    name: 'analytics-dashboard',
    description: 'Real-time analytics dashboard with D3.js visualizations and a PostgreSQL backend.',
    language: 'JavaScript',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/analytics-dashboard',
    homepage: '',
  },
  {
    name: 'portfolio-v1',
    description: 'First iteration of personal portfolio — minimalist design, vanilla HTML/CSS/JS.',
    language: 'HTML',
    stargazers_count: 0,
    html_url: 'https://github.com/uardamahir/portfolio-v1',
    homepage: '',
  },
]

export const skills = [
  {
    category: { en: 'Frontend', tr: 'Frontend' },
    items: ['Javascript', 'React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Redux', 'Framer Motion'],
  },
  {
    category: { en: 'Backend', tr: 'Backend' },
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs'],
  },
  {
    category: { en: 'DevOps & Tools', tr: 'DevOps & Araçlar' },
    items: ['Docker', 'AWS', 'GitHub Actions', 'Nginx', 'Linux', 'Git', 'Vercel'],
  },
  {
    category: { en: 'Other', tr: 'Diğer' },
    items: ['Python', 'Figma', 'Jest', 'Cypress', 'Agile / Scrum', 'WebSockets', 'Stripe API'],
  },
  {
    category: { en: 'Languages', tr: 'Diller' },
    items: ['Turkish — Native', 'English — Advanced (C1+)', 'German — B1+'],
  },
]