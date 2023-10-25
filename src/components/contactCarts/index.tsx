import React from "react";
import classes from "./contactCarts.module.css";
import { Whatsapp, Gmail, LinkedIn, CallEnter } from "../icons/contactSvg";
import { Github } from "../icons/svgItems/SvgItems";
import Link from "next/link";

export const ContactCarts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Whatsapp</h1>
        <div className="m-1">
          <Whatsapp />
        </div>
        <h2 className="m-1">Thomas Jubin</h2>
        <p className="m-1">+49 172 8005738</p>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Email</h1>
        <div className="m-1">
          <Gmail />
        </div>
        <h2 className="m-2">thomas.jubin92@gmail.com</h2>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Github</h1>
        <div className="m-1">
          <Github />
        </div>
        <Link
          href={"https://github.com/thomas9291"}
          target="_blank"
          className="m-1"
        >
          https://github.com/thomas9291
        </Link>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>LinkedIn</h1>
        <div>
          <LinkedIn />
        </div>
        <Link
          href={"https://www.linkedin.com/in/thomas-jubin-70a238274/"}
          className="m-1"
          target="_blank"
        >
          https://www.linkedin.com/in/thomas-jubin-70a238274
        </Link>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Phone</h1>
        <div>
          <CallEnter />
        </div>
        <h2 className="m-1">Thomas Jubin</h2>
        <p className="m-1">+49 172 8005738</p>
      </div>
    </div>
  );
};
