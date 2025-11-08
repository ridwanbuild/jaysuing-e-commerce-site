import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo-01.png";
import { TbReceiptEuro } from "react-icons/tb";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ to detect current route

  const isAdmin = true

  // Reusable Nav Links
  const navItems = [
    { label: "Home", href: "#hero-section" },
    { label: "About", href: "#about" },
    { label: "Review", href: "#review" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ detect current section/route
  const [active, setActive] = useState("#hero-section");

  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false); // close mobile
  };


  
  return (
    <header className="flex fixed top-4 w-full  z-10 items-center justify-between lg:p-4 py-4 px-4 shadow-sm max-w-5xl m-auto rounded-full   bg-white left-1/2 -translate-x-1/2">
      {/* Logo */}
      <Link to={"/"}>
        <img className="w-24" src={logo} alt="Logo" />
      </Link>

      {/* ====== Desktop Menu ====== */}
      <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium relative">
        {navItems.map((item, i) =>
          item.href.startsWith("/") ? (
            <Link
              key={i}
              to={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative pb-1 transition uppercase ${
                active === item.href || location.pathname === item.href
                  ? "text-indigo-600"
                  : "hover:text-indigo-600"
              }`}
            >
              {item.label}
              {/* underline effect */}
              {active === item.href || location.pathname === item.href ? (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded"></span>
              ) : null}
            </Link>
          ) : (
            <a
              key={i}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative pb-1 transition uppercase ${
                active === item.href
                  ? "text-indigo-600"
                  : "hover:text-indigo-600"
              }`}
            >
              {item.label}
              {active === item.href ? (
                <span className="absolute left-0 -bottom-0 w-5 h-0.5 bg-indigo-600 rounded"></span>
              ) : null}
            </a>
          )
        )}
      </nav>

      {/* ====== Mobile Menu (Drawer) ====== */}
      <nav
        className={`absolute lg:hidden h-screen z-30 -top-5 left-0 flex flex-col gap-4 pt-20 p-10 transform transition-transform duration-300 ease-in-out backdrop-blur-sm bg-white/30 text-gray-900 text-sm font-medium
          ${menuOpen ? "translate-x-0 w-full" : "-translate-x-full w-64"}`}
      >
        {navItems.map((item, i) =>
          item.href.startsWith("/") ? (
            <Link
              key={i}
              to={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative transition uppercase ${
                active === item.href || location.pathname === item.href
                  ? "text-indigo-600 font-semibold"
                  : "hover:text-indigo-600"
              }`}
            >
              {item.label}
              {/* underline effect (mobile same as desktop) */}
              {active === item.href || location.pathname === item.href ? (
                <span className="absolute left-0 -bottom-1 w-5 h-0.5 bg-indigo-600 rounded"></span>
              ) : null}
            </Link>
          ) : (
            <a
              key={i}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative transition uppercase ${
                active === item.href
                  ? "text-indigo-600 font-semibold"
                  : "hover:text-indigo-600"
              }`}
            >
              {item.label}
              {active === item.href ? (
                <span className="absolute left-0 -bottom-1 w-5 h-0.5 bg-indigo-600 rounded"></span>
              ) : null}
            </a>
          )
        )}

        {/* Close Button */}
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
        <Link to={"/"} className=" px-4 py-1 cursor-pointer flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded">
          Dashboard
        </Link>

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
