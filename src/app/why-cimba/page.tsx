import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Clock,
  FileX,
  BrainCircuit,
  Shuffle,
  ShieldOff,
  Sparkles,
  Repeat,
  BookOpen,
  Truck,
  TrendingUp,
  HeartHandshake,
  Wrench,
  Database,
} from "lucide-react";
import CimbaDifferenceCarousel from "@/components/CimbaDifferenceCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Cimba — Trusted, Secure, Fast",
  description:
    "Discover why enterprises choose Cimba over traditional BI and standalone AI for operational intelligence.",
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

export default function WhyCimbaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-grey-900 leading-tight mb-6 max-w-3xl">
            Most tools help you analyze data.{" "}
            <span className="text-primary">Cimba helps you operationalize it.</span>
          </h1>
          <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl mb-6">
            Dashboards show what happened. AI tools generate answers.
            Cimba turns analysis into structured workflows teams can run
            consistently.
          </p>
          <p className="text-[15px] text-grey-600 leading-relaxed max-w-2xl">
            Modern organizations have more data and AI tools than ever. Yet
            most teams still struggle to turn questions into reliable answers
            and decisions. Cimba was built to bridge that gap by combining
            trusted data, business context, and structured workflows into a
            single operational system.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1 — Why Traditional BI Falls Short
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Section header */}
            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-8">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                The problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight max-w-2xl">
                Why traditional BI falls short
              </h2>
            </div>

            {/* Static Dashboards */}
            <div className="lg:col-span-4 bg-white p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-grey-100 flex items-center justify-center mb-6">
                <BarChart3 size={20} className="text-grey-400" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-3">
                Static Dashboards
              </h3>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                Dashboards are designed for monitoring metrics, not answering
                new questions.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                When teams need to investigate issues or understand what&apos;s
                driving a change, they often have to export data or request
                additional analysis.
              </p>
            </div>

            {/* Slow Analysis Cycles */}
            <div className="lg:col-span-4 bg-white p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-grey-100 flex items-center justify-center mb-6">
                <Clock size={20} className="text-grey-400" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-3">
                Slow Analysis Cycles
              </h3>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                Business questions frequently require multiple steps of analysis.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                This often means waiting on analysts, building new dashboards,
                or manually combining data from different systems.
              </p>
            </div>

            {/* Insights Without Action */}
            <div className="lg:col-span-4 bg-white p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-grey-100 flex items-center justify-center mb-6">
                <FileX size={20} className="text-grey-400" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-3">
                Insights Without Action
              </h3>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                Even when insights are identified, they often remain buried in
                reports or dashboards.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                Turning those insights into repeatable workflows is rarely
                built into traditional BI tools.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Why Standalone AI Falls Short
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Section header */}
            <div className="lg:col-span-12 bg-grey-900 p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-8">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                The gap
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Why standalone AI falls short
              </h2>
            </div>

            {/* Lack of Business Context */}
            <div className="lg:col-span-4 bg-grey-900 p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <BrainCircuit size={20} className="text-white/60" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lack of Business Context
              </h3>
              <p className="text-[15px] text-grey-300 leading-relaxed mb-4">
                Standalone AI tools do not understand how your business
                actually operates.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                Without defined metrics, logic, and domain knowledge, responses
                can miss important details or assumptions.
              </p>
            </div>

            {/* Inconsistent Results */}
            <div className="lg:col-span-4 bg-grey-900 p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Shuffle size={20} className="text-white/60" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Inconsistent Results
              </h3>
              <p className="text-[15px] text-grey-300 leading-relaxed mb-4">
                AI tools often produce different answers to the same question
                depending on how it is asked.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                For teams that rely on consistent analysis and reporting, this
                creates uncertainty.
              </p>
            </div>

            {/* Limited Governance */}
            <div className="lg:col-span-4 bg-grey-900 p-10 sm:p-12">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <ShieldOff size={20} className="text-white/60" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Limited Governance
              </h3>
              <p className="text-[15px] text-grey-300 leading-relaxed mb-4">
                Most AI tools prioritize flexibility and exploration, instead
                of transparency and repeatability.
              </p>
              <p className="text-[14px] text-grey-500 leading-relaxed">
                But enterprise teams need clear controls, transparency, and
                repeatability when insights inform real decisions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Comparison strip
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">
            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:px-16">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 tracking-tight">Competitive Analysis</h2>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-grey-200">
                    <th className="pb-4 pr-6 text-[13px] font-semibold text-grey-400 uppercase tracking-[0.15em] w-1/4">
                      &nbsp;
                    </th>
                    <th className="pb-4 px-6 text-[18px] font-semibold text-grey-900 tracking-[0.08em] w-1/4">
                      <h3>Traditional BI</h3>
                    </th>
                    <th className="pb-4 px-6 text-[18px] font-semibold text-grey-900 tracking-[0.08em] w-1/4">
                      <h3>Standalone AI</h3>
                    </th>
                    <th className="pb-4 pl-6 text-[18px] font-semibold text-primary tracking-[0.08em] w-1/4">
                      <h3>Cimba</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    {
                      label: "Analysis approach",
                      bi: "Static dashboards",
                      ai: "One-off answers",
                      cimba: "Structured workflows",
                    },
                    {
                      label: "Consistency",
                      bi: "Manual analysis",
                      ai: "Inconsistent output",
                      cimba: "Repeatable analysis",
                    },
                    {
                      label: "Output",
                      bi: "Reports",
                      ai: "Exploration",
                      cimba: "Operational decisions",
                    },
                    {
                      label: "Business context",
                      bi: "Limited",
                      ai: "None",
                      cimba: "Built in",
                    },
                    {
                      label: "Governance",
                      bi: "Manual controls",
                      ai: "Limited",
                      cimba: "Full auditability",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${
                        i % 2 === 1 ? "bg-grey-50" : ""
                      } ${i < 4 ? "border-b border-grey-100" : ""}`}
                    >
                      <td className="py-4 pl-5 pr-6 text-[13px] font-medium text-grey-500">
                        {row.label}
                      </td>
                      <td className="py-4 px-6 text-grey-500">
                        {row.bi}
                      </td>
                      <td className="py-4 px-6 text-grey-500">
                        {row.ai}
                      </td>
                      <td className="py-4 pl-6 text-grey-900 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {row.cimba}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — The Cimba Difference
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Section header */}
            <div className="lg:col-span-12 bg-primary p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-8">
              <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
                The solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                The Cimba difference
              </h2>
            </div>

            <CimbaDifferenceCarousel />

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — How Cimba Fits Into Your Stack
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            <div className="lg:col-span-12 bg-white p-10 sm:p-14 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/2">
                  <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                    Your ecosystem
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-6">
                    How Cimba fits into your stack
                  </h2>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                    Cimba is designed to work alongside the tools organizations
                    already use. BI platforms remain valuable for dashboards
                    and reporting, while AI tools are often used for exploration
                    and experimentation.
                  </p>
                  <p className="text-[15px] text-grey-600 leading-relaxed">
                    Cimba sits between these systems and operational teams,
                    enabling structured workflows that turn questions into
                    consistent insights and actions.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <ImagePlaceholder label="Data Sources → Cimba → Teams" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Who Uses Cimba
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">

            {/* Section header */}
            <div className="lg:col-span-12 bg-primary p-10 sm:p-14 lg:px-16 lg:pt-16 lg:pb-8">
              <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
                Built for your team
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Who uses Cimba
              </h2>
            </div>

            {/* Data & Analytics — left column, full height; hero image on top */}
            <div className="col-span-12 lg:col-span-6 lg:row-span-3 bg-white p-10 sm:p-14 flex flex-col gap-8">
              <div className="w-full">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                  <Database size={32} className="text-grey-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-grey-900 mb-3">
                  Data & Analytics Teams
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                  Scale insight delivery without building endless dashboards.
                </p>
                <p className="text-[14px] text-grey-500 leading-relaxed">
                  Cimba allows data teams to encode business logic and
                  analytical workflows once so the rest of the organization
                  can run them safely.
                </p>
              </div>
            </div>

            {/* Finance & FP&A — top right of stack */}
            <div className="col-span-12 lg:col-span-6 bg-white p-10 sm:p-14">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <TrendingUp size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-grey-900 mb-3">
                    Finance & FP&A
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Analyze revenue drivers, investigate variance, and answer
                    executive questions faster.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Cimba helps finance teams run repeatable analyses, generate
                    scenario models, and deliver consistent answers grounded in
                    trusted data.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Success — middle right of stack */}
            <div className="col-span-12 lg:col-span-6 bg-white p-10 sm:p-14">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <HeartHandshake size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-grey-900 mb-3">
                    Customer Success
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Understand customer health, identify risks, and prioritize
                    actions.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Cimba can analyze product usage, support data, and account
                    signals to surface insights that help CS teams stay ahead
                    of issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Operations — bottom right of stack */}
            <div className="col-span-12 lg:col-span-6 bg-white p-10 sm:p-14">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <Wrench size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-grey-900 mb-3">
                    Operations
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Monitor business performance and quickly investigate
                    operational issues.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Teams use Cimba to analyze operational data, identify
                    anomalies, and support decision-making across departments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-28 border-t border-grey-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 leading-tight mb-5">
            Ready to operationalize intelligence?
          </h2>
          <p className="text-lg text-grey-500 max-w-xl mx-auto mb-10">
            See why leading enterprises choose Cimba over dashboards and
            standalone AI.
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
              href="/product"
              className="btn-secondary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              Explore Product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
