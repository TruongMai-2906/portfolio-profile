"use client";

import { useRef, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";

library.add(faChevronLeft, faChevronRight);

export default function DesignBaseSlider() {
  const slideRef = useRef<SwiperRef>(null);
  const [indexSlide, setIndexSlide] = useState(0);

  const onSlidePrev = () => {
    slideRef.current?.swiper.slidePrev();

    setIndexSlide(slideRef.current?.swiper.realIndex || -1);
  };

  const onSlideNext = () => {
    slideRef.current?.swiper.slideNext();

    setIndexSlide(slideRef.current?.swiper.realIndex || -1);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="font-primary text-6xl font-bold text-orange5">Slider</div>
      <div className="max-w-4xl">
        <div className="font-primary text-base font-normal">
          <Swiper
            className="!py-10"
            spaceBetween={10}
            slidesPerView={"auto"}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            loop={true}
            centeredSlides={true}
            freeMode={true}
            onSlideChange={(swiper) => setIndexSlide(swiper.realIndex)}
            onSwiper={(swiper) => console.log(swiper)}
            ref={slideRef}
          >
            <SwiperSlide>
              <div
                className={clsx(
                  "flex flex-col gap-2 justify-center items-center",
                  indexSlide === 0 && "transition-all scale-110"
                )}
              >
                <div className="w-64 h-36 border-2 border-grey rounded-lg bg-orange7"></div>
                <div className="font-primary text-base font-semibold">
                  Slide 1
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={clsx(
                  "flex flex-col gap-2 justify-center items-center",
                  indexSlide === 1 && "transition-all scale-110"
                )}
              >
                <div className="w-64 h-36 border-2 border-grey rounded-lg bg-orange7"></div>
                <div className="font-primary text-base font-semibold">
                  Slide 2
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={clsx(
                  "flex flex-col gap-2 justify-center items-center",
                  indexSlide === 2 && "transition-all scale-110"
                )}
              >
                <div className="w-64 h-36 border-2 border-grey rounded-lg bg-orange7"></div>
                <div className="font-primary text-base font-semibold">
                  Slide 3
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={clsx(
                  "flex flex-col gap-2 justify-center items-center",
                  indexSlide === 3 && "transition-all scale-110"
                )}
              >
                <div className="w-64 h-36 border-2 border-grey rounded-lg bg-orange7"></div>
                <div className="font-primary text-base font-semibold">
                  Slide 4
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={clsx(
                  "flex flex-col gap-2 justify-center items-center",
                  indexSlide === 4 && "transition-all scale-110"
                )}
              >
                <div className="w-64 h-36 border-2 border-grey rounded-lg bg-orange7"></div>
                <div className="font-primary text-base font-semibold">
                  Slide 5
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-center gap-5">
            <div
              className="w-8 h-8 border-2 border-dark rounded-full flex justify-center items-center cursor-pointer transition-all hover:scale-110"
              onClick={() => onSlidePrev()}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </div>
            <div
              className="w-8 h-8 border-2 border-dark rounded-full flex justify-center items-center cursor-pointer transition-all hover:scale-110"
              onClick={() => onSlideNext()}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
