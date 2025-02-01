import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";
import Image from "next/image";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { updateActiveSection } from "@/stores/reducers/activeSection";
import { useGSAP } from "@gsap/react";

interface SlideDataType {
  image: string;
  title: string;
  link: string;
  description?: string;
}

library.add(faChevronLeft, faChevronRight);

export default function HomepageProject() {
  const slideData: SlideDataType[] = [
    {
      image: "/assets/images/project-disney-speedstorm.jpg",
      title: "Disney Speedstorm Website",
      description: "",
      link: "https://disneyspeedstorm.com/",
    },
    {
      image: "/assets/images/project-gangstar.jpg",
      title: "Gangstar New York Landing Page",
      description: "",
      link: "https://gangstarny.com/",
    },
    {
      image: "/assets/images/project-disney-dreamlight-valley.jpg",
      title: "Disney Dreamlight Valley News",
      description: "",
      link: "https://disneydreamlightvalley.com/news",
    },
    {
      image: "/assets/images/project-tot.jpg",
      title: "The Oregon Trail Migration",
      description: "",
      link: "https://theoregontrail-game.com/",
    },
    {
      image: "/assets/images/project-we-belong-here.jpg",
      title: "Gameloft We Belong Here Landing Page",
      description: "",
      link: "https://www.gameloft.com/promotions/we-belong-here",
    },
    {
      image: "/assets/images/project-gameloft-studio.jpg",
      title: "Gameloft Studio Landing Page",
      description: "",
      link: "https://www.gameloft.com/gameloft-studios/brisbane",
    },
    {
      image: "/assets/images/project-redeem.jpg",
      title: "Gameloft Redeem Code",
      description: "",
      link: "https://www.gameloft.com/redeem/war-planet-online",
    },
    {
      image: "/assets/images/project-for-brand.jpg",
      title: "Gameloft For Brand Migration",
      description: "",
      link: "https://www.gameloft.com/for-brands",
    },
    {
      image: "/assets/images/project-gbs.jpg",
      title: "Gameloft Business Solution Migration",
      description: "",
      link: "https://www.gameloft.com/business-solutions",
    },
    {
      image: "/assets/images/project-1k.jpg",
      title: "Katalon 1K Studio Promo",
      description: "",
      link: "https://katalon.com/1k-studio-promo",
    },
    {
      image: "/assets/images/project-enterprise.jpg",
      title: "Katalon Enterprise Landing Page",
      description: "",
      link: "https://katalon.com/enterprise",
    },
    {
      image: "/assets/images/project-testcon.jpg",
      title: "TestCon Vietnam 2024",
      description: "",
      link: "https://www.testcon.net/",
    },
    {
      image: "/assets/images/project-web-testing.jpg",
      title: "Katalon Web Testing Landing Page",
      description: "",
      link: "https://katalon.com/web-testing",
    },
    {
      image: "/assets/images/project-idea-exchange.jpg",
      title: "Katalon Idea Exchange Website",
      description: "",
      link: "https://katalon.com/idea-exchange",
    },
    {
      image: "/assets/images/project-view-demo.jpg",
      title: "Katalon View A Demo Landing Page",
      description: "",
      link: "https://katalon.com/view-a-demo",
    },
    {
      image: "/assets/images/project-ebook.jpg",
      title: "Katalon Ebook Landing Page",
      description: "",
      link: "https://katalon.com/ebooks/the-beginners-guide-to-mobile-testing",
    },
    {
      image: "/assets/images/project-dml.jpg",
      title: "Dragon Mania Legend Website",
      description: "",
      link: "https://dragonmanialegends.com/",
    },
  ];

  const root = useRef(null);
  const slideRef = useRef<SwiperRef>(null);
  const [indexSlide, setIndexSlide] = useState(0);
  const [sectionViewed, setSectionViewed] = useState(false);
  const dispatch = useDispatch();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      dispatch(updateActiveSection("project"));
      setSectionViewed(true);
    }
  }, [dispatch, entry]);

  useGSAP(() => {
    if (sectionViewed) {
      gsap.fromTo(
        root.current,
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
        }
      );
    }
  }, [sectionViewed]);

  const onSlidePrev = () => {
    slideRef.current?.swiper.slidePrev();

    setIndexSlide(slideRef.current?.swiper.realIndex || -1);
  };

  const onSlideNext = () => {
    slideRef.current?.swiper.slideNext();

    setIndexSlide(slideRef.current?.swiper.realIndex || -1);
  };

  return (
    <div ref={ref}>
      <div className="py-8 lg:py-16 px-x opacity-0" ref={root}>
        <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
          PROJECT
        </div>
        <h2 className="font-primary text-4xl lg:text-5xl font-bold text-center mt-6 flex gap-4 justify-center items-center">
          <Image
            className=""
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
          Transforming Ideas into Interactive Reality
          <Image
            className=""
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
        </h2>
        <div className="mt-12">
          <div className="font-primary text-base font-normal">
            <Swiper
              className="lg:!py-10"
              spaceBetween={10}
              slidesPerView={1}
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
              ref={slideRef}
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a
                    className={clsx(
                      "flex flex-col gap-4 justify-center items-center",
                      (indexSlide === index ||
                        (indexSlide === -1 && index === 0)) &&
                        "transition-all lg:scale-110"
                    )}
                    href={slide.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      className={clsx(
                        "w-96 max-w-full aspect-[384/224] border-2 border-dark rounded-lg overflow-hidden shadow-xl",
                        indexSlide === index && "border-dark"
                      )}
                    >
                      <Image
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                        src={slide.image}
                        alt="image"
                        width={760}
                        height={440}
                      />
                    </div>
                    <div className="font-primary text-xl font-bold text-center">
                      {slide.title}
                    </div>
                    <div className="font-primary text-base font-normal text-center">
                      {slide.description}
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-5 lg:mt-8">
              <div
                className="w-10 h-10 border-2 border-dark rounded-full flex justify-center items-center cursor-pointer transition-all hover:scale-110"
                onClick={() => onSlidePrev()}
              >
                <FontAwesomeIcon icon="chevron-left" />
              </div>
              <div
                className="w-10 h-10 border-2 border-dark rounded-full flex justify-center items-center cursor-pointer transition-all hover:scale-110"
                onClick={() => onSlideNext()}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
