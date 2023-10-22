import React from "react";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId, title } = router.query;
  return (
    <div>
      <p>{projectId}</p>
    </div>
  );
};

export default ProjectDetail;
