export default function CuteHome() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold text-pink-700 mb-4">Welcome Cutie! 💖</h2>
        <p className="text-pink-600 max-w-xl mx-auto mb-6 text-lg">
          A soft, pastel, and adorable homepage UI made with React + Tailwind.
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition text-lg">
          Start Exploring ✨
        </button>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-pink-700">🌷 Cute Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow text-center border-2 border-pink-200">
            <h4 className="font-semibold text-xl">💕 Soft Colors</h4>
            <p className="text-pink-600 mt-2">Pastel tones for a friendly and cozy vibe.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow text-center border-2 border-pink-200">
            <h4 className="font-semibold text-xl">🌈 Kawaii Layout</h4>
            <p className="text-pink-600 mt-2">Rounded shapes and heartwarming visuals.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow text-center border-2 border-pink-200">
            <h4 className="font-semibold text-xl">✨ Easy to Customize</h4>
            <p className="text-pink-600 mt-2">Adjust colors, icons, and sections as you like.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-200 border-t-4 border-pink-300 py-6 text-center text-pink-700 text-sm">
        © {new Date().getFullYear()} CuteSite 💗 All Rights Reserved.
      </footer>
    </div>
  );
}
