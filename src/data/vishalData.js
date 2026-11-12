/**
 * Vishal Kumar — Portfolio Data & Storytelling Chapters
 * Update `liveUrl`, `githubUrl`, and `profile.links` with your exact URLs.
 */
export const VISHAL_DATA = {
  profile: {
    name: 'Vishal Kumar',
    monogram: 'VK',
    tagline: 'Software Developer & AI Engineer',
    status: 'Open for Opportunities',
    location: 'Jamshedpur, Jharkhand',
    email: 'vishalk785032@gmail.com',
    phone: '9955129528',
    summary:
      'Software Developer with strong foundations in Data Structures & Algorithms and problem-solving. Built scalable applications serving 1,700+ employees at Tata Steel Foundation. Experienced in React.js, Node.js, modern AI technologies, and open-source development.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-kumar9/' },
      { label: 'GitHub', href: 'https://github.com/Vishxlll20' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/Vishxlll20/' },
      { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/profile/vishxlll20' },
    ],
  },

  chapters: [
    {
      id: 'origin',
      index: '01',
      navLabel: 'Origin',
      eyebrow: '01 / ORIGIN — JAMSHEDPUR',
      title: 'Every system starts with a single question.',
      subtitle: 'Vishal Kumar · Software & AI Engineer',
      description:
        'Scroll to follow my journey in real time: walking through school foundations, cycling across campus to R.V.S. College of Engineering & Technology, and sitting down at my studio desk to ship full-stack and AI products.',
      highlights: ['1,700+ Users Served', '50+ Countries Hackathon Finalist', '200+ DSA Problems'],
    },
    {
      id: 'school',
      index: '02',
      navLabel: 'School',
      eyebrow: '02 / DAV PUBLIC SCHOOL',
      title: 'Where curiosity turned into foundational science & code.',
      subtitle: 'Basic Physics, Chemistry, Maths · Basic Python & Java',
      description:
        'Walking through DAV Public School built my core analytical habits—learning basic Physics, Chemistry, and Mathematics alongside my first steps in basic Python and Java coding.',
      highlights: ['Physics, Chemistry & Maths', 'Basic Python', 'Basic Java & Logic'],
    },
    {
      id: 'college',
      index: '03',
      navLabel: 'College',
      eyebrow: '03 / R.V.S. COLLEGE OF ENGG & TECH',
      title: 'Pedaling into engineering, open source & global competition.',
      subtitle: 'B.Tech in Computer Science & Engineering · 2023 – 2027 (CGPA: 6.8/10)',
      description:
        'Cycling to college marked the leap from theory to community impact: leading DSA culture as GeeksForGeeks Campus Mantri, shipping 25+ PRs in GSSoC ’26, and reaching the finals of a 50+ country innovation challenge.',
      highlights: [],
    },
    {
      id: 'setup',
      index: '04',
      navLabel: 'The Setup',
      eyebrow: '04 / AT THE STUDIO DESK',
      title: 'What I mastered & build with every day.',
      subtitle: 'Full-Stack Architecture · Distributed Backends · Agentic AI',
      description:
        'At the desk, ideas become resilient software—from motion-driven React & Next.js interfaces to multi-service Node.js/PostgreSQL/Redis backends and LangGraph/RAG AI pipelines.',
      highlights: [],
    },
    {
      id: 'impact',
      index: '05',
      navLabel: 'Work & Projects',
      eyebrow: '05 / WORK & SHIPPED PROJECTS',
      title: 'Production engineering & flagship builds.',
      subtitle: 'Tata Steel Foundation · LexAI · PulseWatch · Moodify',
      description:
        'Explore my industry internships and full-stack AI applications below, complete with live links, source code, and architecture breakdowns.',
      highlights: [],
    },
    {
      id: 'contact',
      index: '06',
      navLabel: 'Opportunities',
      eyebrow: '06 / NEXT CHAPTER',
      title: 'Open for opportunities & ready to put knowledge into the real world.',
      subtitle: 'Full-Stack Software Engineering · AI Systems · Product Engineering',
      description:
        'I am actively seeking Software Developer, Full-Stack, and AI Engineering opportunities where I can build high-impact products with great teams.',
      highlights: [],
    },
  ],

  skills: [
    {
      group: 'Languages',
      color: '#a3e635',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      group: 'Frontend & Motion',
      color: '#ffffff',
      items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    },
    {
      group: 'Backend & Systems',
      color: '#a3e635',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io', 'Microservices'],
    },
    {
      group: 'Data & Cloud',
      color: '#ffffff',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Git / GitHub', 'Linux', 'AWS'],
    },
    {
      group: 'AI & Agents',
      color: '#a3e635',
      items: ['Generative AI', 'LangChain', 'LangGraph', 'RAG'],
    },
  ],

  experiences: [
    {
      id: 'tsf-ai',
      role: 'Artificial Intelligence Intern',
      company: 'Tata Steel Foundation',
      period: 'Mar 2026 – Jul 2026',
      location: 'Jamshedpur, Jharkhand (Hybrid)',
      accent: '#a3e635',
      summary:
        'Engineered real-time English↔Hindi speech translation microservices and advised CSR AI initiatives.',
      points: [
        'Built and benchmarked a bidirectional English↔Hindi real-time speech translator (faster-whisper, deep-translator, gTTS), measuring end-to-end latency and identifying the ASR stage as the primary bottleneck.',
        'Migrated backend to a split Node.js/Express + Python microservice architecture deployed via Cloudflare Tunnel; proposed Azure AI Speech as a production scaling path.',
        'Advised IT Lead on AI integration strategy for CSR initiatives, including a WhatsApp-based health triage assistant and a satellite-data watershed monitoring prototype.',
      ],
    },
    {
      id: 'tsf-sde',
      role: 'Software Developer Intern',
      company: 'Tata Steel Foundation',
      period: 'May 2025 – Jul 2025',
      location: 'Jamshedpur, Jharkhand (On-site)',
      accent: '#a3e635',
      summary:
        'Built an enterprise intranet platform using React.js and SQL serving 1,000+ employees across 5 core modules.',
      points: [
        'Engineered scalable internal intranet platform using React.js and SQL, streamlining communication and information flow across 1,000+ employees (1,700+ total across platforms).',
        'Architected and delivered 5 core modules including About Us, Policies, News, Communication Center, and People Corner.',
        'Analyzed and validated large-scale datasets using SQL, maintaining 100% data accuracy and consistency across the intranet portal database.',
      ],
    },
  ],

  projects: [
    {
      id: 'lexai',
      index: '01',
      title: 'LexAI — AI Legal Research & Drafting',
      period: 'Mar 2026 – Present',
      accent: '#a3e635',
      stack: ['Next.js 16', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Claude AI'],
      summary:
        '4 AI agent pipelines for legal research, drafting, compliance & case analysis with Indian Kanoon citation verification, 20+ REST APIs, BullMQ queues, and Razorpay billing.',
      metrics: ['4 AI Agent Pipelines', '20+ REST APIs', '11 Modular Services'],
      frontendUrl: 'https://github.com/Vishxlll20/lexai-frontend',
      backendUrl: 'https://github.com/Vishxlll20/lexai-backend',
      highlights: [
        'Architected 4 AI agent pipelines (research, drafting, compliance, case analysis) using Anthropic Claude with hallucination checks against the Indian Kanoon API.',
        'Engineered 20+ REST APIs across 11 modular services using TypeScript, Prisma/PostgreSQL, and Redis for WhatsApp workflows, voice transcription, and automated PDF/DOCX export.',
        'Implemented JWT auth, Redis-backed rate limiting, tiered Razorpay subscriptions, and BullMQ background queues for async voice, PDF, and compliance processing.',
        'Built the frontend with Next.js 16 / React 19, integrating a Tiptap rich text editor and Redux Toolkit.',
      ],
    },
    {
      id: 'pulsewatch',
      index: '02',
      title: 'PulseWatch — Real-Time Uptime Monitor',
      period: 'Apr 2026 – Jun 2026',
      accent: '#a3e635',
      stack: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'JWT', 'Redis'],
      summary:
        '24/7 automated health-check monitor (15–3600s intervals) with 15+ REST APIs, RBAC, OTP reset, Socket.io alerts, and AI-driven incident analysis.',
      metrics: ['15–3600s Health Checks', '15+ REST APIs', 'Live Socket.io Alerts'],
      liveUrl: 'https://pulsewatch-zeta.vercel.app/',
      githubUrl: 'https://github.com/Vishxlll20/PulseWatch',
      highlights: [
        'Built automated health checks at 15–3600s intervals supporting 24/7 availability and live status tracking.',
        'Engineered 15+ REST APIs featuring JWT authentication, OTP password reset, RBAC, and Redis rate limiting.',
        'Integrated Socket.io instant incident alerts paired with AI-driven root-cause incident summaries.',
      ],
    },
    {
      id: 'moodify',
      index: '03',
      title: 'Moodify — AI Mood Detection Music App',
      period: 'Feb 2026 – Mar 2026',
      accent: '#a3e635',
      stack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'MediaPipe', 'GSAP'],
      summary:
        'Full-stack facial-expression music recommender classifying 5 moods via MediaPipe with Redis caching, ImageKit CDN (-40% load time), and GSAP motion.',
      metrics: ['5 Real-Time Moods', '40% Faster Load', 'MediaPipe + GSAP'],
      liveUrl: 'https://moodify-beige-kappa.vercel.app/',
      githubUrl: 'https://github.com/Vishxlll20/Moodify',
      highlights: [
        'Used MediaPipe computer vision to classify 5 user moods and serve tailored music recommendations.',
        'Secured user accounts with JWT authentication and OTP verification.',
        'Optimized asset delivery using Redis caching and ImageKit CDN, cutting asset load time by 40%.',
      ],
    },
  ],

  achievements: [
    {
      title: 'International Innovation Challenge — Finalist',
      org: 'JSPM Pune',
      date: 'Apr 2026',
      detail: 'Finalist among teams from 50+ countries in a global technology hackathon.',
    },
    {
      title: 'Open Source Contributor — GSSoC ’26',
      org: 'GirlScript Summer of Code',
      date: 'May – Jul 2026',
      detail: 'Merged a security fix for leaked credentials; 25+ PRs across 5 repositories.',
    },
    {
      title: 'Campus Mantri — GeeksForGeeks',
      org: 'GeeksForGeeks',
      date: 'May 2025 – May 2026',
      detail: 'Promoted DSA & competitive programming; solved 200+ problems on GFG & LeetCode.',
    },
    {
      title: 'HackerRank SQL (Intermediate)',
      org: 'HackerRank',
      date: 'June 2026',
      detail: 'Certified in intermediate relational database querying and optimization.',
    },
  ],
};
