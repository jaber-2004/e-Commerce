import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <Link>
          <div className="bg-[url('/src/assets/banner.png')] py-[100px] md:py-[140px] lg:py-[220px] bg-cover bg-no-repeat bg-center"></div>
        </Link>
        <Link>
          <div className="bg-[url('/src/assets/banner.png')] py-[100px] md:py-[140px] lg:py-[220px] bg-cover bg-no-repeat bg-center"></div>
        </Link>
        <Link>
          <div className="bg-[url('/src/assets/banner.png')] py-[100px] md:py-[140px] lg:py-[220px] bg-cover bg-no-repeat bg-center"></div>
        </Link>
      </Slider>
    </>
  );
};

export default Banner;
