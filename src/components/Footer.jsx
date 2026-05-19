import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold text-slate-900">
              Hot Stamping Foil
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Premium foils for packaging, labels, cosmetics, stationery and
              brand accents.
            </p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Quick Links</div>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link to="/" className="text-slate-700 hover:text-slate-900">
                Home
              </Link>
              <Link
                to="/products"
                className="text-slate-700 hover:text-slate-900"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-slate-900"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-2 text-sm text-slate-600 space-y-1">
              <div>📞 +91-9873416620</div>
              <div>✉️ miraixventures@gmail.com</div>
              <div>📍 A-28,Sector-63,Noida</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Hot Stamping Foil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
