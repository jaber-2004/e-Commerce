import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex';
import Product from '../Product';
import specialOne from '/src/assets/specialofferOne.png'
import specialTwo from "/src/assets/specialofferTwo.png";
import specialThree from "/src/assets/specialofferThree.png";
import specialFour from "/src/assets/specialofferFour.png";

const Specialoffer = () => {
  return (
    <div className="py-5">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"Special Offers"}
          as={"h3"}
        />
        <Flex className={"gap-x-5 mt-5"}>
          <div className="h-1/4">
            <Product
              productImg={specialOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"} productPrice={"$40.00"}
            />
          </div>
          <div className="h-1/4">
            <Product
              productImg={specialTwo}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"} productPrice={"$40.00"}
            />
          </div>
          <div className="h-1/4">
            <Product
              productImg={specialThree}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"} productPrice={"$40.00"}
            />
          </div>
          <div className="h-1/4">
            <Product
              productImg={specialFour}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"} productPrice={"$40.00"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Specialoffer