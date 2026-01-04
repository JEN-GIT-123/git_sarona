import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white bg-pink-400 px-3 py-1.5 rounded-full text-sm font-semibold"
      : "text-pink-700 hover:bg-pink-200 px-3 py-1.5 rounded-full text-sm transition";

  const handleProtectedClick = (path) => {
    if (!user) return navigate("/login");
    navigate(path);
  };

  return (
    <nav className="bg-pink-200 sticky top-0 z-50 shadow-md border-b-4 border-pink-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-extrabold text-pink-600">
          🌸 CuteSite
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/product" className={linkClasses}>Shop</NavLink>
          <NavLink to="/news" className={linkClasses}>News</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Favorites */}
          <button
            onClick={() => handleProtectedClick("/favorites")}
            className="relative w-9 h-9 flex items-center justify-center bg-white text-pink-500 rounded-full shadow hover:bg-pink-50"
          >
            <FaHeart size={14} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 text-white text-[10px] rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => handleProtectedClick("/cart")}
            className="relative w-9 h-9 flex items-center justify-center bg-white text-pink-500 rounded-full shadow hover:bg-pink-50"
          >
            <FaShoppingCart size={14} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 text-white text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User */}
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-pink-600 text-sm shadow">
                <FaUser size={12} />
                <span>{user.username}</span>
              </button>

              <div className="absolute right-0 mt-2 w-36 bg-white border border-pink-200 rounded-xl shadow opacity-0 group-hover:opacity-100 transition text-sm">
                <NavLink to="/profile" className="block px-3 py-2 hover:bg-pink-50">Profile</NavLink>
                <NavLink to="/orders" className="block px-3 py-2 hover:bg-pink-50">Orders</NavLink>
                <NavLink to="/favorites" className="block px-3 py-2 hover:bg-pink-50">Favorites</NavLink>
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-red-400 hover:bg-pink-50"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="text-sm px-3 py-1.5 bg-white rounded-full text-pink-600">
                Login
              </NavLink>
              <NavLink to="/register" className="text-sm px-3 py-1.5 bg-pink-400 text-white rounded-full">
                Join
              </NavLink>
            </>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-pink-600 text-xl ml-1"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-pink-50 px-4 py-3 flex flex-col gap-2 border-t border-pink-200">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClasses}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/product" className={linkClasses}>Shop</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/news" className={linkClasses}>News</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClasses}>Contact</NavLink>

          {user ? (
            <button onClick={logout} className="mt-2 text-sm bg-pink-400 text-white rounded-full py-2">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className={linkClasses}>Login</NavLink>
              <NavLink to="/register" className={linkClasses}>Register</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
