export default function HeroSection() {
  return (
    <section
      data-shot="0"
      className="h-screen flex justify-center text-black items-center bg-transparent snap-start"
    >
      <div className="md:w-1/2 px-16 text-center md:text-start"> 
        <h1 className="text-5xl font-bold mb-6">Build Real Strength</h1>

        <p className="text-lg mb-8">
          Train smarter, move better, and build a body that lasts.
        </p>

        <button
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-300 hover:text-red-500 transition"
          onClick={() => {
            console.log("Get Started clicked");
          }}
        >
          Start Training
        </button>
      </div>

      {/* Right side intentionally empty for model */}
      <div className="w-1/2" />
    </section>
  );
}
