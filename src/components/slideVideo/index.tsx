import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CartVideo from "../cartVideo/index";
import Link from "next/link";
import { projectArray } from "../../../lib/projectArray";
import { ErrorComponent } from "../errorComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import classes from "./slideVideo.module.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Github } from "../icons/svgItems/SvgItems";
import { Project } from "../../../project.model";

export default function SlideVideo() {
  const [projects, setProject] = useState([] as any);
  const [isArray, setIsArray] = useState(false);
  useEffect(() => {
    setProject(projectArray);
    setIsArray(true);
  }, []);

  if (isArray) {
    return (
      <div className={classes.container}>
        <div className={classes.app}>
          <div>
            <Swiper
              className={classes.swiper}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
            >
              {projects.map((element: Project) => {
                return (
                  <SwiperSlide
                    key={element.projectId}
                    className={classes.swiperSlide}
                  >
                    <div className={classes.img}>
                      <CartVideo
                        title={element.title}
                        videoURL={element.videoURL}
                        projectId={element.projectId}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={classes.info}>
            <p>To see more projects, I invite you to visit my github:</p>
            <p className={classes.link}>
              <Link href={"https://github.com/thomas9291"} target="_blank">
                <Github />
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <ErrorComponent />
    </>
  );
}
