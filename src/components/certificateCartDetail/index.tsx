import React from "react";
import Image from "next/image";
import classes from "./certificateCartDetail.module.css";
import Link from "next/link";
import { certificatDetail } from "../../../project.model";

export const CertificateCartDetail: React.FC<certificatDetail> = (props) => {
  const imageStyle = {
    border: "3px solid black",
    borderRadius: "1rem",
    margin: "1rem",
  };
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes.header1}>{props.title}</h1>
        <h2 className={classes.header2}>{props.date}</h2>
        <p className={classes.descriptionText}>{props.description}</p>
        <Link
          style={{ color: "rgb(114, 232, 70)" }}
          href={props.linkURL!}
          target="_blank"
        >
          more details
        </Link>
      </div>
      <div className={classes.img}>
        <Image
          style={imageStyle}
          src={props.imagePath!}
          width={500}
          height={500}
          alt="image from author"
        />
      </div>
    </div>
  );
};
