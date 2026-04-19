export default function MechanicalPage() {
  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Mechanical <span className="text-[#C9A96E]">Industry</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Powering modern infrastructure through HVAC, piping, and mechanical systems.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Industry Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Mechanical systems are essential to building functionality, including
            heating, ventilation, air conditioning, and piping systems.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We work with contractors and firms to place skilled professionals
            across all types of mechanical projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Our Expertise
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ HVAC Systems</li>
            <li>✔ Industrial Mechanical Projects</li>
            <li>✔ Commercial Installations</li>
            <li>✔ Maintenance & Service Roles</li>
          </ul>
        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-[#C9A96E] text-center">
          Roles We Place
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "HVAC Technician",
            "Mechanical Engineer",
            "Project Manager",
            "Estimator",
            "Operations Manager",
            "Superintendent",
          ].map((role, i) => (
            <div key={i} className="bg-[#111827] p-5 rounded-lg border border-white/10 hover:border-[#C9A96E] transition text-center">
              {role}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Looking to Hire in Mechanical?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Submit Resume</button>
        </div>
      </section>

    </main>
  );
}