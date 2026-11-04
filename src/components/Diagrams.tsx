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
    <div className="hero-terminal">
      <div className="terminal-title">
        <span className="traffic">
          <i />
          <i />
          <i />
        </span>
        <span>rag_workspace_concept.svg</span>
        <span className="terminal-badge">CONCEPT</span>
      </div>
      <div className="hero-topology">
        <div className="input-nodes">
          <span>
            INPUT_DOCS<small>Source material</small>
          </span>
          <span>
            QUERY_STREAM<small>User question</small>
          </span>
          <span>
            CONTEXT<small>Retrieved passages</small>
          </span>
        </div>
        <svg aria-hidden="true" viewBox="0 0 110 170">
          <path
            d="m0 25 40 0 50 60h20M0 85h110M0 145h40l50-60"
            fill="none"
            stroke="#7bd0ff"
            strokeDasharray="3 3"
          />
        </svg>
        <div className="pipeline-node">
          <Icon name="brain" size={24} />
          <span>RAG WORKFLOW</span>
        </div>
        <span className="topology-line" />
        <div className="output-node">
          AI RESPONSE<small>Context-aware direction</small>
        </div>
      </div>
      <div className="terminal-metadata">
        <span>
          Architecture<b>RAG concepts</b>
        </span>
        <span>
          Core interest<b>Backend APIs</b>
        </span>
        <span>
          Learning track<b>Retrieval systems</b>
        </span>
      </div>
    </div>
  );
}
