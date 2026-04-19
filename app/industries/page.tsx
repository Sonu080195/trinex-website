const data: any = {
  architecture: {
    title: "Architecture",
    desc: "Architecture is at the forefront of designing functional, aesthetic, and sustainable spaces. We partner with firms ranging from boutique studios to large-scale design organizations.",
    roles: [
      "Architect",
      "Architectural Designer",
      "Interior Designer",
      "Project Manager",
      "Technical Designer",
    ],
  },

  engineering: {
    title: "Engineering",
    desc: "Engineering drives innovation across infrastructure, manufacturing, and development. We help organizations secure highly skilled technical professionals.",
    roles: [
      "Civil Engineer",
      "Project Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Principal Engineer",
    ],
  },

  construction: {
    title: "Construction",
    desc: "Construction transforms ideas into reality. We support contractors and developers with talent across all project phases.",
    roles: [
      "Project Manager",
      "Superintendent",
      "Estimator",
      "Safety Manager",
      "Project Executive",
    ],
  },

  mechanical: {
    title: "Mechanical",
    desc: "Mechanical systems are critical to modern infrastructure, including HVAC, piping, and energy systems.",
    roles: [
      "HVAC Technician",
      "Mechanical Engineer",
      "Project Manager",
      "Estimator",
    ],
  },

  electrical: {
    title: "Electrical",
    desc: "Electrical systems power every aspect of infrastructure, from residential to large-scale industrial projects.",
    roles: [
      "Electrician",
      "Electrical Engineer",
      "Project Manager",
      "Estimator",
    ],
  },

  plumbing: {
    title: "Plumbing",
    desc: "Plumbing ensures efficient water systems across residential, commercial, and industrial environments.",
    roles: [
      "Plumber",
      "Pipefitter",
      "Project Manager",
      "Estimator",
    ],
  },
};

export default function IndustryPage({ params }: any) {
  const industry = data[params.industry];

  if (!industry) {
    return (
      <div className="text-white text-center pt-32">
        Industry not found
      </div>
    );
  }

  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {industry.title} <span className="text-[#C9A96E]">Industry</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          {industry.desc}
        </p>
      </section>

      {/* ROLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-[#C9A96E]">
          Roles We Place
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {industry.roles.map((role: string, i: number) => (
            <div
              key={i}
              className="bg-[#111827] p-5 rounded-lg border border-white/10 hover:border-[#C9A96E] transition"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Looking to Hire in {industry.title}?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Submit Resume</button>
        </div>
      </section>

    </main>
  );
}