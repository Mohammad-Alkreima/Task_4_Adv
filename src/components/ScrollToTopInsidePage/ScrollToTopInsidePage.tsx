import React, { useState, useEffect } from "react";
import "./ScrollToTopInsidePage.css";

const ScrollToTopInsidePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () : void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () : void => {
      if (!header) return;

      const headerRect = header.getBoundingClientRect();

      if (headerRect.bottom <= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src="/Task_4_Adv/assets/img/arrow-up.png" alt="Scroll to top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopInsidePage;
