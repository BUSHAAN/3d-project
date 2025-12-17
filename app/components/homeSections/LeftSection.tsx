import { motion } from "motion/react";

export default function LeftContentSection({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <section
      data-shot="1"
      className="h-screen  bg-transparent text-black snap-start max-w-screen overflow-hidden"
    >
      <motion.div
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center h-full"
      >
        {/* Left space for model */}
        <div className="md:w-1/2 hidden md:block" />

        <div className="md:w-1/2 px-16 text-center md:text-start">
          <h2 className="text-4xl font-semibold mb-6 left-">
            Sculpt Every Muscle
          </h2>

          <p className="text-lg mb-8">
            Programs designed to target strength, balance, and control.
          </p>

          <button className="px-6 py-3 border border-black rounded hover:bg-gray-200">
            View Programs
          </button>
        </div>
      </motion.div>
    </section>
  );
}
