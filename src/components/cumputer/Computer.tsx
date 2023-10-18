import classes from "./Cumputer.module.css";
import React from "react";

const Computer = () => {
  return (
    <>
      <div className={classes.cadre}>
        <div className={classes.clavier}>
          <video
            className={classes.screen}
            autoPlay
            loop
            width="400"
            height="300"
          >
            <source
              src="https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/screenRecording.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Computer;
