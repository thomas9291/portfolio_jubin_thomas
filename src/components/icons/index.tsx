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
      <Html5 />

      <Css3 />

      <VanillaJs />

      <ReactSvg />

      <ExpressJs />

      <Github />

      <Mongodb />

      <Nextjs />

      <Tailwind />

      <Typescript />

      <VisualStudio />

      <Bootstrap />

      <Aws />

      <Vercel />
    </div>
  );
};

export default Icons;
