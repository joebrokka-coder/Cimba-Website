 "use client";

import { Sparkles, Repeat, BookOpen, Truck } from "lucide-react";
import { useState } from "react";

const items = [
  {
    id: 0,
    icon: Sparkles,
    title: "AI Enablement, Not Dashboards",
    lead: "Cimba is designed to help teams operationalize intelligence.",
    body: "Instead of building static reports, teams create agents and workflows that actively analyze data and answer questions.",
  },
  {
    id: 1,
    icon: Repeat,
    title: "Repeatable Workflows",
    lead: "Complex analyses can be turned into structured workflows that run the same way every time.",
    body: "This ensures teams receive consistent answers without rebuilding analysis from scratch.",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Business Context Built In",
    lead: "Cimba allows organizations to define the metrics, logic, and context that shape how questions should be answered.",
    body: "This ensures insights reflect how the business actually operates.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Operational Delivery",
    lead: "Insights are delivered through workflows that teams can run when needed.",
    body: "This moves analytics from passive reporting toward active decision support.",
  },
];

export default function CimbaDifferenceCarousel() {
  const [activeId, setActiveId] = useState(0);
  const active = items.find((i) => i.id === activeId) ?? items[0];
  const Icon = active.icon;

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
      {/* Left: nav stack (mirrors UseCasesCarousel style) */}
      <div className="flex-shrink-0 lg:w-[260px]">
        <h2 className="text-2xl sm:text-3xl font-normal text-primary leading-tight mb-2">
          The Cimba Solution
        </h2>
        <p className="text-[14px] text-grey-600 mb-6">
          Four core capabilities that help teams turn data and AI into
          operational intelligence.
        </p>
        <nav
          className="rounded-2xl border border-grey-200 bg-white p-1 shadow-sm"
          aria-label="Cimba difference"
        >
          <div className="flex flex-col">
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              const isFirst = index === 0;
              const isLast = index === items.length - 1;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`text-left px-4 py-3 text-[15px] font-medium transition-colors border-transparent ${
                    isActive
                      ? "bg-primary text-white rounded-xl shadow-sm"
                      : "text-grey-700 hover:bg-grey-50"
                  } ${!isFirst ? "mt-1" : ""} ${
                    !isLast && !isActive ? "border-b border-grey-100" : ""
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Right: content card (mirrors UseCasesCarousel layout) */}
      <div className="flex-1 min-w-0 bg-white rounded-2xl border border-grey-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-[260px] flex-shrink-0 min-h-[260px] bg-primary/95 flex items-center justify-center">
          <div className="aspect-square w-[70%] max-w-[220px] rounded-2xl bg-gradient-to-br from-white/[0.16] to-white/[0.04] border border-white/20 flex items-center justify-center">
            <Icon size={40} className="text-white/80" />
          </div>
        </div>
        <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-4">
            {active.title}
          </h3>
          <p className="text-[15px] text-grey-700 leading-relaxed mb-3">
            {active.lead}
          </p>
          <p className="text-[14px] text-grey-600 leading-relaxed">{active.body}</p>
        </div>
      </div>
    </div>
  );
}

