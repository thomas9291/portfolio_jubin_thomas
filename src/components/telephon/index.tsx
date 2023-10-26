import React from "react";
import classes from "./telephon.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneEnd,
  PhoneMicro,
  VideoPhone,
  AudioPhone,
  ArrowUpPhone,
} from "../icons/contactSvg";

export const Telephon = () => {
  const imageStyle: any = {
    borderRadius: "50%",
    width: "auto",
    height: "auto",
  };
  return (
    <>
      <div className={classes.cadre}>
        <div className={classes.logo}>
          <Link href={"/contact"}>
            <Image
              style={imageStyle}
              src={"/images/whatsapp-perfil/whatsapp_profil.jpg"}
              width={48}
              height={48}
              alt="foto from thomas"
              priority
            />
          </Link>
          <div className={classes.header}>
            <h3>
              {" "}
              <Link href={"/contact"}>Thomas</Link>
            </h3>
            <p className={classes.calling}>Calling...</p>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.phoneEnd}>
            <PhoneEnd />
          </div>
          <div className={classes.phoneMicro}>
            <PhoneMicro />
          </div>
          <div className={classes.videoPhone}>
            <VideoPhone />
          </div>
          <div className={classes.audioPhone}>
            <AudioPhone />
          </div>
          <div className={classes.ArrowUpPhone}>
            <ArrowUpPhone />
          </div>
        </div>
      </div>
    </>
  );
};
