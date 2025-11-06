'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ Top Navbar */}
      <nav className="w-full border-b border-zinc-200 bg-white fixed top-0 left-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-green-50 transition"
          >
            <Menu className="w-6 h-6 text-green-700" />
          </button>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-green-600">
              ALL ONLINE
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <a href="#" className="hover:text-green-600 transition-colors">
              หน้าหลัก
            </a>
            <a
              href="#"
              className="text-green-600 border-b-2 border-green-600 pb-1"
            >
              เนื้อหา
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              ติดต่อ
            </a>
          </div>
        </div>
      </nav>

      {/* ✅ Overlay (click outside to close) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ✅ Slide-in Menu (from left side) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-200">
          <span className="text-lg font-semibold text-green-700">เมนู</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-green-50 transition"
          >
            <X className="w-5 h-5 text-green-700" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col p-4 space-y-4 text-zinc-800 font-medium">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-600 transition-colors"
          >
            หน้าหลัก
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-600 transition-colors"
          >
            เนื้อหา
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-600 transition-colors"
          >
            ติดต่อ
          </a>
        </div>
      </div>
    </>
  );
}
