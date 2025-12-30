import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";
import bestsallerOne from "/src/assets/bestsallerOne.png";
import bestsallerTwo from "/src/assets/bestsallerTwo.png";
import bestsallerThree from "/src/assets/bestsallerThree.png";
import bestsallerFour from "/src/assets/bestsallerFour.png";
import Badge from "../Badge";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Ourbestsallers = () => {
  let [alldata, setalldata] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setalldata(data.data.products);
    }
    alldatas();
  });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
  };
  return (
    <div className="py-16">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"Our Bestsellers"}
          as={"h3"}
        />
        <Slider {...settings} className="mt-5">
            {alldata.map((item) => (
          <div className="w-1/4 px-2.5">
              <Product
                badgeText={"New"}
                productImg={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
              />
            {/* <Badge className={"absolute top-3 left-3"} badgeText={"New"} /> */}
          </div>
            ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Ourbestsallers;
