import { useState } from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCreditCard, FaMoneyBill, FaCheck } from "react-icons/fa";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleNext = () => {
    if (!form.name || !form.address || !form.country) {
      alert("Please fill in all required fields 🌸");
      return;
    }
    setStep(2);
  };
  const handleToPayment = () => setStep(3);
  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Please select a payment method 🌸");
      return;
    }
    alert(`Thank you for your purchase! 💖\nPaid with: ${paymentMethod}`);
    clearCart();
    navigate("/");
  };

  const steps = [
    { number: 1, title: "Shipping" },
    { number: 2, title: "Review" },
    { number: 3, title: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-extrabold text-pink-700 text-center mb-8">Checkout 💖</h1>

      {/* Horizontal Stepper */}
      <div className="flex justify-between items-center max-w-3xl mx-auto mb-10">
        {steps.map((s, i) => (
          <div key={s.number} className="flex-1 flex items-center">
            {/* Circle */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
              ${step === s.number ? "bg-pink-500 text-white shadow-lg" : step > s.number ? "bg-pink-400 text-white" : "bg-pink-200 text-pink-600"} transition-all`}>
              {s.number}
            </div>
            {/* Title */}
            <div className="ml-2 text-sm md:text-base font-semibold text-pink-700">{s.title}</div>
            {/* Line */}
            {i < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 rounded
                ${step > s.number ? "bg-pink-500" : "bg-pink-200"} transition-all`}>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Shipping Info */}
      {step === 1 && (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-3xl shadow-lg space-y-4 border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Shipping Info 🌸</h2>
          {["name","email","country","address","phone"].map(f => (
            <input
              key={f}
              type={f==="email"?"email":f==="phone"?"tel":"text"}
              name={f}
              placeholder={f.charAt(0).toUpperCase()+f.slice(1)}
              value={form[f]}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none text-pink-700 placeholder-pink-400"
            />
          ))}
          <button
            onClick={handleNext}
            className="w-full mt-4 bg-pink-500 text-white rounded-full py-3 font-semibold hover:bg-pink-600 transition flex items-center justify-center gap-2 shadow-md"
          >
            <FaShoppingCart /> Next
          </button>
        </div>
      )}

      {/* Step 2: Review Order */}
      {step === 2 && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-3xl shadow-lg space-y-6 border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Review Your Order 🛒</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-pink-200 pb-2">
                <span>{item.name} x {item.qty}</span>
                <span>${(item.price*item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-pink-700 text-lg mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={()=>setStep(1)}
              className="flex-1 py-3 bg-pink-200 text-pink-700 rounded-full font-semibold hover:bg-pink-300 transition"
            >
              Back
            </button>
            <button
              onClick={handleToPayment}
              className="flex-1 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition flex items-center justify-center gap-2 shadow-md"
            >
              Payment 💖
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-3xl shadow-lg space-y-6 border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Payment Method 💳</h2>
          <div className="flex flex-col gap-4">
            {["ACLEDA Bank","ABA Bank","Card"].map(m => (
              <button
                key={m}
                onClick={()=>setPaymentMethod(m)}
                className={`w-full py-3 rounded-full font-semibold flex items-center justify-between px-4 transition
                  ${paymentMethod===m?"bg-pink-500 text-white shadow-md":"bg-pink-100 text-pink-700 hover:bg-pink-200"}`}
              >
                {m} {m==="Card"?<FaCreditCard/>:<FaMoneyBill/>}
              </button>
            ))}
          </div>
          {paymentMethod && (
            <div className="text-center mt-4 text-pink-700 font-semibold">
              Selected: {paymentMethod} <FaCheck className="inline text-green-500"/>
            </div>
          )}
          <div className="flex justify-between gap-4 mt-6">
            <button
              onClick={()=>setStep(2)}
              className="flex-1 py-3 bg-pink-200 text-pink-700 rounded-full font-semibold hover:bg-pink-300 transition"
            >
              Back
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition flex items-center justify-center gap-2 shadow-md"
            >
              Confirm & Pay 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
