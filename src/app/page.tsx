import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Play,
  ArrowRight,
  BarChart3,
  GitBranch,
  Users,
  TrendingUp,
  FileSearch,
  Shield,
  Zap,
  Database,
  Workflow,
} from "lucide-react";
import RotatingText from "@/components/RotatingText";
import RotatingSpotlight from "@/components/RotatingSpotlight";
import CTASection from "@/components/CTASection";

const customerLogos = [
  { name: "Airbnb", src: "/logos/airbnb.png" },
  { name: "SoundHound AI", src: "/logos/soundhound.png" },
  { name: "Meta", src: "/logos/meta.png" },
  { name: "KPMG", src: "/logos/kpmg.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "iCreditWorks", src: "/logos/icreditworks.png" },
  { name: "Skan AI", src: "/logos/skanai.png" },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Governed AI Agents",
    description:
      "Autonomous agents that execute real workflows end-to-end, with human-in-the-loop controls at every critical step.",
  },
  {
    icon: Shield,
    title: "Auditable Execution",
    description:
      "Full audit trails on every decision and output. SOX and SOC 2 compliant from day one.",
  },
  {
    icon: Database,
    title: "Enterprise Integrations",
    description:
      "Connects to your ERP, CRM, data warehouse, and communication tools through MCP and direct connectors.",
  },
  {
    icon: Zap,
    title: "Deploy in Days",
    description:
      "Go from zero to operational intelligence in days, not months. Pre-built templates and guided onboarding.",
  },
];

const valueProps = [
  {
    icon: CheckCircle,
    title: "Trusted answers grounded in your data",
    description:
      "Every insight is sourced, traceable, and grounded in your actual operational data — never hallucinated, never assumed.",
  },
  {
    icon: GitBranch,
    title: "Repeatable decision workflows",
    description:
      "Build governed AI workflows that run the same way every time — auditable, compliant, and ready for enterprise scrutiny.",
  },
  {
    icon: Users,
    title: "Intelligence that scales across teams",
    description:
      "From Finance to CS to Ops, Cimba delivers consistent operational intelligence wherever your teams need it.",
  },
];

const useCases = [
  {
    icon: BarChart3,
    title: "Accounting",
    description:
      "Automate reconciliation, variance analysis, and financial close workflows with governed AI agents.",
    href: "/use-cases#accounting",
  },
  {
    icon: TrendingUp,
    title: "P&L Scenario Modeling",
    description:
      "Run dynamic scenario models across revenue, cost, and margin drivers — instantly and repeatably.",
    href: "/use-cases#accounting",
  },
  {
    icon: FileSearch,
    title: "Flux Analysis",
    description:
      "Detect, explain, and surface financial flux automatically with full audit trails and compliance controls.",
    href: "/use-cases#accounting",
  },
];

const testimonials = [
  {
    quote:
      "Cimba transformed how our finance team operates. What used to take days now happens in minutes with complete auditability.",
    author: "VP of Finance",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "The ability to build repeatable workflows that our entire team can trust has been a game-changer for our operations.",
    author: "Head of Data & Analytics",
    company: "Fortune 500 Company",
  },
  {
    quote:
      "We finally have AI we can audit. Cimba gave us the confidence to operationalize intelligence across our org.",
    author: "Director of Business Operations",
    company: "High-Growth Startup",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "calc(100% + 40px) auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 lg:pt-36 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-grey-900 leading-[1.05] mb-8">
              <span className="block">Turn data and AI into</span>
              <RotatingText />
            </h1>

            <p className="text-lg md:text-xl text-grey-600 leading-relaxed max-w-2xl mb-12">
              Cimba operationalizes intelligence through governed agents and
              repeatable workflows, not just static dashboards or one-off AI
              answers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/demo"
                className="btn-primary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md"
              >
                Book a Demo
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/product"
                className="btn-secondary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md"
              >
                Explore Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white py-12 border-b border-grey-200">
        <div className="w-full px-6 lg:px-8">
          <p className="text-center text-[13px] font-medium text-grey-400 uppercase tracking-[0.15em] mb-8">
            Trusted by industry leaders
          </p>
          <div className="overflow-hidden">
            <div className="flex logo-ticker items-center">
              {[...customerLogos, ...customerLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 mx-12"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={280}
                    height={120}
                    className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento overview section */}
      <section className="bg-grey-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-12 gap-px bg-grey-200">
            {/* Video tile */}
            <div className="lg:col-span-7 bg-white flex flex-col justify-between">
              <div className="p-6 sm:p-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                    Product
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-2">
                    See Cimba in action
                  </h2>
                  <p className="text-[15px] text-grey-500 max-w-md">
                    Governed agents executing a full accounting workflow in
                    under 60 seconds.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-2 text-[13px] text-grey-500">
                  <span>Ask a question</span>
                  <span>Trigger a playbook</span>
                  <span>Review structured output</span>
                </div>
              </div>
              <div className="relative border-t border-grey-200 bg-gradient-to-br from-grey-100 via-grey-50 to-grey-200">
                <div className="aspect-video flex items-center justify-center">
                  <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-bento-dark shadow-xl hover:scale-105 transition-transform">
                    <Play size={28} className="text-grey-800 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

            {/* Why Cimba summary */}
            <div className="lg:col-span-5 bg-bento-dark p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                  Why Cimba
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-4">
                  AI that goes beyond dashboards
                </h2>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-6">
                  Operational intelligence built for Finance, CS, and Ops teams
                  that need AI they can actually audit.
                </p>
              </div>
              <ul className="space-y-3 text-[14px] text-grey-700">
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Agents that execute end-to-end workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Every answer sourced, traced, and reviewable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Deploy in days using your existing stack.</span>
                </li>
              </ul>
            </div>

            {/* Value props tile */}
            <div className="lg:col-span-4 bg-bento-dark p-8 sm:p-10 flex flex-col gap-6 min-h-[320px] sm:min-h-[360px]">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                Decision workflows
              </p>
              {valueProps.slice(0, 2).map((prop) => (
                <div key={prop.title} className="flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-grey-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <prop.icon size={22} className="text-grey-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-grey-900 mb-2 leading-tight">
                      {prop.title}
                    </h3>
                    <p className="text-[15px] text-grey-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Platform capabilities compact */}
            <div className="lg:col-span-4 bg-white p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                  Platform
                </p>
                <h3 className="text-xl font-bold text-grey-900 mb-5 leading-tight">
                  One surface for agents, workflows, and governance
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[15px] text-grey-600 mt-2">
                {capabilities.slice(0, 4).map((cap) => (
                  <div key={cap.title} className="flex gap-2 items-start">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{cap.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases ribbon */}
            <div className="lg:col-span-4 bg-primary p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-[0.15em] mb-4">
                  Use cases
                </p>
                <h3 className="text-xl font-bold text-white mb-5 leading-tight">
                  Built for accounting & revenue teams
                </h3>
                <ul className="space-y-3 text-[15px] text-white">
                  {useCases.map((uc) => (
                    <li key={uc.title} className="flex items-center gap-2">
                      <uc.icon size={18} className="text-white" />
                      <span>{uc.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/use-cases"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-white/90 underline underline-offset-4"
              >
                Explore all workflows
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mini testimonial tile */}
            <RotatingSpotlight items={testimonials} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
