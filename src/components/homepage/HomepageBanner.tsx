import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

library.add(faChevronDown);
gsap.registerPlugin(useGSAP);

export default function HomepageBanner() {
  const tl = gsap.timeline();
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);
  const arrow3Ref = useRef(null);

  useGSAP(() => {
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

  return (
    <div className="px-x h-screen py-16 flex flex-col gap-16 justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 filter blur after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-0 after:bg-black after:opacity-50">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/images/banner-background-2.jpg"}
          alt="background"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-primary text-6xl font-bold text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <h2 className="font-primary text-5xl font-bold text-center text-orange8">
          Web Developer
        </h2>
      </div>
      <div className="flex justify-center gap-6">
        <div className="font-primary text-lg font-semibold text-grey px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange5 bg-orange5 hover:bg-orange8 hover:border-orange8">
          Primary
        </div>
        <div className="font-primary text-lg font-semibold text-orange8 px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange5 hover:bg-grey">
          Secondary
        </div>
      </div>

      <div className="arrows absolute bottom-11 left-1/2 -translate-x-1/2">
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
