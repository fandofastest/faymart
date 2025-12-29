import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FOOD ABOUT YOU LIMITED" width={28} height={28} />
          <span className="font-semibold text-white">FOOD ABOUT YOU LIMITED</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <Link href="#about" className="hover:text-primary-300">About</Link>
          <Link href="#services" className="hover:text-primary-300">Services</Link>
          <Link href="#values" className="hover:text-primary-300">Values</Link>
          <Link href="#company" className="hover:text-primary-300">Company</Link>
          <Link href="#contact" className="btn-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
