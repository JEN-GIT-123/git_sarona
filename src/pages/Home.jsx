import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { useFavorites } from "../components/FavoritesContext";

// Example products with image and optional discount
const PRODUCTS = [
  { id: 1, name: "Cute Notebook", price: 9.99, discount: 20, image: "/images/notebook.png" },
  { id: 2, name: "Pink Pen Set", price: 6.99, discount: 0, image: "/images/pens.png" },
  { id: 3, name: "Sticker Pack", price: 4.99, discount: 10, image: "/images/stickers.png" },
];

export default function Home() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const toggleLove = (product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-6">
      {/* HERO SECTION */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-pink-700 leading-tight">
            Cute Stationery <br /> For Happy Study 💕
          </h1>
          <p className="mt-4 text-pink-600 text-lg">
            Discover adorable notebooks, pens & stickers ✨
          </p>
          <div className="relative mt-6 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" />
            <input
              placeholder="Search cute stationery..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none bg-pink-50"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 bg-pink-100 rounded-full flex items-center justify-center text-6xl shadow-lg animate-pulse">
            ✏️📒🎀
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
          Best Sellers 💕
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transform transition-all duration-300 relative flex flex-col"
            >
              {/* DISCOUNT BADGE */}
              {item.discount > 0 && (
                <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{item.discount}%
                </div>
              )}

              {/* IMAGE */}
              <div className="h-48 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full object-contain" />
                ) : (
                  "🎀"
                )}
              </div>

              <h3 className="font-bold text-lg text-pink-700 mb-1">{item.name}</h3>

              <p className="text-pink-600 mb-4">${item.price.toFixed(2)}</p>

              <div className="mt-auto flex gap-3">
                {/* ADD TO CART */}
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full transition"
                >
                  <FaShoppingCart /> Add to Cart
                </button>

                {/* LOVE / FAVORITE */}
                <button
                  onClick={() => toggleLove(item)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-xl transition ${
                    isFavorite(item.id)
                      ? "bg-pink-100 text-pink-500"
                      : "bg-pink-50 text-pink-300 hover:text-pink-500"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
