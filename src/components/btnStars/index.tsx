import React from "react";
import classes from "./btnStars.module.css";

const BtnStars = (props: any) => {
  return (
    <div onClick={props.onClick} className={classes.link}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.title}
    </div>
  );
};

export default BtnStars;
