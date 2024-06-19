import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper-careers.css";
import "../../styles/swiper-article-page.css";

const careers = [
  { id: 1, url: "/decoration/life-at-cc (1).jpg" },
  { id: 2, url: "/decoration/life-at-cc (2).jpg" },
  { id: 3, url: "/decoration/life-at-cc (3).jpg" },
  { id: 4, url: "/decoration/life-at-cc (4).jpg" },
  { id: 5, url: "/decoration/life-at-cc (5).jpg" },
  { id: 6, url: "/decoration/life-at-cc (6).jpg" },
  { id: 7, url: "/decoration/life-at-cc (7).jpg" },
];

const SliderLifeAtCC = () => {
  return (
    <section className="w-full h-full bg-white md:px-[70px] px-5 py-[70px] relative bottom-[80px]">
      <h2 className="text-primary xl:text-[36px] font-bold text-[28px] text-center pt-[10px] mb-6">
        Life at CC
      </h2>
      <div className="mt-[55px] mx-auto mb-0 rounded-[25px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 10,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="swiper_container"
        >
          {careers.map((careers, index) => (
            <SwiperSlide
              key={index}
              className="!w-[183px] !h-[130px] lg:!w-[522px] lg:!h-[371px] relative"
            >
              <Image
                height={100}
                width={100}
                src={careers.url}
                key={index}
                alt="slide_image"
                className="w-[183px] h-[130px] lg:!w-[522px] lg:!h-[371px] object-cover shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)] rounded-[16px]"
              />
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[0%] lg:!left-[5%] !translate-x-[40%]">
              <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
            </div>
            <div className="swiper-button-next slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[95%] lg:!left-[92%] !translate-x-[-55%]">
              <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderLifeAtCC;
