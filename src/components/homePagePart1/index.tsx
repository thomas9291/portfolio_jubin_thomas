import React from "react";
import classes from "./homePagePart1.module.css";
import PresentationText from "../aboutMePageComponents/Presentation";

const HomePagePart1 = () => {
  return (
    <>
      <div className={classes.homepagePart1}>
        <div className={classes.logoContainer}>
          <ul className={classes.logo}>
            <li>W</li>
            <li>E</li>
            <li>L</li>
            <li>C</li>
            <li>O</li>
            <li>M</li>
            <li>E</li>
          </ul>
          <p>to my</p>
          <p>Portfolio</p>
        </div>
        <div className={classes.presentationText}>
          <PresentationText />
        </div>
      </div>
    </>
  );
};

export default HomePagePart1;
