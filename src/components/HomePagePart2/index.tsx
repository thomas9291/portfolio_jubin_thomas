import React from "react";
import classes from "./homePagePart2.module.css";
import CardShoeNikeYellow from "../designCardComponents/cardShoeNikeYellow";
import CardShoeMultiColor from "../designCardComponents/cardShoesMultiColor";
import HeadphoneCard from "../designCardComponents/headphone";

const HomePagePart2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.lightBar}></div>
        <div className={classes.topLayer}></div>
        <h1>Creativity</h1>
      </div>
      <div className={classes.shoesCardContainer}>
        <CardShoeNikeYellow />
        <HeadphoneCard />
        <CardShoeMultiColor />
      </div>
    </div>
  );
};

export default HomePagePart2;
