import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import shoplogo from "/src/assets/shoplogo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Product from "../Product";
import shopOne from "/src/assets/bestsallerThree.png";
import shopTwo from "/src/assets/specialofferThree.png";
import shopThree from "/src/assets/shopcategory.png";
import Badge from "../Badge";

const Shopbycategory = () => {
  return (
    <div className="mt-24 mb-10">
      <Container>
        <Heading
          className={"text-primary text-[49px] font-bold font-dmSans"}
          text={"Products"}
          as={"h3"}
        />
        <Flex className={"gap-x-2 pl-1.5"}>
          <Heading
            className={"text-[#767676] text-xs font-dmSans"}
            text={"Home >"}
            as={"h3"}
          />
          <Heading
            className={"text-[#767676] text-xs font-dmSans"}
            text={"Products"}
            as={"h3"}
          />
        </Flex>

        <Flex className={"mt-10 justify-between"}>
          <div className="">
            <Heading
              className={"text-primary text-[20px] font-bold font-dmSans"}
              text={"Shop by Category "}
              as={"h4"}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Images srcImg={shoplogo} />
            <IoReorderThreeSharp />
          </div>
          <div className="flex gap-x-4">
            <Heading
              className={"text-[#767676] text-base font-dmSans"}
              text={"Sort by:"}
              as={"h4"}
            />
            <Heading
              className={"text-[#767676] text-base font-dmSans"}
              text={"Featured"}
              as={"h4"}
            />
          </div>
          <div className="flex items-center gap-x-7">
            <FaCaretDown />
            <Heading
              className={"text-[#767676] text-base font-dmSans"}
              text={"Show"}
              as={"h3"}
            />
            <Heading
              className={"text-[#767676] text-base font-dmSans"}
              text={"36"}
              as={"h3"}
            />

            <FaCaretDown />
          </div>
        </Flex>
        <Flex className={"items-start mt-8"}>
          <div className="w-[20%]">
            <ul className=" text-[#767676] text-base font-dmSans">
              <li className="pb-3.5 flex justify-between items-center">
                Category 1 <FaPlus />
              </li>
              <li className="pb-3.5">Category 2</li>
              <li className="pb-3.5 flex justify-between  items-center">
                Category 3 <FaPlus />
              </li>
              <li className="pb-3.5">Category 4</li>
              <li className="pb-3.5">Category 5</li>
            </ul>
          </div>
          <div className="flex ml-4 mt-5 gap-x-5 w-[80%]">
            <div className="w-1/3 relative">
              <Product
                badgeText={"New"}
                productImg={shopOne}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$40.00"}
              />
              <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
            </div>
            <div className="w-1/3 relative">
              <Product
                badgeText={"New"}
                productImg={shopTwo}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$40.00"}
              />
              <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
            </div>
            <div className="w-1/3">
              <Product
                badgeText={"New"}
                productImg={shopThree}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$40.00"}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shopbycategory;
