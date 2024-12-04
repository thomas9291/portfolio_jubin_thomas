import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Presentation.module.css";
import Loading from "../../loading";

const PresentationText: React.FC = () => {
  const [isImage, setIsImage] = useState(false);
  const [isURL, setIsURL] = useState("" as any);
  useEffect(() => {
    setIsURL(
      // "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/foto-graduation3.jpg"
      "/images/fotoPerfil/file(27).jpeg"
    );
    setIsImage(true);
  }, []);

  if (isImage) {
    return (
      <div className={classes.presentationContainer}>
        <div className={classes.img}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>

          <Image
            className={classes.photo}
            src={isURL}
            alt="is loading..."
            width={500}
            height={500}
            priority
          />
        </div>
        <div className={classes.containerText}>
          <h1 className={classes.headers2}>Hi, MY NAME IS THOMAS JUBIN</h1>
          <h1 className={classes.headers}>I AM A FULL-STACK WEB DEVELOPER</h1>
          <h1 className={classes.headers}>AND 3D ARTIST</h1>
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
