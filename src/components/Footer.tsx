import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "What is Cimba", href: "/product" },
    { label: "How It Works", href: "/product#how-it-works" },
    { label: "Security", href: "/product#security" },
    { label: "Integrations", href: "/product#integrations" },
  ],
  "Use Cases": [
    { label: "Accounting", href: "/use-cases#accounting" },
    { label: "Marketing", href: "/use-cases#marketing" },
    { label: "AI for Account Managers", href: "/use-cases#account-managers" },
  ],
  Company: [
    { label: "About Us", href: "/company" },
    { label: "Culture", href: "/company#culture" },
    { label: "Careers", href: "/company#careers" },
  ],
  Resources: [
    { label: "Blog", href: "/learn" },
    { label: "Tutorials", href: "/learn#tutorials" },
    { label: "Press", href: "/learn#press" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-grey-50">
      <div className="w-full px-6 lg:px-8 pt-10 pb-12">
        {/* Logo - brand color */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/cimba-logo.svg"
            alt="Cimba"
            width={960}
            height={360}
            className="w-full max-w-[320px] h-auto"
          />
        </Link>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-grey-900 uppercase tracking-[0.15em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-grey-700 hover:text-grey-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-grey-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-grey-600">
            &copy; {new Date().getFullYear()} Cimba. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[13px] text-grey-600 hover:text-grey-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-grey-600 hover:text-grey-900 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
