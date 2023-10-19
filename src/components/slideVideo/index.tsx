import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import classes from "./slideVideo.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SlideVideo() {
  return (
    <div className={classes.container}>
      <div className={classes.app}>
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
          /* className="mySwiper" */
        >
          <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.img}>
              <Image
                src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                width={300}
                height={300}
                alt="image from author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.img}>
              <Image
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                width={300}
                height={300}
                alt="image from author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.img}>
              <Image
                src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                width={300}
                height={300}
                alt="image from author"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
