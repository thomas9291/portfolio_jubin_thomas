import React, { useRef, useEffect, useState } from "react";
import classes from "./homePagePart2.module.css";
import CardShoeNikeYellow from "../designCardComponents/cardShoeNikeYellow";
import CardShoeMultiColor from "../designCardComponents/cardShoesMultiColor";
import HeadphoneCard from "../designCardComponents/headphone";
import { log } from "console";

const HomePagePart2 = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    if (!cardContainer) {
      return;
    }
    const createScrollEffect = () => {
      window.onscroll = () => {
        let scrollDistance = window.scrollY;
        let secDistance = cardContainer.offsetTop;
        if (scrollDistance >= secDistance - 360) {
          setIsAnimate(true);
        } else {
          setIsAnimate(false);
        }
      };
    };
    createScrollEffect();
  }, [cardContainerRef]);

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.lightBar}></div>
        <div className={classes.topLayer}></div>
        <h1>Creativity</h1>
      </div>
      <div
        ref={cardContainerRef}
        className={
          isAnimate ? `${classes.showAnimate}` : `${classes.shoesCardContainer}`
        }
      >
        <div className={classes.cards}>
          <CardShoeNikeYellow />
        </div>
        <div className={classes.cards}>
          <HeadphoneCard />
        </div>
        <div className={classes.cards}>
          <CardShoeMultiColor />
        </div>
      </div>
    </div>
  );
};

export default HomePagePart2;
