import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-8">
      <Container>
        <Flex className={""}>
          <div className="w-[40%]">
            <Link to={"/"}>
              <Images srcImg={Logo} />
            </Link>
          </div>
          <div className="w-[60%]">
            <ul className="flex items-center gap-x-5 text-[#767676] text-sm font-dmSans">
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
