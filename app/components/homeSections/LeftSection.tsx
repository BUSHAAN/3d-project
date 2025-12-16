export default function LeftContentSection() {
  return (
    <section
      data-shot="1"
      className="h-screen flex items-center bg-transparent text-black snap-start"
    >
      {/* Left space for model */}
      <div className="w-1/2" />

      <div className="w-1/2 px-16">
        <h2 className="text-4xl font-semibold mb-6">
          Sculpt Every Muscle
        </h2>

        <p className="text-lg mb-8">
          Programs designed to target strength, balance, and control.
        </p>

        <button className="px-6 py-3 border border-black rounded hover:bg-gray-200">
          View Programs
        </button>
      </div>
    </section>
  )
}
