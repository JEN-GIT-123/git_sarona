import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulate login state

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white bg-pink-500 px-4 py-2 rounded-full shadow-md font-bold"
      : "text-pink-700 hover:bg-pink-300 px-4 py-2 rounded-full transition";

  return (
    <nav className="bg-pink-200 sticky top-0 z-50 shadow-lg border-b-4 border-pink-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-pink-700 drop-shadow-sm">
          🌸 Cutesite
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/product" className={linkClasses}>Product</NavLink>
          <NavLink to="/news" className={linkClasses}>News</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>

          {/* Login/Register or Profile */}
          {isLoggedIn ? (
            <div className="relative group ml-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-pink-600 rounded-full hover:bg-pink-100 transition">
                <FaUser size={18} />
                <span className="hidden sm:block font-semibold">Profile</span>
              </button>

              {/* Dropdown menu */}
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 overflow-hidden text-gray-800">
                <NavLink to="/orders" className="block px-4 py-3 hover:bg-pink-50">Orders</NavLink>
                <NavLink to="/favorites" className="block px-4 py-3 hover:bg-pink-50">Favorites</NavLink>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full text-left px-4 py-3 hover:bg-pink-50 text-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 ml-4">
              <NavLink
                to="/login"
                className="px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-100 transition"
                onClick={() => setIsLoggedIn(true)} // simulate login
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-pink-100 py-4 px-6 flex flex-col gap-4 text-lg border-t-2 border-pink-300">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClasses}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/product" className={linkClasses}>Product</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/news" className={linkClasses}>News</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClasses}>Contact</NavLink>

          {isLoggedIn ? (
            <>
              <NavLink to="/orders" onClick={() => setOpen(false)} className={linkClasses}>Orders</NavLink>
              <NavLink to="/favorites" onClick={() => setOpen(false)} className={linkClasses}>Favorites</NavLink>
              <button
                onClick={() => { setIsLoggedIn(false); setOpen(false); }}
                className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={() => { setIsLoggedIn(true); setOpen(false); }} className={linkClasses}>Login</NavLink>
              <NavLink to="/register" onClick={() => setOpen(false)} className={linkClasses}>Register</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
