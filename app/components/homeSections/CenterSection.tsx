export default function CenterContentSection() {
  return (
    <section
      data-shot="2"
      className=" px-12 h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 bg-transparent text-black text-center snap-start"
    >
      <div className="max-w-md text-center md:text-start">
        <h2 className="text-4xl font-semibold mb-6">Built for Performance</h2>

        <p className="text-lg mb-8">
          Strength is more than looks. Train for power, endurance, and control.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200">
          Join Now
        </button>
      </div>
      <div className="max-w-md ">
        <h2 className="text-4xl font-semibold mb-6">Built for Performance</h2>

        <p className="text-lg mb-8">
          Strength is more than looks. Train for power, endurance, and control.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200">
          Join Now
        </button>
      </div>
    </section>
  );
}
