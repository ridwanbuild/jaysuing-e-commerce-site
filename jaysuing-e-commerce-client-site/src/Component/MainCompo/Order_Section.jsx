import React, { useState } from "react";
import { Link } from "react-router";

export default function OrderSection() {
  const [mainImage, setMainImage] = useState(
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png"
  );

  const thumbnails = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
  ];

  return (
    <main className="flex items-center flex-col justify-between bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient.png')] bg-cover text-sm text-gray-800 max-md:px-4 text-center py-12">
      <div className="container py-10 m-auto px-4">

        <div className="pb-5 space-y-1">

          <h1 className="text-2xl  capitalize font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent pt-4  md:text-5xl lg:text-4xl font-semibold leading-snug mx-auto">
            Order
            <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
              {" "}
              Your
            </span>{" "}
            jaysuig
          </h1>

          <p className=" lg:text-[16px] font-normal">Complete your order in simple steps</p>
          <p className=" lg:text-[16px] font-normal">FREE Delivery. World-class quality. </p>

        </div>

        <div className="flex flex-col items-center space-y-4">
          {/* Main Image */}
          <div className="w-full max-w-3xl">
            <img src={mainImage} className="w-full rounded" alt="Main" />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 max-w-3xl gap-4">
            {thumbnails.map((src, idx) => (
              <img
                key={idx}
                src={src}
                onClick={() => setMainImage(src)}
                className="rounded md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 transition"
                alt={`Thumb ${idx + 1}`}
              />
            ))}
          </div>
        </div>


           {/* CTAs */}
            <div className="gap-3 mt-10 py-3">

              <Link to={'/order-form'} className="bg-gradient-to-r from-slate-800 to-slate-600 text-white cursor-pointer px-8 py-3 rounded font-medium transition">
                Order Now
              </Link>

            </div>



      </div>
    </main>
  );
}
