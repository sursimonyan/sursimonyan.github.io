import { useEffect, useState } from "react";

export function useIsVisible(scrollRef) {
  const [isvisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const offset = scrollRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        // console.log("scrollPosition + windowHeight - 400", scrollPosition + windowHeight - 400);
        // console.log("offset", offset);

        if (scrollPosition + windowHeight - 400 > offset) {
          setIsVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollRef]);

  return isvisible;
}
