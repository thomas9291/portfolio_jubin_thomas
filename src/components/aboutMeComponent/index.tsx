import React from "react";
import classes from "./aboutMe.module.css";

export const AboutMeComponent = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Hello my name is Thomas Jubin</h1>
      <h2 className={classes.header2}>I am passionate about programming!</h2>
      <div className={classes.text}>
        <p>
          I began teaching myself through online resources at the start of 2022.
        </p>
        <p>
          I had the opportunity to attend the Spiced Academy from April to July
          2023.
        </p>
        <p>It is an intensive bootcamp located in Berlin. </p>
        <p>
          This experience enabled me to learn within a group setting and receive
          support from the instructors.
        </p>
        <p>
          Since then, I have been actively practicing and taking online courses
          to further solidify my knowledge.
        </p>
        <p>I am French and have been residing in Berlin since 2016.</p>
        <p>I am proficient in French, Spanish, German, and English.</p>
      </div>
    </div>
  );
};
