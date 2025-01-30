"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

gsap.registerPlugin(useGSAP);

interface HomepageHistoryItemDataType {
  timeline: string;
  company: string;
  title: string;
  description: string;
  logo: string;
}

interface HomepageHistoryDataType {
  subtitle: string;
  title: string;
  history: HomepageHistoryItemDataType[];
}

export default function HomepageHistory() {
  const pageData: HomepageHistoryDataType = {
    subtitle: "HISTORY",
    title: "My history is here",
    history: [
      {
        timeline: "11/2023 - Present",
        company: "Katalon",
        title: "Web Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eros auctor, finibus dolor eget, interdum erat. Donec in faucibus eros. Duis ac quam ex. Nullam laoreet ut libero vitae hendrerit. Vivamus vitae dolor tortor. Pellentesque euismod gravida nisl sed laoreet. Fusce quis imperdiet ligula. Nullam vulputate, nunc in sollicitudin varius, dolor elit malesuada erat, ac pretium sapien est nec nulla. Nam ac ex sed turpis dapibus lacinia. Vestib",
        logo: "/assets/images/katalon.svg",
      },
      {
        timeline: "11/2021 - 10/2023",
        company: "Gameloft",
        title: "Frontend Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eros auctor, finibus dolor eget, interdum erat. Donec in faucibus eros. Duis ac quam ex. Nullam laoreet ut libero vitae hendrerit. Vivamus vitae dolor tortor. Pellentesque euismod gravida nisl sed laoreet. Fusce quis imperdiet ligula. Nullam vulputate, nunc in sollicitudin varius, dolor elit malesuada erat, ac pretium sapien est nec nulla. Nam ac ex sed turpis dapibus lacinia. Vestib",
        logo: "/assets/images/gameloft.svg",
      },
      {
        timeline: "7/2023 - 9/2021",
        company: "Inotek",
        title: "Intern Frontend Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eros auctor, finibus dolor eget, interdum erat. Donec in faucibus eros. Duis ac quam ex. Nullam laoreet ut libero vitae hendrerit. Vivamus vitae dolor tortor. Pellentesque euismod gravida nisl sed laoreet. Fusce quis imperdiet ligula. Nullam vulputate, nunc in sollicitudin varius, dolor elit malesuada erat, ac pretium sapien est nec nulla. Nam ac ex sed turpis dapibus lacinia. Vestib",
        logo: "/assets/images/inotek.jpg",
      },
    ],
  };

  return (
    <div className="py-16 px-x bg-grey">
      <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
        {pageData.subtitle}
      </div>
      <h2 className="font-primary text-5xl font-bold text-center mt-6">
        {pageData.title}
      </h2>
      <div className="mt-28 relative">
        <div className="home-history__line absolute w-0.5 h-full bg-dark"></div>
        <div className="flex flex-col gap-24">
          {pageData.history.map((item, index) => (
            <HomepageHistoryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const HomepageHistoryItem = (props: HomepageHistoryItemDataType) => {
  const container = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const tl = gsap.timeline();

  useGSAP(() => {
    if (entry?.isIntersecting) {
      tl.to(logoRef.current, { width: "0", duration: 1, delay: 1 });
      tl.to(contentRef.current, { opacity: 1, x: "0%", duration: 1 });
    }
  }, [entry]);

  useEffect(() => {
    console.log("useEffect", entry);

    if (entry?.isIntersecting) {
      console.log("--Animation started");
    }
  }, [entry]);

  return (
    <div ref={container}>
      <div className="flex gap-6" ref={ref}>
        <div className="logo timeline w-1/5 font-primary text-xl font-semibold flex justify-end mt-3 flex-shrink-0">
          {props.timeline}
        </div>
        <div className="dot w-6 mt-4">
          <div className="w-6 h-6 rounded-full bg-black"></div>
        </div>
        <div className="home-history__content">
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <div className="w-full h-16" ref={logoRef}>
              <Image
                className="w-auto h-full object-cover object-left"
                src={props.logo}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div ref={contentRef} className="opacity-0 relative -translate-x-1/4">
            <div className="font-primary text-xl font-semibold">
              {props.company}
            </div>
            <div className="font-primary text-3xl font-bold mt-0">
              {props.title}
            </div>
            <div className="font-primary text-base font-normal mt-4">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
