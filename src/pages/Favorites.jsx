import { useFavorites } from "../components/FavoritesContext";
import { useCart } from "../components/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";

export default function Favorites() {
  const { favorites, removeFromFavorites, addToFavorites, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(item);
    removeFromFavorites(item.id);
  };

  const handleToggleFavorite = (item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-pink-700 px-4">
        <p className="text-2xl font-semibold">No favorites yet ❤️</p>
        <p className="mt-2 text-pink-500 mb-4">Go explore cute products and add them to your favorites!</p>
        <NavLink
          to="/product"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition"
        >
          Go to Products
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-10">
      <h2 className="text-4xl font-extrabold text-center text-pink-700 mb-8">
        Your Favorites 💕
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transform transition-all duration-300 relative flex flex-col"
          >
            <div
              className="h-48 bg-pink-100 rounded-2xl flex items-center justify-center text-5xl mb-4 cursor-pointer"
              onClick={() => handleToggleFavorite(item)}
            >
              {item.image ? (
                <img src={item.image} alt={item.name} className="h-full rounded-2xl" />
              ) : (
                "🎀"
              )}
            </div>

            <h3 className="font-bold text-xl text-pink-700 mb-1">{item.name}</h3>
            {item.price && <p className="text-pink-600 mb-4">${item.price}</p>}

            <div className="mt-auto flex gap-3">
              <button
                onClick={() => handleAddToCart(item)}
                className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full transition"
              >
                <FaShoppingCart /> Add to Cart
              </button>

              <button
                onClick={() => removeFromFavorites(item.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-full transition"
              >
                <FaTrashAlt /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
