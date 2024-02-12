import React from "react";
import classes from "./headphone.module.css";
import Image from "next/image";
import Link from "next/link";

const HeadphoneCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imgBx}>
        <Image
          src="/images/shoes/headphone1.png"
          width={220}
          height={220}
          alt="headphone"
        />
      </div>
      <div className={classes.contentBx}>
        <h3>Wireless Headphones</h3>
        <h2 className={classes.price}>
          $40.<small>99</small>
        </h2>
        <Link href="/contact" className={classes.buy}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default HeadphoneCard;
