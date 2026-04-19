export default function PlumbingPage() {
  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Plumbing <span className="text-[#C9A96E]">Industry</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Ensuring efficient water systems, piping, and infrastructure across modern construction projects.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Industry Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Plumbing is a critical part of the built environment, supporting water supply,
            drainage systems, and piping infrastructure across residential, commercial,
            and industrial projects.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Trinex, we work with contractors and service providers to place
            skilled professionals across all levels of plumbing projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Our Expertise
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Commercial & Residential Plumbing</li>
            <li>✔ Industrial Piping Systems</li>
            <li>✔ Water Supply & Drainage Systems</li>
            <li>✔ Maintenance & Installation Projects</li>
          </ul>
        </div>

      </section>

      {/* ROLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-[#C9A96E] text-center">
          Roles We Place
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Plumber",
            "Pipefitter",
            "Project Manager",
            "Estimator",
            "Foreman",
            "Site Supervisor",
          ].map((role, i) => (
            <div
              key={i}
              className="bg-[#111827] p-5 rounded-lg border border-white/10 hover:border-[#C9A96E] transition text-center"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Looking to Hire in Plumbing?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Submit Resume</button>
        </div>
      </section>

    </main>
  );
}