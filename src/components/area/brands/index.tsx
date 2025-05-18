"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const brands = [
  { id: 1, alt: "dove", image: "dove.png" },
  { id: 2, alt: "maine", image: "maine.png" },
  { id: 3, alt: "signal", image: "signal.png" },
  { id: 4, alt: "durex", image: "durex.png" },
  { id: 5, alt: "umbrella", image: "umbrella.png" },
  { id: 6, alt: "oralb", image: "oralb.png" },
];

export default function Brands() {
  return (
    <section className="brands" aria-label="brands">
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={15}>
        {brands.map(({ image, id, alt }: any) => (
          <SwiperSlide key={id}>
            <Link href={`/shop?brand=${id}`}>
              <Image
                src={`/images/brands/${image}`}
                height={200}
                width={200}
                alt={alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
