import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="container-section py-8 text-sm text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="text-center sm:text-left">
          <p>© {new Date().getFullYear()} FOOD ABOUT YOU LIMITED. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-400">Company No. 11795012 — England and Wales</p>
        </div>
        <div className="text-xs text-center sm:text-right flex items-center gap-3">
          <Link href="/privacy-policy" className="underline hover:text-primary-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <p className="text-gray-400">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
