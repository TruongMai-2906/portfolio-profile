"use client";

import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import HomepageBanner from "@/components/homepage/HomepageBanner";
import HomepageContactUs from "@/components/homepage/HomepageContactUs";
import HomepageHistory from "@/components/homepage/HomepageHistory";
import HomepageProject from "@/components/homepage/HomepageProject";
import { scrollTo } from "@/utils/utils";
import { RefObject, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

import "@/components/homepage/Homepage.css";
import HomepageTechnology from "@/components/homepage/HomepageTechnology";
import HomepageAboutMe from "@/components/homepage/HomepageAboutMe";
import StickyContact from "@/components/commons/StickyContact";

interface RefListType {
  [key: string]: {
    ref: RefObject<HTMLDivElement | null>;
    offset?: number;
  };
}
export default function Home() {
  const BannerRef = useRef<HTMLDivElement | null>(null);
  const AboutMeRef = useRef<HTMLDivElement | null>(null);
  const TechnologyRef = useRef<HTMLDivElement | null>(null);
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  const HistoryRef = useRef<HTMLDivElement | null>(null);
  const ContactUsRef = useRef<HTMLDivElement | null>(null);

  const refList: RefListType = {
    banner: {
      ref: BannerRef,
    },
    aboutMe: {
      ref: AboutMeRef,
      offset: 40,
    },
    technology: {
      ref: TechnologyRef,
      offset: 40,
    },
    project: {
      ref: ProjectRef,
      offset: 40,
    },
    history: {
      ref: HistoryRef,
      offset: 40,
    },
    contactUs: {
      ref: ContactUsRef,
      offset: 40,
    },
  };

  const handleScrollTo = (key: string) => {
    scrollTo(refList[key].ref, refList[key].offset || 0);
  };

  return (
    <Provider store={store}>
      <div className="relative overflow-hidden">
        <Header onHeaderClick={(key) => handleScrollTo(key)} />
        <div ref={BannerRef}>
          <HomepageBanner
            onContactClick={() => handleScrollTo("contactUs")}
            onScrollDownClick={() => handleScrollTo("aboutMe")}
          />
        </div>
        <div ref={AboutMeRef}>
          <HomepageAboutMe />
        </div>
        <div ref={TechnologyRef}>
          <HomepageTechnology />
        </div>
        <div ref={HistoryRef}>
          <HomepageHistory />
        </div>
        <div ref={ProjectRef}>
          <HomepageProject />
        </div>
        <div ref={ContactUsRef}>
          <HomepageContactUs />
        </div>
        <StickyContact />
        <Footer />
      </div>
    </Provider>
  );
}
