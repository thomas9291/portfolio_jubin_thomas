import React from "react";
import classes from "./aboutMe.module.css";

export const AboutMeComponent = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header2}>
        I am passionate about programming and 3d!
      </h2>
      <div className={classes.text}>
        <p>
          With a strong foundation in both full-stack web development and 3D
          artistry,
        </p>
        <p>
          my work brings together technical expertise and creative innovation.
        </p>
        <p>After an initial career in physical fitness,</p>
        <p>
          I pivoted toward tech, developing a passion for blending art and
          functionality.
        </p>
        <p>
          From April to July 2023, I completed an intensive full-stack web
          development program at Spiced Academy in Berlin.
        </p>
        <p>
          This training covered a comprehensive range of modern technologies,
        </p>
        <p>equipping me to build robust, scalable web applications.</p>
        <p>
          Soon after, I expanded my skill set further by diving into 3D design
        </p>
        <p>and animation at the IBB Institute from June to September 2024,</p>
        <p>mastering Blender to bring ideas to life in stunning detail.</p>
        <p>Living in Berlin since 2016, I bring a multicultural perspective</p>
        <p>and fluency in French, Spanish, German, and English.</p>
        <p>
          This diversity enhances my ability to collaborate across industries
        </p>
        <p>and craft solutions tailored to a global audience.</p>
      </div>
    </div>
  );
};
