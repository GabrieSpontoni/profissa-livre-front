"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
// import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface CarouselProps {
  data: Slide[];
}

export default function Carousel({ data }: CarouselProps) {
  return (
    <div className="w-full xl:flex justify-center">
      <div className="h-auto px-4 xl:max-w-7xl">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
        >
          {data.map(({ id, image, tagline, title }) => (
            <SwiperSlide key={id}>
              <div
                className="h-full w-full absolute left-0 top-0"
                style={{
                  background: `url(${image}) center center / cover scroll no-repeat`,
                }}
              ></div>

              <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  {tagline && (
                    <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                      {tagline}
                    </p>
                  )}
                  <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
