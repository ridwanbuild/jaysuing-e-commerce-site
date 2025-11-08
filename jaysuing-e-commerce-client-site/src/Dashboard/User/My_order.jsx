import React, { useEffect, useState } from "react";
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function My_orders() {
  const [orders, setOrders] = useState([]);

  

  useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem("order-data")) || [];
    setOrders(localOrders);
  }, []);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  if (orders.length === 0) {
    return (
      <p className="text-center p-10 text-gray-500">
        No local orders found.
      </p>
    );
  }

  return (

   <div className="">

    <div className="max-w-4xl  m-auto px-4">
      <h2 className="font-medium text-teal-800">Total shopping: {orders.length}</h2>
    </div>

     <div className="max-w-4xl mx-auto  grid gap-6 sm:grid-cols-2">


      {orders.map((order, index) => {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date(order.orderTimeDate));

        return (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col"
          >
            <img
              src={order.productImg}
              alt="Product"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {order.name}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Address:</span> {order.address}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Quantity:</span> {order.quantity}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Total:</span> {order.totalPrice}৳
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Date:</span> {formattedDate}
            </p>
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  statusColors[order.status?.toLowerCase()] ||
                  "bg-gray-100 text-gray-800"
                }`}
              >
                {order.status}
              </span>
            </p>
          </div>
        );
      })}
    </div>
   </div>

  );
}
