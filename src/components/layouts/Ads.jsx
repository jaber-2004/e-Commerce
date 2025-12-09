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
    <div className="py-[150px]">
      <Container>
        <Flex className={"justify-between items-start"}>
          <div className="w-[49%]">
            <Link>
              <Images srcImg={AdOne} />
            </Link>
          </div>
          <div className="w-[49%]">
            <Link>
              <Images srcImg={Adtwo} />
            </Link>
            <Link>
              <Images className={"mt-5.5"} srcImg={Adthree} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Ads