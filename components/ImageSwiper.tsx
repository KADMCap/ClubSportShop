import React, { useLayoutEffect as useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";

export function ImageSwiper(images: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef();

  useEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="mb-2"
      >
        {images.images.map((image: any) => (
          <SwiperSlide key={image.image.url}>
            <img src={image.image.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={images.images.length}
        watchSlidesProgress
        touchRatio={0.2}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
      >
        {images.images.map((image: any) => (
          <SwiperSlide className="w-52 flex" key={image.image.url}>
            <img src={image.image.url} className="h-52" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
