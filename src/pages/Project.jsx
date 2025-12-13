import { useState } from "react";
import { useCart } from "../components/CartContext"; // Make sure you have this context
import { FaHeart, FaSearch } from "react-icons/fa";

const PRODUCTS = [
  { id: 1, name: "Leo Plushie", price: 25, category: "Plushies", emoji: "🦁" },
  { id: 2, name: "Leo Notebook", price: 10, category: "Stationery", emoji: "📒" },
  { id: 3, name: "Leo Keychain", price: 5, category: "Accessories", emoji: "🗝️" },
  { id: 4, name: "Leo Tote Bag", price: 15, category: "Accessories", emoji: "👜" },
  { id: 5, name: "Leo Sticker Pack", price: 8, category: "Stationery", emoji: "✨" },
  { id: 6, name: "Leo T-Shirt", price: 20, category: "Clothes", emoji: "👕" },
];

const CATEGORIES = ["All", "Plushies", "Stationery", "Accessories", "Clothes"];

export default function Products() {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-pink-700 drop-shadow-sm">
        🌸 Leo Shop
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
          />
          <FaSearch className="absolute right-3 top-2.5 text-pink-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold border-2 transition ${
              category === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-pink-600 border-pink-300 hover:bg-pink-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-pink-600 col-span-3">
            No products found 😢
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-pink-200 hover:scale-105 transform transition duration-300 relative"
            >
              {/* Favorite */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`absolute top-4 right-4 text-xl transition-transform ${
                  favorites.includes(product.id)
                    ? "text-red-500 scale-125"
                    : "text-pink-300 hover:text-red-400"
                }`}
              >
                <FaHeart />
              </button>

              {/* Emoji */}
              <div className="w-32 h-32 mb-4 bg-pink-100 rounded-full flex items-center justify-center text-4xl">
                {product.emoji}
              </div>

              <h2 className="text-xl font-semibold mb-2 text-pink-700">{product.name}</h2>
              <p className="text-pink-600 font-medium mb-4">${product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-pink-600 transition"
              >
                ➕ Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
