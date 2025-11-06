'use client';

import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import CategoryHeader from '@/app/components/categoryheader';
import Footer from '@/app/components/footer';

import IconPro1 from '../../assets/icons/category/cat1title/CS-Skincare_01-212299-0.jpg';
import IconPro2 from '../../assets/icons/category/cat1title/CS-Skincare_02-212300-0.jpg';
import IconPro3 from '../../assets/icons/category/cat1title/บำรุงผิวหน้า-144452-0-163886-0.jpg';
import IconPro4 from '../../assets/icons/category/cat1title/กันแดด-144456-0-163889-0.jpg';
import IconPro5 from '../../assets/icons/category/cat1title/ทำความสะอาดผิวหน้า-144455-0-163888-0.jpg';
import IconPro6 from '../../assets/icons/category/cat1title/CS-Mask-212301-0.jpg';

import IconPre1 from '../../assets/icons/category/cate2title/CS-Makeup_01-212306-0.jpg';
import IconPre2 from '../../assets/icons/category/cate2title/CS-Makeup_02-212307-0.jpg';
import IconPre3 from '../../assets/icons/category/cate2title/Make-up_banner_02-144482-0-165200-0.jpg';
import IconPre4 from '../../assets/icons/category/cate2title/Make-up_banner_03-144483-0-165201-0.jpg';
import IconPre5 from '../../assets/icons/category/cate2title/Make-up_banner_05-144485-0-165203-0.jpg';
import IconPre6 from '../../assets/icons/category/cate2title/Make-up_banner_06-144486-0-165204-0.jpg';

import IconPri1 from '../../assets/icons/category/cat3title/beauty-tools_banner_01-144489-0-163950-0.jpg';
import IconPri2 from '../../assets/icons/category/cat3title/beauty-tools_banner_04-144496-0-163953-0.jpg';
import IconPri3 from '../../assets/icons/category/cat3title/beauty-tools_banner_02-144490-0-163951-0.jpg';

import IconPri4 from '../../assets/icons/category/cat3title/CS-Batterian-212302-0.jpg';
import IconPri5 from '../../assets/icons/category/cat3title/CS-Tooth-Tools-212304-0.jpg';
import IconPri6 from '../../assets/icons/category/cat3title/CS-Acc-Skin-212303-0.jpg';

import data1 from '@/public/data/facial_care.json';
import data2 from '@/public/data/cosmetics.json';
import data3 from '@/public/data/beauty_accessary.json';
import { useRouter } from 'next/navigation';
import ProductListAll from '@/app/components/ProductListAll';

interface PageProps {
  params: { title: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const router = useRouter();
  const { title } = await params;

  let products: any[] = [];
  if (title === 'facial_care') products = data1.Facial_care;
  else if (title === 'cosmetics') products = data2.Cosmetics;
  else if (title === 'beauty_accessary') products = data3.Beauty_accessary;

  const typeNameMap_1: Record<string, string> = {
    scrub: 'บำรุงผิวหน้า',
    mask: 'มาส์กหน้า',
    cleanser: 'ทำความสะอาดผิวหน้า',
    sunscreen: 'ป้องกันแสงแดด',
  };

  const typeNameMap_2: Record<string, string> = {
    facial_makeup: 'ผิวหน้า',
    eye_makeup: 'รอบดวงตา',
    cheek_makeup: 'แก้ม',
    lips: 'ลิปสติก',
  };

  const typeNameMap_3: Record<string, string> = {
    hair: 'อุปกรณ์ทำผม',
    beard: 'อุปกรณ์กำจัดขน',
    face: 'อุปกรณ์ดูแลผิวหน้า',
    mouth: 'อุปกรณ์ดูแลช่องปาก',
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content Facial*/}
      {title === 'facial_care' ? (
        <main className="max-w-6xl mx-auto w-full bg-white">
          {/* 🟢 ส่วนหัวหมวดหมู่ Breadcumb*/}
          <div className="w-full">
            <CategoryHeader />
          </div>
          {/* 🧴 ผลิตภัณฑ์ดูแลผิวหน้า */}
          <section className="py-3">
            {/* หัวข้อ */}
            <h2 className="text-green-600 w-full  text-md font-semibold mb-4 border-b-2 border-green-600 pb-2">
              <span className="ml-3">ผลิตภัณฑ์ดูแลผิวหน้า</span>
            </h2>

            {/* Grid layout 3 คอลัมน์ 2 แถว */}
            <div className="grid grid-cols-3  px-2">
              {/* กล่อง 1 */}
              <div className=" relative w-full h-24 overflow-hidden pr-0.5 rounded-t-md">
                <Image
                  src={IconPro1}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 2 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPro3}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 3 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPro4}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 4 */}
              <div className=" relative w-full h-24 overflow-hidden rounded-b-md">
                <Image
                  src={IconPro2}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 5 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPro5}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 6 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPro6}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>
            </div>
          </section>

          {/* 🔹 Grid แสดงสินค้า */}
          <div className="space-y-4">
            {Array.from(new Set(products.map((p) => p.type))).map(
              (typeName) => (
                <div key={typeName}>
                  {/* 🔹 หัวข้อหมวดหมู่ */}
                  <h2 className="text-green-600 w-full text-md font-semibold my-2 border-b-2 border-green-600 pb-2">
                    <span className="ml-3">
                      {typeNameMap_1[typeName] || typeName || 'ไม่ระบุประเภท'}
                    </span>
                  </h2>

                  {/* 🔹 แสดงสินค้าในหมวดนั้น */}
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 px-2">
                      {products
                        .filter((item) => item.type === typeName)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-48 rounded-lg p-3 bg-white hover:shadow-md transition relative"
                            onClick={() =>
                              router.push(`/category/${title}/${item.id}`)
                            }
                          >
                            {/* ✅ รูปภาพสินค้า */}
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
                                ฿ {(item.price).toFixed(2)}

                              </span>
                              <span className="text-red-600 font-bold">
                                ฿ {(item.price - item.price * 0.23).toFixed(2)}

                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <ProductListAll title={title} products={products} />
        </main>
      ) : title === 'cosmetics' ? (
        <main className="max-w-6xl mx-auto w-full bg-white">
          {/* 🟢 ส่วนหัวหมวดหมู่ Breadcumb*/}
          <div className="w-full">
            <CategoryHeader />
          </div>
          {/* 🧴 ผลิตภัณฑ์ดูแลผิวหน้า */}
          <section className="py-3">
            {/* หัวข้อ */}
            <h2 className="text-green-600 w-full  text-md font-semibold mb-4 border-b-2 border-green-600 pb-2">
              <span className="ml-3">เครื่องสำอาง</span>
            </h2>

            {/* Grid layout 3 คอลัมน์ 2 แถว */}
            <div className="grid grid-cols-3  px-2">
              {/* กล่อง 1 */}
              <div className=" relative w-full h-24 overflow-hidden pr-0.5 rounded-t-md">
                <Image
                  src={IconPre1}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 2 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPre3}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 3 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPre4}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 4 */}
              <div className=" relative w-full h-24 overflow-hidden rounded-b-md">
                <Image
                  src={IconPre2}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 5 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPre5}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 6 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPre6}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>
            </div>

            {/* หัวข้อ */}
            <h2 className="text-green-600 w-full  text-md font-semibold my-4 border-b-2 border-green-600 pb-2">
              <span className="ml-3">ผิวหน้า</span>
            </h2>
          </section>

          {/* 🔹 Grid แสดงสินค้า */}
          <div className="space-y-4">
            {Array.from(new Set(products.map((p) => p.type))).map(
              (typeName) => (
                <div key={typeName}>
                  {/* 🔹 หัวข้อหมวดหมู่ */}
                  <h2 className="text-green-600 w-full text-md font-semibold my-2 border-b-2 border-green-600 pb-2">
                    <span className="ml-3">
                      {typeNameMap_2[typeName] || typeName || 'ไม่ระบุประเภท'}
                    </span>
                  </h2>

                  {/* 🔹 แสดงสินค้าในหมวดนั้น */}
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 px-2">
                      {products
                        .filter((item) => item.type === typeName)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-48 rounded-lg p-3 bg-white hover:shadow-md transition relative"
                            onClick={() =>
                              router.push(`/category/${title}/${item.id}`)
                            }
                          >
                            {/* ✅ รูปภาพสินค้า */}
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
                                ฿ {(item.price).toFixed(2)}

                              </span>
                              <span className="text-red-600 font-bold">
                                ฿ {(item.price - item.price * 0.23).toFixed(2)}

                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <ProductListAll title={title} products={products} />
        </main>
      ) : title === 'beauty_accessary' ? (
        <main className="max-w-6xl mx-auto w-full bg-white">
          {/* 🟢 ส่วนหัวหมวดหมู่ Breadcumb*/}
          <div className="w-full">
            <CategoryHeader />
          </div>
          {/* 🧴 ผลิตภัณฑ์ดูแลผิวหน้า */}
          <section className="py-3">
            {/* หัวข้อ */}
            <h2 className="text-green-600 w-full  text-md font-semibold mb-4 border-b-2 border-green-600 pb-2">
              <span className="ml-3">อุปกรณ์เพื่อความงาม</span>
            </h2>

            {/* Grid layout 3 คอลัมน์ 2 แถว */}
            <div className="grid grid-cols-3  px-2">
              {/* กล่อง 1 */}
              <div className=" relative w-full h-24 overflow-hidden pr-0.5 rounded-t-md">
                <Image
                  src={IconPri1}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 2 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPri3}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 3 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPri4}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 4 */}
              <div className=" relative w-full h-24 overflow-hidden rounded-b-md">
                <Image
                  src={IconPri2}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-cover"
                />
              </div>

              {/* กล่อง 5 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPri5}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>

              {/* กล่อง 6 */}
              <div className="relative w-full h-24 overflow-hidden">
                <Image
                  src={IconPri6}
                  alt="ทำความสะอาดผิวหน้า"
                  fill
                  className="object-contain scale-y-130"
                />
              </div>
            </div>

            {/* หัวข้อ */}
            <h2 className="text-green-600 w-full  text-md font-semibold my-4 border-b-2 border-green-600 pb-2">
              <span className="ml-3">อุปกรณ์ทำผม</span>
            </h2>
          </section>

          {/* 🔹 Grid แสดงสินค้า */}
          <div className="space-y-4">
            {Array.from(new Set(products.map((p) => p.type))).map(
              (typeName) => (
                <div key={typeName}>
                  {/* 🔹 หัวข้อหมวดหมู่ */}
                  <h2 className="text-green-600 w-full text-md font-semibold my-2 border-b-2 border-green-600 pb-2">
                    <span className="ml-3">
                      {typeNameMap_3[typeName] || typeName || 'ไม่ระบุประเภท'}
                    </span>
                  </h2>

                  {/* 🔹 แสดงสินค้าในหมวดนั้น */}
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 px-2">
                      {products
                        .filter((item) => item.type === typeName)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-48 rounded-lg p-3 bg-white hover:shadow-md transition relative"
                            onClick={() =>
                              router.push(`/category/${title}/${item.id}`)
                            }
                          >
                            {/* ✅ รูปภาพสินค้า */}
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
                                ฿ {(item.price).toFixed(2)}

                              </span>
                              <span className="text-red-600 font-bold">
                                ฿ {(item.price - item.price * 0.23).toFixed(2)}

                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <ProductListAll title={title} products={products} />
        </main>
      ) : null}

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
