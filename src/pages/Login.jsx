import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { FaUserAlt, FaUserShield } from "react-icons/fa";

export default function Login() {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const credentials = {
    admin: { username: "admin", password: "123" },
    user: { username: "user", password: "123" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCred = credentials[role];

    if (username === selectedCred.username && password === selectedCred.password) {
      login(username, role);
      navigate(role === "admin" ? "/dashboard" : "/");
    } else {
      setError("❌ Invalid username or password for selected role");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-pink-50"}`}>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-pink-200 to-pink-100 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center animate-fadeIn"
      >
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6 text-center animate-pulse">🌸 CuteSite Login</h2>

        {error && <p className="text-red-500 text-sm mb-3 animate-shake">{error}</p>}

        {/* Role selector with icons */}
        <div className="w-full mb-4 relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-pink-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="absolute right-3 top-3 text-pink-500">
            {role === "user" ? <FaUserAlt /> : <FaUserShield />}
          </div>
        </div>

        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-4 py-3 rounded-2xl bg-pink-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-2xl bg-pink-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl font-bold shadow-lg transform transition hover:scale-105">
          Login
        </button>

        {/* Credential hints */}
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Admin: admin / 123</p>
          <p>User: user / 123</p>
        </div>
      </form>
    </div>
  );
}
