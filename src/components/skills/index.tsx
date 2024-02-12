import React from "react";
import classes from "./skills.module.css";
import Link from "next/link";
import SkillsCard from "../componentsHomePage/skillsCard";
import { Html5 } from "../icons/svgItems/SvgItems";
const Skills = () => {
  return (
    <>
      <div className={classes.containerHeader}>
        <Link href={"/projects"}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Skills
        </Link>
      </div>
      <div className={classes.skillsContainer}>
        <SkillsCard title={"html"}>
          <Html5 />
        </SkillsCard>
      </div>
    </>
  );
};

export default Skills;
