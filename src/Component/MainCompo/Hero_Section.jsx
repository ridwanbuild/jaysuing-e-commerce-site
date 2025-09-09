import React from "react";
import Navbar from "../Share_Compo.jsx/Navbar";
import heroImg from "../../assets/hero image/hero image.webp";

export default function Hero_Section() {
  return (
    <section
      id="section"
      className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]   sm:px-10"
    >
      {/* Hero Content */}
      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] pb-16 w-full bg-no-repeat bg-cover bg-center text-sm h-full relative">
        {/* Header / Navbar */}
        <div className="pt-8 mx-2">
          <Navbar />
        </div>

        {/* Hero section content */}

        <div
          className="px-4 lg:pt-20 pt-12
         flex items-center justify-around flex-col-reverse lg:flex-row
       "
        >
          {/*   absolute container border m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            flex flex-col-reverse lg:flex-row items-center justify-around gap-10 px-4 */}

          <div className="space-y-3">
            
            {/* Title */}
            <h1 className="text-2xl font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent pt-4  md:text-5xl lg:text-6xl font-semibold leading-snug mx-auto">
              Fade 
              <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent"> Pregnancy <br /> Spots  </span>
              Naturally
              
            </h1>

            {/* Subtitle */}
            <p className="text-sm lg:w-[700px] text-gray-700">
              Our gentle, dermatologist-tested cream helps reduce dark spots and
              uneven skin tone caused by pregnancy. Safe for moms, effective for
              restoring your natural glow.
            </p>

            {/* CTAs */}
            <div className="gap-3 py-3">
              <button className="bg-gradient-to-r from-slate-800 to-slate-600 text-white px-8 py-3 rounded font-medium transition">
                Shop Now
              </button>
            </div>

          </div>

          <div className="">
            <img className="lg:w-20 w-[60px]" src={heroImg} alt="" />
          </div>
          
        </div>
      </section>
    </section>
  );
}
