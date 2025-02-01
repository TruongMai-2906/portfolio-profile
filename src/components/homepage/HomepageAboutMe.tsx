import Image from "next/image";
import { updateActiveSection } from "@/stores/reducers/activeSection";
import { useGSAP } from "@gsap/react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
export default function HomepageAboutMe() {
  const root = useRef(null);
  const dispatch = useDispatch();
  const [sectionViewed, setSectionViewed] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      dispatch(updateActiveSection("aboutMe"));
      setSectionViewed(true);
    }
  }, [dispatch, entry]);

  console.log("about-me", entry?.isIntersecting);

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

  return (
    <div ref={ref}>
      <div className="px-x pt-8 pb-6 lg:pt-16 lg:pb-12 opacity-0" ref={root}>
        <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
          ABOUT ME
        </div>
        <h2 className="font-primary text-4xl lg:text-5xl font-bold text-center mt-6 flex gap-4 justify-center items-center">
          <Image
            className="hidden lg:block"
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
          From Dreams to Reality
          <Image
            className="hidden lg:block"
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
        </h2>
        <div className="relative mt-8 lg:mt-16 mx-auto w-[1200px] max-w-full">
          <Image
            className="hidden lg:block absolute top-2/3 -left-8 -translate-x-full rotate-[25deg]"
            src={"/assets/images/decor-arrow-style2.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            className="hidden lg:block absolute top-0 -right-4 translate-x-full"
            src={"/assets/images/decor-arrow-style3.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <div className="p-6 lg:p-12 border-2 border-dark/50 rounded-3xl shadow-xl flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center">
            <div className="w-full aspect-square lg:aspect-auto lg:w-1/3 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full lg:h-auto object-cover object-bottom"
                src={"/assets/images/about-me-image.jpg"}
                alt="logo"
                width={1920}
                height={2560}
              />
            </div>
            <div className="w-full lg:w-2/3 font-primary text-lg lg:text-xl font-normal flex flex-col gap-6">
              <div>
                Hi there, I&apos;m Frontend Developer with over 3.5 years of
                experience building engaging and user-friendly web experiences
                using modern technologies.
              </div>
              <div>
                Currently, as a Web Developer at Katalon, I partner with the
                marketing team to build and optimize landing pages that drive
                successful campaigns. I&apos;m responsible for implementing new
                features and maintaining the Katalon website, collaborating with
                cross-functional teams to support marketing initiatives and
                events. I enjoy the challenge of creating effective web
                solutions that contribute to business growth.
              </div>
              <div>
                Previously at Gameloft, I contributed to the web marketing
                success of major game launches like Disney Speedstorm, Disney
                Dreamlight Valley, and Asphalt 8. As part of the web marketing
                team, I developed and implemented new website features and
                collaborated cross-functionally to enhance the Gameloft website.
                I also implemented a CMS to streamline asset management.
                I&apos;m proud to have been part of a team recognized with a
                &quot;Most Valuable Team&quot; award for our contributions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
