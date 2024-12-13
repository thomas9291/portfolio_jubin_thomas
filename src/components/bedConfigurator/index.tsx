import React, { useEffect } from "react";
import { Bed } from "../bedToCode/Bed";
import { Canvas } from "@react-three/fiber";
import classes from "./bedConfigurator.module.css";
import { Environment, PresentationControls } from "@react-three/drei";
import { useCustomization } from "../../contexts/Customization";

const BedConfigurator = () => {
  const { setBedValue, setSheetValue, setSheetFoldValue, setPillowValue } =
    useCustomization();

  const handelGreyValue = () => {
    setBedValue("#808080");
  };
  const handelBlueValue = () => {
    setBedValue("#22177A");
  };
  const handelYellowValue = () => {
    setBedValue("#d8d88a");
  };
  const handelBlackValue = () => {
    setBedValue("#000000");
  };

  const handelSheetGreyValue = () => {
    setSheetValue("#808080");
  };
  const handelSheetBlueValue = () => {
    setSheetValue("#263968");
  };
  const handelSheetPinkValue = () => {
    setSheetValue("#f593ea");
  };
  const handelSheetBlackValue = () => {
    setSheetValue("#000000");
  };
  const handelSheetFloldGreyValue = () => {
    setSheetFoldValue("#808080");
  };
  const handelSheetFloldBlueValue = () => {
    setSheetFoldValue("#263968");
  };
  const handelSheetFloldPinkValue = () => {
    setSheetFoldValue("#f593ea");
  };
  const handelSheetFloldBlackValue = () => {
    setSheetFoldValue("#000000");
  };
  const handelPillowGreyValue = () => {
    setPillowValue("#808080");
  };
  const handelPillowBlueValue = () => {
    setPillowValue("#263968");
  };
  const handelPillowPinkValue = () => {
    setPillowValue("#f593ea");
  };
  const handelPillowBlackValue = () => {
    setPillowValue("#000000");
  };
  return (
    <div className={classes.container}>
      <Canvas>
        <color attach="background" args={["#201a2d"]} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Bed />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[50, 50]} />
          </mesh>
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
      <div className={classes.mainContainer}>
        <h2>bed</h2>
        <div className={classes.btnContainer}>
          <p>Pick a color:</p>
          <span onClick={handelGreyValue}></span>
          <span onClick={handelBlueValue}></span>
          <span onClick={handelYellowValue}></span>
          <span onClick={handelBlackValue}></span>
        </div>
        <h2>sheet</h2>
        <div className={classes.btnSheetContainer}>
          <p>Pick a color:</p>
          <span onClick={handelSheetBlackValue}></span>
          <span onClick={handelSheetBlueValue}></span>
          <span onClick={handelSheetPinkValue}></span>
          <span onClick={handelSheetGreyValue}></span>
        </div>
        <h2>sheet fold</h2>
        <div className={classes.btnSheetContainer}>
          <p>Pick a color:</p>
          <span onClick={handelSheetFloldBlackValue}></span>
          <span onClick={handelSheetFloldBlueValue}></span>
          <span onClick={handelSheetFloldPinkValue}></span>
          <span onClick={handelSheetFloldGreyValue}></span>
        </div>
        <h2>pillow</h2>
        <div className={classes.btnSheetContainer}>
          <p>Pick a color:</p>
          <span onClick={handelPillowBlackValue}></span>
          <span onClick={handelPillowBlueValue}></span>
          <span onClick={handelPillowPinkValue}></span>
          <span onClick={handelPillowGreyValue}></span>
        </div>
      </div>
    </div>
  );
};
export default BedConfigurator;
