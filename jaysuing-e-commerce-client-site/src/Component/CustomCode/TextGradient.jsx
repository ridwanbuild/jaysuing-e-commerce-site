import React from "react";

export default function TextGradient({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
      
    </div>
  );
}
