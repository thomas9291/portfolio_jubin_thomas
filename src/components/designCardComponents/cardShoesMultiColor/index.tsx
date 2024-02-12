import React from "react";
import classes from "./cardShoesMultiColor.module.css";
import Image from "next/image";
import Link from "next/link";

const CardShoeMultiColor = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.img}
          src={"/images/shoes/shoes-multi-color.png"}
          width={220}
          height={220}
          alt="yellow nike"
        />
      </div>
      <h2>rainbow </h2>
      <div className={classes.contentBox}>
        <div className={classes.size}>
          <h3>size:</h3>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
        </div>
        <div className={classes.color}>
          <h3>color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link href={"/contact"} className={classes.btn}>
          buy now
        </Link>
      </div>
    </div>
  );
};

export default CardShoeMultiColor;
