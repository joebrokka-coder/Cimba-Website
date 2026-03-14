"use client";

import { useRef, useState, useEffect } from "react";

const riseOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -15% 0px",
  threshold: 0.25,
};

export default function ValuePropsSection({
  children,
}: {
  children: React.ReactNode;
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
      className={`bg-white py-20 lg:py-28 value-props-rise ${inView ? "in-view" : ""}`}
    >
      {children}
    </section>
  );
}
