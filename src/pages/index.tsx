import PresentationText from "@/components/Presentation";
import Computer from "@/components/cumputer/Computer";
import Icons from "@/components/icons";

export default function homePage() {
  return (
    <>
      <div className="iconContainer">
        <Icons />
      </div>
      <PresentationText />
      <div className="flex flex-row justify-center bg-neutral-800 ">
        <Computer />
      </div>
    </>
  );
}
