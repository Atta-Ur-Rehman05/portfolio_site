import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Code2,
  Network,
  Server,
  BrainCircuit,
  PanelsTopLeft,
  Database,
  Compass,
  GitBranch,
  Layers,
  GraduationCap,
  Terminal,
  User,
  MessageSquare,
  CheckCircle2,
  Clock,
  FileText,
  Scissors,
  Search,
  Sparkles,
  Menu,
  X,
  Home,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";
const icons = {
  right: ArrowRight,
  arrow: ArrowUpRight,
  mail: Mail,
  code: Code2,
  network: Network,
  server: Server,
  brain: BrainCircuit,
  web: PanelsTopLeft,
  database: Database,
  compass: Compass,
  tree: GitBranch,
  layers: Layers,
  school: GraduationCap,
  terminal: Terminal,
  user: User,
  message: MessageSquare,
  check: CheckCircle2,
  clock: Clock,
  file: FileText,
  chunk: Scissors,
  search: Search,
  spark: Sparkles,
  menu: Menu,
  close: X,
  home: Home,
  left: ArrowLeft,
  external: ExternalLink,
};
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name as keyof typeof icons] ?? Code2;
  return (
    <Component size={18} strokeWidth={1.6} aria-hidden="true" {...props} />
  );
}
export function Button({
  href,
  children,
  icon,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  icon?: string;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "secondary" : "primary"}`}
      href={href}
    >
      {icon && <Icon name={icon} size={16} />} {children}
    </Link>
  );
}
export function Label({
  number,
  children,
}: {
  number?: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number ? `${number} //` : "//"}</span> {children}
    </div>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  description,
  aside,
}: {
  number?: string;
  label: string;
  title: string;
  description?: string;
  aside?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Label number={number}>{label}</Label>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {aside}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export function Status({ children }: { children: string }) {
  return (
    <span className={`status ${children === "In Development" ? "amber" : ""}`}>
      <i />
      {children}
    </span>
  );
}
