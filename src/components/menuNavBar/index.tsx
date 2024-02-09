import React from "react";
import classes from "./menuNavBar.module.css";
import Link from "next/link";
const MenuNavBar = () => {
  return (
    <div className={classes.menuBar}>
      <Link href="#">Creativity</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Dream</Link>
    </div>
  );
};

export default MenuNavBar;
