import React, { useState, useRef, useEffect } from "react";
import classes from "./homePagePart3.module.css";
import Image from "next/image";

const HomePagePart3 = () => {
  const [isVideo, setIsVideo] = useState(
    "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/react-three-demo.mp4"
  );
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
          <li
            onClick={() =>
              setIsVideo(
                "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/react-three-demo.mp4"
              )
            }
          >
            <Image
              src={"/images/blogImg/react-three.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li
            onClick={() =>
              setIsVideo(
                "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/fitness-app.mp4"
              )
            }
          >
            <Image
              src={"/images/blogImg/fitness-app.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li
            onClick={() =>
              setIsVideo(
                "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/kitsune-art-galery.mp4"
              )
            }
          >
            <Image
              src={"/images/blogImg/kitsune-art-gallery.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li
            onClick={() =>
              setIsVideo(
                "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/frontend-app.mp4"
              )
            }
          >
            <Image
              src={"/images/blogImg/frontend-app.jpg"}
              alt="images"
              width={300}
              height={300}
              priority
            />
          </li>
          <li
            onClick={() =>
              setIsVideo(
                "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/fishing-place-app.mp4"
              )
            }
          >
            <Image
              src={"/images/blogImg/fishing-app.jpg"}
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
