import PresentationText from "@/components/Presentation";
import Computer from "@/components/cumputer/Computer";
import Icons from "@/components/icons";
import Link from "next/link";
import { Telephon } from "@/components/telephon";

export default function homePage() {
  return (
    <>
      <div className="iconContainer">
        <Icons />
      </div>
      <PresentationText />

      <div className="matrix">
        <div>
          <Link href={"/projects"}>
            <Computer />
          </Link>
        </div>
        <div>
          <Link href={"/contact"}>
            <Telephon />
          </Link>
        </div>
      </div>
    </>
  );
}
//bg-neutral-800
