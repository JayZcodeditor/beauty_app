"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import IconPromo1 from "./assets/icons/promotion/12-275816-0.webp";
import IconPromo2 from "./assets/icons/promotion/4-275842-0.webp";
import IconPromo3 from "./assets/icons/promotion/80-276230-0.webp";

export default function PromoSlider() {
  const router = useRouter();
  const promos = [IconPromo1, IconPromo2, IconPromo3];
  const [index, setIndex] = useState(0);

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      {promos.map((src, i) => (
        <div key={i} onClick={() => handleClick(`/category/${i}`)}>
          <Image src={src} alt={`Promo ${i}`} width={300} height={150} />
        </div>
      ))}
    </div>
  );
}
