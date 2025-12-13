import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Product from "../Product"
import bestsallerOne from '/src/assets/bestsallerOne.png'
import bestsallerTwo from "/src/assets/bestsallerTwo.png";
import bestsallerThree from "/src/assets/bestsallerThree.png";
import bestsallerFour from "/src/assets/bestsallerFour.png";
import Badge from "../Badge"


const Ourbestsallers = () => {
  return (
    <div className="py-16">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"Our Bestsellers"}
          as={"h3"}
        />
        <Flex className={"gap-x-5 mt-5"}>
          <div className="w-1/4 relative">
            <Product
              badgeText={"New"}
              productImg={bestsallerOne}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$40.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
          <div className="w-1/4 relative">
            <Product
              badgeText={"New"}
              productImg={bestsallerTwo}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$40.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
          <div className="w-1/4 relative">
            <Product
              badgeText={"New"}
              productImg={bestsallerThree}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$40.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
          <div className="w-1/4 relative">
            <Product
              badgeText={"New"}
              productImg={bestsallerFour}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$40.00"}
            />
            <Badge className={"absolute top-3 left-3"} badgeText={"New"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Ourbestsallers