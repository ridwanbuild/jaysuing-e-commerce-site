import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import logo from "../../assets/logo-01.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reusable Nav Links
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
   
   
  ];

  return (
    <header className="flex z-20 items-center  justify-between lg:p-4  py-4 px-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white">
      {/* Logo */}

      <button>
        <img className="w-24" src={logo} alt="Logo" />
      </button>

      {/* ====== Desktop Menu ====== */}
      <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="hover:text-indigo-600 transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* ====== Mobile Menu (Drawer) ====== */}
      <nav
        className={`absolute lg:hidden h-screen z-10 top-0 left-0 flex flex-col gap-4 pt-12 p-10 transform transition-transform duration-300 ease-in-out bg-white/40 backdrop-blur-sm text-gray-900 text-sm font-medium
          ${menuOpen ? "translate-x-0 w-full" : "-translate-x-full w-64"}`}
      >
        {navItems.map((item, i) => (
          <a
            key={i}
            className="hover:text-indigo-600 transition"
            href={item.href}
          >
            {item.label}
          </a>
        ))}

        {/* Close Button (Mobile) */}
        <button
          className="md:hidden border text-xl px-2 rounded cursor-pointer top-10 right-7 absolute text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
      </nav>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon */}
        <button className="size-8 cursor-pointer flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md">
          <FiShoppingCart className="text-gray-700" />
        </button>

      

        {/* Open Menu Button (Mobile) */}
        <button
          className="md:hidden px-1 cursor-pointer text-gray-600"
          onClick={() => setMenuOpen(true)}
        >
          <VscMenu className="w-7 h-7" />
        </button>

      </div>
    </header>
  );
}
