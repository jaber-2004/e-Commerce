import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import productsOne from "/src/assets/shopbypriceOne.png";
import productsTwo from "/src/assets/shopbybrandOne.png";
import productsThree from "/src/assets/specialofferThree.png";
import productsFour from "/src/assets/shopcategory.png";
import star from "/src/assets/productsStar.png";
import { FaCaretDown } from "react-icons/fa";
import { Minus, Plus } from "lucide-react";

const ProductsInside = () => {
  let [count, setCount] = useState(1);
  const minus = () => {
    if (count > 1) {
      setCount(() => count - 1);
    }
  };
  const plus = () => {
    if (count < 10) {
      setCount(() => count + 1);
    }
  };
  return (
    <Container>
      <div className="pb-20">
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-10"
          text={"Home  >  Cart"}
          as={"h4"}
        />
      </div>
      <Flex className={"gap-x-5"}>
        <Images className={"w-full"} srcImg={productsOne} />
        <Images className={"w-full"} srcImg={productsTwo} />
      </Flex>
      <Flex className={"gap-x-5 mt-10"}>
        <Images className={"w-full"} srcImg={productsThree} />
        <Images className={"w-full"} srcImg={productsFour} />
      </Flex>
      <div className="">
        <Heading
          className={"text-primary text-[39px] font-bold font-dmSans mt-10"}
          text={"Product"}
          as={"h3"}
        />
        <div className="flex items-center gap-x-2">
          <Images className={"w-[80px]"} srcImg={star} />
          <Heading
            className={"text-[#767676] text-sm  font-dmSans"}
            text={"1 Review"}
            as={"h4"}
          />
        </div>
        <div className="flex items-center gap-x-4 mt-5">
          <div className="relative">
            <Heading
              className={"text-[#767676] text-base  font-dmSans"}
              text={"$88.00"}
              as={"h4"}
            />
            <div className="h-[1px] w-full bg-[#767676] absolute left-0 bottom-3"></div>
          </div>
          <Heading
            className={"text-primary text-[20px] font-bold font-dmSans"}
            text={"$44.00"}
            as={"h4"}
          />
        </div>
        <div className="flex items-center gap-x-5 mt-5">
          <Heading
            className={"text-primary text-base font-bold font-dmSans"}
            text={"COLOR:"}
            as={"h4"}
          />
          <div className="flex gap-x-2">
            <div className="h-[20px] w-[20px] rounded-[50%] bg-[#979797]"></div>
            <div className="h-[20px] w-[20px] rounded-[50%] bg-[#400bd1]"></div>
            <div className="h-[20px] w-[20px] rounded-[50%] bg-[#d30f0f]"></div>
          </div>
        </div>
        <div className="flex items-center gap-x-5 mt-5">
          <Heading
            className={"text-primary text-base font-bold font-dmSans"}
            text={"SIZE:"}
            as={"h4"}
          />
          <div className="flex justify-between w-[100px] p-2 border border-[#F0F0F0] text-[#767676] text-base font-dmSans">
            S <FaCaretDown />
          </div>
        </div>
        <div className="flex items-center gap-x-5 mt-5">
          <Heading
            className={"text-primary text-base font-bold font-dmSans"}
            text={"QUANTITY:"}
            as={"h4"}
          />
          <div className="flex gap-x-8 text-[#767676] text-base font-bold font-dmSans w-[140px] p-2 border border-[#F0F0F0]">
            <Minus onClick={minus} />
            <span>{count}</span>
            <Plus onClick={plus} />
          </div>
        </div>
        <div className="flex items-center gap-x-5 mt-5">
          <Heading
            className={"text-primary text-base font-bold font-dmSans"}
            text={"STATUS:"}
            as={"h4"}
          />
          <Heading
            className={"text-[#767676] text-base font-bold font-dmSans"}
            text={"In stock"}
            as={"h4"}
          />
        </div>
        <div className="flex gap-x-5 mt-5">
          <button className="py-4 px-10 bg-primary text-white text-sm font-bold font-dmSans hover:text-primary hover:bg-transparent duration-300 cursor-pointer">
            Add to Wish List
          </button>
          <button className="py-4 px-10 bg-primary text-white text-sm font-bold font-dmSans hover:text-primary hover:bg-transparent duration-300 cursor-pointer">
            Add to Cart
          </button>
        </div>
        <div className="border border-[#F0F0F0] mt-10 pb-5 w-[750px] flex justify-between">
          FEATURES & DETAILS <Plus className=" mt-5" />{" "}
        </div>
        <div className="border border-[#F0F0F0] mt-10 pb-5 w-[750px] flex justify-between">
          SHIPPING & RETURNS <Plus className=" mt-5" />{" "}
        </div>
        <Heading
          className={
            "text-[#767676] text-base leading-7 w-[765px] font-dmSans mt-5"
          }
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          as={"p"}
        />
        <div className="flex gap-x-5 mt-10">
          <Heading
            className={"text-[#767676] text-[20px] font-dmSans"}
            text={"Description"}
            as={"h3"}
          />
          <Heading
            className={"text-primary text-[20px] font-bold font-dmSans"}
            text={"Reviews (1)"}
            as={"h3"}
          />
        </div>
        <Heading
          className={"text-[#767676] text-sm font-dmSans mt-5"}
          text={"1 review for Product"}
          as={"h4"}
        />
        <div className="flex justify-between mt-10">
          <div className="flex gap-x-5 items-center">
            <Heading
              className={"text-primary text-base font-dmSans "}
              text={"John Ford"}
              as={"h4"}
            />
            <Images srcImg={star} className={"h-2.5"} />
          </div>
          <div className="">
            <Heading
              className={"text-[#767676] text-base font-dmSans "}
              text={"6 months ago"}
              as={"h4"}
            />
          </div>
        </div>
        <Heading
          className={
            "text-[#767676] text-base leading-7 w-[1050px] font-dmSans mt-5"
          }
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
          as={"p"}
        />
        <div className="mt-10">
          <Heading
            className="text-primary text-[20px] font-bold font-dmSans"
            text={"Add a Review"}
            as={"h3"}
          />
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Name"}
              as={"h4"}
            />
            <input
              className="mt-5 outline-0"
              type="text"
              placeholder="Your name here"
            />
          </div>
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Email"}
              as={"h4"}
            />
            <input
              className="mt-5 outline-0"
              type="text"
              placeholder="Your email here"
            />
          </div>
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Review"}
              as={"h4"}
            />
            <textarea
              cols={50}
              className="mt-5 outline-0"
              type="text"
              placeholder="Your review here"
            />
          </div>
          <button className="py-4 px-21 bg-primary text-white text-sm font-bold font-dmSans mt-5 cursor-pointer hover:text-primary hover:bg-transparent duration-300">
            Post
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductsInside;
