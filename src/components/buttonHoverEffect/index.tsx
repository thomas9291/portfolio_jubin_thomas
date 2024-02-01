import classes from "./buttonHoverEffect.module.css";
import Link from "next/link";

import React from "react";

interface Props {
  children: string;
  href: {};
}

const ButtonHoverEffect = (props: Props) => {
  return (
    <div className={classes.btnContainer}>
      <Link href={props.href}>{props.children}</Link>
    </div>
  );
};

export default ButtonHoverEffect;
