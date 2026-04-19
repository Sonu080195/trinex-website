"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert("Message sent!");
  };

  return (
    <section className="bg-[#0B0F19] text-white py-24 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-[#C9A96E]">Touch</span>
        </h2>
        <p className="text-gray-400">
          Looking to hire, find a job, or just have a question? Reach out to us.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-lg bg-[#111827] border border-white/10"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-lg bg-[#111827] border border-white/10"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full p-4 rounded-lg bg-[#111827] border border-white/10"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          type="submit"
          className="bg-[#C9A96E] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}