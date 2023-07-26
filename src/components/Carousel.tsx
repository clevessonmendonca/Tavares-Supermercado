import Image from "next/image";
import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination]);

const Carousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden max-w-screen-2xl mx-auto">
      <div className="swiper-container relative w-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide max-w-full">
            <Image
              src="/images/slide1.png"
              className="w-full"
              alt="Slide 1"
              width={1400}
              height={500}
            />
          </div>
          <div className="swiper-slide max-w-full">
            <Image
              src="/images/slide1.png"
              alt="Slide 2"
              className="w-full"
              width={1400}
              height={500}
            />
          </div>
          <div className="swiper-slide max-w-full">
            <Image
              src="/images/slide1.png"
              alt="Slide 2"
              className="w-full"
              width={1400}
              height={500}
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next !text-white"></div>
        <div className="swiper-button-prev !text-white"></div>
      </div>
    </div>
  );
};

export default Carousel;
