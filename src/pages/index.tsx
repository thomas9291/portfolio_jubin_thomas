import PresentationText from "@/components/Presentation";
import Computer from "@/components/cumputer/Computer";
import Icons from "@/components/icons";
import { Telephon } from "@/components/telephon";

export default function homePage() {
  return (
    <div className="homePageContainer">
      <div className="iconContainer">
        <Icons />
      </div>

      <div className="containerPresentation">
        <PresentationText />
      </div>

      <div className="skills">
        <div className="round round1">
          <div className="round part1">
            <div className="round part2">html</div>
          </div>
        </div>
        <div className="round round2">
          <div className="round part3">
            <div className="round part4">css</div>
          </div>
        </div>
        <div className="round round3">
          <div className="round part5">
            <div className="round part6">javascript</div>
          </div>
        </div>
        <div className="round round4">
          <div className="round part7">
            <div className="round part8">react</div>
          </div>
        </div>
        <div className="round round5">
          <div className="round part9">
            <div className="round part10">node</div>
          </div>
        </div>
      </div>

      <div className="matrix">
        <div>
          <h5 className="home-header">Projects</h5>
          <Computer />
        </div>

        <div>
          <h5 className="home-header">Contact</h5>
          <Telephon />
        </div>
      </div>
    </div>
  );
}
