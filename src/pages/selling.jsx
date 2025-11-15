import React, { useState } from "react";

// ReactShop.jsx
// Single-file demo shop built with React + Tailwind (JSX).
// Usage: Drop this into src/App.jsx (or any component) in a Create‑React‑App / Vite project with Tailwind set up.

export default function ReactShop() {
  // Sample product catalog
  const initialProducts = [
    {
      id: 1,
      title: "Handmade Ceramic Mug",
      price: 18.0,
      image: "https://images.unsplash.com/photo-1528809703380-5a5a9a8d6a2f?auto=format&fit=crop&w=800&q=80",
      description: "12oz ceramic mug, dishwasher safe.",
    },
    {
      id: 2,
      title: "Minimalist Notebook",
      price: 12.5,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      description: "80 pages — great for sketches & notes.",
    },
    {
      id: 3,
      title: "Eco Tote Bag",
      price: 9.0,
      image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
      description: "Sturdy cotton tote for everyday use.",
    },
    {
      id: 4,
      title: "Scented Candle — Jasmine",
      price: 14.0,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description: "Soy wax, 30-hour burn time.",
    },
  ];

  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(null);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }

  function changeQty(productId, delta) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === productId ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter(Boolean)
    );
  }

  function subtotal() {
    return cart.reduce((s, item) => s + item.price * item.qty, 0);
  }

  function handleCheckout(e) {
    e.preventDefault();
    // Simulate a checkout flow (replace with real API / payment gateway in production)
    setCheckoutSuccess({ orderId: `ORD-${Date.now()}`, total: subtotal().toFixed(2) });
    setCart([]);
    setCartOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold">ShopJSX</div>
          <div className="text-sm text-gray-500">Small goods, lovingly made</div>
        </div>

        <nav className="flex items-center gap-4">
          <button
            onClick={() => setCartOpen(true)}
            className="relative inline-flex items-center gap-2 bg-white border rounded-xl px-4 py-2 shadow-sm hover:shadow">
            Cart
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">
              {cart.reduce((n, i) => n + i.qty, 0)}
            </span>
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h1 className="text-3xl font-extrabold mb-2">Fresh finds for everyday life</h1>
          <p className="text-gray-600 mb-4">Curated small-batch goods — shipped fast. Add items to cart and try the simple checkout below.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Shop now</button>
            <button className="px-4 py-2 rounded-lg border">Learn more</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
          <h3 className="font-semibold">Why ShopJSX?</h3>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
            <li>Free shipping over $50</li>
            <li>Secure checkout (mock)</li>
            <li>Locally made products</li>
          </ul>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl shadow overflow-hidden flex flex-col">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-2 flex-1">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold">${p.price.toFixed(2)}</div>
                  <button
                    onClick={() => addToCart(p)}
                    className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1" onClick={() => setCartOpen(false)} />
          <div className="w-full sm:w-96 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-gray-500">Close</button>
            </div>

            {cart.length === 0 ? (
              <div className="text-gray-500">Your cart is empty.</div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <button onClick={() => changeQty(item.id, -1)} className="px-2 py-1 border rounded">-</button>
                        <div className="px-3">{item.qty}</div>
                        <button onClick={() => changeQty(item.id, +1)} className="px-2 py-1 border rounded">+</button>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500">Remove</button>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between font-semibold">
                    <div>Subtotal</div>
                    <div>${subtotal().toFixed(2)}</div>
                  </div>

                  <form onSubmit={handleCheckout} className="mt-4 space-y-3">
                    <input required name="name" placeholder="Full name" className="w-full px-3 py-2 border rounded" />
                    <input required name="email" type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
                    <button type="submit" className="w-full px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium">Pay ${subtotal().toFixed(2)}</button>
                  </form>
                </div>
              </div>
            )}

            <div className="mt-4 text-sm text-gray-500">
              This is a demo checkout — integrate a payment gateway (Stripe, PayPal, etc.) for production.
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT SUCCESS */}
      {checkoutSuccess && (
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow">
          <div className="font-semibold">Order placed!</div>
          <div className="text-sm text-gray-600">{checkoutSuccess.orderId} — ${checkoutSuccess.total}</div>
          <button className="mt-2 text-sm text-blue-600" onClick={() => setCheckoutSuccess(null)}>Dismiss</button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-12 text-center text-sm text-gray-500 pb-8">Built with ♥ using React + Tailwind — demo only.</footer>
    </div>
  );
}
