import React from "react";
import classes from "./skills.module.css";
import Link from "next/link";
import SkillsCard from "../componentsHomePage/skillsCard";
import {
  Html5,
  Css3,
  VanillaJs,
  ReactSvg,
  Bootstrap,
  Typescript,
  Tailwind,
  Nextjs,
  Github,
  ExpressJs,
  Aws,
  Vercel,
  Mongodb,
  Blender,
  VisualStudio,
} from "../icons/svgItems/SvgItems";
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
      <div className={`${classes.skillsContainer} `}>
        <SkillsCard title={"html"}>
          <Html5 />
        </SkillsCard>
        <SkillsCard title={"css"}>
          <Css3 />
        </SkillsCard>
        <SkillsCard title={"javascript"}>
          <VanillaJs />
        </SkillsCard>
        <SkillsCard title={"react"}>
          <ReactSvg />
        </SkillsCard>
        <SkillsCard title={"blender"}>
          <Blender />
        </SkillsCard>
        <SkillsCard title={"typescript"}>
          <Typescript />
        </SkillsCard>
        <SkillsCard title={"tailwind"}>
          <Tailwind />
        </SkillsCard>
        <SkillsCard title={"bootstrap"}>
          <Bootstrap />
        </SkillsCard>
      </div>
      <div className={`${classes.skillsContainer} `}>
        <SkillsCard title={"nextjs"}>
          <Nextjs />
        </SkillsCard>
        <SkillsCard title={"expressjs"}>
          <ExpressJs />
        </SkillsCard>
        <SkillsCard title={"mongodb"}>
          <Mongodb />
        </SkillsCard>
        <SkillsCard title={"github"}>
          <Github />
        </SkillsCard>
        <SkillsCard title={"aws"}>
          <Aws />
        </SkillsCard>
        <SkillsCard title={"vercel"}>
          <Vercel />
        </SkillsCard>
        <SkillsCard title={"v. s"}>
          <VisualStudio />
        </SkillsCard>
      </div>
    </>
  );
};

export default Skills;
