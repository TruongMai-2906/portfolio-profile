import { RootState } from "@/stores/store";
import { clsx } from "clsx";
import { useSelector } from "react-redux";

interface HeaderPropsType {
  onHeaderClick: (text: string) => void;
}

export default function Header({ onHeaderClick }: HeaderPropsType) {
  const activeSection = useSelector((state: RootState) => state.activeSection);

  return (
    <div className="w-full h-16 shadow fixed top-0 left-0 bg-white z-50">
      <div className="px-x py-4 flex gap-40 h-full">
        <div className="w-32 h-full bg-orange5"></div>
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
    </div>
  );
}
