import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle, Newspaper, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn — Cimba",
  description:
    "Explore Cimba's blog, tutorials, press releases, and upcoming events.",
};

const blogPosts = [
  {
    title: "Why Operational Intelligence Is the Next Frontier for Enterprise AI",
    excerpt:
      "Static dashboards are not enough. Learn how operational intelligence transforms the way enterprise teams make decisions.",
    category: "Thought Leadership",
    date: "Coming Soon",
  },
  {
    title: "Building Auditable AI Workflows for SOX Compliance",
    excerpt:
      "How Cimba ensures every AI-driven decision meets the highest compliance standards.",
    category: "Compliance",
    date: "Coming Soon",
  },
  {
    title: "From Dashboard to Decision: The Evolution of BI",
    excerpt:
      "The traditional BI stack is changing. Explore how governed AI agents are replacing static reports.",
    category: "Industry Trends",
    date: "Coming Soon",
  },
];

const sections = [
  {
    id: "blog",
    icon: BookOpen,
    title: "Blog",
    description:
      "Insights on AI enablement, operational intelligence, and enterprise workflows.",
  },
  {
    id: "tutorials",
    icon: PlayCircle,
    title: "Tutorials",
    description:
      "Step-by-step guides to get the most out of the Cimba platform.",
  },
  {
    id: "press",
    icon: Newspaper,
    title: "Press Releases",
    description: "The latest news, partnerships, and milestones from Cimba.",
  },
  {
    id: "events",
    icon: Calendar,
    title: "Annual Meetings & Events",
    description:
      "Join us at upcoming events, webinars, and annual meetings.",
  },
];

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-grey-900 tracking-tight leading-tight mb-6">
            Learn with <span className="text-primary">Cimba</span>
          </h1>
          <p className="text-lg text-grey-600 leading-relaxed max-w-3xl mx-auto">
            Explore our blog, tutorials, press releases, and events to stay up
            to date with the latest in AI-powered operational intelligence.
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="bg-white py-16 border-b border-grey-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="p-6 rounded-xl bg-grey-50 border border-grey-200 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <s.icon
                  size={24}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-grey-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-grey-500 leading-relaxed">
                  {s.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-12">
            Latest from the Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-grey-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-grey-100 to-grey-200 flex items-center justify-center">
                  <BookOpen size={32} className="text-grey-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-grey-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-grey-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-grey-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section id="tutorials" className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
            Tutorials
          </h2>
          <p className="text-grey-600 mb-12 max-w-2xl">
            Step-by-step guides are coming soon. Get started with Cimba by
            booking a demo and our team will walk you through everything.
          </p>
          <div className="p-12 rounded-2xl bg-white border border-grey-200 text-center">
            <PlayCircle size={48} className="text-grey-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              Tutorials coming soon
            </h3>
            <p className="text-grey-500 mb-6">
              We&apos;re building step-by-step guides to help you get the most
              out of Cimba.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Book a demo instead
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
            Press Releases
          </h2>
          <p className="text-grey-600 mb-12 max-w-2xl">
            Stay up to date with the latest news, partnerships, and milestones
            from Cimba.
          </p>
          <div className="p-12 rounded-2xl bg-grey-50 border border-grey-200 text-center">
            <Newspaper size={48} className="text-grey-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              Press releases coming soon
            </h3>
            <p className="text-grey-500">
              Check back for the latest announcements from Cimba.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
            Annual Meetings & Events
          </h2>
          <p className="text-grey-600 mb-12 max-w-2xl">
            Join us at upcoming events, webinars, and our annual meeting.
          </p>
          <div className="p-12 rounded-2xl bg-white border border-grey-200 text-center">
            <Calendar size={48} className="text-grey-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              Events coming soon
            </h3>
            <p className="text-grey-500">
              We&apos;ll announce upcoming events and webinars here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
