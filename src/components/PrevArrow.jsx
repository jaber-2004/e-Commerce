import React from "react";
import { FaCircleLeft } from "react-icons/fa6";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "text-3xl absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer opacity-30 hover:opacity-100 duration-500"
      }
      onClick={onClick}
    >
      <FaCircleLeft />
    </div>
  );
};

export default PrevArrow;
