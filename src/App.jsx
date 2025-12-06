import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Project";
import News from "./pages/News";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-pink-200 text-pink-900 px-14 py-4 shadow-lg border-b-4 border-pink-300">
        {/* Left side - Logo */}
                <h1 className="text-2xl font-extrabold text-pink-700">🌸 CuteSite</h1>

        {/* Right side - Links */}
        <div className="flex gap-8 text-lg">
          <Link to="/" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition">
            About
          </Link>
          <Link to="/product" className="hover:text-pink-600 transition">
            Product
          </Link>
          <Link to="/news" className="hover:text-pink-600 transition">
            News
          </Link>
        </div>
      </nav>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}
