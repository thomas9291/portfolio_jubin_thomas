import React from "react";
import classes from "./cartVideo.module.css";
import Link from "next/link";

interface cartVideoSlide {
  title: string;
  videoURL: string;
  projectId: string;
}

const CartVideo: React.FC<cartVideoSlide> = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.containerVideo}>
        <video
          className={classes.screen}
          autoPlay
          loop
          width="500"
          height="500"
        >
          <source src={props.videoURL} type="video/mp4" />
        </video>
      </div>
      <div className={classes.containerBtn}>
        <Link href={`/projects/${props.projectId}`} className={classes.btn}>
          more details
        </Link>
      </div>
    </>
  );
};

export default CartVideo;
