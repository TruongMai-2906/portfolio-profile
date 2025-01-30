import { RefObject } from "react";

const scrollTo = (
  element: RefObject<HTMLDivElement | null>,
  offset: number = 0
) => {
  if (element.current) {
    window.scrollTo({
      top: element.current.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

export { scrollTo };
