"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface CarouselHighlightsProps {
  data?: any[];
}

export default function CarouselHighlights({ data }: CarouselHighlightsProps) {
  return (
    <Swiper
      loop
      breakpoints={{
        0: {
          centeredSlides: true,
          slidesPerView: 1.15,
        },
        480: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {data?.map(({ id, serviceName, description, imageUrl }) => (
        <SwiperSlide key={id}>
          <div className="card bg-base-100 px-4">
            <figure>
              <Image
                src={
                  imageUrl ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={serviceName || "Default Image"}
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {serviceName || "Default Title"}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{description || "Default description"}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
