import { useState } from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";
import leo from "../assets/leo.png";

const PRODUCTS = [
  { id: 1, name: "Leo Plushie", price: 5, category: "Plushies", image: leo },
  { id: 2, name: "Leo Notebook", price: 10, category: "Stationery", image: "/images/leo-notebook.png" },
  { id: 3, name: "Leo Keychain", price: 5, category: "Accessories", image: "/images/leo-keychain.png" },
  { id: 4, name: "Leo Tote Bag", price: 15, category: "Accessories", image: "/images/leo-tote.png" },
  { id: 5, name: "Leo Sticker Pack", price: 8, category: "Stationery", image: "/images/leo-sticker.png" },
  { id: 6, name: "Leo Pen", price: 3, category: "Stationery", image: "/images/leo-pen.png" },
];

const CATEGORIES = ["All", "Plushies", "Stationery", "Accessories"];
const ITEMS_PER_PAGE = 6;

export default function MiniShop() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState(""); // input value
  const [searchTerm, setSearchTerm] = useState(""); // applied search

  // Apply category + search filter
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

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setCurrentPage(1);
  };

  return (
    <div className="bg-pink-50 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
        🌸 Mini Study Shop
      </h1>

      {/* SEARCH */}
      <div className="flex justify-center mb-4">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-l-full border-2 border-pink-300 focus:ring-2 focus:ring-pink-300 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-full flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => { setCategory(cat); setCurrentPage(1); }}
            className={`px-3 py-1 rounded-full text-sm font-semibold border-2 transition ${
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
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {displayedProducts.length === 0 ? (
          <p className="text-center col-span-3 text-pink-600">No products found 😢</p>
        ) : (
          displayedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-3 shadow-sm border-2 border-pink-200 hover:scale-105 transition flex flex-col"
            >
              <div className="h-28 bg-pink-100 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full object-contain" />
              </div>

              <h2 className="text-sm font-bold text-pink-700 mb-1">{item.name}</h2>
              <p className="text-pink-600 text-sm mb-2">${item.price.toFixed(2)}</p>

              <div className="flex gap-1 mt-auto">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 flex items-center justify-center gap-1 bg-pink-500 hover:bg-pink-600 text-white py-1 rounded-full text-xs font-semibold"
                >
                  <FaShoppingCart /> Add
                </button>

                <button
                  onClick={() =>
                    isFavorite(item.id)
                      ? removeFromFavorites(item.id)
                      : addToFavorites(item)
                  }
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition ${
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
      <div className="flex justify-center gap-2 mt-6 text-sm">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded-full border-2 border-pink-300 bg-white hover:bg-pink-100"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-2 py-1 rounded-full border-2 transition ${
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
          className="px-2 py-1 rounded-full border-2 border-pink-300 bg-white hover:bg-pink-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
