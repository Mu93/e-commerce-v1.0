// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Images from "../../assets/Images";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const SwiperSlides = [
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_1,
    tag: "Warehouse",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_2,
    tag: "Accessories",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_3,
    tag: "Automotive Parts",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_4,
    tag: "Books",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_5,
    tag: "Baby Care",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_6,
    tag: "Office Products",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_7,
    tag: "Video Games",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_8,
    tag: "Games",
  },
  {
    id: Math.round(Math.random() * 1000),
    src: Images.cat_9,
    tag: "Toys & Games",
  },
];

function CategoriesSlider() {
  const [slides, setSlides] = useState(2);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    switch (true) {
      case width < 576:
        setSlides(2);
        // console.log("Extra small screen (xs)");
        // Handle extra small screen styles or behavior
        break;
      case width >= 576 && width < 768:
        setSlides(2);
        // console.log("Small screen (sm)");
        // Handle small screen styles or behavior
        break;
      case width >= 768 && width < 992:
        setSlides(3);
        // console.log("Medium screen (md)");
        // Handle medium screen styles or behavior
        break;
      case width >= 992 && width < 1200:
        setSlides(4);
        // console.log("Large screen (lg)");
        // Handle large screen styles or behavior
        break;
      case width >= 1200:
        setSlides(6);
        // console.log("Extra large screen (xl)");
        // Handle extra large screen styles or behavior
        break;
      default:
        console.log("Unknown screen size");
      // Handle cases where the screen size doesn't fit any of the specified ranges
    }
  }, [width]);

  return (
    <section className="container mx-auto p-2 z-20 ">
      <h1 className="font-bold text-4xl mb-5">Shop Categories</h1>

      <div className="grid items-center">
        <Swiper
          slidesPerView={slides}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-10"
        >
          {SwiperSlides.map((slide) => (
            <SwiperSlide className="row-span-2" key={slide.id}>
              <div>
                <img
                  src={slide.src}
                  className="object-cover"
                  style={{ height: "12rem" }}
                />
                <p>{slide.tag}</p> <br />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CategoriesSlider;
