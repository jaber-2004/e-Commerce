import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-30">
      <Container>
        <Flex className={" items-start"}>
          <div className="w-[15%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"MENU"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5">
                <Link to={""}>Home</Link>
              </li>
              <li className="py-1.5">
                <Link to={""}>Shop</Link>
              </li>
              <li className="py-1.5">
                <Link to={""}>About</Link>
              </li>
              <li className="py-1.5">
                <Link to={""}>Contact</Link>
              </li>
              <li className="py-1.5">
                <Link to={""}>Journal</Link>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"SHOP"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5">Category 1</li>
              <li className="py-1.5">Category 2</li>
              <li className="py-1.5">Category 3</li>
              <li className="py-1.5">Category 4</li>
              <li className="py-1.5">Category 5</li>
            </ul>
          </div>
          <div className="w-[20%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"HELP"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5">Privacy Policy</li>
              <li className="py-1.5">Terms & Conditions</li>
              <li className="py-1.5">Special E-shop</li>
              <li className="py-1.5"> Shipping</li>
              <li className="py-1.5"> Secure Payments</li>
            </ul>
          </div>
          <div className="w-[30%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"(052) 611-5711"}
              as={"h4"}
            />
            <Heading
              className={
                "text-base font-bold font-dmSans text-primaryColor py-1.5"
              }
              text={"company@domain.com"}
              as={"h4"}
            />
            <Heading
              className={"text-sm text-[#6D6D6D] font-dmSan pt-2"}
              text={"575 Crescent Ave. Quakertown, PA 18951"}
              as={"p"}
            />
          </div>
          <div className="w-[20%]">
            <Images srcImg={Logo} />
          </div>
        </Flex>
        <Flex className={"justify-between mt-10"}>
          <div className="flex gap-x-4">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </div>
          <div className="">
            <Heading
              className={"text-sm text-[#6D6D6D] font-dmSan pt-2"}
              text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
              as={"p"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
