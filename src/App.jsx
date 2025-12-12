import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Project";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";        // Login page
import Register from "./pages/Register"; // Register page

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />       {/* Login route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}
