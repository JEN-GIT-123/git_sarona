import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white bg-pink-500 px-4 py-2 rounded-full shadow-md font-bold"
      : "text-pink-700 hover:bg-pink-300 px-4 py-2 rounded-full transition";

  return (
    <nav className="bg-pink-200 sticky top-0 z-50 shadow-lg border-b-4 border-pink-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-1">
          <NavLink to="/">
            <h1 className="text-3xl font-extrabold text-pink-700 cursor-pointer">🌸 CuteSite</h1>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-5 text-lg">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/product" className={linkClasses}>Product</NavLink>
          <NavLink to="/news" className={linkClasses}>News</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <NavLink to="/favorites" className="relative flex items-center justify-center w-11 h-11 bg-white text-pink-600 rounded-full hover:bg-pink-100 shadow transition">
            <FaHeart size={18} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {favoritesCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/cart" className="relative flex items-center justify-center w-11 h-11 bg-white text-pink-600 rounded-full hover:bg-pink-100 shadow transition">
            <FaShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </NavLink>
          {isLoggedIn ? (
            <div className="relative group ml-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-pink-600 rounded-full hover:bg-pink-100 transition">
                <FaUser />
                <span className="font-semibold">Profile</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition overflow-hidden text-gray-800">
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
            <>
              <NavLink
                to="/login"
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-100 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <NavLink to="/favorites" className="relative flex items-center justify-center w-10 h-10 bg-white text-pink-600 rounded-full hover:bg-pink-100 shadow transition">
            <FaHeart size={16} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {favoritesCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/cart" className="relative flex items-center justify-center w-10 h-10 bg-white text-pink-600 rounded-full hover:bg-pink-100 shadow transition">
            <FaShoppingCart size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </NavLink>

          <button className="text-pink-700 text-3xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-pink-100 py-4 px-6 flex flex-col gap-4 text-lg border-t-2 border-pink-300">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClasses}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/product" className={linkClasses}>Product</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/news" className={linkClasses}>News</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClasses}>Contact</NavLink>

          <div className="border-t border-pink-300 pt-4 flex flex-col gap-2">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-pink-500 text-white rounded-full font-semibold">Logout</button>
            ) : (
              <>
                <NavLink onClick={() => setOpen(false)} to="/login" className={linkClasses}>Login</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/register" className={linkClasses}>Register</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
