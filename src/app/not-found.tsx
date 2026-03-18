import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-normal text-grey-900 mb-2">Page not found</h1>
      <p className="text-grey-600 mb-8">The page you’re looking for doesn’t exist or was moved.</p>
      <Link
        href="/"
        className="px-6 py-3 text-[16px] font-medium text-white bg-grey-900 rounded-full hover:bg-grey-800 transition-colors"
      >
        Back to home
      </Link>
    </section>
  );
}
