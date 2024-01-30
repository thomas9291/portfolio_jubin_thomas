import React from "react";
import classes from "./layout.module.css";

import NavBar from "@/components/navbar";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = (props: Props) => {
  return (
    <>
      <main className={classes.main}>{props.children}</main>
      <div className={classes.containerNav}>
        <NavBar />
      </div>
    </>
  );
};
export default Layout;
