import React from "react";

import classes from "./moon.module.css";

const Moon: React.FC = () => {
  return (
    <div className={classes.moonContainer}>
      <div
        className={`${classes.crater} ${classes.crater1} ${classes.craterSm}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater2} ${classes.craterMd}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater3} ${classes.craterSm}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater4} ${classes.craterSm}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater5} ${classes.craterSm}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater6} ${classes.craterMd}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater7} ${classes.craterSm}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater8} ${classes.craterMd}`}
      ></div>
      <div
        className={`${classes.crater} ${classes.crater9} ${classes.craterSm}`}
      ></div>
    </div>
  );
};

export default Moon;
