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

interface SlideDataType {
  image: string;
  title: string;
  description?: string;
}

library.add(faChevronLeft, faChevronRight);

export default function HomepageProject() {
  const slideData: SlideDataType[] = [
    {
      image: "",
      title: "Slide 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae hendrerit erat. Aliquam condimentum ipsum luctus, convallis nunc ac, aliquam mi. Pellentesque sem libero, eleifend at vulputate at, bibendum vitae lacus. Fusce vulputate nec arcu et hendrerit. Suspendisse tincidunt iaculis nibh, non cursus sem semper vitae.",
    },
    {
      image: "",
      title: "Slide 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae hendrerit erat. Aliquam condimentum ipsum luctus, convallis nunc ac, aliquam mi. Pellentesque sem libero, eleifend at vulputate at, bibendum vitae lacus. Fusce vulputate nec arcu et hendrerit. Suspendisse tincidunt iaculis nibh, non cursus sem semper vitae.",
    },
    {
      image: "",
      title: "Slide 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae hendrerit erat. Aliquam condimentum ipsum luctus, convallis nunc ac, aliquam mi. Pellentesque sem libero, eleifend at vulputate at, bibendum vitae lacus. Fusce vulputate nec arcu et hendrerit. Suspendisse tincidunt iaculis nibh, non cursus sem semper vitae.",
    },
    {
      image: "",
      title: "Slide 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae hendrerit erat. Aliquam condimentum ipsum luctus, convallis nunc ac, aliquam mi. Pellentesque sem libero, eleifend at vulputate at, bibendum vitae lacus. Fusce vulputate nec arcu et hendrerit. Suspendisse tincidunt iaculis nibh, non cursus sem semper vitae.",
    },
    {
      image: "",
      title: "Slide 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae hendrerit erat. Aliquam condimentum ipsum luctus, convallis nunc ac, aliquam mi. Pellentesque sem libero, eleifend at vulputate at, bibendum vitae lacus. Fusce vulputate nec arcu et hendrerit. Suspendisse tincidunt iaculis nibh, non cursus sem semper vitae.",
    },
  ];

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
    <div className="py-16 px-x">
      <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
        PROJECT
      </div>
      <h2 className="font-primary text-5xl font-bold text-center mt-6">
        View more about my project
      </h2>
      <div className="mt-12">
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
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={clsx(
                    "flex flex-col gap-4 justify-center items-center",
                    indexSlide === index && "transition-all scale-110"
                  )}
                >
                  <div className="w-96 h-56 border-2 border-grey rounded-lg bg-strong-pink"></div>
                  <div className="font-primary text-xl font-bold">
                    {slide.title}
                  </div>
                  <div className="font-primary text-base font-normal text-center">
                    {slide.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-5 mt-8">
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
