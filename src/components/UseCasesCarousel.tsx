"use client";

import { useState } from "react";

export type UseCaseSlide = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string];
  bullets: string[];
  imageSrc: string;
};

const useCases: UseCaseSlide[] = [
  {
    id: "ai-account-managers",
    label: "AI for Account Managers",
    eyebrow: "Sales · Customer Success",
    title: "AI for Account Managers",
    paragraphs: [
      "Give account managers instant access to performance insights for their customers or partners. Diagnose growth trends, answer ad-hoc questions, and identify upsell opportunities in real time.",
      "",
    ],
    bullets: [],
    imageSrc: "/hero-flux.png",
  },
  {
    id: "accounting-automation",
    label: "Accounting Automation",
    eyebrow: "Finance · Close",
    title: "Accounting Automation",
    paragraphs: [
      "Automate reconciliations, anomaly detection, and close workflows across spreadsheets and financial systems. Cimba validates numbers, flags irregularities, and explains changes automatically.",
      "",
    ],
    bullets: [],
    imageSrc: "/hero-reconciliation.png",
  },
  {
    id: "risk-monitoring",
    label: "Risk Monitoring",
    eyebrow: "Finance · Risk",
    title: "Risk Monitoring",
    paragraphs: [
      "Continuously analyze operational and financial data to detect anomalies and emerging risks. Cimba identifies patterns, explains root causes, and helps teams act before issues escalate.",
      "",
    ],
    bullets: [],
    imageSrc: "/hero-flux.png",
  },
];

export default function UseCasesCarousel() {
  const [activeId, setActiveId] = useState(useCases[0].id); // default first use case
  const active = useCases.find((u) => u.id === activeId) ?? useCases[0];

  return (
    <section className="bg-grey-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* Left: Use Cases nav */}
          <div className="flex-shrink-0 lg:w-[260px]">
            <h2 className="text-2xl sm:text-3xl font-normal text-primary leading-tight mb-6">
              Use Cases
            </h2>
            <nav
              className="rounded-2xl border border-grey-200 bg-white p-1 shadow-sm"
              aria-label="Use cases"
            >
              <div className="flex flex-col">
                {useCases.map((u, index) => {
                  const isActive = activeId === u.id;
                  const isFirst = index === 0;
                  const isLast = index === useCases.length - 1;

                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setActiveId(u.id)}
                      className={`text-left px-4 py-3 text-[15px] font-medium transition-colors border-transparent ${
                        isActive
                          ? "bg-primary text-white rounded-xl shadow-sm"
                          : "text-grey-700 hover:bg-grey-50"
                      } ${!isFirst ? "mt-1" : ""} ${
                        !isLast && !isActive ? "border-b border-grey-100" : ""
                      }`}
                    >
                      {u.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Right: Content + image */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl border border-grey-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                {active.title}
              </h2>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                {active.paragraphs[0]}
              </p>
              {active.paragraphs[1] && active.paragraphs[1].trim().length > 0 && (
                <p className="text-[15px] text-grey-600 leading-relaxed mb-8">
                  {active.paragraphs[1]}
                </p>
              )}
              <ul className="space-y-2.5 text-[14px] text-grey-700">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[360px] flex-shrink-0 min-h-[280px] bg-grey-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
