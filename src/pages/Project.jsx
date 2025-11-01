export default function Products() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "$1,499",
      img: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$1,099",
      img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/apple-1867461_960_720.jpg",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$1,299",
      img: "https://cdn.pixabay.com/photo/2017/02/05/12/10/laptop-2049011_960_720.jpg",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "$299",
      img: "https://cdn.pixabay.com/photo/2016/11/29/05/09/blur-1867768_960_720.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 via-red-700 to-red-500 text-white px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-10">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-red-900 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-3">{product.price}</p>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,170.7C1120,181,1280,203,1360,213.3L1440,224V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
