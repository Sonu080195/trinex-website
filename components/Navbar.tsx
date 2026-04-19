"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
  <img
    src="/TRINEX Logo.png"
    alt="Trinex"
    className="h-12 md:h-18 w-auto object-contain brightness-110 contrast-125"
  />
  <span className="text-sm tracking-wide text-gray-300 hidden md:block">
    
  </span>
</div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-medium">
  <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
  <Link href="/about" className="hover:text-[#C9A96E]">About</Link>
  <Link href="/industries" className="hover:text-[#C9A96E]">Industries</Link>
  <Link href="/clients" className="hover:text-[#C9A96E]">Clients</Link>
  <Link href="/candidates" className="hover:text-[#C9A96E]">Candidates</Link>
  
  {/* 🔥 IMPORTANT */}
  <Link href="/jobs" className="hover:text-[#C9A96E]">
    Jobs
  </Link>
</div>
      </div>
    </nav>
  );
}