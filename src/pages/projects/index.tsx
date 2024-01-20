import React from "react";
import SlideVideo from "../../components/slideVideo";

export default function projects() {
  return (
    <>
      <article className="flex flex-col justify-center items-center m-0 text-[#f5f3f1] bg-[#271b1b] ">
        <h1 className="text-xl text-[#72e846]">Some of my latest projects</h1>
      </article>
      <div>
        <SlideVideo />
      </div>
    </>
  );
}
