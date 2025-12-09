import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link>
      <div className="bg-[url('/src/assets/banner.png')] py-[220px] bg-cover bg-no-repeat bg-center"></div>
    </Link>
  );
};

export default Banner;
