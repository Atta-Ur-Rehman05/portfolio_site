import { Icon } from "./ui";
export function KnowledgeGraph({ hero = false }: { hero?: boolean }) {
  return (
    <svg
      className={`knowledge-graph ${hero ? "hero-graph" : ""}`}
      viewBox="0 0 490 205"
      role="img"
      aria-label="Conceptual diagram connecting documents, embeddings, retrieval, context, and language models"
    >
      <g fill="none" stroke="#586e7a" strokeWidth="1">
        <path
          strokeDasharray="3 3"
          d="M63 105 160 67 266 105M63 105l97 45 106-45m0 0 115-35m-115 35 115 43M160 67l221 3M160 150l221-2"
        />
        <path stroke="#22d3ee" d="m160 67 106 38 115-35 61 35-176 0" />
      </g>
      {[
        [63, 105, "DOC"],
        [160, 67, "EMB"],
        [160, 150, "RAW"],
        [266, 105, "INDEX"],
        [381, 70, "CTX"],
        [381, 148, "META"],
        [442, 105, "LLM"],
      ].map(([x, y, t]) => (
        <g key={t}>
          <circle
            cx={x}
            cy={y}
            r={t === "INDEX" ? 21 : t === "LLM" ? 18 : 14}
            fill={t === "LLM" ? "#22d3ee" : "#121a24"}
            stroke={
              ["INDEX", "CTX", "EMB", "LLM"].includes(String(t))
                ? "#22d3ee"
                : "#67747d"
            }
            strokeWidth="1.2"
          />
          <text
            x={x}
            y={Number(y) + 3}
            textAnchor="middle"
            fontSize={t === "INDEX" ? 8 : 7}
            fill={t === "LLM" ? "#00363e" : "#d9e8ed"}
            fontFamily="monospace"
          >
            {t}
          </text>
        </g>
      ))}
    </svg>
  );
}
const conceptSteps = [
  { icon: "file", name: "Documents", detail: "Source material" },
  { icon: "chunk", name: "Chunks", detail: "Smaller passages" },
  { icon: "brain", name: "Embeddings", detail: "Representations" },
  { icon: "spark", name: "Context", detail: "AI interaction" },
];
export function Diagram({
  kind,
  small = false,
}: {
  kind: "knowledge" | "api" | "rag" | "tree";
  small?: boolean;
}) {
  return (
    <div className={`diagram ${small ? "small-diagram" : ""}`}>
      <div className="diagram-heading">
        <span>
          <Icon
            name={
              kind === "knowledge"
                ? "network"
                : kind === "api"
                  ? "tree"
                  : kind === "tree"
                    ? "tree"
                    : "layers"
            }
            size={14}
          />
          {kind === "knowledge"
            ? "KNOWLEDGE WORKSPACE"
            : kind === "api"
              ? "API LEARNING PATH"
              : kind === "rag"
                ? "AI LEARNING CONCEPTS"
                : "DATA STRUCTURES & ALGORITHMS"}
        </span>
        <span className="diagram-note">Illustrative</span>
      </div>
      {kind === "knowledge" ? (
        <KnowledgeGraph />
      ) : kind === "api" ? (
        <div className="api-rows">
          {[
            ["01", "Request", "Routing & validation"],
            ["02", "Application", "Backend logic"],
            ["03", "Response", "Structured data"],
          ].map(([tag, title, description]) => (
            <div key={tag}>
              <b>{tag}</b>
              <span>{title}</span>
              <span>{description}</span>
            </div>
          ))}
        </div>
      ) : kind === "rag" ? (
        <div className="concept-flow">
          {conceptSteps.map((step, i) => (
            <div className="concept-step" key={step.name}>
              <div className="step-symbol">
                <Icon name={step.icon} size={24} />
              </div>
              <span>{step.name}</span>
              <small>{step.detail}</small>
              {i < 3 && <span className="step-arrow">⟶</span>}
            </div>
          ))}
        </div>
      ) : (
        <svg
          viewBox="0 0 490 205"
          className="tree-diagram"
          role="img"
          aria-label="Illustrative binary tree with a root and child nodes"
        >
          <g fill="none" stroke="#596875">
            <path d="m245 35-110 68-64 62m64-62 67 62m43-130 111 68 66 62m-66-62-66 62" />
          </g>
          {[
            [245, 35, "50"],
            [135, 103, "25"],
            [356, 103, "75"],
            [71, 165, "12"],
            [202, 165, "37"],
            [290, 165, "62"],
            [422, 165, "88"],
          ].map(([x, y, t], i) => (
            <g key={t}>
              <circle
                cx={x}
                cy={y}
                r={i < 3 ? 16 : 11}
                fill={i === 6 ? "#ffb957" : "#151d26"}
                stroke={i === 0 || i === 2 ? "#ffb957" : "#79828a"}
              />
              <text
                x={x}
                y={Number(y) + 3}
                fill="#e3e7ee"
                textAnchor="middle"
                fontSize="9"
                fontFamily="monospace"
              >
                {t}
              </text>
            </g>
          ))}
        </svg>
      )}
      <div className="diagram-foot">
        {(kind === "knowledge"
          ? ["Documents", "Retrieval", "AI interaction"]
          : kind === "api"
            ? ["API design", "Validation", "Data integration"]
            : kind === "rag"
              ? ["LLM fundamentals", "Experiments", "Ongoing learning"]
              : ["Problem solving", "Data structures", "Foundations"]
        ).map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
export function HeroDiagram() {
  return (
    <figure className="hero-terminal">
      <figcaption className="hero-diagram-heading">
        <span>Conceptual workflow</span>
        <strong>From documents to useful context.</strong>
      </figcaption>
      <ol className="hero-flow">
        {[
          ["file", "Documents", "The source material"],
          ["search", "Relevant context", "Passages related to a question"],
          ["brain", "AI response", "An answer informed by that context"],
        ].map(([icon, title, description], index) => (
          <li key={title}>
            <span className="hero-flow-icon">
              <Icon name={icon} size={22} />
            </span>
            <div>
              <strong>{title}</strong>
              <span>{description}</span>
            </div>
            <span className="hero-flow-number" aria-hidden="true">
              0{index + 1}
            </span>
          </li>
        ))}
      </ol>
      <p className="hero-diagram-note">Retrieval-augmented generation (RAG)</p>
    </figure>
  );
}
