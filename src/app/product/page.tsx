import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BookOpen,
  Server,
  Lightbulb,
  BrainCircuit,
  Repeat,
  Database,
  Plus,
  Cpu,
  Play,
  Lock,
  UserCheck,
  Eye,
  Building2,
  Mail,
  Key,
  Share2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — Cimba",
  description:
    "Discover how Cimba delivers AI-powered operational intelligence through governed agents, playbooks, and repeatable workflows.",
};

function ImagePlaceholder({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`w-full h-full min-h-[280px] rounded-2xl flex items-center justify-center ${
        dark
          ? "bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10"
          : "bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200"
      }`}
    >
      <div className="text-center">
        <div
          className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
            dark ? "bg-white/10" : "bg-grey-200"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={dark ? "rgba(255,255,255,0.4)" : "#9ca3af"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p
          className={`text-[12px] font-medium ${
            dark ? "text-white/30" : "text-grey-400"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

const buildingBlocks = [
  {
    icon: Bot,
    title: "Agents",
    summary:
      "AI agents that execute analytical workflows using your data and business context.",
    description:
      "Cimba agents combine data sources, business context, and analytical logic to answer questions and perform structured analysis. They can investigate issues, generate insights, and run on-the-fly or pre-defined workflows while remaining context-aware and governed. Because agents operate within workflows and controls, teams can rely on them to produce consistent and repeatable results.",
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    summary:
      "Pre-defined workflows on how complex analyses should run.",
    description:
      "Playbooks break down analytical tasks into multi-step processes that guide how questions are answered. They transform complex analysis into repeatable workflows that teams can run consistently across the organization. Built-in validation helps ensure each step is clear, complete, and reliable before the workflow is executed.",
  },
  {
    icon: Server,
    title: "MCP Server",
    summary:
      "Interoperability allows external agents and tools to interact with Cimba.",
    description:
      "Cimba provides an MCP server that exposes agents, workflows, and data connections through a structured interface. This allows external AI systems and tools to discover, control, and integrate with Cimba workflows. As a result, organizations can connect Cimba into broader AI ecosystems and automate workflows across multiple systems.",
  },
  {
    icon: Lightbulb,
    title: "Intent",
    summary:
      "Cimba builds out business context, playbooks and agents from your intent.",
    description:
      "Express what you need in natural language and Cimba translates your intent into structured workflows, configured agents, and relevant business context. This bridges the gap between what teams want to accomplish and how the platform executes, reducing setup time and ensuring alignment with business objectives.",
  },
  {
    icon: BrainCircuit,
    title: "Business Context",
    summary:
      "The institutional knowledge that shapes how your organization makes decisions.",
    description:
      "Business context captures the metrics, definitions, logic, and domain knowledge that determine how questions should be answered within your organization. By grounding agents and playbooks in this context, Cimba ensures that every insight reflects how your business actually operates, not generic assumptions.",
  },
  {
    icon: Repeat,
    title: "Workflows",
    summary:
      "End-to-end execution pipelines that deliver consistent, governed intelligence.",
    description:
      "Workflows orchestrate agents, playbooks, and business context into complete execution pipelines. Teams can trigger workflows on demand or on schedule, with each run producing transparent, traceable outputs. Every step is logged, every decision is auditable, and results are delivered in a format teams can act on immediately.",
  },
];

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Connect Your Data",
    description:
      "Connect to the systems where your business data lives, including warehouses, applications, and internal tools.",
  },
  {
    icon: Plus,
    number: "02",
    title: "Add Business Context",
    description:
      "Define the metrics, logic, and context that shape how questions should be answered. This ensures insights reflect how your business actually operates.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Build Agents & Playbooks",
    description:
      "Create agents that can run structured workflows using the context and data available to them. Playbooks define how complex analyses should be executed step-by-step.",
  },
  {
    icon: Play,
    number: "04",
    title: "Run Workflows",
    description:
      "Teams can ask questions or trigger workflows that automatically perform analysis and generate clear outputs. Insights are delivered consistently, with full transparency into how results were produced.",
  },
];

const dataCategories = [
  {
    category: "Data Warehouses",
    items: ["Snowflake", "BigQuery", "Redshift"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Business Systems",
    items: ["Salesforce", "HubSpot", "Zendesk"],
  },
  {
    category: "Files & Documents",
    items: ["Google Drive", "Notion", "Slack"],
  },
  {
    category: "Analytics & BI",
    items: ["Looker", "Tableau"],
  },
];

const securityPillars = [
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Cimba operates within secure environments and follows industry best practices for protecting customer data. Data access is controlled and handled according to enterprise security standards.",
  },
  {
    icon: UserCheck,
    title: "Access Control",
    description:
      "Role-based access controls ensure users only interact with the data and workflows appropriate for their role.",
  },
  {
    icon: Eye,
    title: "Auditability",
    description:
      "Every workflow is transparent and traceable. Teams can see how analyses were performed and understand the steps that produced each result.",
  },
  {
    icon: Building2,
    title: "Enterprise Infrastructure",
    description:
      "Cimba is designed to support enterprise deployments with secure integrations, scalable infrastructure, and strong operational reliability.",
  },
];

const platformCapabilities = [
  { icon: Mail, label: "SMTP / enterprise email" },
  { icon: Key, label: "SCIM and LDAP" },
  { icon: Share2, label: "Sharing & access control" },
  { icon: ShieldCheck, label: "Governed access & context control" },
  { icon: BarChart3, label: "Charts in summaries" },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-grey-900 leading-tight mb-6 max-w-3xl">
            The platform for{" "}
            <span className="text-primary">operational intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl mb-10">
            Governed agents. Repeatable workflows. Auditable execution.
            Cimba goes beyond dashboards to deliver intelligence your
            enterprise can trust.
          </p>
          <Link
            href="/demo"
            className="btn-primary px-10 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
          >
            See Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1 — What Is Cimba
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/2">
                  <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                    What is Cimba
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-6">
                    Turn data and AI into operational intelligence
                  </h2>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                    Cimba is a platform that helps teams turn data and AI into
                    operational intelligence. Instead of relying on dashboards,
                    manual analysis, or one-off AI answers, Cimba enables teams
                    to run structured workflows that deliver consistent insights
                    and decisions.
                  </p>
                  <p className="text-[15px] text-grey-600 leading-relaxed">
                    Using agents, playbooks, and business context, Cimba allows
                    organizations to answer complex questions, automate analysis,
                    and operationalize intelligence across teams.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <ImagePlaceholder label="Product diagram" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — How It Works
          ═══════════════════════════════════════════ */}

      {/* 2a — 4-step workflow pipeline */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Pipeline header — full width, off-white */}
            <div className="lg:col-span-12 bg-grey-50 p-10 sm:p-14 lg:p-16">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-4 max-w-2xl">
                From data to decisions in four steps
              </h2>
              <p className="text-[15px] text-grey-600 leading-relaxed max-w-2xl mb-12">
                Connect your data, add business context, build agents and
                playbooks, then run workflows that deliver governed,
                repeatable intelligence.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white border border-grey-200 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[13px] font-bold text-primary">
                        {step.number}
                      </span>
                      <step.icon size={20} className="text-grey-400" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-grey-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-grey-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2b — Building blocks header */}
            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-6">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                Core Primitives
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-2 max-w-2xl">
                The building blocks of Cimba
              </h2>
            </div>

            {/* 2c — Building block tiles: Agents, Playbooks, MCP Server (top row) */}
            {buildingBlocks.slice(0, 3).map((block, i) => (
              <div
                key={block.title}
                className={`lg:col-span-4 p-10 sm:p-12 flex flex-col ${
                  i === 0
                    ? "bg-primary"
                    : i === 1
                    ? "bg-grey-900"
                    : "bg-white"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                    i < 2 ? "bg-white/10" : "bg-grey-100"
                  }`}
                >
                  <block.icon
                    size={20}
                    className={i < 2 ? "text-white" : "text-primary"}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    i < 2 ? "text-white" : "text-grey-900"
                  }`}
                >
                  {block.title}
                </h3>
                <p
                  className={`text-[15px] font-medium mb-4 ${
                    i === 0
                      ? "text-white/90"
                      : i === 1
                      ? "text-grey-300"
                      : "text-grey-700"
                  }`}
                >
                  {block.summary}
                </p>
                <p
                  className={`text-[14px] leading-relaxed ${
                    i === 0
                      ? "text-white/75"
                      : i === 1
                      ? "text-grey-500"
                      : "text-grey-500"
                  }`}
                >
                  {block.description}
                </p>
              </div>
            ))}

            {/* 2d — Building block tiles: Intent, Business Context, Workflows (bottom row) */}
            {buildingBlocks.slice(3, 6).map((block, i) => (
              <div
                key={block.title}
                className={`lg:col-span-4 p-10 sm:p-12 flex flex-col ${
                  i === 0
                    ? "bg-white"
                    : i === 1
                    ? "bg-primary"
                    : "bg-grey-900"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                    i === 0 ? "bg-grey-100" : "bg-white/10"
                  }`}
                >
                  <block.icon
                    size={20}
                    className={i === 0 ? "text-primary" : "text-white"}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    i === 0 ? "text-grey-900" : "text-white"
                  }`}
                >
                  {block.title}
                </h3>
                <p
                  className={`text-[15px] font-medium mb-4 ${
                    i === 0
                      ? "text-grey-700"
                      : i === 1
                      ? "text-white/90"
                      : "text-grey-300"
                  }`}
                >
                  {block.summary}
                </p>
                <p
                  className={`text-[14px] leading-relaxed ${
                    i === 0
                      ? "text-grey-500"
                      : i === 1
                      ? "text-white/75"
                      : "text-grey-500"
                  }`}
                >
                  {block.description}
                </p>
              </div>
            ))}

            {/* 2e — Platform capabilities strip */}
            <div className="lg:col-span-12 bg-grey-900 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                <p className="text-[13px] font-semibold text-grey-500 uppercase tracking-[0.15em] flex-shrink-0">
                  Platform Capabilities
                </p>
                <div className="flex flex-wrap gap-4">
                  {platformCapabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full"
                    >
                      <cap.icon size={14} className="text-primary" />
                      <span className="text-[13px] text-grey-300 font-medium">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — What Data Does It Connect To
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:p-16">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                Integrations
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-12 max-w-2xl">
                What data does Cimba connect to?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10">
                {dataCategories.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-[12px] font-semibold text-grey-400 uppercase tracking-[0.15em] mb-4">
                      {cat.category}
                    </p>
                    <div className="space-y-3">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl"
                        >
                          <div className="w-8 h-8 rounded-lg bg-grey-200 flex items-center justify-center flex-shrink-0">
                            <Database size={14} className="text-grey-400" />
                          </div>
                          <span className="text-[14px] font-medium text-grey-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[15px] text-grey-500 leading-relaxed border-t border-grey-200 pt-8">
                Cimba is designed to work with the systems teams already rely on.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — Security and Compliance
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Header */}
            <div className="lg:col-span-12 bg-grey-900 p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-8">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                Trust &amp; Compliance
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Security and compliance
              </h2>
            </div>

            {/* 4 security pillar tiles — square image left, text right */}
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="lg:col-span-6 bg-grey-900 p-10 sm:p-14"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-full sm:w-[200px] flex-shrink-0">
                    <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-white/10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <p className="text-[11px] font-medium text-white/25">
                          {pillar.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] text-grey-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 leading-tight mb-5">
            Ready to see Cimba in action?
          </h2>
          <p className="text-lg text-grey-500 max-w-xl mx-auto mb-10">
            Get a personalized demo and see how Cimba can transform your
            team&apos;s operational workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="btn-primary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              See Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/use-cases"
              className="btn-secondary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
