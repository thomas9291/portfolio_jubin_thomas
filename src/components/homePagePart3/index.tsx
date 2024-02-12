import React, { useState, useRef, useEffect } from "react";
import classes from "./homePagePart3.module.css";
import Image from "next/image";

const HomePagePart3 = () => {
  const [isVideo, setIsVideo] = useState("/videos/video1.mp4");
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    video!.src = isVideo;
  }, [videoRef, isVideo]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span>B</span>
        <span>l</span>
        <span>o</span>
        <span>g</span>
      </div>
      <section className={classes.sectionVideo}>
        <video ref={videoRef} className={classes.videos} autoPlay muted loop>
          <source type="video/mp4" />
        </video>
        <ul className={classes.navigation}>
          <li onClick={() => setIsVideo("/videos/video1.mp4")}>
            <Image
              src={"/images/blogImg/img1.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li onClick={() => setIsVideo("/videos/video2.mp4")}>
            <Image
              src={"/images/blogImg/img2.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li onClick={() => setIsVideo("/videos/video3.mp4")}>
            <Image
              src={"/images/blogImg/img3.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li onClick={() => setIsVideo("/videos/video4.mp4")}>
            <Image
              src={"/images/blogImg/img4.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePagePart3;
