import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-blue-900 text-white px-6 py-4 shadow-md">
        {/* Left side - Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // 👈 place your logo in public/logo.png
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="font-semibold text-lg">My Website</h1>
        </div>

        {/* Right side - Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
