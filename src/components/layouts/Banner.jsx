import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <Link to={"/products_inside"}>
          <div className="bg-[url('/src/assets/banner.png')] py-[250px] bg-no-repeat bg-cover bg-center"></div>
        </Link>
        <Link to={"/products_inside"}>
          <div className="bg-[url('/src/assets/banner.png')]  py-[250px] bg-no-repeat bg-cover bg-center"></div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
