'use client';

import { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import data1 from '@/public/data/facial_care.json';
import data2 from '@/public/data/cosmetics.json';
import data3 from '@/public/data/beauty_accessary.json';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import IconLogo from '../assets/icons/logo7.png';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const products = [
    ...data1.Facial_care.map((item: any) => ({
      ...item,
      category: 'facial_care',
    })),
    ...data2.Cosmetics.map((item: any) => ({
      ...item,
      category: 'cosmetics',
    })),
    ...data3.Beauty_accessary.map((item: any) => ({
      ...item,
      category: 'beauty_accessary',
    })),
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 10)); // limit 10 results
  }, [query]);

  return (
    <>
      {/* ✅ Top Navbar */}
      <nav className="w-full border-b border-zinc-200 bg-white fixed top-0 left-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 relative">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-green-50 transition"
          >
            <Menu className="w-6 h-6 text-green-700" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <span className="text-lg font-semibold text-green-600">
              ALL ONLINE
            </span> */}
          <Image
            src={IconLogo}
            alt="Beauty Logo"
            width={1200}
            height={300}
            className="w-full max-h-[50px] object-contain rounded-lg"
            priority
          />

          </div>

          {/* ปุ่มค้นหา */}
          <button
            onClick={() => setIsSearching(!isSearching)}
            className="p-2 rounded-lg hover:bg-green-50 transition"
          >
            {isSearching ? (
              <X className="w-5 h-5 text-green-700" />
            ) : (
              <Search className="w-5 h-5 text-green-700" />
            )}
          </button>
        </div>

        {/* ✅ พื้นที่ขยายด้านล่าง */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-zinc-200 bg-white"
            >
              {/* ช่องค้นหา */}
              <div className="flex items-center w-full px-4 py-3 border-b border-zinc-100">
                <Search className="w-5 h-5 text-green-700 mr-2" />
                <input
                  type="text"
                  placeholder="ค้นหาชื่อสินค้า..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 outline-none text-base text-zinc-700"
                  autoFocus
                />
                {query && (
                  <button onClick={() => setQuery('')}>
                    <X className="w-5 h-5 text-zinc-500 hover:text-zinc-700" />
                  </button>
                )}
              </div>

              {/* แสดงผลลัพธ์การค้นหา */}
              <div className="max-h-64 overflow-y-auto">
                {query.trim() === '' ? (
                  <div className="px-4 py-4 text-zinc-400 text-sm">
                    พิมพ์เพื่อค้นหาสินค้า...
                  </div>
                ) : results.length > 0 ? (
                  <div className="divide-y divide-zinc-100">
                    {results.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          router.push(`/category/${item.category}/${item.id}`);
                          setIsSearching(false);
                          setQuery('');
                        }}
                        className="px-4 py-2 text-sm text-zinc-800 hover:bg-green-50 cursor-pointer"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-4 text-center text-zinc-400 text-sm">
                    ไม่พบสินค้า
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 text-base font-medium">
        <a href="/" className="hover:text-green-600 transition-colors">
          หน้าหลัก
        </a>
        <a href="/" className="hover:text-green-600 transition-colors">
          เนื้อหา
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const footer = document.getElementById('footer');
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
              });
            }
            setIsOpen(false);
          }}
          className="hover:text-green-600 transition-colors"
        >
          ติดต่อ
        </a>
      </div>

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
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-600 transition-colors"
          >
            หน้าหลัก
          </a>
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-600 transition-colors"
          >
            เนื้อหา
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const footer = document.getElementById('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth',
                });
              }
              setIsOpen(false);
            }}
            className="hover:text-green-600 transition-colors"
          >
            ติดต่อ
          </a>
        </div>
      </div>
    </>
  );
}
