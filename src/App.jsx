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
            src="data:image/jpeg;base64,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" // 👈 place your logo in public/logo.png
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
