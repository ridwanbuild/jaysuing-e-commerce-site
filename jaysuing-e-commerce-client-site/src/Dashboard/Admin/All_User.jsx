import React, { useState } from "react";
import useOrderItem from "../../Hook/useOrderItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function All_User() {
  const { orders, setOrders } = useOrderItem();
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  // Delete confirmation toast
  
  const confirmDelete = (id) => {
    toast.custom((t) => (
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 border border-blue-200">
        <p className="text-gray-800 text-sm font-medium">
          Are you sure you want to delete this user?
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    ));
  };



  // Delete user
  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await axios.delete(
        `https://jaysuing-e-commerce-server-site.vercel.app/order-data/${id}`
      );

      if (res.status === 200) {
        // ✅ Remove deleted user from local state
        const filtered = orders.filter((user) => user._id.toString() !== id);
        setOrders(filtered);
        toast.success("User deleted successfully ✅");
      } else {
        toast.error("Failed to delete user ❌");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Something went wrong ❌");
    } finally {
      setDeletingId(null);
    }
  };



  // Update user role
  const handleRoleChange = async (id, newRole) => {
    setUpdatingId(id);
    try {
      const res = await axios.put(
        `https://jaysuing-e-commerce-server-site.vercel.app/order-data/${id}`,
        { role: newRole }
      );

      if (res.status === 200) {
        const updated = orders.map((user) =>
          user._id.toString() === id ? { ...user, role: newRole } : user
        );
        setOrders(updated);

        // ✅ Toast for role change
        toast.success(
          newRole === "Admin"
            ? "User promoted to Admin 🎉"
            : "User set as normal User 👤"
        );
      } else {
        toast.error("Failed to update role ❌");
      }
    } catch (error) {
      console.error("Role update failed:", error);
      toast.error("Something went wrong ❌");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">All Users</h2>
      {!orders || orders.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((user) => {
                const idStr = user._id.toString(); // ✅ Convert ObjectId to string
                return (
                  <tr key={idStr} className="border-t hover:bg-gray-50 transition">
                    <td className="px-4 py-2">{user.name || "N/A"}</td>
                    <td className="px-4 py-2">{user.phone || "N/A"}</td>
                    <td className="px-4 py-2">
                      <select
                        value={user.role || "User"}
                        onChange={(e) => handleRoleChange(idStr, e.target.value)}
                        disabled={updatingId === idStr}
                        className="px-3 outline-none py-1 border rounded focus:ring focus:ring-blue-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
                      >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => confirmDelete(idStr)}
                        disabled={deletingId === idStr}
                        className={`px-3 py-1 rounded text-white transition cursor-pointer ${
                          deletingId === idStr
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        {deletingId === idStr ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
