import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Play,
  ArrowRight,
  GitBranch,
  Users,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import RotatingSpotlight from "@/components/RotatingSpotlight";
import RotatingText from "@/components/RotatingText";
import UseCasesCarousel from "@/components/UseCasesCarousel";

const customerLogos = [
  { name: "Airbnb", src: "/logos/airbnb.png" },
  { name: "SoundHound AI", src: "/logos/soundhound.png" },
  { name: "KPMG", src: "/logos/kpmg.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "iCreditWorks", src: "/logos/icreditworks.png" },
  { name: "Skan AI", src: "/logos/skanai.png" },
];

const valueProps = [
  {
    icon: CheckCircle,
    title: "Trusted answers grounded in your data",
    description:
      "Every insight is sourced, traceable, and grounded in your actual operational data — never hallucinated, never assumed.",
    image: "/Frame_4-78aae2e1-e10d-4115-9ecf-31a029ee6ebd.png",
  },
  {
    icon: GitBranch,
    title: "Repeatable decision workflows",
    description:
      "Build governed AI workflows that run the same way every time — auditable, compliant, and ready for enterprise scrutiny.",
    image: "/Frame_3-2eb57c44-fa43-4d4f-945c-22f234285a1f.png",
  },
  {
    icon: Users,
    title: "Intelligence that scales across teams",
    description:
      "From Finance to CS to Ops, Cimba delivers consistent operational intelligence wherever your teams need it.",
    image: "/Frame_5-dcfcf873-2b0f-4746-acc3-dea40f2ca5a2.png",
  },
];

const testimonials = [
  {
    quote:
      "Cimba transformed how our finance team operates. What used to take days now happens in minutes with complete auditability.",
    author: "VP of Finance",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "The ability to build repeatable workflows that our entire team can trust has been a game-changer for our operations.",
    author: "Head of Data & Analytics",
    company: "Fortune 500 Company",
  },
  {
    quote:
      "We finally have AI we can audit. Cimba gave us the confidence to operationalize intelligence across our org.",
    author: "Director of Business Operations",
    company: "High-Growth Startup",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-grey-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-grey-900 leading-[1.05] mb-8">
              Turn data and AI into
              <span className="block min-h-[1.2em]">
                <RotatingText />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-grey-600 leading-relaxed max-w-2xl mb-12">
              Cimba builds governed AI workflows that turn complex questions
              into trusted, repeatable decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="btn-primary px-10 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
              >
                See Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="bg-grey-50 pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-primary shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-2xl hover:scale-105 transition-transform"
                aria-label="Play video"
              >
                <Play size={32} className="text-primary ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[400px] flex flex-col"
                style={{ backgroundImage: `url('${prop.image}')` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative flex-1" />
                <div className="relative p-8">
                  <h3 className="text-xl font-bold text-white leading-tight mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-[15px] text-white/90 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="bg-grey-50 py-14">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-[13px] font-medium text-grey-400 uppercase tracking-[0.15em] mb-8">
            Trusted by industry leaders
          </p>
          <div className="overflow-hidden">
            <div className="flex logo-ticker items-center">
              {[...customerLogos, ...customerLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 mx-12"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={280}
                    height={120}
                    className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <RotatingSpotlight items={testimonials} fullWidth />
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <UseCasesCarousel />

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
