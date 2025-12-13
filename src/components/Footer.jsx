import { FaFacebookF, FaTelegramPlane, FaGithub } from "react-icons/fa";

export default function CuteFooter() {
  return (
    <footer className="bg-pink-100 border-t-4 border-pink-300 py-10 text-pink-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Logo & description */}
        <div>
          <h1 className="text-2xl font-extrabold mb-3 text-pink-700">🌸 CuteSite</h1>
          <p className="text-pink-600 text-sm">
            Bringing the cutest phones to your fingertips. Soft, pastel, and adorable shopping experience!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-pink-700">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/product" className="hover:text-pink-500 transition">Products</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Links */}
        <div>
          <h4 className="font-bold mb-3">Customer</h4>
          <ul className="space-y-2 text-pink-700">
            <li><a href="/login" className="hover:text-pink-500 transition">Login</a></li>
            <li><a href="/register" className="hover:text-pink-500 transition">Register</a></li>
            <li><a href="/orders" className="hover:text-pink-500 transition">Orders</a></li>
            <li><a href="/favorites" className="hover:text-pink-500 transition">Favorites</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-pink-600">
            <a href="https://web.facebook.com/chev.chen.7" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://t.me/chevjen" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-2xl">
              <FaTelegramPlane />
            </a>
            <a href="https://github.com/JEN-GIT-123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-2xl">
              <FaGithub />
            </a>
          </div>

          <div className="mt-6">
            <h5 className="font-bold mb-2">Newsletter</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-full border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-700 shadow-sm"
              />
              <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-pink-700 text-sm">
        © {new Date().getFullYear()} CutePhone 💗 All Rights Reserved.
      </div>
    </footer>
  );
}
