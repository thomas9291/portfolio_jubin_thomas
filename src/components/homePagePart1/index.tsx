import React from "react";
import classes from "./homePagePart1.module.css";
//import PresentationText from "../aboutMePageComponents/Presentation";
import VideoIntro from "../videoIntro";

const HomePagePart1 = () => {
  return (
    <>
      <div className={classes.homepagePart1}>
        <div className={classes.presentationText}>
          <VideoIntro />
        </div>
      </div>
    </>
  );
};

export default HomePagePart1;
