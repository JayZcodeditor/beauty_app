'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

export default function CategoryPage() {
  const [sortBy, setSortBy] = useState('ยอดนิยม');

  const products = [
    {
      id: 1,
      name: 'Lesasha ไดร์เป่าผม Airmax Powerful 1000W รุ่น LS1356',
      price: 350,
      oldPrice: 490,
      discount: '29%',
      tag: 'BEST SELLER',
      image:
        'https://media.allonline.7eleven.co.th/pdzoom/138507-00-allonline-bt.jpg',
    },
    {
      id: 2,
      name: 'กิ๊บติดผม Hello Kitty X Butterbear ลายแอปเปิ้ลชุด',
      price: 79,
      tag: 'BEST SELLER',
      image:
        'https://media.allonline.7eleven.co.th/pdzoom/181503-00-allonline-bt.jpg',
    },
    {
      id: 3,
      name: 'หวีไดร์เป่าผมไฟฟ้า 2in1 รุ่นใหม่ล่าสุด',
      price: 299,
      oldPrice: 399,
      discount: '25%',
      tag: 'BEST SELLER',
      image:
        'https://media.allonline.7eleven.co.th/pdzoom/177845-00-allonline-bt.jpg',
    },
    {
      id: 4,
      name: 'เครื่องหนีบผม Lesasha Wet2Dry รุ่น LS1189',
      price: 690,
      oldPrice: 890,
      discount: '22%',
      tag: 'BEST SELLER',
      image:
        'https://media.allonline.7eleven.co.th/pdzoom/149876-00-allonline-bt.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans">
      {/* 🔹 Breadcrumb */}
      <div className="w-full bg-zinc-50 border-b border-zinc-200 py-3 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 items-center">
          <a href="#" className="text-green-600 hover:underline">
            หน้าหลัก
          </a>
          <span>›</span>
          <a href="#" className="text-green-600 hover:underline">
            ความงาม
          </a>
          <span>›</span>
          <span className="text-zinc-600">อุปกรณ์เสริมความงาม</span>
        </div>
      </div>

      {/* 🔹 Header */}
      <div className="max-w-6xl mx-auto w-full px-4 py-6 border-b border-green-500">
        <h1 className="text-2xl font-bold text-green-700 mb-1">
          อุปกรณ์ทำผม
        </h1>
        <p className="text-green-600 text-lg">(60 สินค้า)</p>
      </div>

      {/* 🔹 Filter Bar */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          <div className="flex items-center gap-3 border border-zinc-300 rounded-md px-3 py-2 text-sm">
            <span>แสดง</span>
            <span className="text-green-600 font-semibold cursor-pointer">
              30
            </span>
            <span>60</span>
            <span>90</span>
          </div>
        </div>

        {/* Sort + Pagination */}
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-zinc-300 rounded-md px-3 py-2 text-sm"
          >
            <option>ยอดนิยม</option>
            <option>ราคาต่ำ - สูง</option>
            <option>ราคาสูง - ต่ำ</option>
          </select>

          <div className="flex items-center gap-2">
            <button className="p-2 border border-zinc-300 rounded hover:bg-green-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-medium text-green-700">1</span>
            <button className="p-2 border border-zinc-300 rounded hover:bg-green-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-zinc-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden relative"
          >
            {/* Badge */}
            {item.tag && (
              <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded-md font-semibold shadow">
                {item.tag}
              </span>
            )}

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-contain p-4 bg-zinc-50"
            />

            <div className="px-4 pb-3">
              <p className="text-sm font-medium line-clamp-2 min-h-[40px] mt-2">
                {item.name}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 font-bold text-lg">
                  ฿{item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-zinc-400 line-through text-sm">
                    ฿{item.oldPrice}
                  </span>
                )}
              </div>

              {item.discount && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-bold shadow">
                  {item.discount} OFF
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
