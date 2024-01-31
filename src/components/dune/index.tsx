import React from "react";
import Image from "next/image";
import classes from "./dune.module.css";

const Dune = () => {
  return (
    <div className={classes.duneContainer}>
      <Image src="/images/dune/dune.png" alt="image" width={500} height={500} />
    </div>
  );
};

export default Dune;
