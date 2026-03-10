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
    <div className="lg:col-span-12 bg-primary p-10 sm:p-14 lg:p-16 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center">
            <Icon size={40} className="text-white/40" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {active.title}
          </h3>
          <p className="text-[15px] text-white/85 leading-relaxed mb-3">
            {active.lead}
          </p>
          <p className="text-[14px] text-white/75 leading-relaxed">{active.body}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={`h-2.5 rounded-full transition-all ${
              activeId === item.id
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={item.title}
          />
        ))}
      </div>
    </div>
  );
}

