import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive
      ? "bg-slate-900 text-white"
      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-18 w-18 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">
              <img src="../src/assets/logo.jpeg" alt="logo" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-2xl text-blue-900 ">
                Mirai X Ventures
              </div>
              <div className="text-xs text-yellow-500 ">
                Premium finish films
              </div>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-slate-900 text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={navLinkClass}
                end
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
