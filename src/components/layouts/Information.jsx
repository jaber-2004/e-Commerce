import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from "../Heading";
import { MdLocalShipping } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Information = () => {
  return (
    <div className="py-9">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center">
            <PiNumberTwoBold className="text-2xl" />
            <Heading
              className={"text-[#6D6D6D] font-dmSans text-base pl-2"}
              text={"Two years warranty"}
              as={"h5"}
            />
          </div>
          <div className="flex items-center">
            <MdLocalShipping className="text-2xl" />
            <Heading
              className={"text-[#6D6D6D] font-dmSans text-base pl-2"}
              text={"Free shipping"}
              as={"h5"}
            />
          </div>
          <div className="flex items-center">
            <TfiReload className="text-2xl" />
            <Heading
              className={"text-[#6D6D6D] font-dmSans text-base pl-2"}
              text={"Return policy in 30 days"}
              as={"h5"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Information;
