"use client";

import { useState, useEffect } from "react";

export type SpotlightItem = {
  quote: string;
  author: string;
  company: string;
};

const ROTATE_INTERVAL_MS = 8000;
const FADE_DURATION_MS = 500;

export default function RotatingSpotlight({ items }: { items: SpotlightItem[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [items.length]);

  const item = items[index];

  return (
    <div className="lg:col-span-8 bg-white p-6 sm:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em]">
          Customer spotlight
        </p>
        <span className="text-[12px] text-grey-400 whitespace-nowrap">
          Enterprise finance leader
        </span>
      </div>
      <div
        className="transition-opacity duration-500 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="text-[16px] text-grey-700 leading-relaxed mb-6 italic max-w-3xl min-h-[3.25rem]">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center justify-between text-[13px] text-grey-500">
          <span>{item.author}</span>
          <span className="hidden sm:inline">{item.company}</span>
        </div>
      </div>
    </div>
  );
}
