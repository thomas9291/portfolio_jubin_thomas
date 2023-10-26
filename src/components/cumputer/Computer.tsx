import { ErrorComponent } from "../errorComponent";
import classes from "./Cumputer.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Computer = () => {
  const [isVideo, setIsVideo] = useState(false);
  const [isVideoURL, setIsVideoURL] = useState("" as any);

  useEffect(() => {
    setIsVideoURL(
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/screenRecording.mp4"
    );
    setIsVideo(true);
  }, []);
  if (isVideo) {
    return (
      <>
        <div className={classes.cadre}>
          <div className={classes.clavier}>
            <Link href={"/projects"}>
              <video
                className={classes.screen}
                autoPlay
                loop
                width="400"
                height="300"
              >
                <source src={isVideoURL} type="video/mp4" />
              </video>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <ErrorComponent />
    </>
  );
};

export default Computer;
