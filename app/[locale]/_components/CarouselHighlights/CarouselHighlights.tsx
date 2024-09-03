"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaCoins } from "react-icons/fa";
import { Link } from "@/navigation";

interface CarouselHighlightsProps {
  data?: any[];
}

export default function CarouselHighlights({ data }: CarouselHighlightsProps) {
  return (
    <Swiper
      breakpoints={{
        0: {
          centeredSlides: true,
          slidesPerView: 1.4,
        },
        480: {
          centeredSlides: true,
          slidesPerView: 1.5,
        },
        640: {
          centeredSlides: true,
          slidesPerView: 2,
        },
        768: {
          centeredSlides: true,
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      navigation
      modules={[Autoplay, Navigation, Pagination]}
    >
      {data?.map(
        ({
          id,
          serviceName,
          imageUrl,
          name,
          rating,
          reviews,
          location,
          startPrice,
        }) => (
          <SwiperSlide key={id}>
            <Link href={`/professional/${id}`}>
              <div className="card mb-8 mx-1 border">
                <figure className="relative w-full h-48">
                  <Image
                    src={
                      imageUrl ||
                      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    }
                    alt={serviceName || "Default Image"}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name || "Default Title"}</h2>

                  <div className="flex items-center gap-1">
                    <div className="rating rating-sm ">
                      <input
                        type="radio"
                        name="rating-6"
                        disabled
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <div className="font-bold">{rating}</div>
                    <div>({reviews})</div>
                    <div className="truncate"> - {location}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCoins />
                    <p> A partir de R${startPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
