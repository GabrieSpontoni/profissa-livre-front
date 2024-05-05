"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lottie from "../Lottie/Lottie";

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
      <div className="px-4 h-96 xl:max-w-7xl">
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
          {data.map(({ id, image, tagline, title }) => (
            <SwiperSlide key={id}>
              <div
                className="h-full w-full absolute left-0 top-0"
                style={{
                  background: `url(${image}) center center / cover scroll no-repeat`,
                }}
              ></div>

              <div className="h-full w-full absolute left-0 top-0 bg-black opacity-70"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                    {title}
                  </p>

                  {tagline && (
                    <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                      {tagline}
                    </p>
                  )}
                  <div className="flex justify-center mt-4">
                    <Lottie
                      className="cursor-pointer flex w-16 h-16 lg:w-20 lg:h-20 p-0 rounded-full bg-green-50"
                      onClick={() =>
                        window.open(
                          `https://api.whatsapp.com/send?phone=556781904318&text=Olá Pedro, vim do site PROFISSA LIVRE e gostaria de saber mais sobre seus serviços de ${title.toUpperCase()}.`,
                          "_blank"
                        )
                      }
                      width={60}
                      height={60}
                      animationData={require("@/public/lotties/whatsapp.json")}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
