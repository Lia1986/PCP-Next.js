"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

export default function LandingCarousel() {
  const swiperRef = useRef(null);

  //   const handleSlideChange = (index: number) => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slideTo(index);
  //     }
  //   };

  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="flex flex-col items-center gap-[20px] mr-[20px]">
        <button
          className="bg-blue-500 text-white rounded-full !w-16 !h-16 flex items-center justify-center text-2xl mb-4"
          //   onClick={() => handleSlideChange(0)}
        >
          01
        </button>
        <button
          className="bg-gray-300 text-white rounded-full !w-16 !h-16 flex items-center justify-center text-2xl mb-4"
          //   onClick={() => handleSlideChange(1)}
        >
          02
        </button>
        <button
          className="bg-gray-300 text-white rounded-full !w-16 !h-16 flex items-center justify-center text-2xl mb-4"
          //   onClick={() => handleSlideChange(2)}
        >
          03
        </button>
      </div>
      <div className="relative max-w-md">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, EffectFade]}
          slidesPerView={1.3}
          spaceBetween={-100}
          pagination={{ clickable: true, el: ".swiper-pagination-bullet" }}
          centeredSlides={true}
          className="rounded-lg "
        >
          <SwiperSlide>
            <Image
              src="/landing/make-offer.svg"
              alt="Phone Image 2"
              width={300}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/landing/ride-type.svg"
              alt="Phone Image 1"
              width={300}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/landing/ridee.svg"
              alt="Phone Image 3"
              width={300}
              height={600}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
