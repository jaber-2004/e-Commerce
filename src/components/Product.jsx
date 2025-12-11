import React from 'react'
import Badge from './Badge'
import Images from './Images'
import Flex from './Flex';
import Heading from './Heading';


const Product = ({ productImg, badgeText, productTitle, productPrice }) => {
  return (
    <div className="relative">
      <Images srcImg={productImg} />
      <Badge badgeText={badgeText} className={"absolute top-3 left-3"} />
      <Flex className={"justify-between mt-3"}>
        <Heading
          className={"text-primary text-[20px] font-medium font-dmSans"}
          text={productTitle}
          as={"h4"}
        />
        <Heading className={"text-[#767676] text-base font-dmSans"} text={productPrice} as={"h4"} />
      </Flex>
    </div>
  );
};

export default Product