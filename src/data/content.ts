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
    "Software Engineering undergraduate and AI Application Engineer Intern at Hexoforge LLC, working on RAG chatbot applications and building a foundation in backend engineering.",
  about: [
    "I’m studying Software Engineering at MUST and learning by building. I’m drawn to the backend: how an API handles a request, how data moves through a system, and where AI can make an application more useful.",
    "My projects give me a place to practice with Python and FastAPI, explore document processing and AI integrations, and keep improving the clarity of my code.",
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
  evidence?: {
    commit: string;
    reviewed: string;
    items: { title: string; description: string; path: string }[];
    limits: string[];
  };
};
export type ProjectPreview = Pick<
  Project,
  | "slug"
  | "name"
  | "code"
  | "alias"
  | "eyebrow"
  | "status"
  | "categories"
  | "summary"
  | "tags"
  | "repo"
  | "diagram"
>;
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
      "A document workspace with authentication, PDF/TXT processing, and stored embeddings. Retrieval and AI chat remain planned.",
    tags: ["FastAPI", "React", "PostgreSQL", "Embeddings"],
    repo: "intellex",
    diagram: "knowledge",
    overview:
      "Intellex is an ongoing knowledge workspace with a FastAPI backend and React interface. The reviewed backend contains authentication, user-scoped document management, and a service that turns PDF/TXT uploads into chunks and embeddings. End-to-end retrieval and AI chat are next steps.",
    motivation:
      "Build the document foundation for an AI workspace: accept files, associate them with their owner, and prepare their contents for later retrieval.",
    stack: [
      {
        name: "FastAPI & SQLAlchemy",
        label: "API and persistence",
        description:
          "Routes delegate to services and repositories for authentication and document management.",
      },
      {
        name: "PostgreSQL & pgvector",
        label: "Current storage model",
        description:
          "The document-chunk model stores content, source metadata, and embedding vectors using pgvector.",
      },
      {
        name: "Sentence Transformers",
        label: "Embedding provider",
        description:
          "A provider loads the configured model and generates normalized document embeddings.",
      },
      {
        name: "React & Vite",
        label: "Interface",
        description:
          "The frontend contains authentication, dashboard, document, and chat pages. A chat interface alone does not establish a working chat backend.",
      },
    ],
    approach: [
      {
        title: "User-scoped document requests",
        description:
          "Authenticated routes support upload, listing, retrieval, rename, and deletion. Document lookups use both document ID and user ID.",
      },
      {
        title: "Processing during upload",
        description:
          "The upload service invokes processing directly: PDF/TXT loading, cleaning, overlapping chunks, embedding generation, and persistence.",
      },
      {
        title: "Current storage and future infrastructure",
        description:
          "Files currently use local storage and embeddings use pgvector. Qdrant, Redis, object storage, and background workers appear in the architecture direction; they are not presented as integrated features.",
      },
    ],
    progress: [
      {
        title: "Authentication and documents",
        description:
          "Register/login/current-user routes and document management handlers are present in the source.",
        status: "Source verified",
      },
      {
        title: "Document preparation",
        description:
          "The processing service creates chunks and embeddings and records ready/failed document states.",
        status: "Source verified",
      },
      {
        title: "Retrieval and AI chat",
        description:
          "The reviewed chat module initializes a router but defines no request handlers.",
        status: "Planned",
      },
    ],
    notes: [
      {
        title: "Make processing failures visible",
        description:
          "The processing service records failure states and rolls back database work on errors. Embedding-model availability remains a runtime dependency.",
      },
      {
        title: "Source can advance beyond documentation",
        description:
          "The backend README describes an earlier authentication phase. This review follows the newer document and embedding source files.",
      },
    ],
    evidence: {
      commit: "898909c8447e47abf4ef22d81cae98311598b108",
      reviewed: "2026-11-05",
      items: [
        {
          title: "Document API",
          description:
            "Authenticated upload, list, detail, rename, and deletion handlers.",
          path: "backend/app/api/v1/documents.py",
        },
        {
          title: "Processing service",
          description:
            "Loading, cleaning, chunking, embeddings, and processing states.",
          path: "backend/app/services/document_processing.py",
        },
        {
          title: "Embedding storage",
          description:
            "A pgvector column and source metadata on document chunks.",
          path: "backend/app/models/document_chunk.py",
        },
        {
          title: "Chat boundary",
          description: "No chat request handlers at the reviewed revision.",
          path: "backend/app/api/v1/chat.py",
        },
      ],
      limits: [
        "Source inspection establishes code presence. The backend and its tests were not executed during this review.",
        "Retrieval quality, production readiness, and performance have not been measured here.",
      ],
    },
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
      "Backend exercises and applications covering authenticated task management, searchable blog APIs, and e-commerce checkout logic.",
    tags: ["FastAPI", "Python", "REST APIs", "PostgreSQL"],
    repo: "FAST_API_JOURNEY",
    diagram: "api",
    overview:
      "A collection of backend exercises and application projects. The task manager implements user-scoped task operations with filtering and pagination. The blog API includes authentication and searchable listings. A separate e-commerce backend explores checkout transactions and idempotency.",
    motivation:
      "Move from isolated API concepts to applications combining validation, authentication, persistence, and useful query behavior.",
    stack: [
      {
        name: "Python & FastAPI",
        label: "API development",
        description:
          "Request handlers, dependency injection, and typed request/response schemas.",
      },
      {
        name: "SQLAlchemy & Pydantic",
        label: "Data layer",
        description:
          "Database queries and schema validation appear in the application implementations.",
      },
      {
        name: "React & PostgreSQL",
        label: "Full-stack learning",
        description:
          "React frontends and PostgreSQL learning material are included. Storage configuration varies by application.",
      },
    ],
    approach: [
      {
        title: "Task management",
        description:
          "Task CRUD queries scope access to the authenticated user. Lists support search, status, priority, date filters, sorting, and pagination.",
      },
      {
        title: "Blog API",
        description:
          "Registration and login issue bearer tokens. Blog listing supports title/content search and bounded pagination; write routes require authentication.",
      },
      {
        title: "Checkout transactions",
        description:
          "The checkout service includes database locking, idempotency-key handling, stock validation, commit, and rollback paths. These illustrate backend decisions without establishing production payment reliability.",
      },
    ],
    progress: [
      {
        title: "Task and blog APIs",
        description:
          "Concrete route implementations can be reviewed in the linked source files.",
        status: "Source verified",
      },
      {
        title: "E-commerce checkout",
        description:
          "Transaction and retry-handling logic is present in the checkout service.",
        status: "Source verified",
      },
      {
        title: "Deployment readiness",
        description:
          "Each application needs its own configuration and runtime validation.",
        status: "Not evaluated",
      },
    ],
    notes: [
      {
        title: "Authentication and ownership differ",
        description:
          "The task manager scopes access by user. The reviewed blog update/delete handlers require a token but do not check resource ownership.",
      },
      {
        title: "Configuration matters",
        description:
          "The task manager uses permissive CORS settings. Deployment-specific configuration remains necessary.",
      },
    ],
    evidence: {
      commit: "e1d3ef066c6b3341c8ed508a26d9c4b2fe6a1715",
      reviewed: "2026-11-05",
      items: [
        {
          title: "Task manager routes",
          description:
            "Authentication, owner-scoped CRUD, filtering, sorting, and pagination.",
          path: "TASK_MANAG_FULLSTACK_P/backend/main.py",
        },
        {
          title: "Blog API routes",
          description:
            "Registration, login, searchable listings, and authenticated writes.",
          path: "blog_api_project/app/main.py",
        },
        {
          title: "Checkout service",
          description:
            "Locks, idempotency handling, stock checks, and transaction boundaries.",
          path: "E-commerce-api/BACKEND/app/services/checkout.py",
        },
      ],
      limits: [
        "Applications were inspected, not executed or security-audited during this review.",
        "No production traffic, test pass rate, or payment-processing results are claimed.",
      ],
    },
  },
  {
    slug: "rag-journey",
    name: "RAG Journey",
    code: "PRJ-03",
    alias: "/rag-experiments",
    eyebrow: "AI Engineering / Learning",
    status: "Learning Repository",
    categories: ["AI Applications", "Engineering Learning"],
    summary:
      "AI foundations through a streaming CLI chatbot, prompting exercises, Pydantic, and a mock-weather tool-calling example.",
    tags: ["Python", "LLM APIs", "Pydantic", "Tool Calling"],
    repo: "RAG-JOURNEY",
    diagram: "rag",
    overview:
      "Focused AI engineering exercises. The CLI chatbot streams model output and keeps conversation history. The tool-calling example defines a weather function, dispatches model-requested calls, and returns tool results for a final response. Retrieval remains the broader learning direction.",
    motivation:
      "Understand model interaction, structured data, and tool execution before combining these building blocks into document retrieval applications.",
    stack: [
      {
        name: "Python",
        label: "Language",
        description: "Command-line exercises and local tool implementations.",
      },
      {
        name: "OpenAI-compatible SDK & Gemini",
        label: "Model interaction",
        description:
          "The Python examples configure the OpenAI client against a Gemini-compatible endpoint.",
      },
      {
        name: "Pydantic & JSON schemas",
        label: "Structured inputs",
        description:
          "A dedicated Pydantic exercise and JSON-schema tool definitions explore structured data.",
      },
    ],
    approach: [
      {
        title: "Streaming conversation",
        description:
          "The CLI app appends user and assistant messages to session history and streams response chunks to the terminal.",
      },
      {
        title: "Tool execution loop",
        description:
          "The example declares a weather tool, dispatches requested calls to a local function, and sends results back with matching tool-call IDs.",
      },
      {
        title: "Retrieval as a learning direction",
        description:
          "The reviewed tree contains foundations and tool-calling exercises. A complete ingestion, vector search, and grounded-answer pipeline was not verified.",
      },
    ],
    progress: [
      {
        title: "CLI chatbot",
        description:
          "Conversation history and streamed model responses appear in the example.",
        status: "Source verified",
      },
      {
        title: "Weather tool calling",
        description:
          "The function-call loop uses mock weather data and generated fallback values.",
        status: "Mock-data example",
      },
      {
        title: "End-to-end RAG",
        description:
          "Document retrieval, hybrid search, and multimodal retrieval remain unverified learning directions.",
        status: "Not verified",
      },
    ],
    notes: [
      {
        title: "Identify the source of tool data",
        description:
          "The weather example demonstrates orchestration with mock data. It is not connected to a live weather provider.",
      },
      {
        title: "Distinguish API calls from retrieval",
        description:
          "Chat and tool calls do not by themselves retrieve document context. These exercises establish foundations for later RAG work.",
      },
    ],
    evidence: {
      commit: "d9fbed02f62ab145b1bcbb925b6b42f0d1720729",
      reviewed: "2026-11-05",
      items: [
        {
          title: "Streaming chatbot",
          description:
            "Session messages and streamed chunks through a Gemini-compatible endpoint.",
          path: "day_01-cli-chatbot/main.py",
        },
        {
          title: "Tool-calling example",
          description:
            "Function schema, local dispatch, mock data, and tool-result messages.",
          path: "day_05_tool_calling/tool_calling.py",
        },
        {
          title: "Learning scope",
          description:
            "The repository describes retrieval as its broader learning direction.",
          path: "README.md",
        },
      ],
      limits: [
        "Examples require model credentials and were not executed during this review.",
        "Mock weather is illustrative; retrieval accuracy and production RAG behavior are not established.",
      ],
    },
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
    name: "Backend",
    kind: "practice",
    level: "Project implementation",
    items: ["Python", "FastAPI", "Pydantic", "SQLAlchemy"],
    caption:
      "API routes, validation, authentication, and persistence in the reviewed project source.",
    href: "/projects/fastapi-journey",
  },
  {
    icon: "brain",
    name: "AI applications",
    kind: "practice",
    level: "Project implementation",
    items: ["LLM APIs", "Tool Calling", "Text Chunking", "Embeddings"],
    caption:
      "Document preparation in Intellex; model interaction and tool-calling exercises in RAG Journey.",
    href: "/projects/rag-journey",
  },
  {
    icon: "web",
    name: "Interfaces",
    kind: "practice",
    level: "Portfolio & project work",
    items: ["React", "JavaScript", "HTML", "CSS"],
    caption:
      "The interface layer for web applications. This portfolio also uses Next.js, TypeScript, and Tailwind CSS.",
    href: "/projects",
  },
  {
    icon: "database",
    name: "Data & storage",
    kind: "background",
    level: "Project source & background",
    items: ["PostgreSQL", "pgvector", "MongoDB"],
    caption:
      "PostgreSQL and pgvector appear in Intellex source. MongoDB is part of my technical background.",
    href: "/projects/intellex",
  },
  {
    icon: "compass",
    name: "Continued exploration",
    kind: "exploring",
    level: "Learning direction",
    items: ["Retrieval Systems", "Vector Search", "System Design"],
    caption:
      "Developing a deeper understanding of retrieval quality, storage choices, and architectural tradeoffs.",
    href: "",
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
