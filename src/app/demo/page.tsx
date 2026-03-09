import { Play, ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "See Demo — Cimba",
  description:
    "See Cimba in action. Watch our product demo and book a personalized walkthrough with our team.",
};

const benefits = [
  "See governed AI agents execute real workflows",
  "Watch auditable, repeatable intelligence in action",
  "Understand how Cimba connects to your data stack",
  "Get a personalized walkthrough for your use case",
];

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-grey-900 tracking-tight leading-tight mb-6">
                See Cimba{" "}
                <span className="text-primary">in action</span>
              </h1>
              <p className="text-lg text-grey-600 leading-relaxed mb-8">
                Watch how Cimba turns your data into operational intelligence
                with governed AI agents and repeatable workflows. Then book a
                personalized demo for your team.
              </p>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-grey-700"
                  >
                    <CheckCircle
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-grey-900/10 border border-grey-200 bg-white">
              <div className="aspect-video bg-gradient-to-br from-grey-100 to-grey-200 flex items-center justify-center">
                <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-primary shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                  <Play
                    size={32}
                    className="text-white ml-1 group-hover:scale-110 transition-transform"
                    fill="white"
                  />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grey-900/60 to-transparent p-6">
                <p className="text-white text-sm font-medium">
                  Cimba Product Demo — 60 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-grey-900 tracking-tight mb-4">
              Book a personalized demo
            </h2>
            <p className="text-grey-600">
              Fill out the form below and our team will schedule a personalized
              walkthrough tailored to your use case.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-grey-700 mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-grey-700 mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-grey-700 mb-2"
              >
                Work email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-grey-700 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-grey-700 mb-2"
              >
                Your role
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
              >
                <option value="">Select your role</option>
                <option value="finance">Finance / FP&A</option>
                <option value="accounting">Accounting</option>
                <option value="data">Data / Analytics / BI</option>
                <option value="ai">AI Strategy</option>
                <option value="cs">Customer Success</option>
                <option value="ops">Business Operations</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-grey-700 mb-2"
              >
                What are you looking to solve?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-grey-300 text-grey-900 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your use case..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-10 py-0 text-base font-semibold btn-primary rounded-full transition-all shadow-lg"
            >
              Request Demo
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
