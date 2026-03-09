import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Users,
  Workflow,
  Database,
  Shield,
  BarChart3,
  TrendingUp,
  FileSearch,
  PieChart,
  DollarSign,
  Repeat,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — Cimba",
  description:
    "Discover how Cimba delivers AI-powered operational intelligence through governed agents and repeatable workflows.",
};

const sections = [
  {
    id: "what-is-cimba",
    icon: Layers,
    title: "What is Cimba",
    description:
      "Cimba is an AI enablement platform that delivers auditable, repeatable, and accurate autonomous workflows. Unlike static dashboards or generic analytics tools, Cimba operationalizes intelligence through governed agents that integrate directly with your enterprise data stack.",
    highlights: [
      "Governed AI agents that execute real workflows",
      "Full audit trails for every decision and output",
      "Enterprise-grade security and compliance built in",
    ],
  },
  {
    id: "who-uses",
    icon: Users,
    title: "Who uses Cimba",
    description:
      "Cimba is built for data-driven teams across the enterprise — from Finance and FP&A leaders to Customer Success and Business Operations teams. Our platform is designed for organizations that need AI they can trust, audit, and scale.",
    highlights: [
      "Data / Analytics / BI teams",
      "Finance & FP&A leaders",
      "Customer Success & Business Operations",
      "AI strategy teams",
    ],
  },
  {
    id: "how-it-works",
    icon: Workflow,
    title: "How does it work",
    description:
      "Cimba connects to your existing data sources, applies governed AI agents to execute workflows, and delivers structured intelligence that your teams can act on. Every workflow is repeatable, every output is traceable, and every decision is auditable.",
    highlights: [
      "Connect your data sources in minutes",
      "Configure governed AI workflows",
      "Execute and monitor with full audit trails",
      "Scale intelligence across teams",
    ],
  },
  {
    id: "integrations",
    icon: Database,
    title: "What data does it connect to",
    description:
      "Cimba integrates with your enterprise data stack through MCP (Model Context Protocol), email, and direct database connections. Connect to your ERP, CRM, data warehouse, and communication tools to operationalize intelligence everywhere.",
    highlights: [
      "ERP and financial systems",
      "CRM and customer data platforms",
      "Data warehouses and BI tools",
      "Email and communication tools",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Is it enterprise secure",
    description:
      "Cimba is built for the enterprise from the ground up. SOX and SOC 2 compliance, role-based access controls, full audit logging, and data encryption at rest and in transit. Your data never leaves your governance perimeter.",
    highlights: [
      "SOX and SOC 2 compliant",
      "Role-based access controls",
      "End-to-end encryption",
      "Complete audit logging",
    ],
  },
];

const useCasePreview = [
  {
    icon: BarChart3,
    title: "Accounting",
    description: "Automate reconciliation, variance analysis, and close workflows.",
  },
  {
    icon: TrendingUp,
    title: "P&L Scenario Modeling",
    description: "Dynamic scenario models across revenue, cost, and margin drivers.",
  },
  {
    icon: FileSearch,
    title: "Flux Analysis",
    description: "Auto-detect and explain financial flux with full audit trails.",
  },
  {
    icon: PieChart,
    title: "Pricing & Growth",
    description: "AI-powered pricing analysis and growth opportunity detection.",
  },
  {
    icon: DollarSign,
    title: "Expense Analysis",
    description: "Intelligent expense categorization and anomaly detection.",
  },
  {
    icon: Repeat,
    title: "Repeatable Reporting",
    description: "Build reports that run themselves with governed AI agents.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-grey-900 tracking-tight leading-tight mb-6">
            The AI enablement platform for{" "}
            <span className="text-primary">operational intelligence</span>
          </h1>
          <p className="text-lg text-grey-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Governed agents. Repeatable workflows. Auditable execution. Cimba
            goes beyond dashboards to deliver intelligence your enterprise can
            trust.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 px-10 py-0 text-base font-semibold btn-primary rounded-full transition-all shadow-lg"
          >
            See Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Product Sections */}
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-white" : "bg-grey-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                  <section.icon size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-grey-900 tracking-tight mb-6">
                  {section.title}
                </h2>
                <p className="text-grey-600 leading-relaxed text-lg mb-8">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-grey-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-grey-100 to-grey-200 border border-grey-200 flex items-center justify-center">
                  <section.icon
                    size={64}
                    className="text-grey-300"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Use Cases Carousel Preview */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Use cases
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Explore how teams use Cimba across accounting, marketing, and
              operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCasePreview.map((uc) => (
              <div
                key={uc.title}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
              >
                <uc.icon size={24} className="text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {uc.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
            >
              View all use cases
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 tracking-tight mb-4">
            Ready to see Cimba in action?
          </h2>
          <p className="text-lg text-grey-600 max-w-2xl mx-auto mb-10">
            Get a personalized demo and see how Cimba can transform your
            team&apos;s operational workflows.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 px-10 py-0 text-base font-semibold btn-primary rounded-full transition-all shadow-lg"
          >
            See Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
