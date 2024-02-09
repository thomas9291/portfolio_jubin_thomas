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
        <div>
          <Whatsapp />
        </div>
        <h4>Thomas Jubin</h4>
        <p>+49 172 8005738</p>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Email</h1>
        <div>
          <Gmail />
        </div>
        <Link href={"mailto:thomas.jubin92@gmail.com"}>
          thomas.jubin92@gmail.com
        </Link>
      </div>
      <div className={classes.carts}>
        <h1 className={classes.headers}>Github</h1>
        <div>
          <Github />
        </div>
        <Link href={"https://github.com/thomas9291"} target="_blank">
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
        <h4>Thomas Jubin</h4>
        <p>+49 172 8005738</p>
      </div>
    </div>
  );
};
