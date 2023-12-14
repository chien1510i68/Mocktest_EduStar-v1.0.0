// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";

// const SlidesToShow = ({ slides }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//   };
//   return (
//     <Slider {...settings} className="custom-slider">
//       {slides.map((slide, index) => (
//         <div key={index} className="my-5 h-[400px] px-2 rounded-xl shadow-lg">
//           <div class="grid grid-rows-2 grid-flow-col my-10 max-w-[1200]">
//             <div class="row-span-2">
//               {/* <img
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-24"
//               /> */}
//             </div>
//             <div class="col-span-3">
//               {/* <h3 className="font-bold">{slide.name}</h3> */}
//             </div>
//             <div class="row-span-1 col-span-3">
//               <Rate disabled defaultValue={5} />
//               {/* <h3 className="text-lg font-bold my-3">{slide.caption}</h3> */}
//             </div>
//           </div>
//           <h3>{slide.content}</h3>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default SlidesToShow;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function Celebrates({ slides }) {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="my-5 h-[400px] mx-2 px-5 rounded-xl shadow-lg border"
              >
                <div class="grid grid-rows-2 grid-flow-col my-10 max-w-[1200]">
                  <div class="row-span-2">
                    <img
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      className="w-24"
                    />
                  </div>
                  <div class="col-span-3">
                    <h3 className="font-bold">{item.name}</h3>
                  </div>
                  <div class="row-span-1 col-span-3">
                    <Rate disabled defaultValue={5} />
                    {/* <h3 className="text-lg font-bold my-3">{slide.caption}</h3> */}
                  </div>
                </div>
                <h3>{item.content}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
