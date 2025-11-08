import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductImg from "../../assets/hero image/about image.jpg";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import OrderSummary from "./OrderSummary";
import productImg from "../../assets/hero image/about image.jpg";

import { PiSpinner } from "react-icons/pi";
import useOrderItem from "../../Hook/useOrderItem";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Order_Form() {
  const [quantity, setQuantity] = useState(""); // ✅ empty string initially
  const [quantityError, setQuantityError] = useState(""); // ✅ error state
  const [loading, setLoading] = useState(false);

  const { orders } = useOrderItem();

  const price = 1590;
  const discount = 600;
  const delivery = 120;

  const fields = [
    { label: "Full Name", type: "text", placeholder: "Enter your name", col: 1, name: "name" },
    { label: "Email: optional", type: "email", placeholder: "Enter your email", col: 1, name: "email" },
    { label: "Phone Number", type: "tel", placeholder: "+880 1XXX-XXXXXX", col: 1, name: "phone" },
    { label: "Quantity", type: "text", placeholder: "1", col: 1, name: "quantity" },
    { label: "Delivery Address", type: "textarea", placeholder: "Enter your full address", col: 2, rows: 3, name: "address" },
    { label: "Notes (optional)", type: "textarea", placeholder: "Special instructions...", col: 2, rows: 2, name: "notes" },
  ];

  const inputClass =
    "p-3 border rounded-lg outline-none border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition";

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // ✅ Validate number input
  const handleQuantityChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setQuantity(val);
      setQuantityError("");
    } else {
      setQuantityError("Please enter a valid number");
    }
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.address.value.trim()) {
      toast.error("First fill up your address");
      return;
    }

    if (!quantity || isNaN(quantity)) {
      setQuantityError("Quantity must be a number");
      return;
    }

    const orderData = {
      productImg: productImg,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      quantity: Number(quantity),
      address: form.address.value,
      notes: form.notes.value,
      totalPrice: price * Number(quantity) - discount + delivery,
      orderTimeDate: new Date().toISOString(),
      status: "pending",
      role: "user",
    };

    setLoading(true);

    try {
      const mongodbData = await axios.post(
        "https://jaysuing-e-commerce-server-site.vercel.app/order-data",
        orderData,
        { headers: { "Content-Type": "application/json" } }
      );

      const localOrder = JSON.parse(localStorage.getItem("order-data")) || [];
      localOrder.push(orderData);
      localStorage.setItem("order-data", JSON.stringify(localOrder));

      console.log("Vercel Response:", mongodbData.data);
      console.log("Saved to Browser LocalStorage:", orderData);

      toast.success("Thanks for your order");

      form.reset();
      setQuantity("");
      navigate(`/dashboard/my-order`);
    } catch (error) {
      console.error("Error sending order:", error.mongodbData?.data || error.message);
      toast.error("Failed to place your order. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaFacebookF />, label: "Facebook", link: "https://www.facebook.com/ridwanulhoque231" },
    { icon: <FaFacebookMessenger />, label: "Messenger", link: "https://m.me/ridwanulhoque231" },
    { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/01876258020" },
    { icon: <FaPhoneAlt />, label: "Call", link: "tel:+8801876258020" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]">
      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-no-repeat bg-cover bg-center py-16">
        <div className="max-w-4xl py-16 mx-auto">
          <div className="bg-white/50 backdrop-blur-3xl mx-3 rounded-3xl shadow-lg p-3 md:p-10 flex flex-col items-center gap-6">

            {/* ---------------- Contact Info ---------------- */}
            <div className="w-full">
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-800 to-indigo-600 bg-clip-text text-transparent mb-2">
                Contact Us Instantly
              </h2>
              <div className="flex items-center py-2 gap-5">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border bg-white shadow-md border-gray-200 p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <div className="text-lg text-blue-800">{item.icon}</div>
                  </a>
                ))}
              </div>
            </div>

            <img src={ProductImg} alt="Product" className="w-full rounded-2xl shadow-md object-cover" />

            <OrderSummary
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              discount={discount}
              delivery={delivery}
            />

            <h1 className="text-2xl font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent pt-4 md:text-5xl lg:text-4xl font-semibold leading-snug mx-auto">
              Fill up{" "}
              <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                Your address
              </span>
            </h1>

            <form onSubmit={handlerForm} className="w-full grid p-4 grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field, index) => (
                <div key={index} className={`flex flex-col ${field.col === 2 ? "md:col-span-2" : ""}`}>
                  <label className="text-gray-700 mb-1 font-medium">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      rows={field.rows || 3}
                      placeholder={field.placeholder}
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.name === "quantity" ? quantity : undefined}
                      onChange={(e) =>
                        field.name === "quantity" && handleQuantityChange(e) // ✅ validation added here
                      }
                      className={inputClass}
                    />
                  )}
                  {/* ✅ Display error message */}
                  {field.name === "quantity" && quantityError && (
                    <span className="text-red-500 text-sm mt-1">{quantityError}</span>
                  )}
                </div>
              ))}

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-slate-800 to-slate-600 text-white cursor-pointer w-full px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  {loading && <PiSpinner className="animate-spin h-5 w-5 text-white" />}
                  {loading ? "Submitting..." : "Confirm Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
