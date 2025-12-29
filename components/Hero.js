import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-section py-20 sm:py-28">
        <div className="max-w-3xl relative">
          <div className="absolute -top-16 -left-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl glow" />
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Better food. Better you.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We help brands and businesses create delicious, nutritious, and sustainable
            food products that people love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">Start a project</Link>
            <Link href="#services" className="btn-outline">Explore services</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  );
}
