"use client";

import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import HomepageBanner from "@/components/homepage/HomepageBanner";
import HomepageContactUs from "@/components/homepage/HomepageContactUs";
import HomepageHistory from "@/components/homepage/HomepageHistory";
import HomepageProject from "@/components/homepage/HomepageProject";
import { scrollTo } from "@/utils/utils";
import { RefObject, useRef } from "react";

import "@/components/homepage/Homepage.css";
import HomepageTechnology from "@/components/homepage/HomepageTechnology";

interface RefListType {
  [key: string]: {
    ref: RefObject<HTMLDivElement | null>;
    offset?: number;
  };
}

export default function Home() {
  const BannerRef = useRef<HTMLDivElement | null>(null);
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  const HistoryRef = useRef<HTMLDivElement | null>(null);
  const ContactUsRef = useRef<HTMLDivElement | null>(null);

  const refList: RefListType = {
    banner: {
      ref: BannerRef,
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
  return (
    <div>
      <Header
        onHeaderClick={(key) =>
          scrollTo(refList[key].ref, refList[key].offset || 0)
        }
      />
      <div ref={BannerRef}>
        <HomepageBanner />
        <HomepageTechnology />
      </div>
      <div ref={ProjectRef}>
        <HomepageProject />
      </div>
      <div ref={HistoryRef}>
        <HomepageHistory />
      </div>
      <div ref={ContactUsRef}>
        <HomepageContactUs />
      </div>
      <Footer />
    </div>
  );
}
