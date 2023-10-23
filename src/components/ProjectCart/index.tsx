import React from "react";
import { ProjectObj } from "../../../project.model";
import Link from "next/link";
import { Github } from "../icons/svgItems/SvgItems";
import classes from "./projectCart.module.css";

export const ProjectCart: React.FC<ProjectObj> = (props) => {
  return (
    <>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.linkURL}>
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
        <div className={classes.text}>
          <p className={classes.date}>{props.date}</p>
          <p className={classes.description}>{props.description}</p>
        </div>

        <div className={classes.videoContainer}>
          <video
            className={classes.screen}
            autoPlay
            loop
            width="500"
            height="500"
          >
            <source src={props.videoURL!} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
