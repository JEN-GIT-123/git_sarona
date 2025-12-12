import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-pink-600 text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
