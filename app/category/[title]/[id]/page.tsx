'use client';
import Navbar from '@/app/components/navbar';
import CategoryHeader from '@/app/components/categoryheader';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import data1 from '@/public/data/facial_care.json';
import data2 from '@/public/data/cosmetics.json';
import data3 from '@/public/data/beauty_accessary.json';

import { usePathname } from 'next/navigation';

interface PageProps {
  params: { title: string; id: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const pathname = usePathname();
  const { title, id } = await params;

  let data: any[] = [];
  if (title === 'facial_care') data = data1.Facial_care;
  else if (title === 'cosmetics') data = data2.Cosmetics;
  else if (title === 'beauty_accessary') data = data3.Beauty_accessary;

  const product = data.find((item) => item.id === id);

  console.log('title:', title);
  console.log('id:', id);
  console.log('found product:', product);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content Facial*/}

      <main className="max-w-6xl mx-auto w-full bg-white">
        {/* ✅ เช็คว่ามีสินค้าไหม */}
        {product ? (
          <main className="max-w-5xl mx-auto w-full bg-white">
            {/* 🔹 BreadCrumb */}
            <div className="w-full">
              <CategoryHeader />
            </div>

            {/* 🔹 แสดงสินค้า */}
            <section className="py-5 px-4">
              <div className="flex flex-col md:flex-row gap-6">
                {/* รูปภาพ */}
                <div className="flex justify-center items-center w-full md:w-1/3">
                  <Image
                    src={product.url_thumbnail}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
                <h2 className="text-gray-700 text-xl font-semibold mb-2 pb-2">
                  {product.name}
                </h2>

                {/* ข้อมูล */}
                <div className="flex-1 space-y-3">
                  <p className="text-gray-700">รหัสสินค้า {product.id}</p>
                  <div>
                    <span className=" text-red-600 font-bold text-lg">
                      ฿ {(product.price - product.price * 0.23).toFixed(2)}
                    </span>
                    <div>
                      <span className="text-gray-400 line-through text-sm">
                        ฿ {(product.price).toFixed(2)}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ประหยัด ฿{' '}
                        {(product.price - (product.price - product.price * 0.23)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* 🔽 เพิ่มส่วนข้อมูลรายละเอียดสินค้าแบบในภาพ */}
                  <div className="mt-4 pt-3 text-md text-gray-700 space-y-2">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-bold">
                        เลขที่อย. / เลขที่จดแจ้ง
                      </span>
                      <span>
                        {product.register_number || '13-1-6700038403'}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-bold">ขนาดสินค้ารวมบรรจุภัณฑ์</span>
                      <span>{product.size || '(ก x ย x ส) 6x13x3 ซม.'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-bold">น้ำหนักรวมบรรจุภัณฑ์</span>
                      <span>{product.weight || '0.03 กก.'}</span>
                    </div>

                    <div className="flex flex-col justify-between py-3">
                      <span className="font-bold mb-2">รายละเอียดสินค้า</span>
                      <span className="indent-8 min-h-[80px] text-gray-700">
                        {product.long_detail || ' '}
                      </span>
                    </div>

                    {/* 🔽 ส่วนแสดงรูปภาพเพิ่มเติม */}
                    {product.url_image && product.url_image.length > 0 && (
                      <div className="flex flex-col space-y-3 py-3">
                        {/* <span className="font-bold">รูปภาพสินค้า</span> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.url_image.map((img: any, index: any) => (
                            <div className="relative w-full overflow-hidden rounded-t-md">
                              <Image
                                src={img}
                                alt={`รูปสินค้า ${index + 1}`}
                                width={800}
                                height={800}
                                className="object-contain w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 🔽 ส่วนแสดงวิดีโอสินค้า */}
                    {product.url_video && product.url_video.length > 0 && (
                      <div className="flex flex-col space-y-3 py-3">
                        {/* <span className="font-bold">วิดีโอสินค้า</span> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.url_video.map(
                            (videoUrl: any, index: any) => {
                              const embedUrl = videoUrl
                                .replace('watch?v=', 'embed/')
                                .replace('youtu.be/', 'www.youtube.com/embed/');
                              return (
                                <div
                                  key={index}
                                  className="relative w-full overflow-hidden rounded-xl shadow-sm border border-gray-200"
                                >
                                  <iframe
                                    src={embedUrl}
                                    title={`วิดีโอสินค้า ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full aspect-video rounded-xl"
                                  ></iframe>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}

                    {/* 🔽 ส่วนแสดงวิธีการใช้งาน */}
                    {product.how_use && product.how_use.length > 0 && (
                      <div className="flex flex-col space-y-3 py-3">
                        <span className="font-bold">
                          วิธีการใช้งาน / How To Use
                        </span>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {product.how_use.map((step: any, index: any) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
        ) : (
          <main className="flex justify-center items-center h-96 text-zinc-500">
            ไม่พบข้อมูลสินค้านี้
          </main>
        )}
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
