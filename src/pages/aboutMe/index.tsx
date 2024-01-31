import React from "react";
import { AboutMeComponent } from "@/components/aboutMeComponent";
import PresentationText from "@/components/Presentation";

const aboutMe = () => {
  return (
    <>
      <div className="containerPresentation">
        <PresentationText />
      </div>
      <div>
        <AboutMeComponent />
      </div>
    </>
  );
};

export default aboutMe;
