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
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
          The Problem & The Gap — side by side
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: The Problem */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                The problem
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-6 max-w-xl">
                Why traditional BI falls short
              </h2>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-3 text-[15px] text-grey-600 leading-relaxed">
                  <BarChart3 size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Static dashboards.</strong> Built for monitoring, not answering new questions—teams often export data or request more analysis to investigate issues.</span>
                </li>
                <li className="flex gap-3 text-[15px] text-grey-600 leading-relaxed">
                  <Clock size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Slow analysis cycles.</strong> Questions need multiple steps; that means waiting on analysts, new dashboards, or manually combining data from different systems.</span>
                </li>
                <li className="flex gap-3 text-[15px] text-grey-600 leading-relaxed">
                  <FileX size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Insights without action.</strong> Insights stay in reports or dashboards; turning them into repeatable workflows is rarely built into traditional BI.</span>
                </li>
              </ul>
            </div>

            {/* Right: The Gap — bento-dark */}
            <div className="rounded-2xl border border-grey-200 bg-bento-dark p-8">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                The gap
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-6 max-w-xl">
                Why standalone AI falls short
              </h2>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-3 text-[15px] text-grey-700 leading-relaxed">
                  <BrainCircuit size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Lack of business context.</strong> AI doesn't know how your business operates; without metrics, logic, and domain knowledge, responses can miss important details or assumptions.</span>
                </li>
                <li className="flex gap-3 text-[15px] text-grey-700 leading-relaxed">
                  <Shuffle size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Inconsistent results.</strong> The same question can get different answers depending on how it's asked, which creates uncertainty for teams that need consistent reporting.</span>
                </li>
                <li className="flex gap-3 text-[15px] text-grey-700 leading-relaxed">
                  <ShieldOff size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-grey-900">Limited governance.</strong> Most AI tools favor flexibility over transparency and repeatability; enterprises need clear controls and auditability when insights inform decisions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Comparison strip
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-grey-200 bg-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 tracking-tight">Competitive Landscape</h2>
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
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — The Cimba Difference
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="rounded-2xl border border-grey-200 bg-primary p-8 mb-6 overflow-hidden">
            <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
              The solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
              The Cimba difference
            </h2>
          </div>

          <div className="rounded-2xl border border-grey-200 overflow-hidden">
            <CimbaDifferenceCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — How Cimba Fits Into Your Stack
          ═══════════════════════════════════════════ */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-grey-200 bg-white p-8">
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
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Who Uses Cimba
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="rounded-2xl border border-grey-200 bg-primary p-8 mb-6 overflow-hidden">
            <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
              Built for your team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
              Who uses Cimba
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Data & Analytics */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8 flex flex-col gap-8">
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

            {/* Finance & FP&A */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
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

            {/* Customer Success */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
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

            {/* Operations */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
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
      <section className="bg-white py-20 lg:py-28 border-t border-grey-200">
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
