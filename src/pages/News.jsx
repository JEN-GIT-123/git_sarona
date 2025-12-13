import React, { useState } from "react";

export default function News() {
  const [wishlist, setWishlist] = useState([1, 3]);
  
  const products = [
    {
      id: 1,
      name: 'Bunny Plush Pillow',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      image: '🐰',
      tag: 'NEW',
    },
    {
      id: 2,
      name: 'Kawaii Cat Backpack',
      price: 45.50,
      originalPrice: 59.99,
      rating: 4.9,
      image: '🎒',
      tag: 'TRENDING',
    },
    {
      id: 3,
      name: 'Rainbow Desk Lamp',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.7,
      image: '💡',
      tag: 'SALE',
    },
    {
      id: 4,
      name: 'Unicorn Phone Case',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.6,
      image: '📱',
      tag: 'HOT',
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">
              Spring Cuteness Sale!
            </h2>
            <p className="mb-4">
              Discover adorable items that will make your heart melt. 
              Limited time offer!
            </p>
            <button className="bg-white text-pink-600 px-5 py-2 rounded-full font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.tag}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  {wishlist.includes(product.id) ? '❤️' : '🤍'}
                </button>
              </div>

              <div className="text-5xl text-center mb-4">{product.image}</div>
              
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-800">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                  </div>
                </div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <p>Cutie News Shop - Spreading cuteness one product at a time </p>
        </footer>
      </main>
    </div>
  );
}