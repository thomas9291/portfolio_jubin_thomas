import PresentationText from "@/components/Presentation";
import Computer from "@/components/cumputer/Computer";
import Icons from "@/components/icons";
import { Telephon } from "@/components/telephon";

export default function homePage() {
  return (
    <>
      <div className="iconContainer">
        <Icons />
      </div>
      <div>
        <PresentationText />
      </div>

      <div className="matrix">
        <div>
          <Computer />
        </div>
        <div>
          <Telephon />
        </div>
      </div>
    </>
  );
}
