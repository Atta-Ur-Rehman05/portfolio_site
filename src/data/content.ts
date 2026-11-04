export const profile = {
  name: "Atta Ur Rehman",
  title: "AI Application Engineer Intern",
  company: "Hexoforge LLC",
  email: "profatta3@gmail.com",
  whatsapp: "https://wa.me/923048881116",
  github: "https://github.com/Atta-Ur-Rehman05",
  linkedin: "https://www.linkedin.com/in/atta-ur-rehman-11a351309/",
  resume: null as string | null,
  description:
    "I’m Atta Ur Rehman, a Software Engineering undergraduate and AI Application Engineer Intern at Hexoforge LLC. I work on RAG-based applications and explore backend engineering, APIs, and intelligent software systems.",
  about: [
    "I am an undergraduate Software Engineering student at Mirpur University of Science & Technology (MUST), pursuing my degree from October 2024 to July 2028. Alongside academia, I serve as an AI Application Engineer Intern at Hexoforge LLC.",
    "I’m interested in how software components work together: clear API contracts, useful AI integrations, and reliable backend systems. I learn through hands-on implementation with Python, FastAPI, and RAG applications.",
    "My goal is to keep improving the quality of my code while building a stronger foundation in software engineering.",
  ],
  experience: {
    start: "April 2026",
    period: "April 2026 – Present",
    contribution:
      "Working on Retrieval-Augmented Generation (RAG) chatbot applications.",
    additional:
      "Additional work areas include AI integration for e-commerce applications and static website development.",
  },
  education: {
    university: "Mirpur University of Science & Technology (MUST)",
    degree: "Bachelor of Software Engineering",
    dates: "October 2024 – July 2028",
  },
  contact:
    "I’m interested in AI engineering, backend development, and software engineering internship opportunities. Feel free to reach out.",
};
export type Category =
  "AI Applications" | "Backend Engineering" | "Engineering Learning";
export type Project = {
  slug: string;
  name: string;
  code: string;
  alias: string;
  eyebrow: string;
  status: string;
  categories: Category[];
  summary: string;
  tags: string[];
  repo: string;
  diagram: "knowledge" | "api" | "rag" | "tree";
  overview: string;
  motivation: string;
  stack: { name: string; label: string; description: string }[];
  approach: { title: string; description: string }[];
  progress: { title: string; description: string; status: string }[];
  notes: { title: string; description: string }[];
};
export const projects: Project[] = [
  {
    slug: "intellex",
    name: "Intellex",
    code: "PRJ-01",
    alias: "/intellex.core",
    eyebrow: "AI Application / Knowledge Workspace",
    status: "In Development",
    categories: ["AI Applications"],
    summary:
      "An AI-oriented knowledge workspace project currently under development. Exploring document organization, retrieval, and AI-assisted interaction.",
    tags: ["Python", "RAG", "FastAPI", "React"],
    repo: "intellex",
    diagram: "knowledge",
    overview:
      "Intellex is an AI-oriented knowledge workspace under active development. Its public README describes a document-oriented platform and a modular monolith, with separate frontend and backend directories. The project is presented here as ongoing engineering work, rather than a finished product.",
    motivation:
      "Explore how a knowledge workspace can help organize information and make documents easier to work with through retrieval-augmented AI. The current focus is learning through implementation and developing the project incrementally.",
    stack: [
      {
        name: "FastAPI & Python",
        label: "Backend",
        description:
          "Backend framework described in the repository’s architecture.",
      },
      {
        name: "React & Vite",
        label: "Frontend",
        description:
          "Frontend tooling described in the repository; this portfolio itself uses Next.js.",
      },
      {
        name: "PostgreSQL & Qdrant",
        label: "Documented architecture",
        description:
          "Relational and vector storage included in the README’s architecture direction; completion is not asserted.",
      },
    ],
    approach: [
      {
        title: "A. Separate frontend and backend",
        description:
          "The repository separates the interface and backend code. The README describes a modular monolith rather than an independently deployed microservices architecture.",
      },
      {
        title: "B. Document-oriented knowledge workflow",
        description:
          "Uploading, organizing, searching, and interacting with documents are the workspace’s stated direction. The diagram is conceptual and does not certify an implemented end-to-end pipeline.",
      },
      {
        title: "C. Supporting infrastructure",
        description:
          "Redis, object storage, background workers, and LLM integration are listed in the README. Their presence in the architectural plan is distinct from verified deployment readiness.",
      },
    ],
    progress: [
      {
        title: "Knowledge workspace",
        description:
          "Active project development; implementation details can be reviewed in the public repository.",
        status: "In Development",
      },
      {
        title: "Architecture direction",
        description:
          "A modular monolith is documented, with frontend and backend directories.",
        status: "Documented",
      },
      {
        title: "Production release",
        description:
          "No production deployment or release is claimed on this portfolio.",
        status: "Not listed",
      },
    ],
    notes: [
      {
        title: "Architecture and implementation",
        description:
          "An architectural plan communicates intent. Source code and working demonstrations are needed to establish the current implementation scope.",
      },
      {
        title: "Learning in public",
        description:
          "The repository is the best place to review the evolving implementation. No performance benchmarks or completion percentages are asserted.",
      },
    ],
  },
  {
    slug: "fastapi-journey",
    name: "FastAPI Journey",
    code: "PRJ-02",
    alias: "/fastapi-journey",
    eyebrow: "Backend Engineering",
    status: "Learning Repository",
    categories: ["Backend Engineering", "Engineering Learning"],
    summary:
      "Backend development practice and application-building with FastAPI, from API fundamentals to larger learning projects.",
    tags: ["FastAPI", "Python", "REST APIs", "PostgreSQL"],
    repo: "FAST_API_JOURNEY",
    diagram: "api",
    overview:
      "A hands-on backend engineering learning repository. The public directory includes focused exercises alongside blog, e-commerce, task management, and weather application projects.",
    motivation:
      "Build a practical understanding of API development by moving from focused exercises to substantial application implementations.",
    stack: [
      {
        name: "Python & FastAPI",
        label: "Backend",
        description: "API development and backend exercises.",
      },
      {
        name: "Pydantic & SQLAlchemy",
        label: "Validation & data",
        description: "Included in the documented learning path.",
      },
      {
        name: "React & PostgreSQL",
        label: "Project tooling",
        description: "Listed in the repository’s full-stack learning material.",
      },
    ],
    approach: [
      {
        title: "A. Focused backend exercises",
        description:
          "The learning path covers validation, CRUD, response models, error handling, dependency injection, and database integration.",
      },
      {
        title: "B. Application projects",
        description:
          "Separate application directories provide space to apply backend concepts in larger examples.",
      },
      {
        title: "C. Engineering practices",
        description:
          "Authentication, caching, API testing, and containerization appear in the documented learning material. Individual coverage varies by exercise.",
      },
    ],
    progress: [
      {
        title: "Backend fundamentals",
        description: "A repository of exercises and application code.",
        status: "Learning",
      },
      {
        title: "Application practice",
        description:
          "Blog, task management, e-commerce, and weather project directories.",
        status: "Exploration",
      },
    ],
    notes: [
      {
        title: "Learning scope",
        description:
          "These projects communicate hands-on learning, rather than commercial production adoption.",
      },
      {
        title: "Source-first review",
        description:
          "Review the relevant subdirectory to understand each exercise’s implementation and dependencies.",
      },
    ],
  },
  {
    slug: "rag-journey",
    name: "RAG Journey",
    code: "PRJ-03",
    alias: "/rag-experiments",
    eyebrow: "AI Engineering / Learning",
    status: "Active Exploration",
    categories: ["AI Applications", "Engineering Learning"],
    summary:
      "Exploring retrieval-augmented generation and related AI engineering concepts through hands-on learning and focused experiments.",
    tags: ["Python", "LLM Fundamentals", "Pydantic", "AI Learning"],
    repo: "RAG-JOURNEY",
    diagram: "rag",
    overview:
      "A learning and experimentation repository for AI application engineering. Visible exercises include a command-line chatbot, LLM fundamentals, prompting, Pydantic, and tool calling.",
    motivation:
      "Understand the building blocks of useful AI applications before combining them into more involved retrieval workflows.",
    stack: [
      {
        name: "Python",
        label: "Language",
        description: "The foundation for the learning exercises.",
      },
      {
        name: "LLM Fundamentals",
        label: "Learning track",
        description: "Chatbot, prompting, and tool-calling exercises.",
      },
      {
        name: "Pydantic",
        label: "Structured data",
        description: "A dedicated learning exercise in the repository.",
      },
    ],
    approach: [
      {
        title: "A. Start with fundamentals",
        description:
          "Explore Python for AI and direct interaction with language models.",
      },
      {
        title: "B. Build focused experiments",
        description:
          "Separate exercises organize chatbot, prompting, validation, and tool-calling material.",
      },
      {
        title: "C. Explore retrieval concepts",
        description:
          "Retrieval, embeddings, and indexing are learning directions. Advanced retrieval features are not presented as completed implementations.",
      },
    ],
    progress: [
      {
        title: "AI foundations",
        description: "Focused exercises and experiments.",
        status: "Learning",
      },
      {
        title: "Retrieval concepts",
        description: "An ongoing area of exploration.",
        status: "Exploration",
      },
    ],
    notes: [
      {
        title: "Experiment versus product",
        description:
          "This repository records learning work and does not claim a deployed production RAG service.",
      },
      {
        title: "Incremental understanding",
        description:
          "Small experiments help isolate concepts before introducing additional application complexity.",
      },
    ],
  },
  {
    slug: "dsa-journey",
    name: "MY_DSA_JOURNEY",
    code: "PRJ-04",
    alias: "/dsa-journey",
    eyebrow: "Computer Science Fundamentals",
    status: "Learning Repository",
    categories: ["Engineering Learning"],
    summary:
      "A repository for data structures, algorithms, and problem-solving practice in software engineering fundamentals.",
    tags: ["Data Structures", "Algorithms", "Problem Solving"],
    repo: "MY_DSA_JOURNEY",
    diagram: "tree",
    overview:
      "An owner-identified learning repository focused on engineering foundations. This is a secondary learning item, with no problem counts, rankings, or performance achievements claimed.",
    motivation:
      "Strengthen problem-solving skills and develop a more systematic understanding of data structures and algorithms.",
    stack: [
      {
        name: "Data Structures",
        label: "Foundations",
        description: "An ongoing learning interest.",
      },
      {
        name: "Algorithms",
        label: "Problem solving",
        description: "Practice reasoning about approaches and tradeoffs.",
      },
      {
        name: "Complexity",
        label: "Engineering thinking",
        description: "An area of study, without invented rankings or metrics.",
      },
    ],
    approach: [
      {
        title: "A. Practice foundations",
        description:
          "Use structured problem solving to develop engineering fundamentals.",
      },
      {
        title: "B. Review the source",
        description:
          "Visit the repository for current exercises and implementation details.",
      },
    ],
    progress: [
      {
        title: "Engineering foundations",
        description:
          "Learning and practice, without fabricated completion counts.",
        status: "Learning",
      },
    ],
    notes: [
      {
        title: "A foundation for engineering",
        description:
          "Algorithmic thinking supports clearer decisions when building software.",
      },
    ],
  },
];
export const skillGroups = [
  {
    icon: "server",
    name: "Backend Engineering",
    items: ["Python", "FastAPI", "API Development"],
    caption: "Application development",
  },
  {
    icon: "brain",
    name: "AI Engineering",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "AI Applications",
      "Vector Databases",
    ],
    caption: "Internship & learning focus",
  },
  {
    icon: "web",
    name: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS"],
    caption: "Interface layer",
  },
  {
    icon: "database",
    name: "Databases",
    items: ["MongoDB"],
    caption: "Technical background",
  },
  {
    icon: "compass",
    name: "Additional Technologies of Interest",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    caption: "Exploration & continued learning",
  },
];
export const learning = [
  {
    icon: "tree",
    title: "Data Structures & Algorithms",
    description:
      "Problem solving, algorithmic thinking, and foundational data structures.",
    link: "MY_DSA_JOURNEY",
    project: "dsa-journey",
  },
  {
    icon: "server",
    title: "Backend Fundamentals",
    description:
      "Learning API design, validation, and database integration through implementation.",
    link: "FastAPI Journey",
    project: "fastapi-journey",
  },
  {
    icon: "layers",
    title: "System Design",
    description:
      "Exploring how software components fit together and how architectural tradeoffs shape a system.",
    link: "Engineering foundations",
    project: null,
  },
  {
    icon: "brain",
    title: "RAG & Vector Embeddings",
    description:
      "Developing an understanding of retrieval and the building blocks of AI applications.",
    link: "RAG Journey",
    project: "rag-journey",
  },
];
