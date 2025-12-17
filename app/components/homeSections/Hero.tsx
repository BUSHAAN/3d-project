import { motion } from "motion/react";

export default function HeroSection({ isActive }: { isActive: boolean }) {
  return (
    <section
      data-shot="0"
      className="h-screen flex justify-center md:justify-start text-white items-center bg-transparent snap-start"
    >
      <motion.div
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 px-16 text-center md:text-start "
      >
        <h1 className="text-5xl font-bold mb-6 text-[#fab804]">
          Build Real Strength
        </h1>

        <p className="text-lg mb-8">
          Train smarter, move better, and build a body that lasts.
        </p>

        <button
          className="px-6 py-3 border border-[#fab804] text-[#fab804] rounded  hover:bg-[#fab804] hover:text-black transition"
          onClick={() => {
            console.log("Get Started clicked");
          }}
        >
          Start Training
        </button>
      </motion.div>

      {/* Right side intentionally empty for model */}
    </section>
  );
}
