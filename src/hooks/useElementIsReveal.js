import { useState, useEffect } from "react";

const useElementIsReveal = ({ ref }) => {
  const [isReveal, setIsReveal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          setIsReveal(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return {
    isReveal,
  };
};

export default useElementIsReveal;
