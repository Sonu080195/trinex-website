export default function WhyTrinex() {
  return (
    <section className="relative py-24 px-6 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/WhyTrinex.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark + Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#1a1408]/70 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why <span className="text-[#C9A96E]">Trinex</span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          We combine deep industry expertise with a strategic approach to deliver
          high-impact hiring solutions.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 text-left">

          {[
            "Specialized exclusively in AEC & MEP sectors for precise hiring solutions.",
            "Backed by research, insights, and market intelligence.",
            "Access top-tier professionals across multiple geographies.",
            "Fast hiring without compromising quality or fit.",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 
              hover:border-[#C9A96E] hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] 
              transition duration-300"
            >
              {item}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}