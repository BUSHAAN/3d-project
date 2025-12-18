import { motion } from "motion/react";

export default function CenterContentSection({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <section
      data-shot="2"
      className="h-lvh px-12 bg-transparent text-white text-center snap-start"
    >
      <motion.div
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-12"
      >
        <div className="max-w-md text-center md:text-start">
          <h2 className="text-4xl font-semibold mb-6">Built for Performance</h2>

          <p className="text-lg mb-8">
            Strength is more than looks. Train for power, endurance, and
            control.
          </p>

          <button className="px-6 py-3 bg-adr-yellow text-black rounded hover:bg-gray-200">
            Join Now
          </button>
        </div>
        <div className="max-w-md text-center md:text-start">
          <h2 className="text-4xl font-semibold mb-6">Built for Performance</h2>

          <p className="text-lg mb-8">
            Strength is more than looks. Train for power, endurance, and
            control.
          </p>

          <button className="px-6 py-3 bg-adr-yellow text-black rounded hover:bg-gray-200">
            Join Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
