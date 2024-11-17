import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(
    typeof window != "undefined" ? window.innerWidth : 1900,
  );
  //    typeof window == "undefined" ? window.innerWidth : "",
  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
  };
};
