export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-pink-100 p-4 rounded-2xl shadow text-pink-600 font-bold text-center">Products: 12</div>
      <div className="bg-pink-100 p-4 rounded-2xl shadow text-pink-600 font-bold text-center">Users: 8</div>
      <div className="bg-pink-100 p-4 rounded-2xl shadow text-pink-600 font-bold text-center">Orders: 20</div>
      <div className="bg-pink-100 p-4 rounded-2xl shadow text-pink-600 font-bold text-center">Revenue: $1,500</div>
    </div>
  );
}
