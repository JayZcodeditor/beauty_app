'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import IconCate1 from './assets/icons/category/Icon-cat5-New_01-232170-0.jpg';
import IconCate2 from './assets/icons/category/Icon-cat5-New_02-232172-0.jpg';
import IconCate3 from './assets/icons/category/Icon-cat5-New_09-232181-0.jpg';

export default function CategoriesGrid() {
  const router = useRouter();
  const categories = [
    { name: 'ดูแลผิวหน้า', icon: IconCate1, href: '/category/facial_care' },
    { name: 'เครื่องสำอาง', icon: IconCate2, href: '/category/cosmetics' },
    // { name: 'ดูแลผิวกาย', icon: '/icons/body-care.png' },
    // { name: 'ดูแลเส้นผม', icon: '/icons/hair-care.png' },
    // { name: 'ดูแลช่องปาก', icon: '/icons/oral-care.png' },
    // { name: 'ของใช้ส่วนตัว', icon: '/icons/personal.png' },
    // { name: 'สำหรับผู้ชาย', icon: '/icons/men.png' },
    // { name: 'สำหรับผู้หญิง', icon: '/icons/women.png' },
    {
      name: 'อุปกรณ์เสริม',
      icon: IconCate3,
      href: '/category/beauty_accessary',
    },
    // { name: 'ดูแลเล็บ', icon: '/icons/nail-care.png' },
  ];

  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 gap-4 mb-5 px-2">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
          onClick={() => router.push(cat.href)}
        >
          <div className="w-20 h-20 flex items-center justify-center mb-2 overflow-hidden">
            <Image
              src={cat.icon}
              alt={cat.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
