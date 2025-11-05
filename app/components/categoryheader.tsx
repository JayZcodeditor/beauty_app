'use client';
import { IoIosArrowDropdown, IoMdHome } from 'react-icons/io';

export default function CategoryHeader() {
  return (
    <div className="w-full bg-white border-b border-zinc-200 mt-16">
      {/* 🔹 หมวดหมู่หลัก */}
      <div className="bg-slate-600 text-white text-center py-2 text-base font-normal flex items-center justify-center gap-2">
        <span>สินค้า</span>
        <IoIosArrowDropdown />
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="flex items-center gap-2 pl-2 pr-6 py-3 bg-zinc-50 border-t-4 border-green-400 text-sm text-zinc-600">
        {/* ไอคอนบ้าน */}
        <IoMdHome size={20}/>
        <a href="#" className="hover:text-green-600">
          หน้าหลัก
        </a>
        <span className="text-zinc-400">›</span>
        <span className="text-green-600 font-semibold">ความงาม</span>
      </div>
    </div>
  );
}
