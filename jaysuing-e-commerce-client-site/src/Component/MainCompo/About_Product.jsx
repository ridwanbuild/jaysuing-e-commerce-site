import React from "react";
import img from "../../assets/hero image/about image.jpg";
import H2Text from "../Share_Compo.jsx/H2Text";

export default function About_Product() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] scroll-mt-15 py-16 h-full px-3 sm:px-10"
    >
      <div className="container lg:py-16 m-auto px-2 flex flex-col items-center justify-center text-center">
        {/* Title */}

        <h1 className="text-2xl font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent pt-4  md:text-5xl lg:text-4xl font-semibold leading-snug mx-auto">
          Restore{" "}
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
            Your Natural <br /> Spots{" "}
          </span>
          Naturally
        </h1>
        


              


        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-2xl">
          JAYSUI helps moms fade pregnancy spots, dark marks, and uneven skin tone
          naturally. Our gentle, dermatologist-tested cream is safe and effective,
          designed to bring back your confidence and enhance your natural beauty.
        </p>


        {/* Product Image with Gradient Shadow */}
        <div className="relative mt-10">
          <div className="absolute inset-0 rounded-lg blur-3xl bg-gradient-to-r from-rose-200 via-purple-400 to-indigo-400 opacity-60"></div>
          <img
            className="relative shadow rounded-md w-full max-w-lg"
            src={img}
            alt="Jaysui Product Showcase"
          />
        </div>
        
      </div>
    </section>
  );
}
