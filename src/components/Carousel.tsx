import Image from "next/image";
import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

const banners = [
  { title: "Banner 01", path: "/images/banners/BANNER-01.png" },
  { title: "Banner 02", path: "/images/banners/BANNER-02.png" },
  { title: "Banner 03", path: "/images/banners/BANNER-03.png" },
];

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
    <div className="mx-auto max-w-screen-2xl overflow-hidden">
      <div className="swiper-container relative w-full">
        <div className="swiper-wrapper">
          {banners.map((banner) => (
            <div className="swiper-slide max-w-full">
              <div key={banner.path} className="swiper-slide max-w-full">
                <Image
                  src={banner.path}
                  alt={banner.title}
                  className="w-full"
                  width={2500}
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next !text-white"></div>
        <div className="swiper-button-prev !text-white"></div>
      </div>
    </div>
  );
};

export default Carousel;
