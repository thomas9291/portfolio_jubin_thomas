import React from "react";
import { AboutMeComponent } from "@/components/aboutMeComponent";
import PresentationText from "@/components/Presentation";

const aboutMe = () => {
  return (
    <>
      <div className="containerPresentation">
        <PresentationText />
      </div>
      <div className="flex flex-col items-center">
        <AboutMeComponent />
      </div>
    </>
  );
};

export default aboutMe;
