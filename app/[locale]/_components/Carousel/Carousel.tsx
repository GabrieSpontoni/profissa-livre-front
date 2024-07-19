"use client";

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  serviceName: string;
  description: string;
  imageUrl: string;
}

interface CarouselProps {
  data?: Slide[];
}

export default function Carousel({ data }: CarouselProps) {
  return (
    <div className="h-96">
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
        }}
      >
        {data?.map(({ id, serviceName, description, imageUrl }) => (
          <SwiperSlide key={id}>
            <div
              className="h-full w-full absolute left-0 top-0"
              style={{
                background: `url(${imageUrl})`,
              }}
            />

            <div className="h-full w-full absolute left-0 top-0 bg-black opacity-70" />
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <div className="text-center">
                <p className="sm:text-6xl md:text-4xl font-bold text-white">
                  {serviceName}
                </p>

                {description && (
                  <p className="text-md sm:text-xl lg:text-xl font-semibold text-white">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
