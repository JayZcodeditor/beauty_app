'use client'; // ต้องมีบรรทัดนี้ด้านบนสุด

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from './components/navbar';
import Footer from './components/footer';
import CategoryHeader from './components/categoryheader';
import Image from 'next/image';
import IconBanner from './assets/icons/banner/webp_Strip-1200x150-Head-232167-0.webp';
import IconBanner1 from './assets/icons/banner/webp_Strip-1200x150-555-1-232184-0.webp';

import IconBanner1_1 from './assets/icons/banner/1.webp';
import IconBanner1_2 from './assets/icons/banner/2.webp';
import IconBanner1_3 from './assets/icons/banner/3.webp';

import IconPromo1 from './assets/icons/promotion/12-275816-0.webp';
import IconPromo2 from './assets/icons/promotion/4-275842-0.webp';
import IconPromo3 from './assets/icons/promotion/80-276230-0.webp';

import { motion } from 'framer-motion';
import CategoriesGrid from './CategoriesGrid';

export default function Home() {
  const promos = [IconPromo1, IconPromo2, IconPromo3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto w-full bg-white">
        {/* 🟢 ส่วนหัวหมวดหมู่ */}
        <div className="w-full">
          <CategoryHeader />
        </div>
        {/* 🩷 Banner */}
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
        {/* ❤️ Promo Section */}
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

        {/* 🧴 หมวดหมู่ */}
        <CategoriesGrid />

        {/* 🩷 Banner */}
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

        {/* 💄 สินค้าความงาม */}
        <section className="my-12">
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
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 bg-white rounded-xl shadow hover:shadow-md border border-zinc-100 transition-all duration-200"
                >
                  <img
                    src={`https://source.unsplash.com/300x400/?cosmetic,${i}`}
                    alt={`Beauty ${i}`}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-3 text-sm">
                    <p className="font-medium line-clamp-2">
                      Srichand แป้งควบคุมความมัน เบลอรูขุมขน
                    </p>
                    <p className="text-green-600 font-semibold mt-2">฿189</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Image
              src={IconBanner1_2}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src={IconBanner1_3}
              alt="Beauty Banner"
              width={1200}
              height={150}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
          {/* <h2 className="text-2xl font-semibold text-zinc-800 mb-4 border-b-4 border-green-400 inline-block pb-1">
            สินค้าความงาม
          </h2> */}
          {/* <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 bg-white rounded-xl shadow hover:shadow-md border border-zinc-100 transition-all duration-200"
              >
                <img
                  src={`https://source.unsplash.com/300x400/?cosmetic,${i}`}
                  alt={`Beauty ${i}`}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-3 text-sm">
                  <p className="font-medium line-clamp-2">
                    Srichand แป้งควบคุมความมัน เบลอรูขุมขน
                  </p>
                  <p className="text-green-600 font-semibold mt-2">฿189</p>
                </div>
              </div>
            ))}
          </div> */}
        </section>
      </main>
      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
