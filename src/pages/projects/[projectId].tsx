import React from "react";
import { useRouter } from "next/router";
import { projectArray } from "../../../lib/projectArray";
import { ProjectCart } from "@/components/ProjectCart";

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const projectObj = projectArray.find((obj) => obj.projectId === projectId);
  console.log(projectObj);

  return (
    <div>
      <ProjectCart
        title={projectObj?.title}
        date={projectObj?.date}
        description={projectObj?.description}
        videoURL={projectObj?.videoURL}
        linkURL={projectObj?.linkURL}
        codeURL={projectObj?.codeURL}
      />
    </div>
  );
};

export default ProjectDetail;
