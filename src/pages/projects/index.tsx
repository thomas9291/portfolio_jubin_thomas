import React from "react";
import SlideVideo from "../../components/slideVideo";

export default function projects() {
  return (
    <div>
      <article className="flex flex-col justify-center items-center m-0 text-[#f5f3f1] bg-[#271b1b] ">
        <h1 className="text-xl">Some of my latest projects</h1>
      </article>
      <SlideVideo />
    </div>
  );
}
