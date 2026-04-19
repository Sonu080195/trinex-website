export default function AboutPage() {
  return (
    <main className="bg-[#0B0F19] text-white pt-24">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#C9A96E]">Trinex</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Connecting the talent that builds the world across AEC & MEP industries.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Trinex Global Talent Solutions is a specialized recruitment firm focused exclusively on the Architecture, Engineering, Construction, and MEP industries. We connect organizations with highly skilled professionals who play a critical role in building and shaping modern infrastructure.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our approach is driven by deep industry knowledge, market intelligence, and a commitment to delivering quality at every stage of the hiring process. From mid-level professionals to executive leadership, we ensure every placement aligns with both technical requirements and long-term business goals.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
            What Sets Us Apart
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Industry-focused recruitment expertise</li>
            <li>✔ Data-driven hiring strategies</li>
            <li>✔ Access to a global talent network</li>
            <li>✔ Strong understanding of AEC & MEP markets</li>
            <li>✔ Commitment to long-term partnerships</li>
          </ul>
        </div>

      </section>

      {/* STATS / TRUST */}
      <section className="bg-[#111827] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-[#C9A96E]">100+</h3>
            <p className="text-gray-400 mt-2">Candidates Placed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#C9A96E]">30+</h3>
            <p className="text-gray-400 mt-2">Clients Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#C9A96E]">6+</h3>
            <p className="text-gray-400 mt-2">Industry Domains</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Partner with <span className="text-[#C9A96E]">Trinex</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Whether you're hiring or exploring opportunities, we are here to help.
        </p>

        <div className="flex justify-center gap-6">
          <button className="btn-primary">Hire Talent</button>
          <button className="btn-secondary">Explore Jobs</button>
        </div>
      </section>

    </main>
  );
}