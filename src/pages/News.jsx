export default function CuteUIPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 text-center">
        <div className="text-5xl mb-4">🐰</div>

        <h1 className="text-2xl font-extrabold text-pink-600 mb-2">
          Cute UI Page
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Simple, soft & adorable React + Tailwind UI
        </p>

        <div className="flex gap-3 justify-center">
          <button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm hover:bg-pink-600 transition">
            Like 💕
          </button>
          <button className="px-5 py-2 rounded-full bg-purple-400 text-white text-sm hover:bg-purple-500 transition">
            Share ✨
          </button>
        </div>
      </div>
    </div>
  );
}
