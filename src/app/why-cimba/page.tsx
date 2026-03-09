import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Zap,
  Database,
  Heart,
  Quote,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Cimba — Trusted, Secure, Fast",
  description:
    "Discover why enterprises choose Cimba for AI-powered operational intelligence. Trusted, secure, and rapid deployment.",
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted",
    description:
      "Every output is sourced, traceable, and grounded in your actual data. Cimba never hallucinates, never assumes — every answer comes with a full audit trail so you can trust every decision.",
    highlights: [
      "Source-level traceability for every insight",
      "Deterministic outputs, not probabilistic guesses",
      "Governed execution with human-in-the-loop controls",
    ],
  },
  {
    icon: Lock,
    title: "Secure",
    description:
      "Built for enterprise from day one. SOX and SOC 2 compliant, with role-based access controls, encryption at rest and in transit, and complete audit logging for every action.",
    highlights: [
      "SOX and SOC 2 compliance",
      "Role-based access controls",
      "End-to-end encryption and audit logging",
    ],
  },
  {
    icon: Zap,
    title: "Speed of Deployment",
    description:
      "Go from zero to operational intelligence in days, not months. Cimba connects to your existing data stack and delivers value from day one with pre-built templates and guided onboarding.",
    highlights: [
      "Connect data sources in minutes",
      "Pre-built workflow templates",
      "Guided enterprise onboarding",
    ],
  },
  {
    icon: Database,
    title: "Data for All",
    description:
      "Democratize access to operational intelligence across your organization. Cimba makes enterprise data actionable for every team — no SQL required, no data science degree needed.",
    highlights: [
      "Natural language queries for everyone",
      "Self-serve intelligence for every team",
      "No technical expertise required",
    ],
  },
];

const customerQuotes = [
  {
    quote:
      "Cimba gave us the confidence to deploy AI in our most sensitive financial workflows. The auditability is unmatched.",
    author: "CFO",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "We reduced our monthly close time by 40% with Cimba's automated flux analysis and reconciliation workflows.",
    author: "VP of Finance",
    company: "Public Technology Company",
  },
  {
    quote:
      "The speed of deployment was incredible. We went from POC to production in under two weeks.",
    author: "Head of Data",
    company: "High-Growth Fintech",
  },
  {
    quote:
      "Cimba is the only AI platform we've found that our compliance team actually trusts. That says everything.",
    author: "Director of Operations",
    company: "Fortune 500 Financial Services",
  },
];

const customerLogos = [
  "Meta",
  "Airbnb",
  "KPMG",
  "Swiggy",
  "SoundHound",
  "iCreditWorks",
  "Skan AI",
];

export default function WhyCimbaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-grey-900 tracking-tight leading-tight mb-6">
            Why teams trust{" "}
            <span className="text-primary">Cimba</span>
          </h1>
          <p className="text-lg text-grey-600 leading-relaxed max-w-3xl mx-auto">
            Enterprise-grade AI that&apos;s auditable, secure, fast to deploy, and
            accessible to every team in your organization.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                    <reason.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-grey-900 tracking-tight mb-6">
                    {reason.title}
                  </h2>
                  <p className="text-grey-600 leading-relaxed text-lg mb-8">
                    {reason.description}
                  </p>
                  <ul className="space-y-3">
                    {reason.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-grey-700"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-grey-100 to-grey-200 border border-grey-200 flex items-center justify-center">
                    <reason.icon
                      size={64}
                      className="text-grey-300"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="bg-grey-50 py-16 border-y border-grey-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 text-center mb-4">
            Customers
          </h2>
          <p className="text-center text-grey-500 mb-10 max-w-xl mx-auto">
            Industry leaders trust Cimba to power their most critical operational workflows.
          </p>
          <div className="overflow-hidden">
            <div className="flex logo-ticker">
              {[...customerLogos, ...customerLogos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center"
                >
                  <div className="px-6 py-3 rounded-lg bg-white border border-grey-200 shadow-sm">
                    <span className="text-lg font-semibold text-grey-400 whitespace-nowrap">
                      {logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Quotes */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 tracking-tight mb-4">
              Customers love us
            </h2>
            <p className="text-lg text-grey-500 max-w-2xl mx-auto">
              Hear from the teams that rely on Cimba every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {customerQuotes.map((q, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-grey-50 border border-grey-200"
              >
                <Quote size={24} className="text-primary/30 mb-4" />
                <p className="text-grey-700 leading-relaxed text-lg mb-6">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-grey-900">{q.author}</p>
                  <p className="text-sm text-grey-500">{q.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Join the teams that trust Cimba
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
            See why leading enterprises choose Cimba for operational
            intelligence.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-grey-900 bg-white rounded-full hover:bg-grey-50 transition-all"
          >
            See Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
