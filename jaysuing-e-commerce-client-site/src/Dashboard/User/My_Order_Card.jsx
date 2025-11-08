import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function My_order() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `https://jaysuing-e-commerce-server-site.vercel.app/order-data/${id}`
        );
        setOrder(res.data);
      } catch (err) {
        console.error("Failed to fetch order:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  console.log();
  

  if (loading)
    return (
      <p className="text-center p-10 animate-pulse text-gray-500">
        Loading order...
      </p>
    );

    
  if (!order)
    return (
      <p className="text-center p-10 text-red-500">
        Order not found.
      </p>
    );

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(order.orderTimeDate));

  // Updated dynamic contact info
  const contactInfo = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      link: "https://www.facebook.com/ridwanulhoque231",
    },
    {
      icon: <FaFacebookMessenger />,
      label: "Messenger",
      link: "https://m.me/ridwanulhoque231",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      link: "https://wa.me/01876258020",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call",
      link: "tel:+8801876258020",
    },
  ];

  return (
    <div className="lg:max-w-lg m-auto space-y-6 p-4 sm:p-6">
      
      
      {/* ---------------- Welcome Section ---------------- */}
      <div className="border border-teal-200 rounded-2xl p-6 shadow-md">
        <h2 className=" font-bold bg-gradient-to-r from-cyan-500 to-indigo-800 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 sm:text-base opacity-90 mt-1">
          Here’s a quick look at your order details.
        </p>
      </div>

      {/* ---------------- Order Card ---------------- */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
          Your Order
        </h2>
        <img
          src={order.productImg}
          alt="Product"
          className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-lg mb-4"
        />
        <div className="text-sm sm:text-base space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {order.name}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {order.address}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {order.quantity}
          </p>
          <p>
            <span className="font-semibold">Total Price:</span> {order.totalPrice}৳
          </p>
          <p>
            <span className="font-semibold">Order Time:</span> {formattedDate}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                statusColors[order.status?.toLowerCase()] ||
                "bg-gray-100 text-gray-800"
              }`}
            >
              {order.status}
            </span>
          </p>
        </div>
      </div>

      {/* ---------------- Instant Contact Us ---------------- */}
      <div className="border border-teal-200 rounded-2xl p-6 shadow-md space-y-4">
        <h2 className="text-sm font-bold text-gray-800">Contact Us Instantly</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition"
            >
              <div className="text-teal-600 text-2xl mb-2">{item.icon}</div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      
    </div>
  );
}
