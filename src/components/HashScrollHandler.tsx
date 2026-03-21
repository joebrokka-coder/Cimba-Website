"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * After client-side navigations, scroll to `window.location.hash` if present.
 * Next.js App Router does not always scroll to hash targets on its own.
 */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return null;
}
