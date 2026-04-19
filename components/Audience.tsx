import Link from "next/link";

export default function Audience() {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/cc.png"
          alt="background"
          className="w-full h-full object-cover blur-sm scale-105"
        />

        {/* STRONG GRADIENT OVERLAY (MAIN FIX) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Built for <span className="text-[#C9A96E]">Clients & Candidates</span>
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Whether you're hiring top talent or looking for your next opportunity,
            we’ve got you covered.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
          
          {/* Clients */}
          <div className="bg-black/60 backdrop-blur-lg p-10 rounded-xl border border-white/10 hover:border-accent transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              For Clients
            </h3>

            <p className="text-gray-200 mb-6">
              Partner with us to find high-quality professionals tailored to your
              project needs. We deliver fast, precise, and reliable hiring solutions.
            </p>

            <button className="bg-gradient-to-r from-[#d6b36a] to-[#c9a96e] text-black px-8 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(201,169,110,0.4)] hover:scale-105 transition duration-300">
              Hire Talent
            </button>
          </div>

          {/* Candidates */}
          <div className="bg-black/60 backdrop-blur-lg p-10 rounded-xl border border-white/10 hover:border-accent transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              For Candidates
            </h3>

            <p className="text-gray-200 mb-6">
              Explore career opportunities that align with your skills and goals.
              We connect you with top companies in the AEC & MEP industries.
            </p>

            <Link
            href="/jobs"
            className="inline-block bg-gradient-to-r from-[#d6b36a] to-[#c9a96e] text-black px-8 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(201,169,110,0.4)] hover:scale-105 transition duration-300"
            >
              Explore Jobs
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}