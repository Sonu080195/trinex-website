export default function ArchitecturePage() {
  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Architecture <span className="text-[#C9A96E]">Industry</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Designing modern spaces with precision, creativity, and functionality.
          We connect top architectural talent with leading firms.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Industry Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Architecture plays a critical role in shaping the built environment.
            From residential and commercial spaces to large-scale infrastructure,
            it blends creativity with engineering precision.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Trinex, we partner with architecture firms of all sizes to deliver
            professionals who bring both technical expertise and design innovation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Our Expertise
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Residential & Commercial Architecture</li>
            <li>✔ Interior & Landscape Design</li>
            <li>✔ Industrial & Infrastructure Projects</li>
            <li>✔ Large-scale Design Firms</li>
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
            "Architect",
            "Architectural Designer",
            "Interior Designer",
            "Project Manager",
            "Technical Designer",
            "Studio Lead",
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
          Looking to Hire in Architecture?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Submit Resume</button>
        </div>
      </section>

    </main>
  );
}