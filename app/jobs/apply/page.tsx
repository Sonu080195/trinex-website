"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ApplyPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

  const sendEmail = (e: any) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);

  emailjs
    .sendForm(
      "service_v2hgggw",
      "template_vkozmnh",
      form.current,
      "80GSx6tDPDn83_vic"
    )
    .then(
      () => {
        setLoading(false);
        setSuccess(true);
        form.current?.reset(); // clears form
      },
      () => {
        setLoading(false);
        alert("Something went wrong. Try again.");
      }
    );
};

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Apply for <span className="text-[#C9A96E]">Job</span>
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#111827] p-8 rounded-xl space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-[#0B0F19]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#0B0F19]"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-3 rounded bg-[#0B0F19]"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about yourself"
            className="w-full p-3 rounded bg-[#0B0F19]"
          />

          <button
  type="submit"
  className="w-full bg-[#C9A96E] text-black py-3 rounded font-semibold"
>
  {loading ? "Submitting..." : "Submit Application"}
</button>
        </form>
        {success && (
  <p className="text-green-400 text-center mt-4">
    ✅ Application submitted successfully! We’ll contact you soon.
  </p>
)}
      </div>
    </main>
  );
}