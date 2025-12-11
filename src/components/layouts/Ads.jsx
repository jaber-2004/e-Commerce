import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import AdOne from "/src/assets/adone.jpg";
import Adtwo from "/src/assets/adtwo.png";
import Adthree from "/src/assets/adthree.jpg";
import { Link } from 'react-router-dom';



const Ads = () => {
  return (
    <div className="py-[120px]">
      <Container>
        <Flex className={"gap-x-6.5"}>
          <div className="">
            <Link>
              <Images srcImg={AdOne} />
            </Link>
          </div>
          <div className="">
            <Link>
              <Images srcImg={Adtwo} />
            </Link>
            <Link>
              <Images className={"mt-6.5"} srcImg={Adthree} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Ads