"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export type CorePrimitiveItem = {
  id: string;
  title: string;
  focusText: string;
  heroSrc: string;
};

const items: CorePrimitiveItem[] = [
  {
    id: "agents",
    title: "Agents",
    focusText:
      "Cimba agents combine data sources, business context, and analytical logic to answer questions and perform structured analysis.",
    heroSrc: "/core-primitives/agents.png",
  },
  {
    id: "business-context",
    title: "Business Context",
    focusText:
      "Business context allows teams to encode the meaning behind their data. A glossary of institutional knowledge that shapes how your agents understand data.",
    heroSrc: "/core-primitives/business-context.png",
  },
  {
    id: "playbooks",
    title: "Playbooks",
    focusText:
      "Playbooks are like a recipe that break down analytical tasks into multi-step processes that guide how questions are answered.",
    heroSrc: "/core-primitives/playbooks.png",
  },
  {
    id: "workflows",
    title: "Workflows",
    focusText:
      "Workflows orchestrate agents, playbooks, and business context into End-to-end execution pipelines that deliver consistent, governed intelligence.",
    heroSrc: "/core-primitives/workflows.png",
  },
];

const ROTATE_INTERVAL_MS = 5000;

const HERO_TRANSITION_MS = 240;

export default function CorePrimitivesCarousel() {
  const [activeId, setActiveId] = useState(items[0].id);
  const [currentId, setCurrentId] = useState(items[0].id);
  const [nextId, setNextId] = useState<string | null>(null);
  const [transitionActive, setTransitionActive] = useState(false);
  const active = items.find((i) => i.id === activeId) ?? items[0];
  const indexRef = useRef(0);

  // Start transition when activeId changes and we're not already showing it
  useEffect(() => {
    if (activeId !== currentId) setNextId(activeId);
  }, [activeId, currentId]);

  // Once both layers are in DOM, trigger the transition
  useEffect(() => {
    if (nextId == null) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionActive(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [nextId]);

  // When transition ends, commit current and clear next
  useEffect(() => {
    if (nextId == null) return;
    const t = setTimeout(() => {
      setCurrentId(nextId);
      setNextId(null);
      setTransitionActive(false);
    }, HERO_TRANSITION_MS);
    return () => clearTimeout(t);
  }, [nextId]);

  useEffect(() => {
    const t = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % items.length;
      setActiveId(items[indexRef.current].id);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const setActive = (id: string) => {
    const i = items.findIndex((x) => x.id === id);
    if (i >= 0) indexRef.current = i;
    setActiveId(id);
  };

  const displayedId = nextId ?? currentId;
  const leavingId = nextId ? currentId : null;
  const transitionStyle = {
    transition: `opacity ${HERO_TRANSITION_MS}ms ease-out`,
  };
  const leavingItem = leavingId ? items.find((i) => i.id === leavingId) : null;
  const nextItem = nextId ? items.find((i) => i.id === nextId) : null;
  const displayItem = items.find((i) => i.id === displayedId)!;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch min-h-[520px] lg:min-h-[620px]">
          {/* Left: CORE PRIMITIVES + tabs (selected expands with focus text) */}
          <div className="flex-shrink-0 lg:w-[380px]">
            <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-2">
              Core Primitives
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-8 max-w-xl">
              The building blocks of Cimba
            </h2>
            <div className="flex flex-col gap-3">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`text-left rounded-2xl border-2 p-5 transition-all duration-300 ease-out overflow-hidden ${
                      isActive
                        ? "border-transparent shadow-md"
                        : "border-grey-200 bg-white hover:border-grey-300 hover:bg-grey-50"
                    }`}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(31, 151, 211, 0.4), rgba(116, 20, 218, 0.4) 47%, rgba(7, 112, 227, 0.4)) border-box",
                            backgroundClip: "padding-box, border-box",
                          }
                        : undefined
                    }
                  >
                    <span
                      className={`block font-bold transition-all duration-300 ease-out ${
                        isActive
                          ? "text-primary text-2xl"
                          : "text-grey-900 text-[17px]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                      }}
                    >
                      <div className="min-h-0">
                        <p
                          className="mt-3 text-[16px] text-grey-700 leading-relaxed pt-px transition-opacity duration-300 ease-out"
                          style={{ opacity: isActive ? 1 : 0 }}
                        >
                          {item.focusText}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: hero image (max 654×551, no border) on pure white */}
          <div className="flex-1 min-w-0 relative min-h-[320px] flex items-center justify-center">
            <div className="relative w-full max-w-[654px] max-h-[551px] aspect-[654/551] overflow-hidden bg-white">
              {leavingItem && nextItem ? (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      ...transitionStyle,
                      opacity: transitionActive ? 0 : 1,
                    }}
                    aria-hidden
                  >
                    <Image
                      src={leavingItem.heroSrc}
                      alt=""
                      fill
                      unoptimized
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 654px"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      ...transitionStyle,
                      opacity: transitionActive ? 1 : 0,
                    }}
                  >
                    <Image
                      src={nextItem.heroSrc}
                      alt={nextItem.title}
                      fill
                      unoptimized
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 654px"
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={displayItem.heroSrc}
                  alt={displayItem.title}
                  fill
                  unoptimized
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 654px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
