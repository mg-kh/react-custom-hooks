import { useEffect, useMemo } from "react";

const events = ["load", "resize", "orientationchange"];

const useScreenSizes = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeigh, setInnerHeigh] = useState(0);
  const size = useMemo(() => {
    let screenSize = "";
    switch (true) {
      case innerWidth >= 0 && innerWidth <= 320:
        screenSize = "xs";
        break;
      case innerWidth >= 320 && innerWidth <= 640:
        screenSize = "sm";
        break;
      case innerWidth >= 640 && innerWidth <= 768:
        screenSize = "md";
        break;
      case innerWidth >= 768 && innerWidth <= 1024:
        screenSize = "lg";
        break;
      case innerWidth >= 1024 && innerWidth <= 1280:
        screenSize = "xl";
        break;
      case innerWidth >= 1280 && innerWidth <= 1536:
        screenSize = "2xl";
        break;

      default:
        screenSize = "_";
        break;
    }
    return screenSize;
  }, [innerWidth]);

  useEffect(() => {
    const dimensionSetter = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeigh(window.innerHeigh);
    };
    dimensionSetter();

    events.map((evt) => {
      window.addEventListener(evt, dimensionSetter);
    });

    return () => {
      events.map((evt) => {
        window.removeEventListener(evt, dimensionSetter);
      });
    };
  }, []);

  return {
    size,
    width: innerWidth,
    height: innerHeigh,
  };
};

export default useScreenSizes;
