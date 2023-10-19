import React from "react";
import Image from "next/image";
import classes from "./Presentation.module.css";
import Link from "next/link";

const PresentationText: React.FC = () => {
  const imageStyle = {
    borderRadius: "30rem",
    margin: "1rem",
    padding: "1rem",
  };

  return (
    <div className="presentation">
      <div className={classes.img}>
        <Link href={"/aboutMe"}>
          <Image
            src="https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/foto-graduation3.jpg"
            alt="is loading..."
            width={350}
            height={350}
            style={imageStyle}
            priority
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center m-2 text-[#f5f3f1]">
        <h1 className={classes.headers2}>Hi, MY NAME IS THOMAS JUBIN</h1>
        <h1 className={classes.headers}>I´M A FULL-STACK WEB DEVELOPER</h1>
      </div>
    </div>
  );
};

export default PresentationText;
