import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (productId) => {
    setCartItems((prev) =>
      prev.map((item) => item.id === productId ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  // Decrease quantity
  const decreaseQty = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) => item.id === productId ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
  };

  // Total cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
