import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { FavoritesProvider } from "./components/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

import Dashboardproducts from "./dashboard/Product";
import Dashboardusers from "./dashboard/User";
import Dashboardorders from "./dashboard/Oder";
import Dashboardhome from "./dashboard/Home";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Project";
// import News from "./pages/News";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import Favorites from "./pages/Favorites";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashbord";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <FavoritesProvider>
            <BrowserRouter>
              
              <Routes>

                {/* Website Layout */}
                <Route element={<WebsiteLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product" element={<Products />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Route>

                {/* Dashboard Layout */}
                <Route
                  path="/dashboard/*"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Dashboardhome />} />
                  <Route path="products" element={<Dashboardproducts />} />
                  <Route path="users" element={<Dashboardusers />} />
                  <Route path="orders" element={<Dashboardorders />} />
                </Route>

              </Routes>
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// Layout that includes Header and Footer
function WebsiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
