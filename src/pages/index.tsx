import PresentationText from "@/components/Presentation";
import Computer from "@/components/cumputer/Computer";
import Icons from "@/components/icons";
import Link from "next/link";

export default function homePage() {
  return (
    <>
      <div className="iconContainer">
        <Icons />
      </div>
      <PresentationText />

      <div className="flex flex-row justify-center bg-[url('/images/matrix/matrix.avif')] ">
        <Link href={"/projects"}>
          {" "}
          <Computer />
        </Link>
      </div>
    </>
  );
}
//bg-neutral-800
