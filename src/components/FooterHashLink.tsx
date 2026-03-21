"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

function parseHref(href: string): { path: string; hash: string | null } {
  const i = href.indexOf("#");
  if (i === -1) return { path: href, hash: null };
  const pathPart = href.slice(0, i);
  const path = pathPart === "" ? "/" : pathPart;
  const hash = href.slice(i + 1);
  return { path, hash: hash || null };
}

/**
 * Footer link: same-route hash jumps scroll immediately; cross-route relies on HashScrollHandler.
 */
export default function FooterHashLink({ href, className, children }: Props) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { path, hash } = parseHref(href);
    if (!hash) return;
    if (path !== pathname) return;
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} scroll={false}>
      {children}
    </Link>
  );
}
