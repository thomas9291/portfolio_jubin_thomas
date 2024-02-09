import React from "react";
import classes from "./headphone.module.css";
import Image from "next/image";

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
        <a href="#" className={classes.buy}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default HeadphoneCard;
