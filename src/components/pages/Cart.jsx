import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import cart from "/src/assets/cart.png";
import Flex from "../Flex";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Container>
      <div className="py-28">
        <Heading
          className="text-primary text-5xl font-bold font-dmSans"
          text={"Cart"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  Cart"}
          as={"h4"}
        />
      </div>
      <div className="grid grid-cols-4 bg-[#F5F5F3] py-7">
        <Heading
          className="text-primary text-base font-bold font-dmSans ml-5"
          text={"Product"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Price"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Quantity"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Total"}
          as={"h4"}
        />
      </div>
      <Flex className={"gap-x-4 mt-8"}>
        <div className="">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"x"}
            as={"h4"}
          />
        </div>
        <div className="">
          <Images srcImg={cart} />
        </div>
        <div className="">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Product name"}
            as={"h4"}
          />
        </div>
        <div className="ml-7">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"$44.00"}
            as={"h4"}
          />
        </div>
        <div className="ml-[450px]">
          <Heading
            className="text-primary text-base font-bold font-dmSans ml-15"
            text={"$44.00"}
            as={"h4"}
          />
        </div>
      </Flex>
      <Flex className={"justify-between mx-3 mt-10"}>
        <div className="flex gap-x-10 items-center">
          <div className="text-[#767676] text-base  font-dmSans border border-[#EAEAEA] p-3 flex items-center gap-x-30">
            <Heading className="" text={"SIZE"} as={"h4"} />
            <IoCaretDownSharp />
          </div>
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Apply coupon"}
              as={"h4"}
            />
          </div>
        </div>
        <div className="">
          <Heading
            className="text-primary text-sm font-bold font-dmSans"
            text={"Update cart"}
            as={"h4"}
          />
        </div>
      </Flex>
      <div className="text-right mt-5">
        <Heading
          className="text-primary text-[20px] font-bold font-dmSans"
          text={"Cart totals"}
          as={"h4"}
        />
      </div>
      <div className="ml-[715px]">
        <div className="mt-5 mr-50 flex gap-x-30">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Subtotal"}
            as={"h4"}
          />
          <Heading
            className="text-primary hover:text-[#767676] text-base font-dmSans"
            text={"389.99 $"}
            as={"h4"}
          />
        </div>
        <div className="mt-5 mr-50 flex gap-x-37">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Total"}
            as={"h4"}
          />
          <Heading
            className="text-primary hover:text-[#767676] text-base font-dmSans"
            text={"389.99 $"}
            as={"h4"}
          />
        </div>
      </div>
      <div className="text-end mt-9">
        <Link to={"/checkout"}>
          <button className=" py-4 px-6 bg-primary text-white text-sm font-bold font-dmSans mt-5 cursor-pointer hover:text-primary hover:bg-transparent duration-300">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
