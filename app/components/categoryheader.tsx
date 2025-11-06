'use client';
import { IoIosArrowDropdown, IoMdHome } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CategoryHeader() {
  const pathname = usePathname();

  const isHome = !pathname?.includes('/category');
  const isFacialCare = pathname?.includes('/category/facial_care');
  const isCosmetics = pathname?.includes('/category/cosmetics');
  const isBeauty_accessary = pathname?.includes('/category/beauty_accessary');

  const router = useRouter();
  const [selected, setSelected] = useState('แม่และเด็ก');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const categories = [
    { name: 'หน้าหลัก', path: '/' },
    { name: 'ดูแลผิวหน้า', path: '/category/facial_care' },
    { name: 'เครื่องสำอาง', path: '/category/cosmetics' },
    { name: 'อุปกรณ์เสริมความงาม', path: '/category/beauty_accessary' },
  ];

  return (
    <div className="w-full bg-white border-b border-zinc-200 mt-16">
      {/* 🔹 ส่วนหัว */}
      <div
        onClick={() => setIsDropdownVisible((prev) => !prev)}
        className="bg-slate-600 text-white text-center py-3 text-base font-normal flex items-center justify-center gap-2 relative"
      >
        <span>สินค้า</span>
        <IoIosArrowDropdown />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-green-500"></div>
      </div>

      {/* 🔹 รายการหมวดหมู่ */}
      {isDropdownVisible && (
        <div className="relative">
          <ul
            className="absolute left-0 top-full w-full bg-white border border-gray-200 shadow-md 
                    divide-y divide-gray-200 mt-1 z-50 rounded-lg"
          >
            {categories.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  setSelected(item.name);
                  setIsDropdownVisible(false);
                  router.push(item.path);
                }}
                className={`py-3 px-4 text-gray-800 cursor-pointer hover:bg-gray-100 ${
                  selected === item.name ? 'font-semibold' : ''
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔹 Breadcrumb */}
      <div className="flex items-center gap-2 pl-2 pr-6 py-2 bg-zinc-50 border-t-1 border-green-400 text-sm text-zinc-600">
        {/* ไอคอนบ้าน */}
        <IoMdHome size={20} />
        <a href="/" className="hover:text-green-600">
          หน้าหลัก
        </a>
        <span className="text-zinc-400">›</span>
        <a
          href="/"
          className={
            isHome ? 'text-green-600' : 'text-zinc-400 hover:text-green-600'
          }
        >
          ความงาม
        </a>

        {/* ✅ ถ้า path มี /category/facial_care ให้แสดง breadcrumb ต่อ */}
        {isFacialCare && (
          <>
            <span className="text-zinc-400">›</span>
            <span
              className="text-green-600 font-semibold cursor-pointer hover:underline"
              onClick={() => router.push('/category/facial_care')}
            >
              ดูแลผิวหน้า
            </span>
          </>
        )}

        {isCosmetics && (
          <>
            <span className="text-zinc-400">›</span>
            <span
              className="text-green-600 font-semibold cursor-pointer hover:underline"
              onClick={() => router.push('/category/cosmetics')}
            >
              เครื่องสำอาง
            </span>
          </>
        )}

        {isBeauty_accessary && (
          <>
            <span className="text-zinc-400">›</span>
            <span
              className="text-green-600 font-semibold cursor-pointer hover:underline"
              onClick={() => router.push('/category/beauty_accessary')}
            >
              อุปกรณ์เสริมความงาม
            </span>
          </>
        )}
      </div>
    </div>
  );
}
