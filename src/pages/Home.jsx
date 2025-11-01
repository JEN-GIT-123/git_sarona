export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Logo / Avatar */}
      <img
        src="/profile.png" // 👈 Put your image in public/profile.png
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
      />

      {/* Name / Title */}
      <h1 className="text-5xl font-bold mb-2">CHEV JEN</h1>
      <p className="text-lg opacity-90 mb-8">💻 Programmer | Developer | Creator</p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform">
          Hire Me
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 font-semibold transition-colors">
          View Projects
        </button>
      </div>

      {/* Decorative wave / footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

