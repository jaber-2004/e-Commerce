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
import shopcolorOne from "/src/assets/specialofferOne.png";
import shopcolorTwo from "/src/assets/shopcolortwo.png";
import shopcolorThree from "/src/assets/bestsallerFour.png";
import shopbrandOne from "/src/assets/shopbybrandOne.png";
import shopbrandTwo from "/src/assets/specialofferTwo.png";
import shopbrandThree from "/src/assets/specialofferOne.png";
import shoppriceOne from "/src/assets/shopbypriceOne.png";
import shoppriceTwo from "/src/assets/productOne.png";
import shoppriceThree from "/src/assets/specialofferFour.png";
import { GoDotFill } from "react-icons/go";

import Badge from "../Badge";

const Shop = () => {
  return (
    <>
      {/* Shop By Category Start */}
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
                  productImg={shopOne}
                  productTitle={"Household materials"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
              </div>
              <div className="w-1/3 relative">
                <Product
                  productImg={shopTwo}
                  productTitle={"Headphones"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} />
              </div>
              <div className="w-1/3">
                <Product
                  productImg={shopThree}
                  productTitle={"Tea Table"}
                  productPrice={"$40.00"}
                />
              </div>
            </div>
          </Flex>
          {/* Shop By Category end  */}
          {/* Shop By Color Start  */}
          <Flex className={"items-start mt-10"}>
            <div className="w-[20%]">
              <Heading
                className={
                  "text-primary text-[20px] font-bold font-dmSans mb-7"
                }
                text={"Shop by Color "}
                as={"h4"}
              />
              <ul className=" text-[#767676] text-base font-dmSans">
                <li className="pb-3.5 flex gap-x-1  items-center">
                  <GoDotFill className="text-2xl text-black" /> Color 1
                </li>
                <li className="pb-3.5 flex gap-x-1  items-center">
                  <GoDotFill className="text-2xl text-[#FF8686]" /> Color 2
                </li>
                <li className="pb-3.5 flex gap-x-1  items-center">
                  <GoDotFill className="text-2xl text-[#7ED321]" /> Color 3
                </li>
                <li className="pb-3.5 flex gap-x-1  items-center">
                  <GoDotFill className="text-2xl text-[#B6B6B6]" /> Color 4
                </li>
                <li className="pb-3.5 flex gap-x-1  items-center">
                  {" "}
                  <GoDotFill className="text-2xl text-[#15CBA5]" /> Color 5
                </li>
              </ul>
            </div>
            <div className="flex ml-4 mt-15 gap-x-5 w-[80%]">
              <div className="w-1/3 relative">
                <Product
                  productImg={shopcolorOne}
                  productTitle={"Cap for Boys"}
                  productPrice={"$40.00"}
                />
                {/* <Badge className={"absolute top-3 left-3"} badgeText={"New"} /> */}
              </div>
              <div className="w-1/3 relative">
                <Product
                  productImg={shopcolorTwo}
                  productTitle={"Wall Clock"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
              </div>
              <div className="w-1/3">
                <Product
                  productImg={shopcolorThree}
                  productTitle={"Travel Bag"}
                  productPrice={"$40.00"}
                />
              </div>
            </div>
          </Flex>
          {/* Shop By Color End */}
          {/* Shop By Brand Start */}
          <Flex className={"items-start mt-10"}>
            <div className="w-[20%]">
              <Heading
                className={
                  "text-primary text-[20px] font-bold font-dmSans mb-7"
                }
                text={"Shop by Brand "}
                as={"h4"}
              />
              <ul className=" text-[#767676] text-base font-dmSans">
                <li className="pb-3.5">Brand 1</li>
                <li className="pb-3.5">Brand 2</li>
                <li className="pb-3.5">Brand 3</li>
                <li className="pb-3.5">Brand 4</li>
                <li className="pb-3.5">Brand 5</li>
              </ul>
            </div>
            <div className="flex ml-4 mt-15 gap-x-5 w-[80%]">
              <div className="w-1/3 relative">
                <Product
                  productImg={shopbrandOne}
                  productTitle={"Sun glasses"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} />
              </div>
              <div className="w-1/3 relative">
                <Product
                  productImg={shopbrandTwo}
                  productTitle={"Tea Table"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} />
              </div>
              <div className="w-1/3 relative">
                <Product
                  productImg={shopbrandThree}
                  productTitle={"Cap for Boys"}
                  productPrice={"$40.00"}
                />
                <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} />
              </div>
            </div>
          </Flex>
          {/* Shop By Brand End */}
          {/* Shop By Price Start */}
          <Flex className={"items-start my-10"}>
            <div className="w-[20%]">
              <Heading
                className={
                  "text-primary text-[20px] font-bold font-dmSans mb-7"
                }
                text={"Shop by Price "}
                as={"h4"}
              />
              <ul className=" text-[#767676] text-base font-dmSans">
                <li className="pb-3.5">$$0.00 - $9.99</li>
                <li className="pb-3.5">$10.00 - $19.99</li>
                <li className="pb-3.5">$20.00 - $29.99 </li>
                <li className="pb-3.5">$30.00 - $39.99 </li>
                <li className="pb-3.5">$40.00 - $69.99 </li>
              </ul>
            </div>
            <div className="flex  mt-15 gap-x-5 w-[80%] ">
              <div className="w-1/3">
                <Product
                  productImg={shoppriceOne}
                  productTitle={"Wicker Basket"}
                  productPrice={"$40.00"}
                />
                {/* <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} /> */}
              </div>
              <div className="w-1/3">
                <Product
                  productImg={shoppriceTwo}
                  productTitle={"Round Table Clock"}
                  productPrice={"$40.00"}
                />
                {/* <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} /> */}
              </div>
              <div className="w-1/3">
                <Product
                  productImg={shoppriceThree}
                  productTitle={"Sun glasses"}
                  productPrice={"$40.00"}
                />
                {/* <Badge className={"absolute top-3 left-3"} badgeText={"-10%"} /> */}
              </div>
            </div>
          </Flex>
          <Flex className={"ml-58 justify-between"}>
            <div className="flex">
              <div className="hover:bg-black hover:text-white py-2 px-4 duration-300 ">
                1
              </div>
              <div className="hover:bg-black hover:text-white py-2 px-4 duration-300 ">
                2
              </div>
              <div className="hover:bg-black hover:text-white py-2 px-4 duration-300 ">
                3
              </div>
              <div className="hover:bg-black hover:text-white py-2 px-4 duration-300 ">
                4
              </div>
            </div>
            <div className="text-[#767676] text-sm font-dmSans">
              Products from 1 to 12 of 80
            </div>
          </Flex>
          {/* Shop By Price End */}
        </Container>
      </div>
    </>
  );
};

export default Shop;
