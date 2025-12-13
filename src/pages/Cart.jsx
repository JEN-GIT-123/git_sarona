import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase! 💖");
    // Here you can clear the cart or redirect
    navigate("/"); // Redirect to home after checkout
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-pink-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center border border-pink-200"
              >
                <div>
                  <h2 className="font-semibold text-pink-700">{item.name}</h2>
                  <p className="text-pink-600">
                    ${item.price} x {item.qty} = ${item.price * item.qty}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-pink-100 rounded-full hover:bg-pink-200 transition text-pink-700 font-bold"
                  >
                    −
                  </button>
                  <span className="px-2">{item.qty}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-pink-700">
              Total: ${total}
            </div>
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition font-semibold"
            >
              Checkout 💖
            </button>
          </div>
        </>
      )}
    </div>
  );
}
