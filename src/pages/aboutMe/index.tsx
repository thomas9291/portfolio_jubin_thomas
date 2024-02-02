import React from "react";
import { AboutMeComponent } from "@/components/aboutMePageComponents/aboutMeComponent";
import PresentationText from "@/components/aboutMePageComponents/Presentation";

const aboutMe = () => {
  return (
    <>
      <PresentationText />

      <AboutMeComponent />
    </>
  );
};

export default aboutMe;
