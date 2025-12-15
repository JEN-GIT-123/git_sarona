import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: "$25", img: "https://via.placeholder.com/60" },
    { id: 2, name: "Product 2", price: "$30", img: "https://via.placeholder.com/60" },
    { id: 3, name: "Product 3", price: "$20", img: "https://via.placeholder.com/60" },
  ];

  return (
    <div className="p-4 md:p-6 bg-pink-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-pink-600">🌸 Products</h2>
        <button className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition font-semibold">
          <FaPlus /> Create New Product
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-pink-100">
            <tr>
              <th className="py-3 px-4 text-left text-pink-600 font-semibold">#</th>
              <th className="py-3 px-4 text-left text-pink-600 font-semibold">Image</th>
              <th className="py-3 px-4 text-left text-pink-600 font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-pink-600 font-semibold">Price</th>
              <th className="py-3 px-4 text-left text-pink-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b border-pink-200 hover:bg-pink-50 transition">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img src={product.img} alt={product.name} className="w-12 h-12 rounded-lg" />
                </td>
                <td className="py-3 px-4 font-semibold text-pink-600">{product.name}</td>
                <td className="py-3 px-4 font-bold text-pink-500">{product.price}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition text-sm">
                    <FaEdit /> Edit
                  </button>
                  <button className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm">
                    <FaTrash /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white rounded-3xl p-4 shadow flex flex-col gap-3 border-2 border-pink-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={product.img} alt={product.name} className="w-16 h-16 rounded-lg" />
                <div>
                  <h3 className="font-bold text-pink-700">{product.name}</h3>
                  <p className="text-pink-500 font-semibold">{product.price}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-1 bg-pink-500 text-white px-3 py-2 rounded-xl hover:bg-pink-600 transition font-semibold text-sm">
                <FaEdit /> Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition font-semibold text-sm">
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
