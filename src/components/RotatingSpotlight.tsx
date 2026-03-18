"use client";

import { useState, useEffect } from "react";

export type SpotlightItem = {
  quote: string;
  author: string;
  company: string;
};

const ROTATE_INTERVAL_MS = 8000;
const FADE_DURATION_MS = 500;

export default function RotatingSpotlight({
  items,
  fullWidth,
}: {
  items: SpotlightItem[];
  fullWidth?: boolean;
}) {
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
    <div
      className={
        fullWidth
          ? "w-full bg-grey-50 rounded-2xl p-8 sm:p-12 flex flex-col justify-between border border-grey-200"
          : "bg-grey-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-grey-200"
      }
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em]">
          Customer spotlight
        </p>
      </div>
      <div
        className="transition-opacity duration-500 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="text-2xl sm:text-3xl font-medium text-grey-700 leading-snug mb-6 italic max-w-3xl mx-auto text-center h-[6.5rem] sm:h-[8rem] overflow-hidden line-clamp-3">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center justify-center gap-6 text-[16px] text-grey-500">
          <span className="font-medium text-grey-700">{item.author}</span>
          <span className="hidden sm:inline">{item.company}</span>
        </div>
      </div>
    </div>
  );
}
