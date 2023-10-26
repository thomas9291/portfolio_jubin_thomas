import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projectArray } from "../../../lib/projectArray";
import { ProjectCart } from "@/components/ProjectCart";
import { ErrorComponent } from "@/components/errorComponent";
import { Project } from "../../../project.model";

import {
  Aws,
  Bootstrap,
  Css3,
  ExpressJs,
  Github,
  Html5,
  Mongodb,
  Nextjs,
  ReactSvg,
  Tailwind,
  Typescript,
  VisualStudio,
  Vercel,
  VanillaJs,
} from "../../components/icons/svgItems/SvgItems";

const ProjectDetail = () => {
  const [isArray, setIsArray] = useState(false);
  const [isProjectArray, setIsProjectArray] = useState([] as any);
  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    setIsProjectArray(projectArray as Project[]);
    setIsArray(true);
  }, []);

  const projectObj = isProjectArray.find(
    (obj: Project) => obj.projectId === projectId
  );

  function getIcons() {
    let arr: React.JSX.Element[] = [];
    if (projectObj?.programs.includes("javascript")) {
      arr.push(<VanillaJs />);
    }
    if (projectObj?.programs.includes("css")) {
      arr.push(<Css3 />);
    }
    if (projectObj?.programs.includes("html")) {
      arr.push(<Html5 />);
    }
    if (projectObj?.programs.includes("bootstrap")) {
      arr.push(<Bootstrap />);
    }
    if (projectObj?.programs.includes("mongodb")) {
      arr.push(<Mongodb />);
    }
    if (projectObj?.programs.includes("nextjs")) {
      arr.push(<Nextjs />);
    }
    if (projectObj?.programs.includes("reactjs")) {
      arr.push(<ReactSvg />);
    }
    if (projectObj?.programs.includes("visualStudio")) {
      arr.push(<VisualStudio />);
    }
    if (projectObj?.programs.includes("github")) {
      arr.push(<Github />);
    }
    if (projectObj?.programs.includes("vercel")) {
      arr.push(<Vercel />);
    }
    if (projectObj?.programs.includes("aws")) {
      arr.push(<Aws />);
    }
    if (projectObj?.programs.includes("expressjs")) {
      arr.push(<ExpressJs />);
    }
    if (projectObj?.programs.includes("tailwind")) {
      arr.push(<Tailwind />);
    }
    if (projectObj?.programs.includes("typescript")) {
      arr.push(<Typescript />);
    }
    return arr;
  }
  const iconsArray = getIcons();

  if (!isArray || !iconsArray || !projectObj) {
    return <ErrorComponent />;
  }
  return (
    <div>
      <ProjectCart
        title={projectObj?.title}
        date={projectObj?.date}
        description={projectObj?.description}
        programs={iconsArray.map((element, index) => (
          <ul key={index}>
            <li>{element}</li>
          </ul>
        ))}
        videoURL={projectObj?.videoURL}
        linkURL={projectObj?.linkURL}
        codeURL={projectObj?.codeURL}
      />
    </div>
  );
};

export default ProjectDetail;
