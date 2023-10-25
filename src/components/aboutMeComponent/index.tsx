import React from "react";
import classes from "./aboutMe.module.css";

export const AboutMeComponent = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Hello my name is thomas</h1>
      <h2 className={classes.header2}>I am passionate about programming!</h2>
      <div className={classes.text}>
        <p>
          I started learning by myself on the internet since the beginning of
          2022.
        </p>
        <p>I had the chance to go to spiced academy from May to July 2023,</p>
        <p>it is an intensive bootcamp based in berlin, </p>
        <p>
          it allowed me to learn with a group and to have the support of the
          teachers.
        </p>
        <p>
          Since then I have been able to practice and take online courses in
          order to strengthen my knowledge.
        </p>
        <p>I am French and I have lived in Berlin since 2016.</p>
        <p>I speak French, Spanish, German and English.</p>
      </div>
    </div>
  );
};
