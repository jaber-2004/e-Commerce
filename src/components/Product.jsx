import React from "react";
import Badge from "./Badge";
import Images from "./Images";
import Flex from "./Flex";
import Heading from "./Heading";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({ productImg, badgeText, productTitle, productPrice }) => {
  return (
    <div className="relative group">
      <Images srcImg={productImg} className={"w-full"} />
      {/* <Badge badgeText={badgeText} className={`absolute top-3 left-3`} /> */}
      <div className="bg-[#FFF] w-full bottom-[43px] left-0 p-4 absolute opacity-0 group-hover:opacity-100 duration-500">
        <Flex className={"justify-end"}>
          <Link className="flex items-center gap-x-3">
            <Heading
              className={
                "text-[#767676] text-base font-dmSans hover:text-primary hover:font-bold duration-300 "
              }
              text={"Add to Wish List"}
              as={"h4"}
            />
            <FaHeart />
          </Link>
        </Flex>
        <Flex className={"justify-end"}>
          <Link className="flex items-center gap-x-3">
            <Heading
              className={
                "text-[#767676] text-base font-dmSans hover:text-primary hover:font-bold duration-300"
              }
              text={"Compare"}
              as={"h4"}
            />
            <LuRefreshCcw />
          </Link>
        </Flex>
        <Flex className={"justify-end"}>
          <Link className="flex items-center gap-x-3">
            <Heading
              className={
                "text-[#767676] text-base font-dmSans hover:text-primary hover:font-bold duration-300"
              }
              text={"Add to Cart"}
              as={"h4"}
            />
            <FaCartShopping />
          </Link>
        </Flex>
      </div>
      <Flex className={"justify-between mt-3"}>
        <Heading
          className={"text-primary text-[20px] font-medium font-dmSans"}
          text={productTitle}
          as={"h4"}
        />
        <Heading
          className={"text-[#767676] text-base font-dmSans"}
          text={productPrice}
          as={"h4"}
        />
      </Flex>
    </div>
  );
};

export default Product;
