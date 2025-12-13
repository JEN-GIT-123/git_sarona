import { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";
import leo from "../assets/leo.png";

const PRODUCTS = [
  { id: 1, name: "Leo Plushie", price: 5, category: "Plushies", image: leo },
  { id: 2, name: "Leo Notebook", price: 10, category: "Stationery", image: "/images/leo-notebook.png" },
  { id: 3, name: "Leo Keychain", price: 5, category: "Accessories", image: "/images/leo-keychain.png" },
  { id: 4, name: "Leo Tote Bag", price: 15, category: "Accessories", image: "/images/leo-tote.png" },
  { id: 5, name: "Leo Sticker Pack", price: 8, category: "Stationery", image: "/images/leo-sticker.png" },
  { id: 6, name: "Leo T-Shirt", price: 20, category: "Clothes", image: "/images/leo-shirt.png" },
  { id: 7, name: "Leo Pen", price: 3, category: "Stationery", image: "/images/leo-pen.png" },
  { id: 8, name: "Leo Mug", price: 12, category: "Accessories", image: "/images/leo-mug.png" },
  { id: 9, name: "Leo Backpack", price: 30, category: "Accessories", image: "/images/leo-backpack.png" },
];

const CATEGORIES = ["All", "Plushies", "Stationery", "Accessories", "Clothes"];
const ITEMS_PER_PAGE = 6;

export default function Products() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-pink-700">
        🌸 Leo Cute Shop
      </h1>

      {/* SEARCH */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search cute things..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-full px-4 py-3 rounded-full border-2 border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none"
          />
          <FaSearch className="absolute right-4 top-4 text-pink-400" />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => { setCategory(cat); setCurrentPage(1); }}
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

      {/* PRODUCTS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedProducts.length === 0 ? (
          <p className="text-center col-span-3 text-pink-600">No products found 😢</p>
        ) : (
          displayedProducts.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transition flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-44 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full object-contain" />
              </div>

              <h2 className="text-xl font-bold text-pink-700 mb-1">{item.name}</h2>
              <p className="text-pink-600 mb-4 font-semibold">${item.price.toFixed(2)}</p>

              {/* ADD TO CART + LOVE */}
              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-semibold transition"
                >
                  <FaShoppingCart /> Add
                </button>

                <button
                  onClick={() =>
                    isFavorite(item.id)
                      ? removeFromFavorites(item.id)
                      : addToFavorites(item)
                  }
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition ${
                    isFavorite(item.id)
                      ? "bg-pink-100 text-pink-500"
                      : "bg-pink-50 text-pink-300 hover:text-red-400"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full border-2 border-pink-300 bg-white hover:bg-pink-100"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-3 py-1 rounded-full border-2 transition ${
              currentPage === num
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-pink-600 border-pink-300 hover:bg-pink-100"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full border-2 border-pink-300 bg-white hover:bg-pink-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
