export default function Orders() {
  const orders = [
    { id: 123, customer: "John Doe", date: "2025-12-15", status: "Completed" },
    { id: 124, customer: "Jane Smith", date: "2025-12-16", status: "Pending" },
    { id: 125, customer: "Alice Johnson", date: "2025-12-17", status: "Processing" },
    { id: 126, customer: "Bob Brown", date: "2025-12-18", status: "Completed" },
  ];

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-pink-600">🌸 Orders</h2>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600 transition">
          + Add Order
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto bg-white rounded-2xl shadow">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="border-b hover:bg-pink-50 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-pink-600">#{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className={`px-6 py-4 font-semibold ${
                  order.status === "Completed" ? "text-green-500" :
                  order.status === "Pending" ? "text-yellow-500" :
                  "text-pink-500"
                }`}>
                  {order.status}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="bg-pink-200 text-pink-700 px-3 py-1 rounded-lg hover:bg-pink-300 transition">
                    Edit
                  </button>
                  <button className="bg-red-200 text-red-600 px-3 py-1 rounded-lg hover:bg-red-300 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
