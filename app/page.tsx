'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Navbar from './components/navbar';
import Footer from './components/footer';
import CategoryHeader from './components/categoryheader';
import Image from 'next/image';
import IconBanner from './assets/icons/banner/webp_Strip-1200x150-Head-232167-0.webp';
import IconBanner1 from './assets/icons/banner/webp_Strip-1200x150-555-1-232184-0.webp';
import IconBanner2 from './assets/icons/banner/webp_Strip-1200x150-555-3-232186-0.webp';

import IconBanner1_1 from './assets/icons/banner/1.webp';
import IconBanner1_2 from './assets/icons/banner/2.webp';
import IconBanner1_3 from './assets/icons/banner/3.webp';

import IconPromo1 from './assets/icons/promotion/12-275816-0.webp';
import IconPromo2 from './assets/icons/promotion/4-275842-0.webp';
import IconPromo3 from './assets/icons/promotion/80-276230-0.webp';

import data1 from '@/public/data/facial_care.json';
import data2 from '@/public/data/cosmetics.json';
import data3 from '@/public/data/beauty_accessary.json';

import { motion } from 'framer-motion';
import CategoriesGrid from './CategoriesGrid';
import { ArrowUp } from 'lucide-react';
import ProductListAll from './components/ProductListAll';

export default function Home() {
  const promos = [IconPromo1, IconPromo2, IconPromo3];
  const router = useRouter();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto w-full bg-white">
        {/* 🟢 ส่วนหัวหมวดหมู่ Breadcumb*/}
        <div className="w-full">
          <CategoryHeader />
        </div>

        {/* 🩷 Banner Beauty สินค้าความงาม*/}
        <div className="w-full my-4">
          <Image
            src={IconBanner}
            alt="Beauty Banner"
            width={1200}
            height={150}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>

        {/* ❤️ Promo slider */}
        <div className="relative w-full mb-8 overflow-hidden rounded-xl shadow-lg">
          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            animate={{ x: `-${index * 100}%` }}
          >
            {promos.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <Image
                  src={src}
                  alt={`Beauty Banner ${i + 1}`}
                  width={1200}
                  height={150}
                  className="w-full rounded-lg object-cover"
                  priority
                />
              </div>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {promos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === i ? 'bg-white scale-110' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🧴 หมวดหมู่ของผลิตภัฒฑ์ */}
        <CategoriesGrid />

        {/* 🩷 Banner สินค้าใหม่สวยก่อนใคร */}
        <div className="w-full">
          <Image
            src={IconBanner1}
            alt="Beauty Banner"
            width={1200}
            height={150}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>

        {/* เนื้อหาตัวอย่างสินค้าแต่ละหมวดหมู่ */}
        <section className="mt-2">
          {/* ดูแลผิวหน้า */}
          <div className="w-full">
            <Image
              src={IconBanner1_2}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
            <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
              <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
                {data1.Facial_care.map((item: any, index: any) => (
                  <div
                    key={index}
                    onClick={() =>
                      router.push(`/category/facial_care/${item.id}`)
                    }
                    className="flex-shrink-0 w-48 bg-white hover:shadow-md  transition-all duration-200 cursor-pointer"
                  >
                    {/* ✅ รูปภาพสินค้า */}
                    <div className="relative w-full h-48">
                      <Image
                        src={
                          item.url_thumbnail ||
                          'https://via.placeholder.com/300x400?text=No+Image'
                        }
                        alt={item.name}
                        fill
                        className="object-cover border border-zinc-100"
                      />
                    </div>

                    {/* ✅ ข้อมูลสินค้า */}
                    <div className="p-3 text-sm">
                      <p className="font-medium line-clamp-2">{item.name}</p>
                      <div className="mt-2 text-right">
                        <p className="text-gray-400 line-through text-xs">
                          ฿ {item.price.toFixed(2)}
                        </p>
                        <p className="text-green-600 font-semibold">
                          ฿ {(item.price - item.price * 0.23).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🩷 Banner สินค้าใหม่สวยก่อนใคร */}
          <div className="w-full">
            <Image
              src={IconBanner2}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>

          {/* เครื่องสำอาง */}
          <div className="w-full">
            <Image
              src={IconBanner1_1}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
            <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
              {data2.Cosmetics.map((item: any, index: any) => (
                <div
                  key={index}
                  onClick={() => router.push(`/category/cosmetics/${item.id}`)}
                  className="flex-shrink-0 w-48 bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* ✅ รูปภาพสินค้า */}
                  <div className="relative w-full h-48">
                    <Image
                      src={
                        item.url_thumbnail ||
                        'https://via.placeholder.com/300x400?text=No+Image'
                      }
                      alt={item.name}
                      fill
                      className="object-cover border border-zinc-100"
                    />
                  </div>

                  {/* ✅ ข้อมูลสินค้า */}
                  <div className="p-3 text-sm">
                    <p className="font-medium line-clamp-2">{item.name}</p>
                    <div className="mt-2 text-right">
                      <p className="text-gray-400 line-through text-xs">
                        ฿ {item.price.toFixed(2)}
                      </p>
                      <p className="text-green-600 font-semibold">
                        ฿ {(item.price - item.price * 0.23).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ของใช้ส่วนตัว */}
          <div className="w-full">
            <Image
              src={IconBanner1_3}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
            <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
              {data3.Beauty_accessary.map((item: any, index: any) => (
                <div
                  key={index}
                  onClick={() =>
                    router.push(`/category/beauty_accessary/${item.id}`)
                  }
                  className="flex-shrink-0 w-48 bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* ✅ รูปภาพสินค้า */}
                  <div className="relative w-full h-48">
                    <Image
                      src={
                        item.url_thumbnail ||
                        'https://via.placeholder.com/300x400?text=No+Image'
                      }
                      alt={item.name}
                      fill
                      className="object-cover border border-zinc-100"
                    />
                  </div>

                  {/* ✅ ข้อมูลสินค้า */}
                  <div className="p-3 text-sm">
                    <p className="font-medium line-clamp-2">{item.name}</p>
                    <div className="mt-2 text-right">
                      <p className="text-gray-400 line-through text-xs">
                        ฿ {item.price.toFixed(2)}
                      </p>
                      <p className="text-green-600 font-semibold">
                        ฿ {(item.price - item.price * 0.23).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductListAll title={"all"} products={products} />
      </main>

      {window.scrollY > 10 ? <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button> : null}

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
