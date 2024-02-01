import React from "react";
import { ProjectObj } from "../../../../project.model";
import Link from "next/link";
import { Github } from "../../icons/svgItems/SvgItems";
import classes from "./projectCart.module.css";

export const ProjectCart: React.FC<ProjectObj> = (props) => {
  return (
    <>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.iconsContainer}>{props.programs}</div>
      <div className={classes.linkURL}>
        <h2>visit the website:</h2>
        <Link href={props.linkURL!} target="_blank">
          {props.linkURL!}
        </Link>
      </div>
      <div className={classes.link}>
        <Link href={props.codeURL!} target="_blank">
          <Github />
        </Link>
      </div>
      <div className={classes.container}>
        <video
          autoPlay
          loop
          width="400"
          height="400"
          className={classes.videoContainer}
        >
          <source
            src={props.videoURL}
            type="video/mp4"
            className={classes.screen}
          />
        </video>
        <div className={classes.text}>
          <p className={classes.date}>{props.date}</p>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </>
  );
};
