import React from "react";
import logo from "../../assets/logo-01.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] shadow-lg  text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Product Description */}
          <div className="col-span-1 md:col-span-2">
            <button>
              <img className="w-24" src={logo} alt="JAYSUI Logo" />
            </button>
            <p className="mt-4 text-sm font-normal leading-relaxed text-gray-600 max-w-sm">
              Our gentle, dermatologist-tested cream helps reduce dark spots and uneven skin tone caused by pregnancy, restoring your skin's natural glow and confidence.
            </p>
          </div>

          {/* Site Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Company & Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="#">JAYSUI</a> ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}