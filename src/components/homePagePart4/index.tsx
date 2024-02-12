import React, { useEffect, useRef, useState } from "react";
import classes from "./homePagePart4.module.css";
import Moon from "../componentsHomePage/moon";
import Stars from "../componentsHomePage/starsHomePage";
const HomePagePart4 = () => {
  return (
    <div className={classes.container}>
      <h1>Dream</h1>
      <section className={classes.section}>
        <div className={classes.spaceContainer}>
          <div className={classes.moonContainer}>
            <Moon />
          </div>
          <div className={classes.stars}>
            <Stars />
          </div>
        </div>
        <div className={classes.content}>
          <h4>Dreaming of Change and Sacrificing to Achieve It</h4>
          <p>
            In the pursuit of achieving my dreams, the journey often involves
            significant sacrifices. It&apos;s a story of ambition, perseverance
            and the desire to change to transform your life. I have a deep
            desire for change. Dissatisfied with the status quo, I aspire to a
            more fulfilling and meaningful life. I envision a future very
            different from my current situation, filled with opportunities for
            growth and self-realization. However, achieving these dreams
            requires more than just wishful thinking. It requires sacrifice – a
            willingness to give up comfort and familiarity in exchange for the
            promise of something greater. I understand this truth and am willing
            to make the sacrifices necessary to turn his dreams into reality. As
            I embark on this journey of transformation, I encounter many
            challenges and obstacles along the way. There are moments of doubt
            and uncertainty, where the enormity of the goal seems almost
            insurmountable. Yet, thanks to my determination and resilience, I
            persevere. With each sacrifice made, I become stronger and more
            determined than ever to achieve my dreams. I learn valuable lessons
            about perseverance, resilience and the true meaning of sacrifice.
            And in the end, I am waiting for the opportunity to live from this
            dream. Achieving our dreams often requires sacrifice. Yet for those
            willing to make the necessary sacrifices, the rewards are limitless.
            It is a testament to the power of ambition, perseverance and
            unwavering belief in the possibility of change.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePagePart4;
