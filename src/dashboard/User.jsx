export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "User" },
  ];

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-pink-600">🌸 Users</h2>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600 transition">
          + Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto bg-white rounded-2xl shadow">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b hover:bg-pink-50 transition"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-pink-600">{user.name}</td>
                <td className="px-6 py-4 text-pink-500">{user.email}</td>
                <td className="px-6 py-4 font-semibold">{user.role}</td>
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
