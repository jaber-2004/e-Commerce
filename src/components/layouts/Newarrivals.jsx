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

const Newarrivals = () => {
  return (
    <div className="pb-9">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"New Arrivals"}
          as={"h3"}
        />
        <Flex className={"gap-x-5 mt-5"}>
          <div className="w-1/4 relative">
            <Product
              productImg={productOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$40.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
          <div className="w-1/4 relative">
            <Product
              productImg={productTwo}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
            {/* <Badge className={"absolute top-3 left-3"} badgeText={"New"} /> */}
          </div>
          <div className="w-1/4 relative">
            <Product
              productImg={productThree}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$48.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
          <div className="w-1/4 relative">
            <Product
              productImg={productFour}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$55.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Newarrivals;
