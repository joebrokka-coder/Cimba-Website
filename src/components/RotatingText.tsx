"use client";

import { useState, useEffect, useCallback } from "react";

const phrases = [
  "operational intelligence",
  "repeatable workflows",
  "governed agents",
];

export default function RotatingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [fading, setFading] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (displayedText.length < currentPhrase.length) {
      setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
    }
  }, [displayedText, currentPhrase]);

  useEffect(() => {
    if (displayedText.length < currentPhrase.length) {
      const timer = setTimeout(tick, 60);
      return () => clearTimeout(timer);
    }

    const pauseTimer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setFading(false);
        setDisplayedText("");
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
    }, 2000);

    return () => clearTimeout(pauseTimer);
  }, [tick, displayedText, currentPhrase]);

  return (
    <span
      className="text-primary inline-block transition-opacity duration-500 ease-in-out"
      style={{ opacity: fading ? 0 : 1 }}
    >
      {displayedText}
      {displayedText.length < currentPhrase.length && (
        <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}
