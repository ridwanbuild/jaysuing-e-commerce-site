import React from "react";

export default function H2Text({ mainText, highlightText, subText }) {
  return (
    <div>
      <h1 className="text-2xl font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent pt-4 md:text-5xl lg:text-6xl font-semibold leading-snug mx-auto text-center">
        {mainText}
        <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
          {" "}
          {highlightText} <br /> {subText}{" "}
        </span>

        
        
      </h1>
    </div>
  );
}
