import React, { useEffect, useRef } from "react";
import classes from "./starsHomePage.module.css";

const Stars = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;

    if (!starsContainer) {
      return;
    }

    const createStar = () => {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * starsContainer.clientWidth);
      star.style.left = `${x}px`;
      const y = Math.floor(Math.random() * starsContainer.clientHeight);
      star.style.top = `${y}px`;

      const size = Math.random() * 4;
      star.style.width = `${1 + size}px`;
      star.style.height = `${1 + size}px`;

      const duration = Math.random() * 2;
      star.style.animationDuration = `${duration + 1}s`;
      starsContainer.style.width = "100%";
      starsContainer.style.height = "100%";
      starsContainer.appendChild(star);
    };

    let j = 0;
    while (j < 70) {
      createStar();
      j++;
    }

    return () => {
      // Cleanup code (optional)
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, [starsContainerRef]);

  return <div ref={starsContainerRef} className={classes.stars}></div>;
};

export default Stars;
