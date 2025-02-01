"use client";

import { updateActiveSection } from "@/stores/reducers/activeSection";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";

type FormValues = {
  email: string;
  message: string;
};

library.add(faX);

export default function HomepageContactUs() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitted, setIsSubmited] = useState(false);

  const handleSubmitForm = (data: FormValues) => {
    axios
      .post(
        "https://api.sheetbest.com/sheets/7a38c571-7d9e-4694-af40-cf7c236e4f08",
        { ...data, submitDate: new Date().toUTCString() }
      )
      .then(() => {
        resetField("email");
        resetField("message");
        setIsSubmited(true);
      });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => handleSubmitForm(data);

  const dispatch = useDispatch();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
    rootMargin: "0px",
  });

  const root = useRef(null);
  const [sectionViewed, setSectionViewed] = useState(false);
  const arrowTopLeftRef = useRef(null);
  const arrowBottomLeftRef = useRef(null);
  const arrowTopRightRef = useRef(null);
  const arrowBottomRightRef = useRef(null);

  const arrowTopLeftTL = gsap.timeline();
  const arrowBottomLeftTL = gsap.timeline();
  const arrowTopRightTL = gsap.timeline();
  const arrowBottomRightTL = gsap.timeline();

  useEffect(() => {
    if (entry?.isIntersecting) {
      dispatch(updateActiveSection("contactUs"));
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

  useGSAP(() => {
    arrowTopLeftTL
      .to(
        arrowTopLeftRef.current,
        {
          y: "1rem",
          x: "-2rem",
          duration: 2,
        },
        "start"
      )
      .to(arrowTopLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 2,
      })
      .to(arrowTopLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 4,
      })
      .repeat(-1);

    arrowBottomLeftTL
      .to(
        arrowBottomLeftRef.current,
        {
          y: "-1rem",
          x: "-2rem",
          duration: 2,
        },
        "start"
      )
      .to(arrowBottomLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 2,
      })
      .to(arrowTopLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 4,
      })
      .repeat(-1);

    arrowTopRightTL
      .to(
        arrowTopRightRef.current,
        {
          y: "1rem",
          x: "2rem",
          duration: 2,
        },
        "start"
      )
      .to(arrowTopRightRef.current, {
        y: "0",
        x: "4rem",
        duration: 2,
      })
      .to(arrowTopLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 4,
      })
      .repeat(-1);

    arrowBottomRightTL
      .to(
        arrowBottomRightRef.current,
        {
          y: "-1rem",
          x: "2rem",
          duration: 2,
        },
        "start"
      )
      .to(arrowBottomRightRef.current, {
        y: "0",
        x: "4rem",
        duration: 2,
      })
      .to(arrowTopLeftRef.current, {
        y: "0",
        x: "-4rem",
        duration: 4,
      })
      .repeat(-1);
  }, []);

  return (
    <div ref={ref}>
      <div className="py-8 lg:py-16 px-x pb-20 relative" ref={root}>
        <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
          CONTACT ME
        </div>
        <h2 className="font-primary text-4xl lg:text-5xl font-bold text-center mt-6 flex gap-4 justify-center items-center">
          <Image
            className=""
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
          Ready to Transform Ideas Into Interactive Reality?
          <Image
            className=""
            src={"assets/images/flash.svg"}
            alt="logo"
            width={60}
            height={60}
          />
          <br />
        </h2>
        <div className="font-primary text-base lg:text-xl font-normal text-center mt-6">
          I&apos;m eager to bring innovative designs to life with clean,
          efficient code and a keen eye for aesthetics. Whether you have a
          question, a project, or just want to chat about the latest in web
          development, drop me a line, and let&apos;s create something
          extraordinary together.
        </div>
        <div className="relative mt-10 lg:mt-16 mx-auto w-full max-w-4xl">
          <Image
            ref={arrowTopLeftRef}
            className="absolute -top-8 right-full -translate-x-16 rotate-[25deg]"
            src={"/assets/images/decor-arrow-style4.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            ref={arrowBottomLeftRef}
            className="absolute bottom-0 right-full -translate-x-16 -rotate-[25deg]"
            src={"/assets/images/decor-arrow-style4.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            ref={arrowTopRightRef}
            className="absolute -top-8 left-full translate-x-16 rotate-[155deg]"
            src={"/assets/images/decor-arrow-style4.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            ref={arrowBottomRightRef}
            className="absolute bottom-0 left-full translate-x-16 -rotate-[155deg]"
            src={"/assets/images/decor-arrow-style4.svg"}
            alt="logo"
            width={100}
            height={100}
          />

          <div className="flex flex-col justify-center items-center">
            <form
              className="flex flex-col gap-6 w-full max-w-4xl justify-center items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type="text"
                className="font-primary text-lg font-normal w-full px-6 py-2 border-2 border-dark rounded-lg outline-none transition-all focus:border-orange5"
                placeholder="Enter your email*"
              />
              <textarea
                {...register("message", { required: true })}
                className="font-primary text-lg font-normal w-full px-6 py-2 min-h-60 border-2 border-dark rounded-lg outline-none transition-all focus:border-orange5"
                placeholder="Enter your message*"
              />
              <input
                type="submit"
                className={clsx(
                  "font-primary text-lg font-semibold text-grey w-fit px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 bg-orange8 hover:bg-orange5 hover:border-orange5",
                  (errors.email || errors.message) &&
                    " text-white !cursor-not-allowed !border-gray-300 !bg-gray-300"
                )}
                disabled={!!errors.email || !!errors.message}
              ></input>
            </form>
          </div>
        </div>

        {isSubmitted && (
          <div className="popup fixed top-0 left-0 w-screen h-screen z-50">
            <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-[90vw] aspect-[16/9] bg-white rounded-lg p-10 flex flex-col justify-center items-center gap-4">
              <div className="font-primary text-3xl font-bold text-center">
                Thank You for Reaching Out!
              </div>
              <div className="font-primary text-base lg:text-xl font-normal text-center">
                We have received your message and would like to thank you for
                writing to us. If your inquiry is urgent, please contact me via
                social media or my resume to talk as soon as possible.
              </div>
              <div className="flex justify-center items-center gap-8 mt-4">
                <a
                  href="mailto:truongbe2906@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={"/assets/images/icon-mail.svg"}
                    alt="mail"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/truongbelammai/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={"/assets/images/icon-linkedin.svg"}
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="/assets/files/Frontend Developer - Be Lam Mai Truong.pdf"
                  download={true}
                >
                  <Image
                    src={"/assets/images/icon-cv.svg"}
                    alt="cv"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div
                className="absolute top-6 right-6 cursor-pointer flex"
                onClick={() => setIsSubmited(false)}
              >
                <FontAwesomeIcon icon="x" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
