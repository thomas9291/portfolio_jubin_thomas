import React from "react";
import { AboutMeComponent } from "@/components/aboutMePageComponents/aboutMeComponent";
import PresentationText from "@/components/aboutMePageComponents/Presentation";

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
