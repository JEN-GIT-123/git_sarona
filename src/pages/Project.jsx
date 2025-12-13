import { useCart } from "../components/CartContext";

const PRODUCTS = [
  { id: 1, name: "iPhone 14 Pro", price: 999 },
  { id: 2, name: "Samsung S23", price: 799 },
  { id: 3, name: "Xiaomi 13", price: 599 },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-pink-700 drop-shadow-sm">
        🌸 Cute Phones Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-pink-200 hover:scale-105 transform transition duration-300"
          >
            {/* Product Image Placeholder */}
            <div className="w-32 h-32 mb-4 bg-pink-100 rounded-full flex items-center justify-center text-pink-400 font-bold text-xl">
              📱
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
        ))}
      </div>
    </div>
  );
}
