import React from "react";

const Badge = ({ badgeText, className }) => {
  return (
    <div
      className={`w-[92px] py-2.25 px-7.5 bg-black font-bold font-dmSans text-sm text-white ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
