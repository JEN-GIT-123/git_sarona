import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { FavoritesProvider } from "./components/FavoritesContext"; // ✅ import favorites

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Project";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites"; // ✅ favorites page
import Login from "./pages/Login";
import Register from "./pages/Register";

import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider> {/* ✅ wrap app with favorites */}
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} /> {/* ✅ favorites route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}
