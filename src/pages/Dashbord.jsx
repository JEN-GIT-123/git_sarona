import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaUsers, FaClipboardList, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass =
    "flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-pink-700 bg-pink-100 hover:bg-pink-200 shadow transition transform hover:scale-105 text-sm";
  const activeLink = "bg-pink-500 text-white shadow-lg";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-pink-50">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-48 p-4 flex-col gap-3 shadow-lg rounded-r-2xl bg-pink-200">
        <h2 className="text-2xl font-extrabold text-pink-600 text-center mb-4 animate-pulse">🌸 Dashboard</h2>
        <NavLink to="/dashboard" end className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/products" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaBoxOpen /> Products</NavLink>
        <NavLink to="/dashboard/users" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaUsers /> Users</NavLink>
        <NavLink to="/dashboard/orders" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaClipboardList /> Orders</NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow transition transform hover:scale-105 mt-auto text-sm"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          className="m-4 p-2 bg-pink-200 rounded-lg shadow"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {open && (
          <aside className="fixed top-0 left-0 w-64 h-full p-4 flex flex-col gap-3 shadow-lg bg-pink-200 z-50">
            <h2 className="text-2xl font-extrabold text-pink-600 text-center mb-4 animate-pulse">🌸 Dashboard</h2>
            <NavLink onClick={() => setOpen(false)} to="/dashboard" end className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}>
              Dashboard
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/dashboard/products" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaBoxOpen /> Products</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/dashboard/users" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaUsers /> Users</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/dashboard/orders" className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ""}`}><FaClipboardList /> Orders</NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow transition transform hover:scale-105 mt-auto text-sm"
            >
              <FaSignOutAlt /> Logout
            </button>
          </aside>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="mb-6 text-center md:text-left rounded-2xl p-6 shadow-lg bg-pink-100">
          <h1 className="text-2xl md:text-3xl font-extrabold text-pink-700 mb-2">🌸 Welcome to Your Dashboard!</h1>
          <p className="text-pink-600 text-sm md:text-lg">
            Manage your products, users, and orders in a cute pink style 💖
          </p>
        </div>

        <div className="mt-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
