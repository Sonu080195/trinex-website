export default function Footer() {
  return (
    <footer className="bg-[#05070d] text-white px-6 py-16 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <img
          src="/TRINEX Logo.png"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Trinex Global Talent Solutions connects top-tier professionals with
            leading organizations across AEC & MEP industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-[#C9A96E] mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/industries/architecture" className="hover:text-white">Industries</a></li>
            <li><a href="/clients" className="hover:text-white">Clients</a></li>
            <li><a href="/candidates" className="hover:text-white">Candidates</a></li>
            <li><a href="/" className="hover:text-white">Jobs</a></li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-sm font-semibold text-[#C9A96E] mb-4 uppercase tracking-wide">
            Projects we Support
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Educational/K-12</li>
            <li>Hospitals & Healthcare centers</li>
            <li>Labs/Life Sciences</li>
            <li>Airports & commercial terminals</li>
            <li>Data Canter</li>
            <li>Mission-Critical</li>
            <li>Hotels & Resorts</li>
            <li>Restaurants, Shopping malls, Retail/Grocery stores</li>
            <li>Office Buildings</li>
            <li>Single-Family & Multi-Family constructions</li>
            <li>Student Housings</li>
            <li>Rail & Metro constructions</li>
            <li>Roadways</li>
            <li>Waste-water Treatment</li>
            <li>Manufacturing Plants</li>
            <li>Warehouses & distribution centers</li>
            <li>Cold Storages</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-[#C9A96E] mb-4 uppercase tracking-wide">
            Contact
          </h3>
          <p className="text-gray-400 text-sm">
            Email: admin@trinexgts.com
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone: +91 (996)714-4597
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Trinex Global Talent Solutions. All rights reserved.
      </div>
    </footer>
  );
}