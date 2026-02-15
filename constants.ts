import { BlogPost, UserProfile, UserComment } from './types';

const MARKET_AUTHOR = {
  name: "The Market",
  title: "Ruthless Efficiency Optimizer",
  avatar: "https://picsum.photos/id/1/200/200" 
};

const LARS_AUTHOR = {
  name: "Lars Moelleken",
  title: "Softwareentwickler bei REMONDIS IT Services GmbH",
  avatar: "https://github.com/voku.png"
};

const REALITY_COMMENTS: UserComment[] = [
    {
        id: 'c1',
        text: "Does anyone know why 'npm install' is hanging? It's been 4 hours.",
        postTitle: "10 Tips for Faster CI/CD Pipelines",
        timestamp: "2 min ago",
        likes: 0
    },
    {
        id: 'c2',
        text: "Can I use ChatGPT to write the backend for a bank? asking for a friend.",
        postTitle: "Security in the Age of AI",
        timestamp: "1h ago",
        likes: 1
    },
    {
        id: 'c3',
        text: "Pls help, I deleted the production database.",
        postTitle: "Database Recovery Strategies",
        timestamp: "5h ago",
        likes: 0
    },
    {
        id: 'c4',
        text: "How do I exit Vim? I've been stuck here for 3 days.",
        postTitle: "Mastering the Terminal",
        timestamp: "1d ago",
        likes: 12
    }
];

const LINKEDIN_COMMENTS: UserComment[] = [
    {
        id: 'c1',
        text: "Agree! 🚀 The paradigm shift is undeniable. If you aren't leveraging agents, you're legacy.",
        postTitle: "Why AI Agents are the Future of SaaS",
        timestamp: "2h ago",
        likes: 45
    },
    {
        id: 'c2',
        text: "CFBR. Vital conversation for the ecosystem.",
        postTitle: "The State of Venture Capital 2024",
        timestamp: "5h ago",
        likes: 12
    },
    {
        id: 'c3',
        text: "Interested. DM sent.",
        postTitle: "Hiring Top 1% AI Talent - $500k TC",
        timestamp: "1d ago",
        likes: 3
    },
    {
        id: 'c4',
        text: "Great insight! It's all about the synergy between human creativity and machine efficiency. #AI #FutureOfWork",
        postTitle: "Human-in-the-loop Workflows",
        timestamp: "2d ago",
        likes: 89
    }
];

export const FEED_POSTS: BlogPost[] = [
  {
    id: 'intro',
    author: MARKET_AUTHOR,
    timestamp: 'Just now',
    likes: 3421,
    comments: 412,
    reposts: 890,
    isPromoted: true,
    content: [
      "PHP Top Salaries, 100% Remote – Can This Still Work Without AI?",
      "Or Is the Market Quietly Moving Under Your Feet?",
      "There’s panic in the industry. Not loud panic. Subtle panic.",
      "You see it in LinkedIn titles: 'AI Engineer', 'LLM Architect', 'AI-First Developer'.",
      "Yesterday: TYPO3 integrator. Today: AI systems builder.",
      "And the question appears:",
      "> Can PHP jobs with top salaries, 100% remote, still work without artificial intelligence?",
      "Let’s answer that properly. Not emotionally. Not ideologically. Structurally."
    ]
  },
  {
    id: 'part-1-mysticism',
    author: MARKET_AUTHOR,
    timestamp: '1h',
    likes: 1540,
    comments: 230,
    reposts: 120,
    content: [
      "1. First: Remove the Mysticism 🔮",
      "LLMs are not intelligent systems. They are probabilistic language models, pattern-reproduction machines, next-token predictors, and extremely powerful context compressors.",
      "They do not understand your architecture. They do not reason about your domain. They do not carry responsibility.",
      "They approximate plausibility. That’s it.",
      "Anyone calling API usage “AI architecture” is either confused or doing marketing. But that’s not the important part."
    ]
  },
  {
    id: 'part-2-good-enough',
    author: MARKET_AUTHOR,
    timestamp: '2h',
    likes: 2100,
    comments: 450,
    reposts: 800,
    content: [
      "2. The Important Part: They Are Good Enough",
      "LLMs are extremely good at: CRUD scaffolding, DTO generation, test templates, API wrapping, boilerplate refactoring, documentation synthesis.",
      "And here’s the uncomfortable truth:",
      "A large portion of web development work is exactly that.",
      "Not compiler engineering. Not distributed consensus. Not domain-driven modeling at scale. Pattern instantiation.",
      "If your daily value was primarily assembling plugins, adapting frameworks, wiring APIs, or duplicating known structures...",
      "Then yes — LLMs are competitive with you.",
      "That’s not an insult. That’s economic reality."
    ]
  },
  {
    id: 'part-3-divide',
    author: MARKET_AUTHOR,
    timestamp: '3h',
    likes: 980,
    comments: 150,
    reposts: 45,
    content: [
      "5. The Real Divide",
      "This is not: AI vs No AI. It is: Medium Developer vs Professional With AI.",
      "• The Medium Developer: Uses LLM like Google. Asks for full solutions. Iterates blindly. Ships quickly. Accumulates entropy.",
      "• The Professional: Defines constraints first. Encodes invariants (types, tests, contracts). Uses LLM for deterministic scaffolding. Injects domain logic manually. Validates aggressively.",
      "One outsources thinking. One multiplies thinking.",
      "That is the real dividing line."
    ]
  },
  {
    id: 'part-4-conclusion',
    author: MARKET_AUTHOR,
    timestamp: '4h',
    likes: 4200,
    comments: 1200,
    reposts: 2500,
    content: [
      "9. The Brutal, Honest Conclusion",
      "LLMs are not architects. They are not strategists. They are not system thinkers. They are probabilistic pattern engines.",
      "But in a market where a large share of work is pattern instantiation, pattern engines are disruptive.",
      "Yes — you can still earn top PHP salaries, 100% remote, without AI. But not if your value was typing code faster.",
      "You must operate where: patterns stop, trade-offs begin, responsibility matters.",
      "Everything below that layer is compressing. And compression does not care about your feelings.",
      "It cares about economics."
    ]
  },
  {
    id: 'lars-perspective',
    author: LARS_AUTHOR,
    timestamp: '5h',
    likes: 842,
    comments: 156,
    reposts: 54,
    content: [
      "10. The token dilemma: Why we are suddenly paying for 'lines of code' again",
      "Remember that old management mistake from the 90s? Paying developers by 'lines of code' (LoC)?",
      "We all laughed about it. 'Measuring aircraft construction progress by weight,' Bill Gates said at the time.",
      "And now look at our billing at OpenAI & Co.",
      "We pay per token. We pay per output quantity.",
      "We've created the ultimate 'paid by LoC' employee. 🤪",
      "My honest 12-month assessment from this perspective:",
      "What has gotten 'better' (inflation):",
      "• Boilerplate: AI loves boilerplate. Why write one line when you can generate an entire factory class with an interface? Kaching! 💰",
      "• Explanations: Ask for a bug fix, get a life story. AI is the colleague who likes to hear his own voice in meetings.",
      "• Refactoring: It often rewrites code without improving it, just for the sake of doing something. Mechanical work? Yes. Meaningful reduction? Rarely.",
      "What has gotten worse (the 'noise'):",
      "• Signal-to-noise ratio: I spend more time reading and deleting generated 'filler material' than writing myself.",
      "• Concentration: It's exhausting to constantly filter the 'verbiage' of an assistant who (technically speaking) is incentivised not to be concise.",
      "• Trust: The more text, the more room for subtle lies.",
      "The realisation:",
      "At first, I thought AI would help me with coding.",
      "But actually, it's the junior developer who thinks that a lot of code = a lot of work.",
      "My goal used to be: How can I solve the problem with as little code as possible?",
      "The AI 'thinks': How do I fill the context window so that the answer looks plausible (and expensive)?",
      "My new conclusion:",
      "My productivity as a senior developer no longer comes from writing faster.",
      "It comes from deleting faster.",
      "I am no longer the author. I am the editor who cuts the 'lines of code' bill.",
      "AI generates quantity.",
      "Experts generate quality (by omission).",
      "If you don't understand this, you'll end up paying not only the API costs, but also the interest on technical debt."
    ]
  }
];

export const CURRENT_USER: UserProfile = {
  name: "Julian 'AI-Native' Weber",
  headline: "AI-First Software Architect 🚀 | LLM Orchestrator | 10x Engineer | Building AGI one prompt at a time 🤖",
  location: "Berlin Metropolitan Area • Contact info",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400",
  coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=300",
  stats: {
    profileViews: 14205,
    connections: 5000,
    followers: 8402
  },
  about: "Visionary Software Architect leveraging the symphonic power of LLMs to disrupt legacy ecosystems. I don't just write code; I orchestrate intelligent agents to deliver enterprise-grade scalability at 10x speed. Obsessed with clean abstractions, future-proof paradigms, and maximizing developer velocity through AI augmentation.",
  experience: [
    {
      role: "Lead AI Systems Architect",
      company: "Stealth Startup (Y-Combinator '24)",
      duration: "Jan 2024 - Present · 4 mos",
      description: "Spearheading the transition to AI-first development workflows. Reduced time-to-market by 300% using proprietary prompt engineering frameworks. Managing a fleet of autonomous agents.",
      logo: "https://picsum.photos/id/1/48/48"
    },
    {
      role: "Senior Full Stack Engineer",
      company: "TechFlow Solutions",
      duration: "Feb 2022 - Dec 2023 · 1 yr 11 mos",
      description: "Implemented distributed microservices and high-availability systems using bleeding-edge stack (Rust, WASM, Edge Computing).",
      logo: "https://picsum.photos/id/2/48/48"
    }
  ],
  education: [
    {
      role: "M.Sc. Computer Science (AI Focus)",
      company: "Technical University of Munich",
      duration: "2018 - 2022",
      description: "Thesis: 'Optimizing Neural Pathways for Generative Code Synthesis'. Grade: 1.0",
      logo: "https://picsum.photos/id/3/48/48"
    }
  ],
  certifications: [
    {
      name: "Certified Generative AI Architect",
      issuer: "NVIDIA Deep Learning Institute",
      date: "Issued Jan 2024",
      logo: "https://picsum.photos/id/40/48/48"
    },
    {
        name: "Professional Machine Learning Engineer",
        issuer: "Google Cloud",
        date: "Issued Nov 2023",
        logo: "https://picsum.photos/id/41/48/48"
    }
  ],
  skills: [
    { name: "Advanced Prompt Engineering", endorsements: 99 },
    { name: "Neural Architecture", endorsements: 42 },
    { name: "Cognitive Systems Design", endorsements: 28 },
    { name: "Hyper-Scaling", endorsements: 88 },
    { name: "Rust", endorsements: 12 },
    { name: "WebAssembly", endorsements: 15 }
  ],
  comments: LINKEDIN_COMMENTS,
  
  // THE REALITY
  reality: {
    name: "Julian Weber",
    headline: "Junior Dev | Copilot writes 95% of my code | I don't understand useEffect",
    location: "Bottrop, Mom's Basement • No Contact info",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=300",
    stats: {
      profileViews: 12,
      connections: 42,
      followers: 2
    },
    about: "I honestly have no idea how the code works. I copy-paste from ChatGPT and if it throws an error, I paste the error back into ChatGPT. I spend 6 hours a day debugging race conditions I introduced because I didn't read the documentation. I think 'Docker' is a brand of pants.",
    experience: [
      {
        role: "API Wrapper Builder",
        company: "Unemployed / 'Stealth Mode'",
        duration: "Jan 2024 - Present · 4 mos",
        description: "I built a UI around the OpenAI API. It's basically a HTML form. I spend most of my time tweaking the CSS because the AI can't center a div and I refuse to learn Flexbox.",
        logo: "https://picsum.photos/id/10/48/48"
      },
      {
        role: "Junior WP Dev",
        company: "Agency XYZ",
        duration: "Feb 2022 - Dec 2023 · 1 yr 11 mos",
        description: "Mostly installed plugins and changed colors in CSS. Broke the prod DB twice. Was let go for mining crypto on company servers.",
        logo: "https://picsum.photos/id/11/48/48"
      }
    ],
    education: [
      {
        role: "Youtube Tutorials",
        company: "The University of Internet",
        duration: "2018 - 2022",
        description: "Watched 'Code in 10 minutes' videos at 2x speed. Skipped the parts about testing.",
        logo: "https://picsum.photos/id/12/48/48"
      }
    ],
    certifications: [
        {
            name: "YouTube University Diploma",
            issuer: "The Algorithm",
            date: "No expiration",
            logo: "https://picsum.photos/id/13/48/48"
        },
        {
            name: "HTML Beginner Course (Part 1)",
            issuer: "W3Schools (Did not finish)",
            date: "Abandoned 2023",
            logo: "https://picsum.photos/id/14/48/48"
        }
    ],
    skills: [
        { name: "Ctrl+C / Ctrl+V", endorsements: 404 },
        { name: "Console.log debugging", endorsements: 1337 },
        { name: "Rerunning prompts hope it works", endorsements: 1 },
        { name: "CSS Guesswork", endorsements: 0 },
        { name: "Panic", endorsements: 9000 },
        { name: "Blaming Legacy Code", endorsements: 50 }
    ],
    comments: REALITY_COMMENTS
  }
};