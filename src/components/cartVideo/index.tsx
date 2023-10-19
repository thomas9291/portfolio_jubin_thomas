import React from "react";
import classes from "./cartVideo.module.css";

const CartVideo = () => {
  return (
    <>
      <h1 className={classes.title}>title</h1>
      <div className={classes.containerVideo}>
        <video
          className={classes.screen}
          autoPlay
          loop
          width="500"
          height="500"
        >
          <source
            src={
              "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/screenRecording.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <div className={classes.containerBtn}>
        <button className={classes.btn}>more details</button>
      </div>
    </>
  );
};

export default CartVideo;
