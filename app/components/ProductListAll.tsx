'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string | number;
  name: string;
  price: number;
  url_thumbnail: string;
  category: string;
}

interface ProductListAllProps {
  title: string;
  products: Product[];
}

export default function ProductListAll({
  title,
  products,
}: ProductListAllProps) {
  const router = useRouter();
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [sortName, setSortName] = useState<string>('az');

  const filteredProducts = products
    .filter((item) => {
      if (priceFilter === 'low') return item.price < 200;
      if (priceFilter === 'mid') return item.price >= 200 && item.price <= 500;
      if (priceFilter === 'high') return item.price > 500;
      return true;
    })
    .sort((a, b) => {
      if (sortName === 'az') return a.name.localeCompare(b.name);
      if (sortName === 'za') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="mt-10">
      {/* 🔹 หัวข้อ */}
      <h2 className="text-green-600 w-full text-md font-semibold my-2 border-b-2 border-green-600 pb-2">
        <span className="ml-3 font-bold text-[#455d70]">
          {title === 'facial_care'
            ? 'ดูแลผิวหน้า'
            : title === 'cosmetics'
            ? 'เครื่องสำอาง'
            : title === 'beauty_accessary'
            ? 'อุปกรณ์เสริมความงาม'
            : 'รายการทั้งหมด'}{' '}
          <span className="ml-2 text-xl font-bold text-green-600">
            [ {filteredProducts.length} สินค้า ]
          </span>
        </span>
      </h2>

      {/* 🔸 Filter Section */}
      <div className="flex flex-wrap items-center gap-4 bg-gray-50 border border-gray-200 p-3 rounded-lg mb-4">
        {/* 🔸 Filter by price */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">ช่วงราคา:</label>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="all">ทั้งหมด</option>
            <option value="low">ต่ำกว่า ฿200</option>
            <option value="mid">฿200 - ฿500</option>
            <option value="high">สูงกว่า ฿500</option>
          </select>
        </div>

        {/* 🔸 Filter by name */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">
            เรียงตามชื่อ:
          </label>
          <select
            value={sortName}
            onChange={(e) => setSortName(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
        </div>
      </div>

      {/* 🔸 แสดงสินค้าหลัง filter */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full rounded-lg p-3 bg-white hover:shadow-md transition relative cursor-pointer"
            onClick={() => {
              const category = title === 'all' ? item.category : title; // ถ้า title เป็น "all" ใช้ item.category
              router.push(`/category/${category}/${item.id}`);
            }}
          >
            {/* ✅ รูปสินค้า */}
            <div className="flex justify-center items-center mb-3 border border-gray-200">
              <Image
                src={item.url_thumbnail}
                alt={item.name}
                width={150}
                height={150}
                className="object-contain h-40"
              />
            </div>

            {/* ✅ ชื่อสินค้า */}
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              {item.name}
            </p>

            {/* ✅ ราคา */}
            <div className="mt-2 flex flex-col gap-0.25 items-end">
              <span className="text-gray-400 line-through text-sm">
                ฿ {item.price.toFixed(2)}
              </span>
              <span className="text-red-600 font-bold">
                ฿ {(item.price - item.price * 0.23).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
