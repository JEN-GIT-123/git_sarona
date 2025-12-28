import { FaStar, FaGift, FaHeart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NEE_PRODUCTS = [
  { id: 1, name: "Mini Cute Notebook", price: 5.99, image: "/images/mini-notebook.png" },
  { id: 2, name: "Pastel Pen Set", price: 4.99, image: "/images/pastel-pens.png" },
  { id: 3, name: "Sticker Collection", price: 3.99, image: "/images/stickers-collection.png" },
  { id: 4, name: "Adorable Keychain", price: 6.99, image: "/images/adorable-keychain.png" },
];

export default function Neex() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (!user) return navigate("/login");
    addToCart(item);
  };

  const handleFavorite = (item) => {
    if (!user) return navigate("/login");
    isFavorite(item.id) ? removeFromFavorites(item.id) : addToFavorites(item);
  };

  return (
    <div className="bg-purple-50 min-h-screen text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-purple-200 to-purple-100 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Neex Cute Collection 🎀
        </h1>
        <p className="text-purple-600 text-lg max-w-xl mx-auto">
          Explore the cutest items you’ll ever love! Stationery, gifts, and adorable accessories 💖
        </p>
        <div className="mt-6 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow text-purple-700 font-semibold justify-center mx-auto w-fit">
          <FaStar className="text-purple-500" /> Hot Picks
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-10">
          Featured Products ✨
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {NEE_PRODUCTS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-5 shadow-md flex flex-col hover:shadow-xl transition-transform transform hover:scale-105">
              
              <div className="h-40 flex items-center justify-center mb-4">
                <img src={item.image} alt={item.name} className="h-full object-contain" />
              </div>

              <h3 className="text-lg font-semibold text-purple-700">{item.name}</h3>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>

              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white rounded-full py-2 flex items-center justify-center gap-2 font-semibold"
                >
                  <FaGift /> Add
                </button>

                <button
                  onClick={() => handleFavorite(item)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    isFavorite(item.id) ? "bg-purple-100 text-purple-500" : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-purple-100 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Love Cute Things? 💜</h2>
        <p className="text-purple-600 mb-6">Sign up to get updates and exclusive offers!</p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full">
          Join Now
        </button>
      </section>

    </div>
  );
}
