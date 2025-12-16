import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import productOne from "/src/assets/productOne.png";
import productTwo from "/src/assets/productTwo.png";
import productThree from "/src/assets/productThree.png";
import productFour from "/src/assets/productFour.png";
import Badge from "../Badge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";



const Newarrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="pb-9">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"New Arrivals"}
          as={"h3"}
        />
        <div className="-mx-2.5">
          <Slider {...settings}>
            <div className="w-1/4 relative px-2.5">
              <Product
                productImg={productOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$40.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>
            <div className="w-1/4 relative px-2.5">
              <Product
                productImg={productTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
              {/* <Badge className={"absolute top-3 left-3"} badgeText={"New"} /> */}
            </div>
            <div className="w-1/4 relative px-2.5">
              <Product
                productImg={productThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$48.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>
            <div className="w-1/4 relative px-2.5">
              <Product
                productImg={productFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$55.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>
            <div className="w-1/4 relative px-2.5">
              <Product
                productImg={productFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$55.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Newarrivals;
