import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Presentation.module.css";
import Link from "next/link";

import Loading from "../loading";

const PresentationText: React.FC = () => {
  const [isImage, setIsImage] = useState(false);
  const [isURL, setIsURL] = useState("" as any);
  useEffect(() => {
    setIsURL(
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/foto-graduation3.jpg"
    );
    setIsImage(true);
  }, []);

  if (isImage) {
    return (
      <div className="presentation">
        <div className={classes.img}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <Link href={"/aboutMe"}>
            <Image
              className={classes.photo}
              src={isURL}
              alt="is loading..."
              width={500}
              height={500}
              priority
            />
          </Link>
        </div>
        <div className={classes.containerText}>
          <h1 className={classes.headers2}>Hi, MY NAME IS THOMAS JUBIN</h1>
          <h1 className={classes.headers}>I´M A FULL-STACK WEB DEVELOPER</h1>
        </div>
      </div>
    );
  }
  return (
    <>
      <Loading />
    </>
  );
};

export default PresentationText;
