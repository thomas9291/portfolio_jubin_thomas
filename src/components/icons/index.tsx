import React from "react";
import classes from "./icons.module.css";

import {
  Aws,
  Bootstrap,
  Css3,
  ExpressJs,
  Github,
  Html5,
  Mongodb,
  Nextjs,
  ReactSvg,
  Tailwind,
  Typescript,
  Vercel,
  VisualStudio,
  VanillaJs,
} from "./svgItems/SvgItems";

const Icons = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <Html5 />
      </div>
      <div className={classes.icons}>
        <Css3 />
      </div>
      <div className={classes.icons}>
        <VanillaJs />
      </div>
      <div className={classes.icons}>
        <ReactSvg />
      </div>
      <div className={classes.icons}>
        <ExpressJs />
      </div>
      <div className={classes.icons}>
        <Github />
      </div>
      <div className={classes.icons}>
        <Mongodb />
      </div>
      <div className={classes.icons}>
        <Nextjs />
      </div>
      <div className={classes.icons}>
        <Tailwind />
      </div>
      <div className={classes.icons}>
        <Typescript />
      </div>
      <div className={classes.icons}>
        <VisualStudio />
      </div>
      <div className={classes.icons}>
        <Bootstrap />
      </div>
      <div className={classes.icons}>
        <Aws />
      </div>
      <div className={classes.icons}>
        <Vercel />
      </div>
    </div>
  );
};

export default Icons;
