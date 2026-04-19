"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  function handleClickOutside(event: any) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center text-white">
        
        {/* 🔥 LOGO LEFT (BIG & CLEAN) */}
        <Link href="/" className="flex items-center">
          <img
            src="/TRINEX Logo.png"
            alt="Trinex"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* 🔥 MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          
          <Link href="/" className="hover:text-[#C9A96E] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#C9A96E] transition">
            About
          </Link>

          {/* 🔥 INDUSTRIES DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
  <button
    onClick={() => setOpen(!open)}
    className="hover:text-[#C9A96E] transition"
  >
    Industries
  </button>

  {open && (
    <div className="absolute top-10 left-0 z-50 flex flex-col gap-2 text-sm">
      
      <Link href="/industries/architecture" onClick={() => setOpen(false)}>
        Architecture
      </Link>
      <Link href="/industries/engineering" onClick={() => setOpen(false)}>
        Engineering
      </Link>
      <Link href="/industries/construction" onClick={() => setOpen(false)}>
        Construction
      </Link>
      <Link href="/industries/mechanical" onClick={() => setOpen(false)}>
        Mechanical
      </Link>
      <Link href="/industries/electrical" onClick={() => setOpen(false)}>
        Electrical
      </Link>
      <Link href="/industries/plumbing" onClick={() => setOpen(false)}>
        Plumbing
      </Link>

    </div>
  )}
</div>

          <Link href="/clients" className="hover:text-[#C9A96E] transition">
            Clients
          </Link>

          <Link href="/candidates" className="hover:text-[#C9A96E] transition">
            Candidates
          </Link>

          <Link href="/jobs" className="hover:text-[#C9A96E] transition">
            Jobs
          </Link>
        </div>

        {/* 🔥 MOBILE (SIMPLE FOR NOW) */}
        <div className="md:hidden">
          <span className="text-sm text-gray-300">Menu</span>
        </div>
      </div>
    </nav>
  );
}