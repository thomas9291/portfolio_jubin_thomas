import React from "react";
import Image from "next/image";
import Link from "next/link";
import errorFoto from "./error-foto.avif";
import classes from "./errorComponent.module.css";

export const ErrorComponent = () => {
  const imageStyle: any = {
    border: "1px solid black",
    borderRadius: "1rem",
    margin: "1rem",
  };
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <Link href={"/projects"} className={classes.link}>
          Back to the Projects Page
        </Link>
      </div>
      <div>
        <Image
          style={imageStyle}
          src={errorFoto}
          height={250}
          width={250}
          alt="error foto"
          priority
        />
      </div>
    </div>
  );
};
