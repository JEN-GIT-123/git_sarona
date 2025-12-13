// Cart.jsx
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty 😢");
      return;
    }
    navigate("/checkout"); // go to checkout page
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-pink-700 text-center mb-10 drop-shadow-sm">
        Your Cute Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-pink-600 text-center text-lg mt-10">Your cart is empty 😢</p>
      ) : (
        <div className="max-w-6xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 shadow-lg border-2 border-pink-200 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="w-32 h-32 bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden mb-4 md:mb-0">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full object-contain" />
                ) : (
                  "🎀"
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 md:ml-4">
                <h2 className="font-bold text-pink-700 text-xl">{item.name}</h2>
                <p className="text-pink-600 mt-1">
                  ${item.price.toFixed(2)} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
                >
                  <FaMinus />
                </button>
                <span className="px-3 font-semibold text-pink-700">{item.qty}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-200">
            <div className="text-2xl font-bold text-pink-700 mb-4 md:mb-0">
              Total: ${total.toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition font-semibold text-lg"
            >
              <FaShoppingCart /> Checkout 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
