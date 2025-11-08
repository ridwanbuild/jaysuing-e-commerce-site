import React from "react";
// ✅ import ClipLoader from react-spinners
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      {/* ✅ React Spinners */}
      <ClipLoader size={50} color="#2563EB" /> {/* blue color spinner */}
      
      {/* Loading message */}
      <p className="text-gray-700 font-medium text-lg mt-4">
        Loading orders...
      </p>
    </div>
  );
}
