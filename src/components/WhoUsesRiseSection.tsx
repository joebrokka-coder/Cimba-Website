"use client";

import { useRef, useState, useEffect } from "react";

const riseOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.2,
};

export default function WhoUsesRiseSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, riseOptions);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`who-uses-rise ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
