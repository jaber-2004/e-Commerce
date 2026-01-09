import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Myaccount = () => {
  return (
    <Container>
      <div className="py-28">
        <Heading
          className="text-primary text-5xl font-bold font-dmSans"
          text={"My Account"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  My account"}
          as={"h4"}
        />
      </div>
      <div className="flex gap-x-[184px]">
        <div className="">
          <Heading
            className="text-[#767676] hover:text-base font-dmSans hover:text-primary"
            text={"Dashboard"}
            as={"h3"}
          />
        </div>
        <div className="">
          <Heading
            className="text-[#767676] font-dmSans"
            text={"Hello admin (not admin? Log out) "}
            as={"p"}
          />
        </div>
      </div>
      <div className="flex gap-x-[215px] mt-6">
        <Heading
          className="text-[#767676] hover:text-base font-dmSans hover:text-primary"
          text={"Others"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] font-dmSans "
          text={
            " From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
          }
          as={"p"}
        />
      </div>
      <Heading
        className="text-[#767676] hover:text-base font-dmSans hover:text-primary"
        text={"Donwloads"}
        as={"h3"}
      />
      <Heading
        className="text-[#767676] hover:text-base font-dmSans hover:text-primary mt-5"
        text={"Addresses"}
        as={"h3"}
      />
      <Heading
        className="text-[#767676] hover:text-base font-dmSans hover:text-primary py-5"
        text={"Account details"}
        as={"h3"}
      />
      <Heading
        className="text-[#767676] hover:text-base font-dmSans hover:text-primary"
        text={"Logout"}
        as={"h3"}
      />
    </Container>
  );
};

export default Myaccount;
