"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const slides = [
  {
    id: 1,
    image: "/images/hero/h1.png",
    title: "Natural wooden products",
    description:
      "Sell globally in minutes with localized languages.",
    variants: [
      { color: "orange", price: 120.74 },
      { color: "gray", price: 130.89 },
      { color: "green", price: 125.28 },
    ],
  },
  {
    id: 2,
    image: "/images/hero/h2.png",
    title: "Natural wooden products",
    description:
      "Sell globally in minutes with localized languages.",
    variants: [
      { color: "orange", price: 320.24 },
      { color: "gray", price: 300.86 },
      { color: "green", price: 110.89 },
    ],
  },
];

export default function HeroSlider() {
  const [selectedPrices, setSelectedPrices] = useState(
    slides.map((slide) => slide.variants[0].price)
  );

  const handleColorClick = (slideIndex: number, price: number) => {
    const updatedPrices = [...selectedPrices];
    updatedPrices[slideIndex] = price;
    setSelectedPrices(updatedPrices);
  };

  return (
    <div className="w-full h-[700px] overflow-hidden relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="flex w-full h-full relative">
              <div className="w-[50%] bg-white-100 flex flex-col justify-center items-center text-black text-start px-4">
                <h2 className="text-3xl md:text-5xl font-medium w-[500px] my-2">
                  {slide.title}
                </h2>
                <p className="mt-2 mb-4 text-lg w-[500px] text-gray-400">{slide.description}</p>

                {/* Price & Colors */}
                <div className="w-[500px] h-fit flex gap-10 p-4">
                  {/* Price */}
                  <div className="flex flex-col gap-2 text-[14px]">
                    <div>Price</div>
                    <div className="text-gray-800 h-[20px] font-bold text-[16px]">
                      ${selectedPrices[index]}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex flex-col gap-2">
                    <div className="text-[14px]">Colors</div>
                    <div className="flex gap-2 h-[20px] items-center ">
                      {slide.variants.map((variant, vIndex) => (
                        <div
                          key={vIndex}
                          onClick={() =>
                            handleColorClick(index, variant.price)
                          }
                          className="w-[16px] h-[16px] rounded-full border cursor-pointer hover:scale-110 transition-all"
                          style={{ backgroundColor: variant.color }}
                          title={`$${variant.price}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-[50%] p-10 flex items-center justify-center bg-white">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="absolute bottom-0 right-1/2 z-50 prev cursor-pointer w-[50px] h-[50px] bg-white text-black text-[50px] flex items-center justify-center">
        <IoIosArrowBack size={20} />
      </div>
      <div className="absolute bottom-0 left-1/2 z-50 next cursor-pointer w-[50px] h-[50px] bg-black text-white text-[50px] flex items-center justify-center">
        <IoIosArrowForward size={20} />
      </div>
    </div>
  );
}
