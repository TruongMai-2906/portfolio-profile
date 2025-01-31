"use client";

import { useGSAP } from "@gsap/react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

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
    subtitle: "EXPERIENCES",
    title: "Throughout My Professional Journey",
    history: [
      {
        timeline: "11/2023 - Present",
        company: "Katalon",
        title: "Web Developer",
        description: `
            <p>Technology: ReactJS, NextJS, HTML, SCSS, Javascript, RestAPI, Jquery, Amplify, S3, Strapi, Hubspot, Survicate, Convert, Swiper, GSAP, ChartJS Worked with the Frontend team, Creative team, and Marketing team to implement new features and new Katalon's campaign page.</p>
            <p>Implemented a responsive design that ensured the web application was accessible on all devices using NextJS.</p>
            <p>Played a key role in bringing TestCon to Vietnam by developing the landing page and implementing an email workflow for the 2024 event. This initiative resulted in over 700 attendees, both online and in person</p>
            <p>Implemented and set up A/B testing to test, monitor, and make decisions on the results</p>
            <p>Implemented tracking to connect with Hubspot CRM to manage users registered and non-register</p>
            <p>Implemented a template to reuse in the future with NextJS and Strapi CMS.</p>
            <p>References:</p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://www.testcon.net" target="_blank" rel="noreferrer noopener">https://www.testcon.net</a> </p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://katalon.com/1k-studio-promo" target="_blank" rel="noreferrer noopener">https://katalon.com/1k-studio-promo</a> </p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://katalon.com/katalon-vs-selenium" target="_blank" rel="noreferrer noopener">https://katalon.com/katalon-vs-selenium</a> </p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://katalon.com/idea-exchange" target="_blank" rel="noreferrer noopener">https://katalon.com/idea-exchange</a> </p>
          `,
        logo: "/assets/images/katalon.svg",
      },
      {
        timeline: "11/2021 - 10/2023",
        company: "Gameloft",
        title: "Frontend Developer",
        description: `
            <p>Technology: ReactJS, NextJS, HTML, SCSS, Javascript, TypeScript, Tailwind, Redux, Recoil, Webpack, Axios, RestAPI, GraphQL, Framer Motion, GSAP, Jquery, Strapi.</p>
            <p>Worked with Front end team, UI/UX team, BE team, and SEO team to implement new features, UI, and CMS for Gameloft.com website and Gameloft's game minisite, landing page, campaign page, product page, created template reusable for user redeem gift.</p>
            <p>Developed a responsive website that is optimized for both desktop and mobile devices.</p>
            <p>Created a template to reuse in the future for the landing page, and studio page.</p>
            <p>Developed a custom theme for a content management system (CMS) that improved the look and feel of the website.</p>
            <p>Utilized version control systems such as Git to manage code changes and collaborate with other developers.</p>
            <p>References:</p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://www.gameloft.com" target="_blank" rel="noreferrer noopener">https://www.gameloft.com</a></p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://disneyspeedstorm.com" target="_blank" rel="noreferrer noopener">https://disneyspeedstorm.com</a></p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://disneydreamlightvalley.com " target="_blank" rel="noreferrer noopener">https://disneydreamlightvalley.com</a></p>
            <p>&nbsp; &nbsp; &nbsp; <a href="https://gangstarny.com" target="_blank" rel="noreferrer noopener">https://gangstarny.com</a></p>
          `,
        logo: "/assets/images/gameloft.svg",
      },
      {
        timeline: "7/2023 - 9/2021",
        company: "Inotek",
        title: "Intern Frontend Developer",
        description: `
            <p>Technology: VueJS, NuxtJS, HTML, SCSS, Bootstrap, TypeScript, Atomic Design, Composition API, Axios, RestAPI, Angular, PrimeNg, HTTPClient.</p>
            <p>Worked with Frontend team, UI/UX team, BE team and SEO team to implement new feature, UI, and CMS for Inotek landing page, CourseCom product page, Torenta admin (Recruiter Web app for Japanese company)</p>
            <p>Joined projects: Inotek landing page, CourseCom product page, Torenta admin</p>
          `,
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
      <div className="mt-24 relative">
        <div className="home-history__line absolute w-0.5 h-full bg-dark"></div>
        <div className="flex flex-col gap-24 relative">
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

  return (
    <div ref={container}>
      <div className="flex gap-6" ref={ref}>
        <div className="logo timeline w-1/5 font-primary text-xl font-semibold flex justify-end mt-3 flex-shrink-0">
          {props.timeline}
        </div>
        <div className="dot w-6 mt-4">
          <div className="w-6 h-6 rounded-full bg-white border-2 border-orange5"></div>
        </div>
        <div className="home-history__content">
          <div className="absolute top-0 left-0">
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
            <div
              className="font-primary text-base font-normal mt-4 flex flex-col gap-2 [&>p>a]:text-orange5 [&>p>a]:underline [&>p>a]:underline-offset-3"
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
