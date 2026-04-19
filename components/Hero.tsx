"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="construction"
          className="w-full h-full object-cover"
        />

        {/* Dark + Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1a1408]/70 to-black/90"></div>

        {/* Golden Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,169,110,0.15),transparent_60%)]"></div>
      </div>

      {/* Content */}
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 max-w-5xl px-6"
      >
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#f5d28c] to-[#c9a96e] bg-clip-text text-transparent">
            Building World-Class
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#f5d28c] to-[#c9a96e] bg-clip-text text-transparent">
            Teams Across AEC & MEP Industries
          </span>
        </h1>

        {/* Glow Divider */}
        <div className="relative flex justify-center mb-6">
          <div className="w-40 h-[2px] bg-[#c9a96e]"></div>
          <div className="absolute w-60 h-[8px] bg-[#c9a96e] blur-xl opacity-40"></div>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Trinex Global Talent Solutions connects top-tier talent with 
          industry-leading organizations across Architecture, Engineering, 
          Construction, and MEP sectors.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          
          {/* Hire Talent */}
          <button className="bg-gradient-to-r from-[#d6b36a] to-[#c9a96e] text-black px-8 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(201,169,110,0.4)] hover:scale-105 transition duration-300">
            Hire Talent
          </button>

          {/* Book Consultation */}
          <button className="border border-[#c9a96e] px-8 py-3 rounded-lg text-white hover:bg-[#c9a96e] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,169,110,0.2)]">
            Book Consultation
          </button>

        </div>
      </motion.div>
    </section>
  );
}