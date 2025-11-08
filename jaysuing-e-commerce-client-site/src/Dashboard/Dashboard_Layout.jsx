import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../../src/assets/logo-01.png";
import { HiArrowLongRight } from "react-icons/hi2";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar toggle

  // ---------------- Local Orders ----------------
  const localOrders = JSON.parse(localStorage.getItem("order-data")) || [];

  // ---------------- User Selection ----------------
  // Force Admin for testing or use real user
  const forceAdmin = true; // 🔹 set to false for normal user view
  let localUser;

  if (forceAdmin) {
    localUser = { role: "Admin" }; // temporary Admin
  } else {
    // Use last order from local storage, default role "User"
    localUser = localOrders.length
      ? { ...localOrders[localOrders.length - 1] }
      : { role: "User" };
  }

  // ---------------- Admin Check ----------------
  const isAdmin = useAdmin(localUser);

  // ---------------- Routes ----------------
  const adminRoutes = [
    { name: "All User", path: "/dashboard/all-user", icon: <MdDashboard className="w-6 h-6" /> },
    { name: "Product Management", path: "/dashboard/product-management", icon: <MdDashboard className="w-6 h-6" /> },
  ];

  const userRoutes = [
    { name: "My Order", path: "/dashboard/my-order", icon: <FaRegComments className="w-6 h-6" /> },
  ];

  const sidebarLinks = isAdmin ? adminRoutes : userRoutes;

  // ---------------- Orders Info ----------------
  const totalOrders = localOrders.length;
  const statusCount = localOrders.reduce((acc, order) => {
    const key = order.status?.toLowerCase() || "pending";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const recentOrder = localOrders[localOrders.length - 1];

  return (
    <div className="flex container m-auto h-screen bg-gray-50">

      {/* ---------------- SIDEBAR ---------------- */}
      <div className={`
        fixed md:relative z-20 top-0 left-0 h-full bg-white border-e border-gray-300 
        transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-0 md:w-64"} overflow-hidden
      `}>
        <div className="flex items-center justify-between py-5 px-5 border-b border-gray-300">
          <Link to={"/"}>
            <img className="w-20" src={logo} alt="Logo" />
          </Link>
          <button className="md:hidden text-gray-500 text-xl" onClick={() => setSidebarOpen(!sidebarOpen)}>✕</button>
        </div>

        <nav className="flex flex-col mt-4">
          {sidebarLinks.map((item, index) => (
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 transition-colors duration-200 ${
                  isActive
                    ? "bg-indigo-500/10 border-r-4 border-indigo-500 text-indigo-500"
                    : "text-gray-700 hover:bg-gray-100/90"
                }`
              }
            >
              {item.icon}
              <span className="md:block">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-10 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="flex-1">

        {/* Header */}
        <div className="flex gap-5 items-center justify-between py-3 px-5 border-b border-gray-300 bg-white">
          <button className="md:hidden text-gray-500 text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
          <div className="flex justify-between w-full items-center gap-5 text-gray-500">
            <p>Hi! {isAdmin ? "Admin" : "User"}</p>
            <Link to={"/"} className="border cursor-pointer flex items-center gap-2 rounded-full text-sm px-6 py-1">
              Back <HiArrowLongRight />
            </Link>
          </div>
        </div>

        {/* ---------------- Static/Dynamic Info ---------------- */}
        <div className="max-w-4xl m-auto capitalize py-8 space-y-6">
          {isAdmin ? (
            <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
              <h2 className="font-bold text-xl text-gray-800 mb-2">Admin Info</h2>
              {/* Additional admin info can go here */}
            </div>
          ) : (
            <div className="bg-gradient-to-r from-violet-100 to-pink-100 p-6 rounded-xl shadow-md space-y-3">
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-800 to-indigo-600 bg-clip-text text-transparent mb-2">
                <span className="font-medium">User Info:</span>
              </h2>

              <p className="text-gray-600">
                <span className="font-medium">Your Total Orders:</span> {totalOrders}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Pending:</span> {statusCount.pending || 0}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Delivered:</span> {statusCount.delivered || 0}
              </p>

              {recentOrder && (
                <p className="text-gray-600 flex flex-col">
                  <span className="font-medium">Most Recent Order:</span> {recentOrder.name} ({recentOrder.quantity} pcs)
                </p>
              )}

              <div className="mt-5">
                <Link className="bg-gradient-to-r from-purple-500 to-purple-900 text-white px-6 py-2 rounded font-medium transition" to={"/dashboard/my-order"}>My Order</Link>
              </div>
            </div>
          )}

          {/* ---------------- Outlet for child routes ---------------- */}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
