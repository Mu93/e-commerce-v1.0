import { useRef, useState } from "react";
import Images from "../../assets/Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SwiperSlides = [
  {
    id: 1,
    src: Images.hero_1,
  },
  {
    id: 2,
    src: Images.hero_2,
  },
];
function HeroSlider() {
  return (
    <section className="grid grid-cols-12 gap-0 mb-10 p-2 md:p-0 mt-[4.1rem] z-20 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-span-12 md:col-span-9 w-full h-full "
      >
        {SwiperSlides.map((slide) => (
          <SwiperSlide className="row-span-2" key={slide.id}>
            <img src={slide.src} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="col-span-12 md:col-span-3 grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-0 mt-5 md:mt-0">
        <img
          src={Images.hero_3}
          alt="hero_1"
          className="object-cover h-full col-span-2"
        />
        <img
          src={Images.hero_4}
          alt="hero_2"
          className="object-cover h-full col-span-2"
        />
      </div>
    </section>
  );
}

export default HeroSlider;
