import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { updateActiveSection } from "@/stores/reducers/activeSection";

library.add(faChevronDown);
gsap.registerPlugin(useGSAP);

interface HomepageBannerPropDataType {
  onContactClick: () => void;
  onScrollDownClick: () => void;
}

export default function HomepageBanner(props: HomepageBannerPropDataType) {
  const dispatch = useDispatch();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
    rootMargin: "-100px",
  });

  const tl = gsap.timeline();
  const tlText = gsap.timeline();
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);
  const arrow3Ref = useRef(null);

  const edgeLeftRef = useRef(null);
  const edgeRightRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    tlText.to(
      edgeLeftRef.current,
      {
        x: window.innerWidth < 1024 ? -100 : -180,
        duration: 2,
      },
      "start"
    );
    tlText.to(
      edgeRightRef.current,
      {
        x: window.innerWidth < 1024 ? 100 : 180,
        duration: 2,
      },
      "start"
    );
    tlText.to(textRef.current, {
      y: 0,
      duration: 0.7,
    });

    tl.to(arrow3Ref.current, {
      opacity: 1,
      y: 10,
      duration: 0.4,
      ease: "power1.inOut",
    });
    tl.to(arrow2Ref.current, {
      opacity: 1,
      y: 10,
      duration: 0.4,
      ease: "power1.in",
    });
    tl.to(arrow1Ref.current, {
      opacity: 1,
      y: 10,
      duration: 0.4,
      ease: "power1.in",
    });
    // tl.to(arrow1Ref.current, { opacity: 1, y: 10, duration: 0.2 }); //delay
    tl.to(arrow3Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power1.in",
    });
    tl.to(arrow2Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power1.in",
    });
    tl.to(arrow1Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power1.in",
    });
    tl.repeat(-1);
  }, []);

  useEffect(() => {
    if (entry?.isIntersecting) {
      dispatch(updateActiveSection("banner"));
    }
  }, [dispatch, entry]);

  return (
    <div
      className="px-x h-screen py-8 lg:py-16 flex flex-col gap-16 justify-center items-center relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 filter blur after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-0 after:bg-black after:opacity-50">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/images/banner-background-2.jpg"}
          alt="background"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col gap-3 lg:gap-6">
        <h1 className="font-primary text-4xl lg:text-6xl font-bold text-center text-white">
          Hi, I&apos;m Truong,
        </h1>
        <div className="relative font-primary text-3xl lg:text-5xl font-bold text-center text-orange8">
          <div className="flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="translate-y-2"
              ref={edgeLeftRef}
              src="/assets/images/icon-edge-left.svg"
              alt="icon"
              width={30}
              height={30}
            />
            <Image
              className="-translate-y-2"
              ref={edgeRightRef}
              src="/assets/images/icon-edge-right.svg"
              alt="icon"
              width={30}
              height={30}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto relative translate-y-12" ref={textRef}>
              Web Developer
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="/assets/files/Frontend Developer - Be Lam Mai Truong.pdf"
          download={true}
          className="font-primary text-lg font-semibold text-grey px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 bg-orange8 hover:bg-orange5 hover:border-orange5"
        >
          Download My Resume
        </a>
        <div
          className="font-primary text-lg font-semibold text-orange8 px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 hover:border-white hover:text-white"
          onClick={() => props.onContactClick()}
        >
          Contact Me
        </div>
      </div>

      <div
        className="arrows absolute bottom-11 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => props.onScrollDownClick()}
      >
        <div className="flex opacity-0 translate-y-0" ref={arrow1Ref}>
          <FontAwesomeIcon icon="chevron-down" color="#ff7900" />
        </div>
        <div className="flex -mt-4 opacity-0 translate-y-0" ref={arrow2Ref}>
          <FontAwesomeIcon icon="chevron-down" color="#ff7900" />
        </div>
        <div className="flex -mt-4 opacity-0 translate-y-0" ref={arrow3Ref}>
          <FontAwesomeIcon icon="chevron-down" color="#ff7900" />
        </div>
      </div>
    </div>
  );
}
