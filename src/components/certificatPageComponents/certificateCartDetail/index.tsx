import React, { useEffect, useRef } from "react";
import Image from "next/image";
import classes from "./certificateCartDetail.module.css";
import { certificatDetail } from "../../../../project.model";
import ButtonHoverEffect from "@/components/buttonHoverEffect";

export const CertificateCartDetail: React.FC<certificatDetail> = (props) => {
  const imageStyle = {
    border: "3px solid black",
    borderRadius: "1rem",
    margin: "1rem",
  };
  const textContainerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer) {
      return;
    }
    const createAnimationHeader = () => {
      let htmlSpans = textContainer?.innerText
        .split("")
        .map((letter, i) => {
          return `<span style= "animation-duration: ${
            Math.random() * 5
          }s; filter: hue-rotate(${i * 50}deg)">${letter}</span>`;
        })
        .join("");
      textContainer!.innerHTML = htmlSpans;
    };
    createAnimationHeader();
  }, [textContainerRef]);
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes.header1} ref={textContainerRef}>
          {props.title}
        </h1>
        <h2 className={classes.header2}>{props.date}</h2>
        <p className={classes.descriptionText}>{props.description}</p>
        <div className={classes.btnContainer}>
          <ButtonHoverEffect href={props.linkURL!}>
            more details
          </ButtonHoverEffect>
        </div>
      </div>
      <div className={classes.img}>
        <Image
          style={imageStyle}
          src={props.imagePath!}
          width={500}
          height={500}
          alt="image from author"
          priority
        />
      </div>
    </div>
  );
};
