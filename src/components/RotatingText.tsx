 "use client";

import { useEffect, useState } from "react";

const phrases = [
  "operational intelligence",
  "trusted answers",
  "governed agents",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-primary inline-block">
      {phrases[index]}
    </span>
  );
}
