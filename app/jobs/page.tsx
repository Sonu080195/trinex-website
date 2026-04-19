import Link from "next/link";

export default function JobsPage() {
  const jobs = [
    {
      title: "Project Manager",
      location: "Los Angeles, CA",
      type: "Full-Time",
    },
    {
      title: "Mechanical HVAC Project Manager",
      location: "Dallas, TX",
      type: "Contract",
    },
    {
      title: "Electrical Superintendent",
      location: "Toronto, Canada",
      type: "Full-Time",
    },
    {
        title: "Electrical Preoject Engineer",
      location: "Toronto, Canada",
      type: "Full-Time",
    },
    {
        title: "Industrial Superintendent",
      location: "Florida",
      type: "Full-Time",
    },
    {
        title: "Travelling Sr. Superintendent",
      location: "Phoenix, AZ",
      type: "Full-Time",
    },
    {
        title: "Healthcare/OSHPD Sr. Project Manager",
      location: "San Jose, CA",
      type: "Full-Time",
    },
    {
        title: "Plumbing/Piping Superintendent",
      location: "Austin, TX",
      type: "Full-Time",
    },
    {
      title: "K-12 Sr. Project Manager",
      location: "Sacramento, CA",
      type: "Full-Time",
    },
  ];

  return (
    <main className="bg-[#0B0F19] text-white pt-24 min-h-screen">

      {/* HEADER */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Explore <span className="text-[#C9A96E]">Opportunities</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover top roles across AEC & MEP industries and take the next step in your career.
        </p>
      </section>

      {/* JOB LIST */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-xl border border-white/10 hover:border-[#C9A96E] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {job.title}
            </h3>

            <p className="text-gray-400 mb-1">
              📍 {job.location}
            </p>

            <p className="text-gray-400 mb-4">
              💼 {job.type}
            </p>

            <Link href="/jobs/apply">
  <button className="bg-gradient-to-r from-[#d6b36a] to-[#c9a96e] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300">
    Apply Now
  </button>
</Link>
          </div>
        ))}

      </section>
    </main>
  );
}