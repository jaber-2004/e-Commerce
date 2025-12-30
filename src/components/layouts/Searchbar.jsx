import Container from "../Container";
import Flex from "../Flex";
import Icons from "../Icons";
import Heading from "../Heading";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sharcebar = () => {
  let [show, setShow] = useState(false)
  let [showl, setShowl] = useState(false)


  return (
    <div className="bg-[#F5F5F3] border-y-1 border-y-[#979797] py-4">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center relative">
            <div className="flex items-center" onClick={() => setShow(!show)}>
              <Icons />
              <Heading
                className={"pl-3 text-primary text-sm font-dmSans"}
                text={"Shop by Category"}
                as={"h5"}
              />
            </div>
            {show && (
              <div className="bg-black text-white w-[220px] absolute top-6 left-0 z-10">
                <ul>
                  <li className="border-b border-b-[#D8D8D8] py-2 pl-5">
                    <Link>Accesories</Link>
                  </li>
                  <li className="border-b border-[#D8D8D8] py-2 pl-5">
                    <Link>Furniture</Link>
                  </li>
                  <li className="border-b border-[#D8D8D8] py-2 pl-5">
                    <Link>Electronics</Link>
                  </li>
                  <li className="border-b border-[#D8D8D8] py-2 pl-5">
                    <Link>Clothes</Link>
                  </li>
                  <li className="border-b border-[#D8D8D8] py-2 pl-5">
                    <Link>Bags</Link>
                  </li>
                  <li className="border-b border-[#D8D8D8] py-2 pl-5">
                    <Link>Home appliances</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="py-2 px-3 bg-[#FFF] rounded-[15px] flex items-center w-[400px] justify-between">
            <input
              className="outline-0"
              type="text"
              placeholder="Search Products"
            />
            <FaSearch />
          </div>
          <div className="flex gap-x-5 ">
            <div className="flex gap-x-1 relative">
              <div className="flex" onClick={() => setShowl(!showl)}>
                <Link>
                  <FaUser />
                </Link>
                <Link>
                  <FaCaretDown />
                </Link>
              </div>
              {showl && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-[#F5F5F3]">
                  <div className="text-sm font-bold font-dmSans">
                    <ul>
                      <Link>
                        <li className="bg-[#2B2B2B] duration-300 text-white hover:bg-transparent py-2 text-center w-[200px] hover:text-black">
                          My Account
                        </li>
                      </Link>
                      <Link>
                        <li className="bg-[#2B2B2B] duration-300 text-white hover:bg-transparent py-2 text-center w-[200px] hover:text-black">
                          Log Out
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-[#767676] text-sm  font-dmSans">
                      Subtotal:
                      <span className="text-[#262626] text-base font-bold font-dmSans pl-1">
                        $44.00
                      </span>
                    </h4>
                    <ul className="flex gap-x-5 mt-4">
                      <Link>
                        <li className="bg-[#2B2B2B] duration-300 text-white hover:bg-transparent py-2 text-center w-[150px] hover:text-black">
                          View Cart
                        </li>
                      </Link>
                      <Link>
                        <li className="bg-[#2B2B2B] duration-300 text-white hover:bg-transparent py-2 text-center w-[150px] hover:text-black">
                          Checkout
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link>
              <FaShoppingCart />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sharcebar;
