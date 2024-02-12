import React from "react";
import classes from "./menuNavBar.module.css";
import Link from "next/link";
const MenuNavBar = () => {
  return (
    <div className={classes.menuBar}>
      <Link href="#creativity">Creativity</Link>
      <Link href="#blog">Blog</Link>
      <Link href="#dream">Dream</Link>
    </div>
  );
};

export default MenuNavBar;
