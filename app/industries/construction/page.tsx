export default function ConstructionPage() {
  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Construction <span className="text-[#C9A96E]">Industry</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Turning vision into reality through planning, execution, and project excellence.
          We connect top construction professionals with leading organizations.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Industry Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Construction is a dynamic industry that brings designs to life.
            It involves multiple stages—from planning and budgeting to execution
            and project delivery—across residential, commercial, and industrial sectors.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Trinex, we work with contractors, developers, and project management firms
            to deliver skilled professionals at every stage of construction projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Our Expertise
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Commercial & Residential Construction</li>
            <li>✔ Industrial & Infrastructure Projects</li>
            <li>✔ General Contractors & Developers</li>
            <li>✔ Project Management & Site Execution</li>
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
            "Project Manager",
            "Superintendent",
            "Estimator",
            "Site Engineer",
            "Safety Manager",
            "Project Executive",
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
          Looking to Hire in Construction?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Submit Resume</button>
        </div>
      </section>

    </main>
  );
}