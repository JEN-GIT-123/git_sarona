import { FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-pink-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4">
          About Us 💖
        </h1>
        <p className="text-pink-600 text-lg md:text-xl max-w-2xl mx-auto">
          Bringing joy to your study life with cute stationery, gifts, and fun learning tools. 
          We believe that study can be adorable and inspiring!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-5xl shadow-xl hover:animate-slide-x cursor-pointer">
            🎀
          </div>
          <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-5xl shadow-xl hover:animate-slide-x cursor-pointer">
            📒
          </div>
          <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-5xl shadow-xl hover:animate-slide-x cursor-pointer">
            🖊️
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="https://via.placeholder.com/500x400?text=Our+Mission"
            alt="Mission"
            className="rounded-3xl shadow-lg hover:scale-105 transition transform"
          />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Our Mission 🌸
          </h2>
          <p className="text-pink-600 text-lg mb-6">
            To make studying fun, cute, and motivating! We create stationery and gifts that bring happiness and inspiration to students of all ages.
          </p>
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Our Vision ✨
          </h2>
          <p className="text-pink-600 text-lg">
            To become the go-to brand for adorable, high-quality study materials and gifts that make life brighter and more joyful.
          </p>
        </div>
      </section>

      {/* ================= FUN FACTS / TEAM ================= */}
      <section className="bg-pink-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-12">
            Why Choose Us? 💖
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-pink-200 hover:scale-105 transition transform">
              <FaHeart className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-700 mb-2">Made With Love</h3>
              <p className="text-pink-600">
                Every product is designed with care, cuteness, and attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-pink-200 hover:scale-105 transition transform">
              <FaLightbulb className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-700 mb-2">Creative Ideas</h3>
              <p className="text-pink-600">
                We believe learning should be fun and inspiring with creative stationery and tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-pink-200 hover:scale-105 transition transform">
              <FaUsers className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-700 mb-2">Happy Customers</h3>
              <p className="text-pink-600">
                Thousands of students and gift lovers enjoy our cute, high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
          Join Our Cute Study World 🎀
        </h2>
        <p className="text-pink-600 text-lg mb-8">
          Explore our adorable stationery and gifts today, and make your study life more joyful!
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
          Shop Now 🛒
        </button>
      </section>

    </div>
  );
}
