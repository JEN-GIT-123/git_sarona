import { FaTruck, FaClock, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";
import { useAuth } from "../context/AuthContext"; // ✅ check if user is logged in
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Cute Notebook", price: 9.99, image: "/images/notebook.png" },
  { id: 2, name: "Pink Pen Set", price: 6.99, image: "/images/pens.png" },
  { id: 3, name: "Sticker Pack", price: 4.99, image: "/images/stickers.png" },
];

export default function Home() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (!user) return navigate("/login"); // redirect if not logged in
    addToCart(item);
  };

  const handleFavorite = (item) => {
    if (!user) return navigate("/login"); // redirect if not logged in
    isFavorite(item.id) ? removeFromFavorites(item.id) : addToFavorites(item);
  };

  return (
    <div className="bg-pink-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-pink-700 leading-tight">
              Cute Things <br /> Make Life Happy 🎀
            </h1>
            <p className="mt-4 text-pink-600 text-lg">
              Discover adorable stationery & gifts you will love 💕
            </p>

            <div className="mt-6 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow w-fit">
              <FaClock className="text-pink-500" />
              <span className="text-pink-700 font-semibold">
                Limited offer today only!
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-pink-100 rounded-full flex items-center justify-center text-6xl shadow-xl animate-pulse">
              🎀📒🖊️
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PRODUCT ================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">Why Our Products? 💖</h2>
          <p className="text-pink-600 text-lg leading-relaxed">
            Our cute stationery is made with love 🌸  
            Perfect for students, gifts, and anyone who loves adorable things.
            High quality, affordable price, and super cute design ✨
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
            New Products 🌟
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transition flex flex-col">

                <div className="h-48 bg-pink-50 rounded-2xl flex items-center justify-center mb-4">
                  <img src={item.image} alt={item.name} className="h-full object-contain" />
                </div>

                <h3 className="text-xl font-bold text-pink-700">{item.name}</h3>
                <p className="text-pink-600 mb-4">${item.price.toFixed(2)}</p>

                <div className="mt-auto flex gap-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 flex items-center justify-center gap-2 font-semibold"
                  >
                    <FaShoppingCart /> Add
                  </button>

                  <button
                    onClick={() => handleFavorite(item)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                      isFavorite(item.id) ? "bg-pink-100 text-pink-500" : "bg-pink-50 text-pink-300"
                    }`}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY ================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-3xl shadow border-2 border-pink-200">
            <FaTruck className="text-4xl text-pink-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-pink-700">Fast Delivery</h3>
            <p className="text-pink-600 mt-2">Receive your cute items quickly 🚚</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow border-2 border-pink-200">
            <FaClock className="text-4xl text-pink-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-pink-700">On Time</h3>
            <p className="text-pink-600 mt-2">Always delivered on schedule ⏰</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow border-2 border-pink-200">
            <FaHeart className="text-4xl text-pink-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-pink-700">Packed With Love</h3>
            <p className="text-pink-600 mt-2">Cute packaging & safe delivery 💝</p>
          </div>
        </div>
      </section>

    </div>
  );
}
