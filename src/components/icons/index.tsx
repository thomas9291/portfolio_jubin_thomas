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
      <div>
        <Html5 />
      </div>
      <div>
        <Css3 />
      </div>
      <div>
        <VanillaJs />
      </div>
      <div>
        <ReactSvg />
      </div>

      <div>
        <ExpressJs />
      </div>
      <div>
        <Github />
      </div>
      <div>
        <Mongodb />
      </div>

      <div>
        <Nextjs />
      </div>
      <div>
        <Tailwind />
      </div>
      <div>
        <Typescript />
      </div>
      <div>
        <VisualStudio />
      </div>
      <div>
        <Bootstrap />
      </div>
      <div>
        <Aws />
      </div>

      <div>
        <Vercel />
      </div>
    </div>
  );
};

export default Icons;
