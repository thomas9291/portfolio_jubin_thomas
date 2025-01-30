import React, { useState, useEffect } from "react";

import classes from "./videoIntro.module.css";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

const VideoIntro: React.FC = () => {
  return (
    <div className={classes.presentationContainer}>
      <div className={classes.videoContainer}>
        <video className={classes.screen} controls width="500" height="500">
          <source src={"/videos/nexusTraining6.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className={classes.containerText}>
        <h1 className={classes.headers2}>Hi, MY NAME IS THOMAS JUBIN</h1>
        <h1 className={classes.headers}>I AM 3D ARTIST </h1>
        <h1 className={classes.headers}>AND FULL-STACK WEB DEVELOPER</h1>
      </div>
    </div>
  );
};

export default VideoIntro;
