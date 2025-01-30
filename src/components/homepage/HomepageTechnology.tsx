import Image from "next/image";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";

interface TecnologyDataType {
  image: string;
  alt: string;
}

export default function HomepageTechnology() {
  SwiperCore.use([Autoplay]);

  const slideRef = useRef<SwiperRef>(null);

  const technologyData: TecnologyDataType[] = [
    {
      image: "/assets/images/html5.svg",
      alt: "HTML5",
    },
    {
      image: "/assets/images/css3.svg",
      alt: "CSS3",
    },
    {
      image: "/assets/images/scss.svg",
      alt: "SCSS",
    },
    {
      image: "/assets/images/javascript.svg",
      alt: "JavaScript",
    },
    {
      image: "/assets/images/reactjs.svg",
      alt: "React",
    },
    {
      image: "/assets/images/nextjs.svg",
      alt: "Next.js",
    },
    {
      image: "/assets/images/redux.svg",
      alt: "Redux",
    },
    {
      image: "/assets/images/hubspot.svg",
      alt: "Hubspot",
    },
    {
      image: "/assets/images/strapi.svg",
      alt: "Strapi",
    },
    {
      image: "/assets/images/bootstrap.svg",
      alt: "Bootstrap",
    },
    {
      image: "/assets/images/nodejs.svg",
      alt: "Node.js",
    },
    {
      image: "/assets/images/webpack.svg",
      alt: "Webpack",
    },
    {
      image: "/assets/images/jira.svg",
      alt: "Jira",
    },

    {
      image: "/assets/images/git.svg",
      alt: "Git",
    },
    {
      image: "/assets/images/github.svg",
      alt: "GitHub",
    },
    {
      image: "/assets/images/figma.svg",
      alt: "Figma",
    },
    {
      image: "/assets/images/gitlab.svg",
      alt: "Gitlab",
    },
  ];

  return (
    <div className="px-x py-16">
      <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
        TECHNOLOGY
      </div>
      <div className="mt-16">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={5000}
          autoplay={{
            delay: 0,
          }}
          direction="horizontal"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          loop={true}
          freeMode={true}
          ref={slideRef}
          modules={[Autoplay]}
        >
          {technologyData.map((technology, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={technology.image}
                  alt={technology.alt}
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
