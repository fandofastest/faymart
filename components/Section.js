export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="container-section">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-gray-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
