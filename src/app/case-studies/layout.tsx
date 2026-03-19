import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Cimba",
  description:
    "See how organizations use Cimba to power AI-driven workflows across operations, finance, and risk with real outcomes.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
