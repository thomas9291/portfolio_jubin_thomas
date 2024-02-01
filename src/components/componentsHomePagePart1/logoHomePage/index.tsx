import React from "react";
import classes from "./logoHomePage.module.css";

const LogoHomePage = () => {
  return (
    <div className={classes.logoBox}>
      <ul className={classes.logo}>
        <li>W</li>
        <li>E</li>
        <li>L</li>
        <li>C</li>
        <li>O</li>
        <li>M</li>
        <li>E</li>
      </ul>
      <h2>To My</h2>
      <div className={classes.boxH3}>
        <div className={classes.lightBar}></div>
        <div className={classes.topLayer}></div>
        <h3>Portfolio</h3>
      </div>
    </div>
  );
};

export default LogoHomePage;
