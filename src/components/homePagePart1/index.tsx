import classes from "./homePagePart1.module.css";

import Moon from "../componentsHomePagePart1/moon";
import LogoHomePage from "../componentsHomePagePart1/logoHomePage";
import Stars from "../componentsHomePagePart1/starsHomePage";
import Dune from "../componentsHomePagePart1/dune";

import React from "react";

const HomePagePart1 = () => {
  return (
    <>
      <div className={classes.homepagePart1}>
        <div className={classes.moon}>
          <Moon />
        </div>
        <div className={classes.starsContainer}>
          <Stars />
        </div>
        <div className={classes.logoContainer}>
          <LogoHomePage />
        </div>
        <div className={classes.duneContainer}>
          <Dune />
        </div>
      </div>
    </>
  );
};

export default HomePagePart1;
