import { RootState } from "@/stores/store";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

interface HeaderPropsType {
  onHeaderClick: (text: string) => void;
}

export default function Header({ onHeaderClick }: HeaderPropsType) {
  const activeSection = useSelector((state: RootState) => state.activeSection);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <div className="w-full h-12 lg:h-16 shadow fixed top-0 left-0 bg-white z-50">
      <div className="hidden px-x py-4 lg:flex gap-40 h-full">
        <div className="w-32 h-full bg-white"></div>
        <div className="flex gap-20">
          <div
            className={clsx(
              "font-primary text-xl font-bold cursor-pointer transition-all",
              activeSection === "banner" && "text-orange5"
            )}
            onClick={() => onHeaderClick("banner")}
          >
            Home
          </div>
          <div
            className={clsx(
              "font-primary text-xl font-bold cursor-pointer transition-all",
              activeSection === "aboutMe" && "text-orange5"
            )}
            onClick={() => onHeaderClick("aboutMe")}
          >
            About
          </div>
          <div
            className={clsx(
              "font-primary text-xl font-bold cursor-pointer transition-all",
              activeSection === "history" && "text-orange5"
            )}
            onClick={() => onHeaderClick("history")}
          >
            History
          </div>
          <div
            className={clsx(
              "font-primary text-xl font-bold cursor-pointer transition-all",
              activeSection === "project" && "text-orange5"
            )}
            onClick={() => onHeaderClick("project")}
          >
            Project
          </div>
          <div
            className={clsx(
              "font-primary text-xl font-bold cursor-pointer transition-all",
              activeSection === "contactUs" && "text-orange5"
            )}
            onClick={() => onHeaderClick("contactUs")}
          >
            Contact Me
          </div>
        </div>
      </div>

      <div className="lg:hidden h-full px-x py-2 flex justify-between items-center relative">
        <div className="w-32 h-full bg-orange5"></div>
        <div onClick={() => setIsSidebarActive(!isSidebarActive)}>
          <Image
            src="/assets/images/icon-hamburger.svg"
            alt="icon"
            width={40}
            height={40}
          />
        </div>
        <div
          className={clsx(
            "absolute top-12 left-full w-screen h-[calc(100vh-3rem)] bg-white px-x transition-all duration-700",
            isSidebarActive && "!left-0"
          )}
        >
          <div className="flex flex-col gap-6 mt-8">
            <div
              className={clsx(
                "font-primary text-xl font-bold cursor-pointer transition-all",
                activeSection === "banner" && "text-orange5"
              )}
              onClick={() => {
                setIsSidebarActive(false);
                onHeaderClick("banner");
              }}
            >
              Home
            </div>
            <div
              className={clsx(
                "font-primary text-xl font-bold cursor-pointer transition-all",
                activeSection === "aboutMe" && "text-orange5"
              )}
              onClick={() => {
                setIsSidebarActive(false);
                onHeaderClick("aboutMe");
              }}
            >
              About
            </div>
            <div
              className={clsx(
                "font-primary text-xl font-bold cursor-pointer transition-all",
                activeSection === "history" && "text-orange5"
              )}
              onClick={() => {
                setIsSidebarActive(false);
                onHeaderClick("history");
              }}
            >
              History
            </div>
            <div
              className={clsx(
                "font-primary text-xl font-bold cursor-pointer transition-all",
                activeSection === "project" && "text-orange5"
              )}
              onClick={() => {
                setIsSidebarActive(false);
                onHeaderClick("project");
              }}
            >
              Project
            </div>
            <div
              className={clsx(
                "font-primary text-xl font-bold cursor-pointer transition-all",
                activeSection === "contactUs" && "text-orange5"
              )}
              onClick={() => {
                setIsSidebarActive(false);
                onHeaderClick("contactUs");
              }}
            >
              Contact Me
            </div>
          </div>
          <div className="flex items-center gap-8 my-8">
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
              href="/assets/files/Web Developer - Be Lam Mai Truong.pdf"
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
        </div>
      </div>
    </div>
  );
}
