import { Canvas } from "@react-three/fiber";
import BtnStars from "../btnStars";
import classes from "./characterConfigurator.module.css";
import { useCustomization } from "@/contexts/Customization";
import { Model } from "../charactereToCode/AdversaireCostom3";
import { useEffect } from "react";

const CharacterConfigurator = () => {
  const { animation, setAnimation } = useCustomization();
  useEffect(() => {
    if (animation) {
      console.log("State updated:", animation);
    }
  }, [animation]);

  const handleAnimationChangeHipHop = () => {
    setAnimation("hipHopDancing");
  };
  const handleAnimationChangeFight = () => {
    setAnimation("readyToFight");
  };
  const handleAnimationChangeSoulSpin = () => {
    setAnimation("SoulSpin");
  };

  return (
    <div className={classes.canvasContainer}>
      <Canvas>
        {/* <ambientLight intensity={5} /> */}
        <color attach="background" args={["#201a2d"]} />
        <Model />
      </Canvas>
      <div className={classes.btn}>
        <BtnStars title={"hip hop"} onClick={handleAnimationChangeHipHop} />
        <BtnStars title={"fight"} onClick={handleAnimationChangeFight} />
        <BtnStars title={"funk"} onClick={handleAnimationChangeSoulSpin} />

        {/* <button onClick={handleAnimationChange}>hello</button> */}
      </div>
    </div>
  );
};

export default CharacterConfigurator;
