import { useState } from 'react';

export default function ProductDetailPage() {
  const products = [
    {
      id: 1,
      name: "Pink Dream Bouquet",
      price: "$18.99",
      desc: "Soft roses & peonies for a dreamy pastel vibe.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 2,
      name: "Sunny Sunshine Set",
      price: "$14.50",
      desc: "Bright sunflowers perfect for gifting happiness.",
      img: "https://images.unsplash.com/photo-1524593166156-312f66de35b3",
    },
    {
      id: 3,
      name: "Lavender Calm Bundle",
      price: "$12.00",
      desc: "A relaxing bouquet of soft lavender stems.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans py-12 px-6">
      <h1 className="text-center text-4xl font-extrabold text-pink-600 mb-10">
        🌸 Product Details 🌸
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Product List */}
        <div className="md:w-1/3">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white p-4 rounded-2xl shadow-lg mb-4 cursor-pointer hover:scale-105 transition ${selectedProduct.id === product.id ? 'border-2 border-pink-500' : ''}`}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.img} alt={product.name} className="rounded-xl mb-2" />
              <h3 className="text-lg font-bold text-pink-600">{product.name}</h3>
              <p className="text-pink-600 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Product Detail */}
        <div className="md:w-2/3 bg-white p-6 rounded-3xl shadow-lg">
          <img src={selectedProduct.img} alt={selectedProduct.name} className="rounded-2xl mb-6 w-full object-cover h-96" />
          <h2 className="text-3xl font-bold text-pink-600 mb-2">{selectedProduct.name}</h2>
          <p className="text-pink-700 text-lg mb-4">{selectedProduct.desc}</p>
          <p className="text-pink-600 font-bold text-2xl mb-6">{selectedProduct.price}</p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition text-lg">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}