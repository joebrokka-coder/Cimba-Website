 "use client";

import { useEffect, useState } from "react";

const phrases = [
  "operational intelligence",
  "trusted answers",
  "governed agents",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const current = phrases[index];
    setVisibleChars(0);

    const stepMs = 60;
    const pauseMs = 1200;
    let timeoutId: NodeJS.Timeout | null = null;

    const typeNext = (pos: number) => {
      if (pos <= current.length) {
        setVisibleChars(pos);
        timeoutId = setTimeout(() => typeNext(pos + 1), stepMs);
      } else {
        timeoutId = setTimeout(() => {
          setIndex((prev) => (prev + 1) % phrases.length);
        }, pauseMs);
      }
    };

    typeNext(0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [index]);

  return (
    <span className="text-primary inline-block">
      {phrases[index].slice(0, visibleChars)}
    </span>
  );
}
