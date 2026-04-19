"use client";
import Link from "next/link";
import { useState } from "react";

export default function Industries() {
  const data = {
    architecture: {
      title: "Architecture",
      desc: "Designing functional and innovative spaces across residential, commercial, and industrial sectors.",
    },
    engineering: {
      title: "Engineering",
      desc: "Driving technical excellence across infrastructure, manufacturing, and development projects.",
    },
    construction: {
      title: "Construction",
      desc: "Delivering projects from concept to completion across all major construction sectors.",
    },
    mechanical: {
      title: "Mechanical",
      desc: "Specializing in HVAC, piping, and mechanical systems for modern buildings.",
    },
    electrical: {
      title: "Electrical",
      desc: "Powering infrastructure with reliable electrical systems and solutions.",
    },
    plumbing: {
      title: "Plumbing",
      desc: "Ensuring efficient water systems and piping solutions across projects.",
    },
  };

  const [active, setActive] = useState("architecture");

  return (
    <section className="bg-[#0B0F19] text-white py-24 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-[#C9A96E]">Industries</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We specialize across key sectors within AEC & MEP industries.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(data).map((key) => (
  <Link key={key} href={`/industries/${key}`}>
    <button
      className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-300 ${
        active === key
          ? "bg-[#C9A96E] text-black"
          : "border-white/30 text-white hover:border-[#C9A96E] hover:text-[#C9A96E]"
      }`}
    >
      {data[key as keyof typeof data].title}
    </button>
  </Link>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#C9A96E]">
          {data[active as keyof typeof data].title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {data[active as keyof typeof data].desc}
        </p>
      </div>
    </section>
  );
}