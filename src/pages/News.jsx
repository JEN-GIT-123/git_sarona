import React, { useState, useEffect } from "react";

export default function News() {
  const [wishlist, setWishlist] = useState([1, 3]);
  const [cart, setCart] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [pulse, setPulse] = useState(false);
  const [saleEndsIn, setSaleEndsIn] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setSaleEndsIn(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const products = [
    {
      id: 1,
      name: 'Bunny Plush Pillow',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 128,
      image: '🐰',
      tag: 'NEW',
      description: 'Super soft and huggable plush pillow',
      colors: ['#FFB6C1', '#FF69B4', '#FFFFFF'],
    },
    {
      id: 2,
      name: 'Kawaii Cat Backpack',
      price: 45.50,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 256,
      image: '🎒',
      tag: 'TRENDING',
      description: 'Adorable cat-shaped backpack with ears',
      colors: ['#FFD700', '#9370DB', '#87CEEB'],
    },
    {
      id: 3,
      name: 'Rainbow Desk Lamp',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviews: 89,
      image: '💡',
      tag: 'SALE',
      description: 'Color-changing LED rainbow lamp',
      colors: ['#FF0000', '#00FF00', '#0000FF'],
    },
    {
      id: 4,
      name: 'Unicorn Phone Case',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 342,
      image: '📱',
      tag: 'HOT',
      description: 'Magical unicorn glitter phone case',
      colors: ['#E6E6FA', '#DDA0DD', '#F0F8FF'],
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product.id]);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  const getDiscount = (price, original) => {
    return Math.round((1 - price/original) * 100);
  };

  const CartIcon = () => (
    <div className="relative">
      <span className="text-2xl">🛒</span>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
          {cart.length}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🌸</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              CutieShop
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <CartIcon />
              <div className="absolute hidden group-hover:block right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
                <p className="font-semibold mb-2">Cart ({cart.length} items)</p>
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <p className="text-green-600">Items added!</p>
                )}
              </div>
            </div>
            <span className="text-xl">👑</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Timer */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 text-3xl animate-bounce">✨</div>
            <div className="absolute bottom-4 right-4 text-3xl animate-pulse">🌟</div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 animate-pulse">
                Spring Cuteness Sale! 🌸
              </h2>
              <p className="mb-6 text-lg">
                Discover adorable items that will make your heart melt. 
                Limited time offer!
              </p>
              
              {/* Sale Timer */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-md">
                <p className="font-semibold mb-2">Sale ends in:</p>
                <div className="flex space-x-4">
                  {['Hours', 'Minutes', 'Seconds'].map((label, index) => (
                    <div key={label} className="text-center">
                      <div className="bg-white/30 rounded-lg px-4 py-2">
                        <span className="text-2xl font-mono font-bold">
                          {formatTime(saleEndsIn).split(':')[index]}
                        </span>
                      </div>
                      <span className="text-sm mt-1 block">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:scale-105 transform transition-transform duration-200 shadow-lg">
                Shop Now 🛍️
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '⭐', label: 'Top Rated', value: '4.8/5' },
            { icon: '🚚', label: 'Free Shipping', value: 'Over $50' },
            { icon: '🎁', label: 'Gifts', value: 'Free' },
            { icon: '💝', label: 'Happy Customers', value: '10K+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Discount Badge */}
              <div className="absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-br-lg rounded-tl-lg font-bold">
                -{getDiscount(product.price, product.originalPrice)}%
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.tag === 'NEW' ? 'bg-blue-100 text-blue-600' :
                  product.tag === 'TRENDING' ? 'bg-pink-100 text-pink-600' :
                  product.tag === 'SALE' ? 'bg-red-100 text-red-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {product.tag}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`text-2xl transform transition-transform duration-300 ${
                    wishlist.includes(product.id) 
                      ? 'text-red-500 scale-110' 
                      : 'text-gray-300 hover:text-red-400 hover:scale-110'
                  }`}
                >
                  {wishlist.includes(product.id) ? '❤️' : '🤍'}
                </button>
              </div>

              {/* Product Image with Hover Effect */}
              <div className={`text-7xl text-center mb-6 transition-transform duration-500 ${
                hoveredProduct === product.id ? 'scale-125 rotate-6' : 'scale-100'
              }`}>
                {product.image}
              </div>
              
              {/* Color Options */}
              <div className="flex justify-center space-x-2 mb-4">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5).split('').map((star, i) => (
                        <span key={i} className={`text-xl ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold mt-1">
                    You save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className={`bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full font-bold hover:shadow-lg transform transition-all duration-200 hover:scale-105 ${
                    pulse ? 'animate-pulse' : ''
                  }`}
                >
                  + Add
                </button>
              </div>
              
              {/* Hover Overlay */}
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 text-center">
          <span className="text-4xl mb-4 block">💌</span>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Join the Cuteness Club!
          </h3>
          <p className="text-gray-600 mb-6">
            Get exclusive deals, early access to new arrivals, and cute surprises!
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
              Subscribe ✨
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-3xl">🌸</span>
              <div>
                <div className="font-bold text-xl">CutieShop</div>
                <div className="text-sm text-gray-500">Spreading happiness since 2023</div>
              </div>
            </div>
            <div className="flex space-x-6 text-2xl">
              {['🐦', '📘', '📷', '🎵'].map((icon, index) => (
                <button key={index} className="hover:scale-110 transform transition-transform">
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Made with ❤️ for all the cute things in life
          </p>
        </footer>
      </main>
    </div>
  );
}