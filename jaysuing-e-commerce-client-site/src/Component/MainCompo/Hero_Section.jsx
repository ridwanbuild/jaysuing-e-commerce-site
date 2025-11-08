import React, { useEffect } from "react";
import Navbar from "../Share_Compo.jsx/Navbar";
import heroImg from "../../assets/hero image/hero image.webp";
import { Link, useLocation } from "react-router";

export default function Hero_Section() {

  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);


  return (
    <section
    id="hero-section"
      className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]   sm:px-10"
    >
      {/* Hero Content */}
      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] pb-16 w-full bg-no-repeat bg-cover bg-center text-sm h-full relative">
        {/* Header / Navbar */}
        

        {/* Hero section content */}

        <div
          className="px-4 lg:pt-35 pt-30 
         flex items-center justify-around flex-col-reverse lg:flex-row
       "
        >
         

          <div className="space-y-3 ">
            
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
              <Link to={"/order-form"} className="bg-gradient-to-r from-slate-800 to-slate-600 text-white px-8 py-3 rounded font-medium transition">
                Shop Now
              </Link>
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
