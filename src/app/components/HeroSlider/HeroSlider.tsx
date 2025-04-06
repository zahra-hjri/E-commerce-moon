"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import "./HeroSlider.css"
// import product1 from "../../../public/images/hero/h1.png"

const slides = [
  {
    id: 1,
    image: "/images/hero/h1.png",
    title: "Nautural wooden products",
    description: "sell globally in munites with localized languages",
  },
  {
    id: 2,
    image: "/images/hero/h2.png",
    title: "Nautural wooden products",
    description: "sell globally in munites with localized languages",
  },
  {
    id: 3,
    image: "/images/hero/h2.png",
    title: "Nautural wooden products",
    description: "sell globally in munites with localized languages",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[700px] overflow-hidden ">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex w-full h-full">
              <div className="w-[50%] flex flex-col justify-center items-center bg-white-100 text-black text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-2 text-lg">{slide.description}</p>
              </div>
              <div className="w-[50%] p-10 flex items-center justify-center bg-white">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={100}
                  className="h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 right-1/2 z-50 prev cursor-pointer w-[50px] h-[50px] bg-white text-black text-[50px] flex items-center justify-center">
        ‹
      </div>
      <div className="absolute bottom-5 left-1/2 z-50 next cursor-pointer w-[50px] h-[50px] bg-black text-white text-[50px] flex items-center justify-center">
        ›
      </div>
    </div>
  );
}
