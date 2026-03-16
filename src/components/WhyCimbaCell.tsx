"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyCimbaCell() {
  const listWrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = listWrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -35% 0px",
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="lg:col-span-5 p-6 sm:p-8 flex flex-col bg-cover bg-center min-h-0"
      style={{
        backgroundImage: "url('/bento-grid-bg.png')",
      }}
    >
      <div className="flex-shrink-0">
        <p className="text-[13px] font-semibold text-white/90 uppercase tracking-[0.15em] mb-4">
          Why Cimba
        </p>
        <h2 className="text-2xl sm:text-3xl font-normal text-white leading-tight mb-4">
          AI that goes beyond dashboards
        </h2>
        <p className="text-[15px] text-white/90 leading-relaxed mb-6">
          Operational intelligence built for Finance, CS, and Ops teams that
          need AI they can actually audit.
        </p>
      </div>
      <div ref={listWrapRef} className="why-cimba-spacer">
        <div
          className={`why-cimba-list-wrap ${inView ? "in-view" : ""}`}
        >
          <ul className="space-y-3 text-xl font-normal text-white leading-tight">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
            <span>Agents that execute end-to-end workflows.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
            <span>Every answer sourced, traced, and reviewable.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
            <span>Deploy in days using your existing stack.</span>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
