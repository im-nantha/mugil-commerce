import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../assets/images/banners/banner-1.jpg";
import banner2 from "../assets/images/banners/banner-2.jpg";
import banner3 from "../assets/images/banners/banner-3.jpg";
import banner4 from "../assets/images/banners/banner-4.jpg";

function Carousel() {
  return (
    <section className="mugil_banner">
      <div className="mugil_banner__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          <SwiperSlide>
            <img src={banner3} alt="Slide 1" />
            <Link to="/" className="mugil-banner-button">
              Know more
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="Slide 2" />
            <Link to="/" className="mugil-banner-button">
              Know more
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner1} alt="Slide 3" />
            <Link to="/" className="mugil-banner-button">
              Know more
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="Slide 4" />
            <Link to="/" className="mugil-banner-button">
              Know more
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
