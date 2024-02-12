import React from "react";
import classes from "./skillsCard.module.css";

interface Props {
  title: string;
  children: React.JSX.Element[] | React.JSX.Element;
}

const SkillsCard = (props: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.iconContainer}>{props.children}</div>
    </div>
  );
};

export default SkillsCard;
