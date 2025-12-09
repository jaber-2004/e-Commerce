
import Container from '../Container'
import Flex from '../Flex'
import Icons from '../Icons'
import Heading from '../Heading'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sharcebar = () => {
  return (
    <div className="bg-[#F5F5F3] border-y-1 border-y-[#979797] py-8">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center">
            <Icons />
            <Heading
              className={"pl-3 text-primary text-sm font-dmSans"}
              text={"Shop by Category"}
              as={"h5"}
            />
          </div>
          <div className="py-2 px-2.5 bg-[#FFF] flex items-center w-[500px] justify-between">
            <input
              className="outline-0"
              type="text"
              placeholder="Search Products"
            />
            <FaSearch />
          </div>
          <div className="flex gap-x-4">
            <Link>
              <FaUser />
            </Link>
            <Link>
              <FaCaretDown />
            </Link>
            <Link>
              <FaShoppingCart />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Sharcebar